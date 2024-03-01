<template>
  <div :ui-form="`@a type:select sz:${sz}`" :ui-form-open="state.show ? 'show' : ''" ref="dom">
    <IFollowView ref="ifollow" tipBoxClass="ny-sm nx-no" tipBoxStyle="min-width: 100%">
      <Input v-bind="$props" :clearable="false" readonly v-model="state.selectd.label" :interacted="interacted">
        <template #suffix><i ui-form-select=""></i></template>
      </Input>
      <template #tips>
        <div v-if="filterable" class="ny-sm nx-sl" style="height: 3em">
          <div :ui-form="`@a type:input sz:s :block`">
            <input type="text" :placeholder="props.placeholder" v-model="state.search" />
            <div ui-form-suffix="">
              <i ui-form-clean="" v-if="state.search" @click.stop="state.search = ''"></i>
              <i ui-form-search="" class="co-note"></i>
            </div>
          </div>
        </div>
        <ul v-if="props.options?.length" ui-scroll=":y s" class="nx-sm lh-ml" style="min-width: 100%; max-height: 16em">
          <li class="ux-hover nx-sm r-ss nowrap" :class="item.value === state.selectd?.value ? 'co-main' : ''" v-for="(item, idx) of options" :key="idx" @click="select(item)">
            {{ item.label || item }}
          </li>
        </ul>
        <div v-else class="w-full ny-ms" ui-flex="col cm" v-html="spare"></div>
        <ul class="nx-sm lh-ml" v-if="tools">
          <li class="my-ss"><div class="o-mm" ui-line="@a"></div></li>
          <li ui-flex="row xm">
            <div ui-flex="row cm" class="nx-sm">
              <button :ui-btn="`@a s read :border :square ${state.pageInfo.page > 1 ? '' : ':disabled'}`" @click="prev"><i class="icon icon-prev"></i></button>
              <div :ui-form="`@a type:input sz:s`" class="page-input mx-ss">
                <input type="number" class="ac" :placeholder="props.placeholder" v-model="state.pageInfo.page" @change="pageChange" />
              </div>
              <button :ui-btn="`@a s read :border :square ${state.pageInfo.page < pageInfo.pages ? '' : ':disabled'}`" @click="next"><i class="icon icon-next"></i></button>
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
  import { Input } from '../form';
  import { IFollowView } from '../basic';

  const ifollow: any = ref(null);

  const props = defineProps({
    // 用户是否交互
    interacted: {
      type: Boolean,
      default: false
    },
    theme: { type: String, default: '@a' },
    sz: { type: String, default: 'm' },
    co: { type: String, default: '' },
    block: { type: Boolean, default: true },
    // 提示文案
    tips: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Array as () => any[],
      default: () => []
    },
    ui: {
      type: Object,
      default: () => ({ sz: 'm' })
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    // 校验规则
    rules: {
      type: Array,
      default: () => []
    },
    // 是否是示校验图标
    verify: {
      type: Boolean,
      default: false
    },
    tools: {
      type: Boolean,
      default: true
    },
    spare: {
      type: String,
      default: '当前没有可选项'
    },
    // 分页
    pageInfo: {
      type: Object,
      default: () => ({ total: 0, pages: 0, page: 0 })
    },
    filterable: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits(['update:modelValue', 'pageChange', 'searchChange']);
  const change = ({ value = null }: any = {}) => {
    emit('update:modelValue', value);
  };

  const state: any = reactive({
    view: 1,
    pos: 'bl',
    show: 0,
    search: '',
    pageInfo: { ...props.pageInfo },
    selectd: computed(() => {
      let _value: any = {};
      for (const key in props.options) {
        if (`${props.options[key]?.value}` === `${props.modelValue}`) {
          _value = props.options[key];
        }
      }
      return _value;
    })
    /* filter: computed(() => {
      if (state.search) {
        return props.options?.filter((item) => {
          return item.label?.includes(state.search);
        });
      } else {
        return props.options;
      }
    }) */
  });

  // 选择
  const select = (item: any = {}) => {
    change(item);
    ifollow.value.cancel();
  };
  // 清空
  const remove = () => {
    change({});
    ifollow.value.cancel();
  };
  // 取消
  const cancel = () => {
    ifollow.value.cancel();
  };

  const prev = () => {
    if (state.pageInfo.page > 1) state.pageInfo.page--;
  };
  const next = () => {
    if (state.pageInfo.page < props.pageInfo.pages) state.pageInfo.page++;
  };
  const pageChange = ({ target }: any) => {
    const p = Number(target.value);
    state.pageInfo.page = p <= 0 ? 0 : p > props.pageInfo.pages ? props.pageInfo.pages : state.pageInfo.page;
    emit('pageChange', state.pageInfo);
  };

  watch(
    () => state.search,
    () => {
      change({});
      emit('searchChange', state.search);
    }
  );

  defineExpose({
    select,
    remove,
    change,
    cancel
  });
</script>
<style lang="scss" scoped>
  .page-input {
    width: 2.5em !important;
    min-width: 2.5em !important;
  }
</style>
../basic . .
