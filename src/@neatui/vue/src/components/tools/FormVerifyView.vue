<template>
  <div ui-tips="@a co:well">
    <button :ui-btn="`@a s none ${verify?.length ? '' : ':square'}`" :class="`${verify?.length ? 'co-risk' : 'co-well'}`" @click="state.show = state.show ? 0 : 1">
      <i v-if="verify?.length" class="icon icon-verify-no co-risk"></i>
      <i v-else class="icon icon-verify-ok co-well"></i>
      <span v-if="verify?.length">{{ verify?.length }}</span>
    </button>
    <div ui-tips-box="tl" :ux-view="state.show" class="w-xl mob:w-ll n-ms">
      <div class="fekit-layer-close" ui-flex="row cm" @click="state.show = 0"><i class="icon icon-close fs-xs"></i></div>
      <h4>温馨提示</h4>
      <p v-if="verify?.length" class="ny-sm">本条记录疑似有{{ verify?.length }}个错误，您再检查一遍吧～</p>
      <p v-else class="nb-sm">好棒哦，没有发现任何错误！</p>
      <p v-if="verify.length">
        <span v-if="state.detail" class="ux-click co-link" @click="state.detail = 0">隐藏详情<i class="icon icon-dropdown r180"></i></span>
        <span v-else class="ux-click co-link" @click="state.detail = 1">显示详情<i class="icon icon-dropdown"></i></span>
      </p>
      <ul v-if="state.detail" class="co-read" ui-scroll=":y s" style="max-height: 8em">
        <li v-for="(err, idx) in verify" :key="idx">
          <i v-if="err.type === 'warn'" class="icon icon-warn co-warn"></i>
          <i v-else class="icon icon-error co-risk"></i>
          <span class="nl-ss">
            <span class="ux-hover ny-xs nx-ss r-sm" @click="fScrollToField(err.path)">[{{ err.label }}]</span>
            <span class="ml-sm">{{ err.msg || '有一个错误' }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, reactive, toRefs, watch, onMounted, ref, onUnmounted } from 'vue';
  import { useRoute } from 'vue-router';
  import scrollTo from '@fekit/scrollto';
  import { deepcopy, isArray, isObject, isFunction } from '@fekit/utils';

  const route: any = useRoute();

  const props: any = defineProps({
    area: {
      type: HTMLElement,
      default: document.body
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    form: {
      type: Object,
      default: () => ({})
    }
  });

  const state: any = reactive({
    __update: true,
    mode: route.query.mode,
    show: 0,
    detail: 1,
    // 数据校验
    verify: computed(() => {
      const error: any = [{ __update: state.__update }];
      const edit = props.data || {};
      const form = props.form || {};
      // 核心
      const core = (data: any = {}, form: any = {}, path: any = '') => {
        Object.keys(data).forEach((item: any) => {
          // 是否有表单结构
          if (form[item]) {
            // 是否末端
            if (form[item]?.child && (isArray(data[item]) || isObject(data[item]))) {
              if (isArray(data[item])) {
                data[item].forEach((sub: any, idx: number) => {
                  core(sub, form[item].child, path + '-' + form[item].field + '-' + idx);
                });
              } else {
                (Object.values(data[item]) || []).forEach((sub: any, idx: number) => {
                  core(sub, form[item].child, path + '-' + form[item].field + '-' + idx);
                });
              }
            } else {
              const value = data[item];
              const { label = '', field = '', rules = [], clear = false } = form[item] || {};
              if (isFunction(clear) ? !clear(data) : !clear) {
                const _path = path + '-' + field;
                rules?.forEach((rule: any = {}) => {
                  const { type = '', msg = '', required = null, validator = null } = rule;
                  if (required) {
                    if (isArray(value)) {
                      if (!value.length) {
                        error.push({ field, label, type, msg, path: _path });
                      }
                    } else {
                      if (!value) {
                        error.push({ field, label, type, msg, path: _path });
                      }
                    }
                  }
                  const _validator = isFunction(validator) ? validator(deepcopy(props.data)) : null;
                  if (value && _validator && !_validator(value)) {
                    error.push({ field, label, type, msg, path: _path });
                  }
                });
              }
            }
          }
        });
      };
      core(edit, form, '#form-field');
      error.shift();
      return error;
    })
  });
  const { verify = [] }: any = toRefs(state);

  // 为了在退出编辑的时候平滑过滤
  watch(
    () => route.query.mode,
    (mode) => {
      if (mode) {
        state.mode = mode;
      } else {
        setTimeout(() => {
          state.mode = '';
          state.show = 0;
        }, 300);
      }
    }
  );

  const fScrollToField = (path: any) => {
    const dom = document.querySelector(path);
    if (dom) {
      scrollTo({
        el: props.area,
        to: {
          y: dom
        },
        offset: { y: -36 },
        then() {
          const input = dom.querySelector('input');
          if (input) {
            input?.focus();
          }
        }
      });
    }
  };

  // 初始化时进入页面时自动弹出
  const timer1: any = ref(null);
  onMounted(() => {
    timer1.value = setTimeout(() => {
      if (state.verify.length) {
        state.show = 1;
      }
    }, 1000);
  });
  onUnmounted(() => {
    clearTimeout(timer1.value);
  });

  const timer2: any = ref(null);
  watch(
    () => state.verify,
    () => {
      clearTimeout(timer2.value);
      if (state.show && !state.verify.length) {
        timer2.value = setTimeout(() => {
          state.show = 0;
        }, 1000);
      }
    }
  );

  // 初始化后进入页面时自动弹出
  const timer3: any = ref(null);
  watch(
    () => route.query.mode,
    (mode: any) => {
      clearTimeout(timer3.value);
      if (mode === 'edit') {
        timer3.value = setTimeout(() => {
          if (state.verify.length) {
            state.show = 1;
          }
        }, 1000);
      } else {
        if (state.show) {
          setTimeout(() => {
            state.show = 0;
          }, 300);
        }
      }
    }
  );

  watch(
    () => props.data,
    () => {
      state.__update = !state.__update;
    },
    {
      deep: true
    }
  );
</script>
