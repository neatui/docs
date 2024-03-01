<template>
  <div v-if="route.query.mode === 'edit'" ui-tips="@a co:well">
    <button ui-btn="@a s none :square" @click="state.show = state.show ? 0 : 1">
      <i class="icon icon-draft pr"
        ><sup v-if="state.len" class="sup">{{ state.len }}</sup></i
      >
    </button>
    <div ui-tips-box="tl" class="w-xl mob:w-lln-ms" :ux-view="state.show">
      <div class="fekit-layer-close" ui-flex="row cm" @click="state.show = 0"><i class="icon icon-close fs-xs"></i></div>
      <h4>温馨提示</h4>
      <p class="ny-sm" v-if="state.len">本条记录有未保存的草稿，是否使用草稿？</p>
      <p class="ny-sm" v-else>当前没有未保存的草稿哦～</p>
      <p v-if="state.len">
        <span v-if="state.detail" class="ux-click co-link" @click="state.detail = 0">隐藏详情<i class="icon icon-dropdown r180"></i></span>
        <span v-else class="ux-click co-link" @click="state.detail = 1">显示详情<i class="icon icon-dropdown"></i></span>
      </p>
      <ul v-if="state.detail" class="mb-sl fs-ss" ui-scroll=":y" style="max-height: 20rem">
        <template v-for="(item, idx) in state.diffs" :key="idx">
          <li v-if="item.label" ui-flex="row lm" class="bb-xs b-line b-solid ny-ss">
            <span class="nx-ss r-sm mr-sm ux-hover nowrap" @click="fScrollToField(item.domId)">[{{ item.label }}]</span>
            <span v-if="item.lhsLabel" class="nx-ss r-sm ux-hover" ui-flex="row lm" @click="fDiscardDrafts(item)">
              <i class="icon icon-cloud co-well o-mm mr-xs"></i>
              <span ui-omit="1">{{ item.lhsLabel }}</span>
            </span>
            <span v-if="item.lhsLabel && item.rhsLabel" class="nx-ss r-sm nx-ss o-mm" ui-flex="row lm">→</span>
            <span v-if="item.rhsLabel" class="nx-ss r-sm ux-hover" ui-flex="row lm" style="max-width: 50%" @click="fConfirmDrafts(item)">
              <i class="icon icon-draft co-risk o-mm mr-xs"></i>
              <span ui-omit="1">{{ item.rhsLabel }}</span>
            </span>
          </li>
        </template>
      </ul>
      <div v-if="state.len" class="mr-sl-sub mt-sl">
        <button ui-btn="@a s main" @click="fConfirmDrafts()">使用草稿</button>
        <button ui-btn="@a s none" @click="fDiscardDrafts()">不用了，谢谢！</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, watch, onMounted, onUnmounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import scrollTo from '@fekit/scrollto';
  import { findEnumName } from '@/utils';
  import { diff, deepcopy, isArray } from '@fekit/utils';
  const emits = defineEmits(['update:data', 'confirm', 'discard']);
  const route: any = useRoute();
  const props: any = defineProps({
    area: {
      type: HTMLElement,
      default: document.body
    },
    // 数据
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    // 表单
    form: {
      type: Object,
      default: () => ({})
    }
  });

  const state: any = reactive({
    // 辅助刷新状态用的
    __update: false,
    // 浏览或编辑模式
    mode: route.query.mode,
    // 显示隐藏本组件
    show: 0,
    // 是否显示详情
    detail: 1,
    // 本地存储的Key
    cacheKey: computed(() => (route.query.id ? ('draft_cache' + route.path.replace(/\//g, '_')).toLocaleUpperCase() + '_' + route.query.id : '')),
    // 云端数据
    cloud: computed(() => props.data),
    // 对比数据
    diffs: computed(() => {
      const cloud = props.data || {};
      const local = JSON.parse(localStorage.getItem(state.cacheKey) || '{}');

      const diffs = Object.keys(local).length
        ? (diff(cloud, local) || []).map((item: any) => {
            const { field = '', lhs = '', rhs = '', path = [] } = item;

            // 表单结构遍历
            let _form: any = props.form || {};
            const len = path.length;
            path.forEach((key: any, idx: number) => {
              const last = idx === len - 1;
              if (last && isNaN(key) && !isNaN(field)) {
                _form = _form[key];
              } else {
                if (isNaN(key)) {
                  if (_form[key]?.child) {
                    _form = _form[key].child;
                  }
                }
              }
            });

            const { label = '', enums = null } = (isNaN(field) ? _form[field] : _form) || {};

            // 数据树型遍历
            let _cloud = cloud || {};
            let _local = local || {};
            path.forEach((field: any) => {
              _cloud = _cloud[field];
              _local = _local[field];
            });

            const _path = path.join('-');
            const domId = '#form-field-' + (_path ? _path + '-' : '') + field;

            return {
              domId,
              path,
              field,
              label,
              lhs,
              lhsLabel:
                (enums ? findEnumName(enums, _cloud[field]) : !isNaN(field) && _cloud[field] ? `删除第${Number(field) + 1}条记录` : _cloud[field]) || (!isNaN(field) ? '' : '‐‐'),
              rhs,
              rhsLabel:
                (enums ? findEnumName(enums, _local[field]) : !isNaN(field) && _local[field] ? `新增第${Number(field) + 1}条记录` : _local[field]) || (!isNaN(field) ? '' : '‐‐'),
              // 辅助手动刷新
              __update: state.__update
            };
          })
        : [];

      return diffs.filter((obj: any) => obj.label);
    }),
    len: computed(() => state.diffs?.length || 0),
    // 修改单个字段
    field: null
  });

  // 定位字段
  const fScrollToField = (domId: any) => {
    const dom = document.querySelector(domId);
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

  // 使用草稿
  const fConfirmDrafts = ({ field = '', path = [] }: any = {}) => {
    const local = JSON.parse(localStorage.getItem(state.cacheKey) || '{}');
    if (field) {
      state.field = field;
      // 无限树型遍历
      let _cloud = state.cloud || {};
      let _local = local || {};
      path.forEach((field: any) => {
        _cloud = _cloud[field];
        _local = _local[field];
      });
      _cloud[field] = _local[field];

      emits('update:data', { ...state.cloud });
      emits('confirm', field);
    } else {
      state.diffs.forEach((item: any) => {
        const { field = '', path = [] } = item;
        // 无限树型遍历
        let _cloud = state.cloud || {};
        let _local = local || {};
        path.forEach((field: any) => {
          _cloud = _cloud[field];
          _local = _local[field];
        });
        // 判断是否为数组
        if (isArray(_cloud) && !_local[field]) {
          _cloud.splice(Number(field), 1);
        } else {
          _cloud[field] = _local[field];
        }
        state.show = 0;
      });

      emits('update:data', { ...state.cloud });
      emits('confirm');
    }
  };
  // 放弃草稿
  const fDiscardDrafts = ({ field = '', path = [] }: any = {}) => {
    const local = JSON.parse(localStorage.getItem(state.cacheKey) || '{}');
    if (field) {
      // 无限树型遍历
      let _cloud = state.cloud || {};
      let _local = local || {};
      path.forEach((field: any) => {
        _cloud = _cloud[field];
        _local = _local[field];
      });
      _local[field] = _cloud[field];

      localStorage.setItem(state.cacheKey, JSON.stringify(local));
      emits('discard', field);
    } else {
      state.diffs.forEach((item: any) => {
        const { field = '', path = [] } = item;
        // 无限树型遍历
        let _cloud = state.cloud || {};
        let _local = local || {};
        path.forEach((field: any) => {
          _cloud = _cloud[field];
          _local = _local[field];
        });
        // 判断是否为数组
        if (isArray(_local) && !_cloud[field]) {
          _local.splice(Number(field), 1);
        } else {
          _local[field] = _cloud[field];
        }
        state.show = 0;
      });
      localStorage.setItem(state.cacheKey, JSON.stringify(local));
      emits('discard');
      state.show = 0;
    }
    setTimeout(() => {
      state.__update = !state.__update;
    }, 300);
  };

  // 初始化时进入页面时自动弹出
  const timer: any = ref(null);
  onMounted(() => {
    timer.value = setTimeout(() => {
      if (state.diffs.length) {
        state.show = 1;
      }
    }, 1000);
  });
  onUnmounted(() => {
    clearTimeout(timer.value);
  });

  // 初始化后进入页面时自动弹出
  watch(
    () => route.query.mode,
    (mode: any) => {
      clearTimeout(timer.value);
      if (mode === 'edit') {
        timer.value = setTimeout(() => {
          if (state.diffs.length) {
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

  const timer2: any = ref(null);
  watch(
    () => state.diffs,
    () => {
      clearTimeout(timer2.value);
      if (state.show && !state.diffs.length) {
        timer2.value = setTimeout(() => {
          state.show = 0;
        }, 1000);
      }
    }
  );

  // 本地存储
  watch(
    () => props.data,
    (edit: any, old: any) => {
      if (edit === old) {
        if (state.field) {
          const local = JSON.parse(localStorage.getItem(state.cacheKey) || '{}');
          local[state.field] = state.cloud[state.field];
          localStorage.setItem(state.cacheKey, JSON.stringify(local));
          state.field = null;
        } else {
          localStorage.setItem(state.cacheKey, JSON.stringify(edit));
        }
      }
    },
    {
      deep: true
    }
  );
</script>
