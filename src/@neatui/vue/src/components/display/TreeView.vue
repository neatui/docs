<template>
  <ul :fekit-json-tree="level" :fekit-json-tree-line="line && level ? '1' : '0'" :class="`${level ? 'nl-ms' : ''}`">
    <li v-for="(item, idx) in enums" :key="idx">
      <div class="nr-sm r-sm ux-hover" fekit-json-tree-item="" ui-flex="row lm" v-bind="{ ...item.attrs, ...(item.value === modelValue ? active : {}) }">
        <div :fekit-json-tree-arrow="item.child && item.child.length ? 1 : 0" @click="item.__folding = item.__folding ? 0 : 1"></div>
        <div class="flex-block ny-ss" ui-flex="row xm" v-on="event(item.event, item)">
          <div class="flex-block" @dblclick="fold(item)">
            <div ui-form-prefix="">
              <template v-for="(p, idx) in prefix" :key="idx">
                <div v-if="isObject(p)" v-bind="p.attrs" v-on="event(p, item)">
                  <div v-html="isFunction(p.value) ? p.value(item) : p.value"></div>
                </div>
                <div v-else v-html="isFunction(p) ? item(item) : p"></div>
              </template>
              <slot name="prefix" :data="item"></slot>
            </div>
            <slot name="label">
              <i v-if="item.icon" :class="`icon icon-${item.icon}`"></i> <span>{{ item.label }}{{ item.__folding ? ' ⋯' : '' }}</span>
            </slot>
            <div ui-form-suffix="">
              <slot name="suffix" :data="item"></slot>
              <template v-for="(s, idx) in suffix" :key="idx">
                <div v-if="isObject(s)" v-bind="s.attrs" v-on="event(s, item)">
                  <div v-html="isFunction(s.value) ? s.value(item) : s.value"></div>
                </div>
                <div v-else v-html="isFunction(s) ? item(item) : s"></div>
              </template>
            </div>
          </div>
        </div>
        <slot name="tools" :data="item"></slot>
      </div>
      <TreeView
        v-if="item.child && item.child.length"
        v-show="!item.__folding"
        v-model="state.value"
        :active="active"
        :optional="optional"
        :enums="item.child"
        :line="line"
        :level="level + 1"
        :root="false"
        @select="(data: any) => emits('select', data)"
      >
        <template #prefix="{ data = {} }: any = {}">
          <slot name="prefix" :data="data"></slot>
        </template>
        <template #label="{ data = {} }: any = {}">
          <slot name="label" :data="data"></slot>
        </template>
        <template #suffix="{ data = {} }: any = {}">
          <slot name="suffix" :data="data"></slot>
        </template>
        <template #tools="{ data = {} }: any = {}">
          <slot name="tools" :data="data"></slot>
        </template>
      </TreeView>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { reactive, watch } from 'vue';
  import TreeView from './TreeView.vue';
  import { isObject, isFunction } from '@fekit/utils';
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const emits = defineEmits(['update:modelValue', 'click', 'select']);

  // 类型定义
  interface Props {
    modelValue?: string | number | Array<any>;
    enums: Array<any>;
    line?: boolean;
    level?: number;
    prefix?: Array<any>;
    suffix?: Array<any>;
    active?: object;
    optional?: 'end' | 'all';
    multiple?: boolean;
  }
  // 外部入参
  const props: any = withDefaults(defineProps<Props>(), {
    modelValue: '',
    enums: () => [],
    line: false,
    level: 0,
    prefix: () => [],
    suffix: () => [],
    active: () => ({ class: 'co-main' }),
    optional: 'all',
    multiple: false
  });

  const state: any = reactive({
    value: ''
  });
  watch(
    () => props.modelValue,
    (value) => {
      if (value !== state.value) {
        state.value = value;
      }
    },
    { deep: true, immediate: true }
  );
  watch(
    () => state.value,
    (value) => {
      if (value !== props.modelValue) {
        emits('update:modelValue', value);
      }
    },
    { deep: true, immediate: true }
  );

  // 事件处理
  const event: any = (event: any = {}, data: any): object => {
    const _event: any = {};
    if (isObject(event)) {
      // 如果没有click事件则添加一个默认事件
      if (!event['click']) {
        event['click'] = () => {};
      }
      for (const key in event) {
        const fun = event[key];
        if (isFunction(fun)) {
          _event[key] = (...args: any) => {
            // 如果有click事件则把默认事件与配置事件合并执行
            if (key === 'click') {
              console.log(107, data.child?.length);
              if (props.optional === 'end') {
                if (!data?.child?.length) {
                  emits('update:modelValue', data.value);
                  emits('select', data.value);
                }
              } else {
                emits('update:modelValue', data.value);
                emits('select', data.value);
              }
            }
            return fun({ data, route, router }, ...args);
          };
        }
      }
    }
    return { ..._event };
  };

  const fold = (item: any) => {
    item.child && item.child.length && (item.__folding = item.__folding ? 0 : 1);
  };
</script>
<style lang="scss">
  [fekit-json-tree] {
    &,
    * {
      user-select: none;
      line-height: 1.75;
    }
  }

  // 箭头
  [fekit-json-tree-arrow] {
    position: relative;
    width: 1em;
    height: 1em;

    &[fekit-json-tree-arrow~='1'] {
      &::before {
        position: absolute;
        display: inline-block;
        content: '';
        width: 0;
        height: 0;
        border-width: 0.35em 0 0.35em 0.35em;
        border-style: solid;
        border-color: transparent;
        border-left-color: transparent;
        border-left-color: currentColor;
        top: 0.2em;
        left: 0.35em;
        transform: rotate(90deg);
        border-radius: 25%;
      }
    }
  }

  // 线条
  [fekit-json-tree-line~='1'] {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      width: 1px;
      left: 0.5em;
      top: -0.5em;
      bottom: 1em;
      background-color: currentColor;
      opacity: 0.15;
    }

    & > li {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 0.5em;
        height: 1px;
        background: currentColor;
        left: -0.5em;
        top: 1.25em;
        opacity: 0.15;
      }
    }
  }
</style>
