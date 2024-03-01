<template>
  <div :ui-form="`@a type:select sz:${sz}`" ui-tips="@a co:well" :ui-tips-view="state.show">
    <IFollowView ref="ifollow">
      <InputRange
        v-bind="{ placeholder, rules, theme, sz, co, block, ready, type, tips, maxlength, minlength, disabled, readonly, clearable, verify, prefix, suffix, interacted }"
        :clearable="false"
        readonly
        v-model="state.value"
        @click="toggle"
      >
        <template #suffix><i ui-form-select=""></i></template>
      </InputRange>
      <template #tips>
        <DateRangeView v-bind="{ frame, tools, format, picker, holiday, shortcuts }" v-model="state.value" @change="state.show = 0" />
      </template>
    </IFollowView>
  </div>
</template>
<script setup lang="ts">
  import { reactive, watch, ref } from 'vue';
  import { InputRange, DateRangeView } from '../form';
  import { IFollowView } from '../basic';
  const ifollow: any = ref(null);
  // 方法
  const emits: any = defineEmits(['update:modelValue', 'change']);

  // 类型
  interface Props {
    modelValue?: Array<string | number>;
    // 日期组件入参
    frame?: boolean;
    tools?: boolean;
    format?: string;
    picker?: 'date' | 'week' | 'month' | 'quarter';
    holiday?: object;
    shortcuts?: Array<'yesterday' | 'today' | 'tomorrow'>;
    // 输入组件入参
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
  const props: any = withDefaults(defineProps<Props>(), {
    // 值
    modelValue: () => [],
    // 日期组件入参
    frame: false,
    tools: true,
    format: 'YYYY-M-D',
    picker: 'date',
    holiday: () => ({}),
    shortcuts: () => ['yesterday', 'today', 'tomorrow'],
    // 输入组件入参
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
    clearable: true,
    verify: false,
    prefix: () => [],
    suffix: () => [],
    interacted: false
  });

  const state: any = reactive({
    show: 0,
    value: []
  });

  watch(
    () => props.modelValue,
    (value: any) => {
      state.value = value;
    },
    { deep: true, immediate: true }
  );

  watch(
    () => state.value,
    (value: any) => {
      emits('update:modelValue', value);
      if (value[0] && value[1]) {
        ifollow.value?.hide();
      }
    },
    { deep: true, immediate: true }
  );

  const toggle = () => {
    state.show = state.show ? 0 : 1;
  };
</script>
. .
