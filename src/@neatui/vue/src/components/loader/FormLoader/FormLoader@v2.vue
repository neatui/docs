<template>
  <slot>
    <div :ui-row="rows" class="n-sl-sub">
      <template v-for="(col, idx) in state.form" :key="idx">
        <div v-if="!col.clear" :id="col._fid" :ui-col="col.media" :ui-flex="`${vertical ? 'col xm' : 'row lt'}`">
          <template v-if="col.label">
            <h5 v-if="vertical" :style="`${col.rules?.some((validator: any) => validator.required) ? 'text-indent: -1em' : ''}`" class="o-ls">
              <template v-if="col.label == '*'"></template>
              <template v-else>
                <b v-if="col.rules?.some((validator: any) => validator.required)" class="co-risk pr" style="left: 0.1em">﹡</b>
                <span>{{ col.label ? col.label + ':' : '' }}</span>
              </template>
            </h5>
            <p v-else :class="`${clh({ ...(col.model[1] || {}) })}`" :style="`width:${state._lw + 'em'}; max-width:50%;`" class="ar nr-sm flex-fixed o-ls">
              <template v-if="col.label == '*'"></template>
              <template v-else>
                <b v-if="col.rules?.some((validator: any) => validator.required)" class="co-risk">﹡</b>
                <span>{{ col.label ? col.label + ':' : '' }}</span>
              </template>
            </p>
          </template>
          <Input v-if="col.model[0] === 'Input'" v-model="col._data[col.field]" :interacted="interacted" :rules="col.rules" class="full-w" v-bind="{ ...(col.model[1] || {}) }" />
          <Select
            v-else-if="col.model[0] === 'Select'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col?.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          ></Select>
          <SelectList
            v-else-if="col.model[0] === 'SelectList'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col?.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <SelectTags
            v-else-if="col.model[0] === 'SelectTags'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col?.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <SelectPicker
            v-else-if="col.model[0] === 'SelectPicker'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col?.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <SearchSelect
            v-else-if="col.model[0] === 'SearchSelect'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <MoreSelect
            v-else-if="col.model[0] === 'MoreSelect'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <MoreSelectList
            v-else-if="col.model[0] === 'MoreSelectList'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <MoreSelectTags
            v-else-if="col.model[0] === 'MoreSelectTags'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <MoreSelectPicker
            v-else-if="col.model[0] === 'MoreSelectPicker'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <SearchMoreSelect
            v-else-if="col.model[0] === 'SearchMoreSelect'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <PageSelect
            v-else-if="col.model[0] === 'PageSelect'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <SelectTree
            v-else-if="col.model[0] === 'SelectTree'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <DatePicker
            v-else-if="col.model[0] === 'DatePicker'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :rules="col.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <DateRangePicker
            v-else-if="col.model[0] === 'DateRangePicker'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :rules="col.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <ImgUpload v-else-if="col.model[0] === 'ImgUpload'" v-model="col._data[col.field]" :interacted="interacted" :rules="col.rules" v-bind="{ ...(col.model[1] || {}) }" />
          <Upload v-else-if="col.model[0] === 'Upload'" v-model="col._data[col.field]" :interacted="interacted" :rules="col.rules" v-bind="{ ...(col.model[1] || {}) }" />
          <TextArea
            v-else-if="col.model[0] === 'TextArea'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :rules="col.rules"
            v-bind="{ ...(col.model[1] || {}) }"
          ></TextArea>
          <Switch v-else-if="col.model[0] === 'Switch'" v-model="col._data[col.field]" :interacted="interacted" :rules="col.rules" v-bind="{ ...(col.model[1] || {}) }" />
          <Tree v-else-if="col.model[0] === 'Tree'" v-model="col._data[col.field]" :interacted="interacted" :rules="col.rules" class="mt-sm" v-bind="{ ...(col.model[1] || {}) }" />
          <Cascader
            v-else-if="col.model[0] === 'Cascader'"
            v-model="col._data[col.field]"
            :interacted="interacted"
            :options="col.enums"
            :rules="col.rules"
            class="full-w"
            v-bind="{ ...(col.model[1] || {}) }"
          />
          <template v-else>
            <slot v-if="col.slot" :name="col.slot" :col="col"></slot>
            <slot v-else-if="col.model[0]" :name="col.model[0]" :col="col"></slot>
            <slot v-else :name="col.field" :col="col"></slot>
          </template>
        </div>
      </template>
      <div :ui-flex="`${vertical ? 'col xm' : 'row xt'}`">
        <div v-if="vertical">
          <slot name="submit"></slot>
        </div>
        <div v-else :style="`padding-left:${state._lw + 'em'};`">
          <slot name="submit"></slot>
        </div>
      </div>
    </div>
  </slot>
</template>
<script lang="ts" setup>
  import { watch, reactive, onBeforeUnmount, nextTick } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { isString, isObject, isFunction, deepcopy, isArray } from '@fekit/utils';
  import {
    Input,
    Switch,
    TextArea,
    Select,
    SelectList,
    SelectTags,
    SelectPicker,
    SearchSelect,
    PageSelect,
    SelectTree,
    MoreSelect,
    MoreSelectList,
    MoreSelectTags,
    MoreSelectPicker,
    DatePicker,
    DateRangePicker,
    SearchMoreSelect,
    ImgUpload,
    Upload,
    Cascader
  } from '../../form';
  import { Tree } from '../../display';

  const route = useRoute();
  const router = useRouter();

  // 计算Label行高
  const clh = ({ sz = '' }: any = {}) => {
    const lhs: any = { xs: 'lh-sm', s: 'lh-mm', m: 'lh-ls', l: 'lh-ll', xl: 'lh-xl' };
    return lhs[sz] || 'lh-ls';
  };

  // 计算Label宽度
  function clw(label: any = '') {
    let emWidth = 0;
    if (isString(label)) {
      for (let i = 0; i < label.length; i++) {
        const char = label[i];
        if (/^[\u4e00-\u9fa5]+$/.test(char)) {
          emWidth += 1;
        } else {
          emWidth += 0.5;
        }
      }
    }
    return emWidth;
  }

  // 入参
  const props: any = defineProps({
    // 用户是否交互
    interacted: {
      type: Boolean,
      default: false
    },
    // JSON规则
    form: {
      type: Object,
      default: () => ({})
    },
    // 表单数据
    data: {
      type: Object as any,
      default: () => ({})
    },
    // 栅格系统
    rows: {
      type: String,
      default: 'mob-24 pad-12 dpc-8'
    },
    // 如果表单是数组的话这里传入下标
    idx: {
      type: [String, Number],
      default: ''
    },
    // 是否垂直排列
    vertical: {
      type: Boolean,
      default: false
    }
  });

  // 数据
  const state: any = reactive({
    form: [],
    _lw: 6
  });

  // 监听结构
  const unwatchs: any = [];
  watch(
    [() => props.form, () => props.data, () => props.idx],
    ([form = []]) => {
      const wkeys: any = {};
      const onces: any = [];
      state.form = deepcopy(form)?.map((item: any = {}, idx: number) => {
        // 计算Label宽度
        const _w = clw(item.label) + 2;
        if (_w > state._lw) {
          state._lw = _w;
        }

        if (isObject(item)) {
          for (const key in item) {
            let val = item[key] || {};
            // 处理函数
            if (isFunction(val)) {
              val = val(deepcopy(props.data), props.form, route, router);
              if (isObject(val)) {
                if (!isFunction(val.setup)) {
                  val.setup = item[key];
                }
                if (!isArray(val.watch)) {
                  val.watch = deepcopy(form).map(({ field = '' }: any = {}) => field);
                }
              } else {
                val = { value: val, setup: item[key], watch: deepcopy(form).map(({ field = '' }: any = {}) => field) };
              }
            }
            // 对象处理
            if (isObject(val)) {
              const { value = null, setup = () => {}, watch: _watch = [] } = val || {};
              // 监听字段为空
              if (_watch.length) {
                _watch?.forEach((k: any) => {
                  if (wkeys[k]) {
                    wkeys[k].push({ idx, key, value, setup });
                  } else {
                    wkeys[k] = [{ idx, key, value, setup }];
                  }
                });
              } else {
                onces.push({ idx, key, value, setup });
              }
              item[key] = value;
            } else {
              item[key] = val;
            }
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
        if (item.model[1] && !Object.prototype.hasOwnProperty.call(item.model[1], 'verify')) {
          item.model[1].verify = false;
        }

        // 添加ID
        item._fid = `form-${props.idx !== '' ? props.idx + '-' : ''}field-${item.field}`;

        // 数据路径处理
        item._data = props.data;
        (item.paths?.split('.') || [])?.forEach((i: any) => {
          if (item._data[i]) {
            item._data = item._data[i];
          }
        });
        return item;
      });
      const runsetup = (item: any = {}) => {
        const { idx = null, key = null, value = null, setup = null }: any = item || {};
        if (state.form[idx] && isFunction(setup)) {
          const v = setup(deepcopy(props.data), state.form[idx], route, router);
          nextTick(() => {
            if (v instanceof Promise) {
              state.form[idx][key] = value;
              v.then((res: any) => {
                state.form[idx][key] = res;
              });
            } else {
              state.form[idx][key] = v;
            }
          });
        }
      };
      // 执行一次
      onces?.forEach((item: any = {}) => {
        runsetup(item);
      });
      // 监听列表
      for (const key in wkeys) {
        unwatchs.push(
          watch(
            () => props.data[key],
            () => {
              wkeys[key]?.forEach((item: any = {}) => {
                runsetup(item);
              });
            },
            {
              deep: true,
              immediate: true
            }
          )
        );
      }
    },
    { deep: true, immediate: true }
  );

  // 处理
  watch(
    [() => state.form, () => props.data],
    () => {
      state.form.forEach((item: any = {}) => {
        const { clear = false, field = '', paths = '' }: any = item;
        if (clear) {
          // 数据路径处理
          let _data = props.data;
          (paths?.split('.') || [])?.forEach((i: any) => {
            if (_data[i]) {
              _data = item._data[i];
            }
          });
          _data[field] = isArray(_data[field]) ? [] : '';
        }
      });
    },
    { deep: true }
  );

  onBeforeUnmount(() => {
    unwatchs?.forEach((unwatch: any) => {
      unwatch();
    });
  });
</script>
