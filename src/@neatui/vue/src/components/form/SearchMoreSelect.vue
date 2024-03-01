<template>
  <div :ui-form="`@a type:select sz:${sz}`" :ui-form-open="state.show ? 'show' : ''">
    <IFollowView ref="ifollow" tipBoxClass="ny-sm nx-no" tipBoxStyle="min-width: 100%" @onshow="onshow" @onhide="onhide">
      <Input v-bind="$props" :clearable="false" readonly v-model="state.selectd" @click="toggle" :interacted="interacted">
        <template #suffix><i ui-form-select=""></i></template>
      </Input>
      <template #tips>
        <div class="ny-sm nx-sl" style="height: 3em">
          <div :ui-form="`@a type:input sz:s :block`">
            <input type="text" :placeholder="props.placeholder" v-model="state.search" />
            <div ui-form-suffix="">
              <i ui-form-clean="" v-if="state.search" @click.stop="state.search = ''"></i>
              <i ui-form-search="" class="co-note"></i>
            </div>
          </div>
        </div>
        <ul v-if="props.options?.length" ui-form-dropdown="" ui-scroll=":y s" class="nx-sm lh-ml" style="min-width: 100%; max-height: 15em">
          <li class="ux-hover nx-sm r-ss nowrap" v-for="(item, idx) of state.filter" :key="idx" @click.stop="select(item.value)">
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
                <span class="ml-sm">全选({{ state.filter?.length || 0 }})</span>
              </label>
            </div>
            <div>
              <button v-show="state.has" class="co-risk" ui-btn="@a none s" @click="remove">清空</button>
            </div>
          </li>
        </ul>
      </template>
    </IFollowView>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, computed } from 'vue';
  import { Input } from '../form';
  import { IFollowView } from '../basic';
  const ifollow: any = ref(null);

  const emits = defineEmits(['update:modelValue', 'change', 'request', 'onshow', 'onhide']);

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
    }
  });
  const formName = new Date().getTime().toString();

  const change = (item: any) => {
    emits('update:modelValue', item);
  };

  const state: any = reactive({
    view: 1,
    pos: 'bl',
    show: 0,
    search: '',
    selectd: computed(() => {
      const result = props.options?.filter((item) => props.modelValue?.some((i: any) => `${i}` == `${item.value}`))?.map((item) => item.label);
      return result?.join(' Ι ');
    }),
    filter: computed(() => {
      if (state.search) {
        return props.options?.filter((item) => {
          return item.label?.includes(state.search);
        });
      } else {
        return props.options;
      }
    }),
    all: computed(() => {
      return state.filter?.every((item: any) => props.modelValue?.some((i: any) => `${i}` === `${item.value}`));
    }),
    has: computed(() => {
      return props.options?.some((item: any) => props.modelValue?.some((i: any) => `${i}` === `${item.value}`));
    })
  });

  const toggle = () => {
    state.show = state.show ? 0 : 1;
  };
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

  // 显示
  const onshow = () => {
    emits('onshow', state.selectd);
  };
  // 折叠
  const onhide = () => {
    state.search = '';
    emits('onhide', state.selectd);
  };

  const allselect = () => {
    let values = [];
    if (!state.all) {
      values = state.filter?.map((item: any) => item.value);
    }
    change(values);
  };
</script>
. .
