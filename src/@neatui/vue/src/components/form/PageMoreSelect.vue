<template>
  <div :ui-form="`@a type:select ${sz ? 'sz:' + sz : ''}`" :ui-form-open="state.show ? 'show' : ''" ref="dom">
    <IFollowView ref="ifollow" tipBoxClass="ny-sm nx-no" tipBoxStyle="min-width: 100%">
      <slot>
        <Input v-bind="$props" :clearable="false" readonly v-model="state.selectd">
          <template #suffix><i ui-form-select=""></i></template>
        </Input>
      </slot>
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
        <ul v-if="props.options?.length" ui-form-dropdown="" ui-scroll=":y s" class="nx-sm lh-ml" style="min-width: 100%; max-height: 15em">
          <li class="ux-hover nx-sm r-ss nowrap" v-for="(item, idx) of props.options" :key="idx" @click.stop="select(item.value)">
            <label style="pointer-events: none" ui-form="@a type:checkbox :block">
              <input type="checkbox" :name="formName" :checked="modelValue?.some((i: any) => `${i}` === `${item.value}`)" />
              <span class="ml-sm">{{ item.label || item }}</span>
            </label>
          </li>
        </ul>
        <div v-else class="w-full ny-ms" ui-flex="col cm" v-html="spare"></div>
        <ul class="nx-sm lh-ml" v-if="tools">
          <li class="my-ss"><div class="o-mm" ui-line="@a"></div></li>
          <li ui-flex="row xm">
            <div class="ux-hover nx-sm r-ss nowrap co-main" @click.stop="allselect()">
              <label style="pointer-events: none" ui-form="@a type:checkbox :block">
                <input type="checkbox" :name="formName" :checked="state.all" />
                <!-- <span class="ml-sm">全选({{ props.options?.length || 0 }})</span> -->
                <span class="ml-sm">全选</span>
              </label>
            </div>
            <div ui-flex="row cm" class="nx-sm">
              <button :ui-btn="`@a xs read :border :square ${state.pageInfo.page > 1 ? '' : ':disabled'}`" @click="prev"><i class="icon icon-prev"></i></button>
              <div :ui-form="`@a type:input sz:xs`" class="page-input mx-ss">
                <input type="number" class="ac" :placeholder="props.placeholder" v-model="state.pageInfo.page" @change="pageChange" />
              </div>
              <button :ui-btn="`@a xs read :border :square ${state.pageInfo.page < pageInfo.pages ? '' : ':disabled'}`" @click="next"><i class="icon icon-next"></i></button>
            </div>
            <div v-show="state.has">
              <button class="co-risk" ui-btn="@a none s" @click="remove">清空</button>
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

  const props: any = defineProps({
    theme: { type: String, default: '@a' },
    sz: { type: String, default: '' },
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
    modelValue: {
      type: Array as () => any[],
      default: () => []
    },
    options: {
      type: Array as () => any[],
      default: () => []
    },
    ui: {
      type: Object,
      default: () => ({ sz: 'm' })
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

  const formName = new Date().getTime().toString();

  const emit = defineEmits(['update:modelValue', 'pageChange', 'searchChange']);

  const change = (item: any) => {
    emit('update:modelValue', item);
  };

  const state: any = reactive({
    view: 1,
    pos: 'bl',
    show: 0,
    search: '',
    pageInfo: { ...props.pageInfo },
    selectd: computed(() => {
      const result = props.options?.filter((item: any) => props.modelValue?.some((i: any) => `${i}` === `${item.value}`))?.map((item: any) => item.label);
      return result.join(' Ι ');
    }),
    all: computed(() => {
      return props.options?.every((item: any) => props.modelValue?.some((i: any) => `${i}` === `${item.value}`));
    }),
    has: computed(() => {
      return props.options?.some((item: any) => props.modelValue?.some((i: any) => `${i}` === `${item.value}`));
    })
  });

  // 选中
  const select = (item: any) => {
    const values = [...props.modelValue];
    values?.indexOf(item) !== -1 ? values?.splice(values?.indexOf(item), 1) : values?.push(item);
    change(values);
  };
  // 清除
  const remove = () => {
    change([]);
    ifollow.value.cancel();
  };
  const allselect = () => {
    let values = [];
    if (!state.all) {
      values = props.options?.map((item: any) => item.value);
    }
    change(values);
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
      change([]);
      emit('searchChange', state.search);
    }
  );
</script>
<style lang="scss" scoped>
  .page-input {
    width: 2em !important;
    min-width: 2em !important;
  }
</style>
../basic . .
