<template>
  <slot>
    <div :ui-row="rows" class="n-sm-sub">
      <template v-for="(col, idx) in state.form" :key="idx">
        <div v-if="!col.clear" :id="col._fid" :ui-col="col.media" :ui-flex="`${vertical ? 'col xm' : 'row lt'}`">
          <template v-if="col.label">
            <h5 v-if="vertical" :style="`${col.rules?.some((validator: any) => validator.required) ? 'text-indent: -1em' : ''}`" class="o-ls">
              <template v-if="col.label == '*'"></template>
              <template v-else>
                <span>{{ col.label ? col.label + ':' : '' }}</span>
              </template>
            </h5>
            <p v-else :style="`width:${state._lw + 'em'}; max-width:50%;`" class="ar nr-sm flex-fixed o-ls">
              <template v-if="col.label == '*'"></template>
              <template v-else>
                <span>{{ col.label ? col.label + ':' : '' }}</span>
              </template>
            </p>
          </template>
          <slot :name="col.field" :col="col" :data="col._data">
            <div v-if="col.value" v-html="isFunction(col.value) ? col.value(col, col._data) : col.value"></div>
            <template v-else>
              <template v-if="col.enums">
                <span v-if="isArray(col._data[col.field])">
                  <template v-for="(sub, idx) in col._data[col.field]" :key="idx"> {{ idx === 0 ? '' : '、' }}{{ findByJson(col.enums || [], sub)?.label || '' }} </template>
                </span>
                <span v-else>{{ findByJson(col.enums || [], col._data[col.field])?.label || '‐‐' }}</span>
              </template>
              <template v-else>
                <span v-if="isArray(col._data[col.field])">{{ (col._data[col.field] === 0 ? '0' : col._data[col.field]?.join('、')) || '‐‐' }}</span>
                <span v-else>{{ (col._data[col.field] === 0 ? '0' : col._data[col.field]) || '‐‐' }}</span>
              </template>
            </template>
          </slot>
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
  import { isString, isObject, isFunction, deepcopy, isArray, findByJson } from '@fekit/utils';

  const route = useRoute();
  const router = useRouter();

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
