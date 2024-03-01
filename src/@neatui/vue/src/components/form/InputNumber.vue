<template>
  <div
    :ui-form="`${theme} sz:${sz} ${state.error.co} type:input ${block ? ' :block' : ''} ${disabled ? 'disabled' : ''} ${readonly ? 'readonly' : ''}`"
    @click="emits('click', $event)"
  >
    <div :ui-form-tips="state.error.ontips">{{ state.error.tips }}</div>
    <div ui-form-prefix="">
      <template v-for="(item, idx) in prefix" :key="idx">
        <div v-html="isObject(item) ? item.html : item"></div>
      </template>
      <slot name="prefix"></slot>
    </div>
    <slot>
      <input
        v-model="state.value"
        :type="type"
        :placeholder="placeholder"
        :readonly="readonly || disabled"
        autocomplete="new-password"
        @focus="emits('focus', $event, state)"
        @input="input($event)"
        @change="emits('change', $event, state)"
        @blur="blur($event)"
      />
    </slot>
    <div ui-form-suffix="">
      <i ui-form-clean="" v-if="clearable && state.value && !readonly && !disabled" @click.stop="clear"></i>
      <slot name="suffix"></slot>
      <template v-for="(item, idx) in suffix" :key="idx">
        <div v-html="isObject(item) ? item.html : item"></div>
      </template>
    </div>
    <i v-if="ready && verify" :ui-form-verify="verify"></i>
  </div>
</template>

<script setup lang="ts">
  import { reactive, watch, PropType } from 'vue';
  import { isObject } from '@fekit/utils';

  const emits = defineEmits(['update:modelValue', 'click', 'blur', 'focus', 'change', 'input', 'clear']);
  const props = defineProps({
    // 主题
    theme: { type: String, default: '@a' },
    // 尺寸
    sz: { type: String, default: '' },
    // 颜色
    co: { type: String, default: '' },
    // 撑满
    block: { type: Boolean, default: true },
    // 准备就绪
    ready: { type: Boolean, default: false },
    // 值
    modelValue: { type: [String, Number], default: '' },
    // 类型
    type: { type: String, default: 'text' },
    // 提示文案
    tips: { type: String, default: '' },
    // 内容占位
    placeholder: { type: String, default: '' },
    // 最大长度
    maxlength: { type: Number, default: null },
    // 最小长度
    minlength: { type: Number, default: null },
    // 是否禁用
    disabled: { type: Boolean, default: false },
    // 是否只读
    readonly: { type: Boolean, default: false },
    // 是否显示清除按钮
    clearable: { type: Boolean, default: true },
    // 校验规则
    rules: { type: Array as PropType<any[]>, default: () => [] },
    // 是否是示校验图标
    verify: { type: Boolean, default: false },
    prefix: { type: Array as PropType<any[]>, default: () => [] },
    suffix: { type: Array as PropType<any[]>, default: () => [] },
    // 用户是否交互
    interacted: { type: Boolean, default: false }
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

  // 监听异步数据
  watch(
    () => props.modelValue,
    (value: any) => {
      if (state.value !== value) {
        state.value = value;
      }
    },
    { deep: true, immediate: true }
  );
  watch(
    () => state.value,
    (value: any) => {
      emits('update:modelValue', value);
    },
    { deep: true, immediate: true }
  );

  // 校验
  watch(
    [() => state.interacted, () => state.value],
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
        const ontips = verify === 'no' && tips ? 'show' : '';
        // 状态颜色
        const co = verify === 'no' ? 'co:' + type : props.co ? 'co:' + props.co : '';
        state.error = { tips, ontips, verify, co };
      } else {
        state.error = { tips: '', ontips: '', verify: '', co: '' };
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
    if (!state.interacted) {
      setTimeout(() => {
        state.interacted = true;
      }, 50);
    }
    emits('input', e, state);
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
</script>
