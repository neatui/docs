<template>
  <div class="full-x" ui-flex="row xt">
    <div class="mr-mm-sub my-sm-sub" ui-flex="row lm :wrap">
      <template v-for="(item, idx) in state.limit" :key="idx">
        <div v-if="!item._close" ui-flex="row lm" v-bind="{ ...(item.attrs || {}) }">
          <span class="nr-sm flex-fixed o-ls">{{ item.label }}{{ item.label ? ':' : '' }}</span>
          <Input v-if="item.model[0] === 'Input'" v-model="state.param[item.field]" :block="false" sz="s" v-bind="{ ...(item.model[1] || {}) }" />
          <Select v-else-if="item.model[0] === 'Select'" v-model="state.param[item.field]" :options="item.enums" sz="s" v-bind="{ ...(item.model[1] || {}) }" />
          <SelectTree v-else-if="item.model[0] === 'SelectTree'" v-model="state.param[item.field]" :options="item.enums" sz="s" v-bind="{ ...(item.model[1] || {}) }" />
          <Cascader v-else-if="item.model[0] === 'Cascader'" v-model="state.param[item.field]" :options="item.enums" sz="s" v-bind="{ ...(item.model[1] || {}) }" />
          <MoreSelect v-else-if="item.model[0] === 'MoreSelect'" v-model="state.param[item.field]" :options="item.enums" sz="s" v-bind="{ ...(item.model[1] || {}) }" />
          <SearchMoreSelect v-else-if="item.model[0] === 'SearchMoreSelect'" v-model="state.param[item.field]" :options="item.enums" sz="s" v-bind="{ ...(item.model[1] || {}) }" />
          <DatePicker
            v-else-if="item.model[0] === 'DatePicker'"
            v-model="state.param[item.field]"
            sz="s"
            v-bind="{ ...(item.model[1] || {}) }"
            @change="(val: any) => (state.param[item.field] = val)"
          />
          <DateRangePicker v-else-if="item.model[0] === 'DateRangePicker'" v-model="state.param[item.field]" sz="s" v-bind="{ ...(item.model[1] || {}) }" />
          <slot v-else :name="item.field" :form="item" :data="param"></slot>
        </div>
      </template>
    </div>
    <div class="mr-sl-sub my-sm-sub nowrap" ui-hide="<pad">
      <IFollowView tipBoxClass="nr-no">
        <button ui-btn="@a s case :border"><i class="icon icon-add2 fs-xs"></i>添加条件</button>
        <template v-if="state.limit.length" #tips>
          <div class="w-mm h-ls nr-sl" ui-scroll="x:hidden :y">
            <div v-for="(item, idx) in state.limit" :key="idx" class="item ux-hover nowrap r-ss">
              <label class="ny-xs nx-sm" ui-form="@a type:checkbox">
                <input :checked="!item._close" type="checkbox" @change="item._close = item._close ? 0 : 1" />
                <span>{{ item.label }}</span>
              </label>
            </div>
          </div>
        </template>
      </IFollowView>
      <button ui-btn="@a s main" @click="fResetLimit">{{ words['common.reset'] || '重置' }}</button>
    </div>
  </div>
  <div class="mr-sl-sub my-sm-sub nowrap" ui-hide=">mob">
    <IFollowView tipBoxClass="nr-no">
      <button ui-btn="@a s case :border"><i class="icon icon-add2 fs-xs"></i>添加条件</button>
      <template v-if="state.limit.length" #tips>
        <div class="w-mm h-ls nr-sl" ui-scroll="x:hidden :y">
          <div v-for="(item, idx) in state.limit" :key="idx" class="item ux-hover nowrap r-ss">
            <label class="ny-xs nx-sm" ui-form="@a type:checkbox">
              <input :checked="!item._close" type="checkbox" @change="item._close = item._close ? 0 : 1" />
              <span>{{ item.label }}</span>
            </label>
          </div>
        </div>
      </template>
    </IFollowView>
    <button ui-btn="@a s main" @click="fResetLimit">{{ words['common.reset'] || '重置' }}</button>
  </div>
</template>
<script lang="ts" setup>
  import { computed, reactive, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { deepcopy, isObject, isString } from '@fekit/utils';
  import { IFollowView } from '../../basic';
  import { Input, Select, SelectTree, MoreSelect, SearchMoreSelect, DatePicker, DateRangePicker, Cascader } from '../../form';

  const route = useRoute();

  /**
   * 入参说明
   *
   * words          语言包
   * limit          结构配置
   * param          数据
   */

  interface LimitProps {
    label?: string | (() => string);
    field: string | (() => string);
    model?: string | Array<any> | (() => string | Array<any>);
    enums?: Array<any> | (() => string | Array<any>);
    rules?: Array<any> | (() => string | Array<any>);
    event?: Array<any> | (() => string | Array<any>);
    attrs?: Array<any> | (() => string | Array<any>);
    value?: any | (() => any);
    clear?: boolean | (() => boolean);
    close?: boolean;
  }

  // 类型
  interface Props {
    words?: { [key: string | number]: any };
    limit: Array<LimitProps>;
    param: any;
  }

  const props: any = withDefaults(defineProps<Props>(), {
    words: () => ({}),
    limit: () => [],
    param: () => ({})
  });

  // 内部数据
  const state: any = reactive({
    name: computed(() => 'confs' + route.path?.replace(/\//g, '_')),
    limit: [],
    param: {}
  });
  // 监听外部配置
  watch(
    () => props.limit,
    () => {
      const _cache = JSON.parse(localStorage.getItem(`${state.name}_limit`) || '{}');
      state.limit = deepcopy(props.limit)?.map((item: any) => {
        if (_cache[item.field] && Object.prototype.hasOwnProperty.call(_cache[item.field], '_close')) {
          item._close = Number(_cache[item.field]?._close);
        } else {
          if (item.close === true || item.close === 1) {
            item._close = 1;
          }
        }

        // 模型处理
        if (item.model) {
          if (isString(item.model)) {
            item.model = [item.model, { verify: false }];
          }
        } else {
          item.model = ['', { verify: false }];
        }

        if (!item.model[1] || !isObject(item.model[1])) {
          item.model.push({ verify: false });
        }

        // 属性处理
        if (item.model[1].class) {
          if (!/\bw-[sml]+/.test(item.model[1].class || '')) {
            item.model[1].class += ' w-ms+';
          }
        } else {
          item.model[1].class = 'w-ms+';
        }

        return item;
      });
    },
    { deep: true, immediate: true }
  );
  // 缓存交互配置
  watch(
    [() => state.limit],
    () => {
      const _limit: any = {};
      state.limit.forEach((item: any, idx: number) => {
        if (Object.prototype.hasOwnProperty.call(item, '_close')) {
          _limit[item.field] = { _close: item._close ? 1 : 0 };
          if (item._close) {
            delete state.param[item.field];
          }
        }
      });
      localStorage.setItem(`${state.name}_limit`, JSON.stringify(_limit));
    },
    { deep: true }
  );

  watch(
    () => props.param,
    () => {
      state.param = props.param;
    },
    { deep: true, immediate: true }
  );

  // 重置筛选
  const fResetLimit = () => {
    for (const key in state.param) {
      if (key !== 'page' && key !== 'pageSize') {
        delete state.param[key];
      }
    }
  };
</script>
