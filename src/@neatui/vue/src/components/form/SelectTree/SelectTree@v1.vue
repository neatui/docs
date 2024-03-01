<template>
  <div :ui-form="`@a type:select sz:${sz}`" :ui-form-open="state.show ? 'show' : 'hide'">
    <IFollowView ref="ifollow" v-model="state.show" tipBoxClass="ny-sm nx-no" tipBoxStyle="min-width: 100%" @onshow="onshow" @onhide="onhide">
      <Input
        v-bind="{ placeholder, rules, theme, sz, co, block, ready, type, tips, disabled, readonly: true, clearable: false, verify, prefix, suffix, interacted }"
        v-model="state.label"
        :interacted="interacted"
      >
        <template #suffix><i ui-form-select=""></i></template>
      </Input>
      <template #tips v-if="!readonly || !disabled">
        <div v-if="search" class="nb-sm nx-sl">
          <Input v-model="state.search" sz="s">
            <template #suffix>
              <i ui-form-search="" class="co-note"></i>
            </template>
          </Input>
        </div>
        <div v-if="state.filter?.length" ui-scroll=":y s" class="nx-sm lh-ml" style="min-width: 100%; max-height: 12em">
          <TreeView :enums="state.filter" v-model="state.value" :optional="optional" @select="select" />
        </div>
        <div v-else class="w-full ny-ms" ui-flex="col cm" v-html="spare"></div>
        <ul class="nx-sm lh-ml" v-if="tools">
          <li class="my-ss"><div class="o-mm" ui-line="@a"></div></li>
          <li ui-flex="row xm">
            <div class="co-main">
              <p class="nx-sm r-ss nowrap">
                <span>{{ state.filter?.length || 0 }}个可选项</span>
              </p>
            </div>
            <div>
              <button v-show="state.selectd?.value" class="co-risk" ui-btn="@a none s" @click="remove">清空</button>
            </div>
          </li>
        </ul>
      </template>
    </IFollowView>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, computed, watch } from 'vue';
  import { Input } from '../../form';
  import { IFollowView } from '../../basic';
  import { TreeView } from '../../display';
  import { findByJson, filterJson } from '@fekit/utils';

  const ifollow: any = ref(null);
  const emits = defineEmits(['update:modelValue', 'change', 'onshow', 'onhide']);

  /**
   * 入参说明
   * modelValue     值
   * options        枚举列表
   * tools          是否显示工具栏
   * spare          空闲兜底内容
   * search         是否启用搜索框
   * pagination     是否启用分页
   * refresh        是否显示刷新
   *
   * ---------------------------
   * theme          主题
   * sz             尺寸
   * co             颜色
   * block          撑满
   * ready          准备就绪
   * type           类型
   * tips           提示文案
   * placeholder    内容占位
   * maxlength      最大长度
   * minlength      最小长度
   * disabled       是否禁用
   * readonly       是否只读
   * clearable      是否显示清除按钮
   * rules          校验规则
   * verify         是否是示校验图标
   * prefix         前缀内容
   * suffix         后缀内容
   * interacted     用户是否交互
   */

  // 类型
  interface Props {
    modelValue?: string | number;
    options: Array<object>;
    tools?: boolean;
    spare?: string;
    search?: boolean;
    pagination?: boolean;
    refresh?: boolean;
    optional?: 'all' | 'end';
    chain?: boolean;
    paths?: boolean;

    // Input
    placeholder?: string;
    rules?: Array<object>;
    theme?: string;
    sz?: '' | 'xs' | 's' | 'm' | 'l' | 'xl';
    co?: string;
    block?: boolean;
    ready?: boolean;
    type?: string;
    tips?: string;
    maxlength?: null | number;
    minlength?: null | number;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    verify?: boolean;
    prefix?: Array<any>;
    suffix?: Array<any>;
    interacted?: boolean;
  }

  // 入参
  const props: any = withDefaults(defineProps<Props>(), {
    modelValue: '',
    options: () => [],
    tools: true,
    spare: '当前没有可选项',
    search: false,
    pagination: false,
    refresh: false,
    optional: 'all',
    chain: false,
    paths: false,

    // INPUT
    placeholder: '',
    rules: () => [],
    theme: '@a',
    sz: '',
    co: '',
    block: true,
    ready: false,
    type: 'text',
    tips: '',
    maxlength: null,
    minlength: null,
    disabled: false,
    readonly: false,
    clearable: false,
    verify: false,
    prefix: () => [],
    suffix: () => [],
    interacted: false
  });

  const state: any = reactive({
    show: 0,
    search: '',
    selectd: computed(() => {
      return findByJson(props.options, props.modelValue) || {};
    }),
    label: computed(() => {
      const _item = findByJson(props.options, props.modelValue) || {};
      return (props.chain ? _item.chain : _item.label) || '';
    }),
    filter: [],
    value: ''
  });
  watch(
    () => state.value,
    (value: any) => {
      if (value !== props.modelValue) {
        change(value);
      }
    },
    { deep: true }
  );
  watch(
    [() => state.search, () => props.options],
    () => {
      if (state.search) {
        state.filter = filterJson(props.options, state.search);
      } else {
        state.filter = props.options;
      }
    },
    { deep: true, immediate: true }
  );

  const change = (value: any = '') => {
    if (props.paths) {
      value = findByJson(props.options, value)?.paths;
    }
    emits('update:modelValue', value);
    emits('change', value);
  };

  // 选择
  const select = (value: any = '') => {
    change(value);
    ifollow.value.cancel();
  };
  // 清空
  const remove = () => {
    change('');
    ifollow.value.cancel();
  };
  // 取消
  const cancel = () => {
    ifollow.value.cancel();
  };
  // 显示
  const onshow = () => {
    emits('onshow', state.selectd);
  };
  // 折叠
  const timer: any = ref(null);
  const onhide = () => {
    clearTimeout(timer.value);
    timer.value = setTimeout(() => {
      state.search = '';
    }, 500);
    emits('onhide', state.selectd);
  };

  defineExpose({
    select,
    remove,
    change,
    cancel
  });
</script>
.. ..
