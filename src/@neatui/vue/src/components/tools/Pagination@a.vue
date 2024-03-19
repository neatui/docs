<template>
  <div ui-pagination="@a" class="full-x pading" ui-flex="row rm">
    <div class="ml-sl ar mob-ac" ui-flex="row rm">
      <div class="mx-ss-sub" ui-flex="row">
        <div v-if="state.showTotal" ui-flex="row cm" ui-hide="<pad">共 {{ data[defined.total || 'total'] || 0 }} 条</div>
        <button :ui-btn="`@a s read :border :square ${data[defined.current || 'current'] > 1 ? '' : ':disabled'}`" @click="prev">
          <svg
            style="width: 1em; height: 1em"
            t="1701228540398"
            class="icon co-read"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2426"
            width="64"
            height="64"
          >
            <path
              d="M683.36932763 159.41593598c-21.03260057-21.03260057-55.13210605-21.03260057-76.16470661 0L340.63067237 425.99156763c-21.03260057 21.03260057-21.03260057 55.13210605 0 76.16470662l266.57479015 266.57563164c21.03260057 21.03260057 55.13210605 21.03260057 76.16470661 1e-8s21.03260057-55.13210605 0-76.16470662L454.8768908 464.07392093l228.49243683-228.49327832C704.40276971 214.54804203 704.40276971 180.44853655 683.36932763 159.41593598z"
              p-id="2427"
            ></path>
          </svg>
        </button>
        <div ui-tips="@a co:well ux:hover">
          <div ui-btn="@a s read :border">
            <code>{{ data[defined.current || 'current'] || 0 }}/{{ data[defined.totalPages || 'totalPages'] || 0 }}</code>
            <svg
              style="width: 1em; height: 1em"
              t="1701229420486"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2426"
              width="64"
              height="64"
            >
              <path
                d="M210.99383545 420.72863834a55.61828615 55.61828615 0 1 1 78.60717773-78.60717774l222.91809082 222.84393313 222.84393312-222.84393313a55.61828615 55.61828615 0 1 1 78.60717772 78.60717774l-263.18572998 263.2598877a55.61828615 55.61828615 0 0 1-86.61621093-10.08544921L210.99383545 420.72863834z"
                p-id="2427"
              ></path>
            </svg>
          </div>
          <div v-if="state.lists.length" ui-tips-box="tc" class="ny-sl al">
            <div class="w-mm max-h-ls" ui-scroll=":y s">
              <ul class="n-sl n-ss-sub dib-sub">
                <li v-for="item in state.lists" :key="item">
                  <button :ui-btn="`@a s ${item === data[defined.current || 'current'] ? 'main' : 'read :border'}`" @click="page(item)">
                    <code>{{ item }}</code>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button :ui-btn="`@a s read :border :square ${data[defined.current || 'current'] < data[defined.totalPages || 'totalPages'] ? '' : ':disabled'}`" @click="next">
          <svg style="width: 1em; height: 1em" class="icon co-read" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2426" width="64" height="64">
            <path
              d="M341.63640988 781.41564784c20.63742578 21.22981847 54.12571728 21.22981847 74.81456101 0l265.95100164-273.75421824c20.62728703-21.26747667 20.62728703-55.75008988 0-76.97556317l-265.95100164-273.74407946c-20.68449855-21.26747667-54.17423844-21.26747667-74.81456101 0-20.67291141 21.23706043-20.67291142 55.71170748 0 76.98497771l228.55639458 235.24869384-228.55567038 235.22117436c-20.67218722 21.26747667-20.67146302 55.74357212 0 77.02263594l0 0z"
              p-id="2427"
            ></path>
          </svg>
        </button>
      </div>
      <div ui-hide="<pad" ui-tips="@a co:well ux:hover">
        <button ui-btn="@a s none :square">
          <svg
            style="width: 1em; height: 1em"
            t="1701229474205"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2426"
            width="64"
            height="64"
          >
            <path
              d="M512 604.16c-53.248 0-96.768-43.52-96.768-96.768 0-53.248 43.52-96.768 96.768-96.768 53.248 0 96.768 43.52 96.768 96.768 0 53.248-43.52 96.768-96.768 96.768zM512 274.432c-53.248 0-96.768-43.52-96.768-96.768s43.52-96.768 96.768-96.768c53.248 0 96.768 43.52 96.768 96.768s-43.52 96.768-96.768 96.768zM512 933.888c-53.248 0-96.768-43.52-96.768-96.768s43.52-96.768 96.768-96.768c53.248 0 96.768 43.52 96.768 96.768s-43.52 96.768-96.768 96.768z"
              p-id="2427"
            ></path>
          </svg>
        </button>
        <div ui-tips-box="tl" class="al min-w-ms">
          <slot name="setting">
            <ul class="n-ms mb-sm-sub">
              <li>
                <h6 class="fs-xs o-mm nowrap">显示总条数</h6>
                <label ui-form="@a type:switch">
                  <input type="checkbox" name="form2" v-model="state.showTotal" />
                  <span>{{ state.showTotal ? '' : '' }}</span>
                </label>
              </li>
              <li>
                <h6 class="fs-xs o-mm nowrap">每页显示数量</h6>
                <ul>
                  <li @click="size(10)" class="ux-hover r-sm"><code :class="`${modelValue.pageSize === 10 ? 'co-main' : ''}`">10条/页</code></li>
                  <li @click="size(20)" class="ux-hover r-sm"><code :class="`${modelValue.pageSize === 20 ? 'co-main' : ''}`">20条/页</code></li>
                  <li @click="size(50)" class="ux-hover r-sm"><code :class="`${modelValue.pageSize === 50 ? 'co-main' : ''}`">50条/页</code></li>
                  <li @click="size(100)" class="ux-hover r-sm"><code :class="`${modelValue.pageSize === 100 ? 'co-main' : ''}`">100条/页</code></li>
                </ul>
              </li>
            </ul>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, computed, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { isObject } from '@fekit/utils';

  interface ModelValueProps {
    pageSize?: number;
    current?: number;
    [key: string]: any;
  }

  interface DataProps {
    total?: number;
    totalPages?: number;
    current?: number;
    [key: string]: any;
  }
  interface DefinedProps {
    // 当前页
    current?: string;
    // 总页数
    totalPages?: string;
    // 总条数
    total?: string;
    // 每页条数
    pageSize?: string;
  }

  // 类型
  interface Props {
    id?: string;
    modelValue: ModelValueProps;
    data: DataProps;
    defined?: DefinedProps;
  }

  const route: any = useRoute();
  const props: any = withDefaults(defineProps<Props>(), {
    id: '',
    modelValue: () => ({}),
    data: () => ({}),
    defined: () => ({})
  });

  const emits = defineEmits(['update:modelValue', 'page', 'size']);
  const state: any = reactive({
    id: computed(() => (props.id || 'PAGINATION' + route.path?.replace(/\//g, '_')).toUpperCase()),
    showTotal: true,
    list: computed(() => {
      const _page = Number(props.data[props.defined.current || 'current'] || 1);
      const list = [_page];
      if (_page > 1) {
        list.unshift(_page - 1);
      }
      if (_page > 2) {
        list.unshift(_page - 2);
      }
      const _max = 5 - list.length;
      for (let i = 1; i <= _max; i++) {
        if (_page + i <= props.data[props.defined.totalPages || 'totalPages']) {
          list.push(_page + i);
        }
      }
      const _min = 5 - list.length;
      for (let i = 1; i <= _min; i++) {
        if (list[0] - 1 > 0) {
          list.unshift(list[0] - 1);
        }
      }
      return list;
    }),
    lists: computed(() => {
      const _lists: any = [];
      for (let i = 1; i <= props.data[props.defined.totalPages || 'totalPages']; i++) {
        _lists.push(i);
      }
      return _lists;
    })
  });

  const prev = () => {
    const _page = Number(props.data[props.defined.current || 'current']) - 1 < 1 ? 1 : Number(props.data[props.defined.current || 'current']) - 1;
    emits('update:modelValue', { ...props.modelValue, ...{ [props.defined.current || 'current']: _page } });
    emits('page', _page);
  };

  const next = () => {
    const _page =
      Number(props.data[props.defined.current || 'current']) + 1 > props.data[props.defined.totalPages || 'totalPages']
        ? props.data[props.defined.totalPages || 'totalPages']
        : Number(props.data[props.defined.current || 'current']) + 1;
    emits('update:modelValue', { ...props.modelValue, ...{ [props.defined.current || 'current']: _page } });
    emits('page', _page);
  };

  const page = (idx: any) => {
    emits('update:modelValue', { ...props.modelValue, ...{ [props.defined.current || 'current']: idx } });
    emits('page', idx);
  };

  const size = (size: any) => {
    emits('update:modelValue', { ...props.modelValue, ...{ [props.defined.pageSize || 'pageSize']: size } });
    emits('size', size);
    window.localStorage.setItem(state.id, `${size}`);
  };

  // 缓存
  const cache = window.localStorage.getItem(state.id);
  if (cache) {
    size(Number(cache));
  }
</script>
