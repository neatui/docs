<template>
  <div
    :ui-form="`${theme} sz:${sz} ${state.error.co} type:input ${block ? ' :block' : ''} ${disabled ? 'disabled' : ''} ${readonly ? 'readonly' : ''}`"
    @click="emits('click', $event)"
  >
    <div :ui-form-tips="state.error.ontips">{{ state.error.tips }}</div>
    <div ui-form-prefix="">
      <template v-for="(item, idx) in prefix" :key="idx">
        <div v-if="isObject(item)" v-bind="item.attrs" v-on="event(item, props.modelValue)">
          <div v-html="isFunction(item.value) ? item.value(props.modelValue) : item.value"></div>
        </div>
        <div v-else v-html="isFunction(item) ? item(props.modelValue) : item"></div>
      </template>
      <slot name="prefix"></slot>
    </div>
    <slot>
      <input
        :title="props.modelValue"
        :value="props.modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        autocomplete="new-password"
        @focus="emits('focus', $event, state)"
        @input="input($event)"
        @change="emits('change', $event, state)"
        @blur="blur($event)"
      />
    </slot>
    <div ui-form-suffix="">
      <i ui-form-clean="" v-if="clearable && props.modelValue && !readonly && !disabled" @click.stop="clear"></i>
      <slot name="suffix"></slot>
      <template v-for="(item, idx) in suffix" :key="idx">
        <div v-if="isObject(item)" v-bind="item.attrs" v-on="event(item, props.modelValue)">
          <div v-html="isFunction(item.value) ? item.value(props.modelValue) : item.value"></div>
        </div>
        <div v-else v-html="isFunction(item) ? item(props.modelValue) : item"></div>
      </template>
    </div>
    <i v-if="verify && state.interacted" :ui-form-verify="state.error.verify"></i>
  </div>
</template>

<script setup lang="ts">
  import { reactive, watch } from 'vue';
  import { isObject, isFunction } from '@fekit/utils';

  const emits = defineEmits(['update:modelValue', 'click', 'blur', 'focus', 'change', 'input', 'clear']);

  /**
   * 入参说明
   *
   * modelValue     值
   * theme          主题
   * sz             尺寸
   * co             颜色
   * block          撑满
   * ready          准备就绪
   * type           类型
   * tips           提示文案
   * placeholder    内容占位
   * maxlength      最大长度
   * minlength      最小长度
   * disabled       是否禁用
   * readonly       是否只读
   * clearable      是否显示清除按钮
   * rules          校验规则
   * verify         是否是示校验图标 2=tips 3=text 4=icon 5=tips+text 6=text+icon 7=text+icon
   * prefix         前缀内容
   * suffix         后缀内容
   * interacted     用户是否交互
   */

  // 类型
  interface Props {
    modelValue?: string | number;
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
    modelValue: '',
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
    // 用户是否交互
    interacted: false,
    // 值
    value: props.modelValue,
    // 错误
    error: {}
  });
  // 外部传入交互标识，主要用于外部没有输入但点击了提交
  watch(
    () => props.interacted,
    (interacted: any) => {
      if (interacted) {
        state.interacted = interacted;
      }
    },
    { deep: true, immediate: true }
  );

  // 监听外部数据
  // watch(
  //   () => props.modelValue,
  //   (value: any) => {
  //     state.value = value;
  //   },
  //   { deep: true, immediate: true }
  // );
  // watch(
  //   () => state.value,
  //   (value: any) => {
  //     emits('update:modelValue', value);
  //   },
  //   { deep: true, immediate: true }
  // );

  // 校验
  watch(
    [() => state.interacted, () => props.modelValue],
    async () => {
      if (state.interacted) {
        // 提示文案
        let tips = '';
        // 错误类型
        let type = '';
        // 验证结果
        let verify = '';

        if (props.modelValue) {
          // 有值
          let hasError = false;
          // 遍历校验规则
          for (const rule of props.rules) {
            if (rule && rule.validator) {
              const yes = !(await rule.validator(props.modelValue));
              if (yes) {
                tips = rule.msg;
                type = rule.type;
                hasError = true;
                break;
              }
            }
          }
          verify = hasError ? 'no' : 'ok';
        } else {
          // 无值
          let hasError = false;
          // 遍历校验规则
          for (const rule of props.rules) {
            if (rule) {
              tips = rule.msg;
              type = rule.type;
              if (rule.required) {
                hasError = true;
                break;
              }
            }
          }
          verify = hasError ? 'no' : '';
        }
        if (verify !== 'no' && props.tips) {
          tips = props.tips;
        }
        // 是否显示提示
        const ontips = (verify === 'no' && tips) || props.tips ? 'show' : '';
        // 状态颜色
        const co = verify === 'no' ? 'co:' + type : props.co ? 'co:' + props.co : '';
        state.error = { tips, ontips, verify, co };
      } else {
        state.error = { tips: props.tips, ontips: props.tips ? 'show' : '', verify: '', co: '' };
      }
    },
    { deep: true, immediate: true }
  );

  // 清空
  function clear() {
    emits('update:modelValue', '');
    emits('clear');
  }
  // 输入
  const input = (e: any) => {
    // 用户交互
    if (!state.interacted) {
      setTimeout(() => {
        state.interacted = true;
      }, 50);
    }

    // 长度限制
    const value = e?.target?.value || '';
    if (props.maxlength && value.length > props.maxlength) {
      e.target.value = props.modelValue;
      return false;
    }
    // 数字类型
    if (props.type === 'number' && !value && props.modelValue?.length !== 1) {
      e.target.value = props.modelValue;
      return false;
    }
    // 输入事件
    emits('input', e, state);
    emits('update:modelValue', value);
  };
  // 失焦
  const blur = (e: any) => {
    if (!state.interacted) {
      setTimeout(() => {
        state.interacted = true;
      }, 50);
    }
    emits('blur', e, state);
  };

  // 事件处理
  const event: any = (item: any, data: any): object => {
    const _event: any = {};
    if (isObject(item.event)) {
      for (const key in item.event) {
        const fun = item.event[key];
        if (isFunction(fun)) {
          _event[key] = (...args: any) => {
            return fun({ data }, ...args);
          };
        }
      }
    }
    return { ..._event };
  };
</script>
