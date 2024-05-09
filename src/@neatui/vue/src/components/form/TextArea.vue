<template>
  <div
    :ui-form="`${theme} sz:${sz} ${state.co} type:textarea ${block ? ' :block' : ''} ${disabled ? 'disabled' : ''} ${readonly ? 'readonly' : ''}`"
    @click="emits('click', $event)"
  >
    <div v-if="ready" :ui-form-tips="state.ontips">{{ state.tips }}</div>
    <slot>
      <textarea
        ref="el"
        :rows="rows"
        v-model="mv"
        :type="type"
        :placeholder="placeholder"
        :readonly="readonly || disabled"
        @focus="emits('focus', $event)"
        @input="emits('input', $event)"
        @change="emits('change', $event)"
        @blur="emits('blur', $event)"
        ui-scroll=":y"
      ></textarea>
    </slot>
    <i v-if="ready && verify" :ui-form-verify="state.verify"></i>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, computed, onMounted, PropType } from 'vue';

  const emits = defineEmits(['update:modelValue', 'click', 'blur', 'focus', 'change', 'input', 'clear']);
  const props = defineProps({
    theme: { type: String, default: '@a' },
    sz: { type: String, default: '' },
    co: { type: String, default: '' },
    block: { type: Boolean, default: true },
    // 值
    modelValue: {
      type: [String, Number],
      default: ''
    },
    // 类型
    type: {
      type: String,
      default: 'text'
    },
    // 提示文案
    tips: {
      type: String,
      default: ''
    },
    // 内容占位
    placeholder: {
      type: String,
      default: ''
    },
    // 最大长度
    maxLength: {
      type: Number,
      default: null
    },
    // 最小长度
    minLength: {
      type: Number,
      default: null
    },
    // 最小长度
    autoHeight: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否中读
    readonly: {
      type: Boolean,
      default: false
    },
    // 是否显示清除按钮
    clearable: {
      type: Boolean,
      default: true
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
    prefix: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    suffix: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    rows: {
      type: Number,
      default: 3
    }
  });

  const ready: any = ref(0);
  const state: any = computed(() => {
    if (ready.value) {
      // 提示文案
      let tips = '';
      // 错误类型
      let type = '';
      // 验证结果
      let verify = '';
      if (props.modelValue) {
        // 有值
        const res: any = props.rules?.some((rule: any) => {
          const yes = rule.validator && !rule.validator(props.modelValue);
          tips = rule.msg;
          type = rule.type;
          return yes;
        });
        verify = res ? 'no' : 'ok';
      } else {
        // 无值
        const res: any = props.rules?.some((rule: any) => {
          tips = rule.msg;
          type = rule.type;
          return rule.required;
        });
        verify = res ? 'no' : '';
      }
      if (verify !== 'no' && props.tips) {
        tips = props.tips;
      }
      // 是否显示提示
      const ontips = verify === 'no' && tips ? 'show' : '';
      // 状态颜色
      const co = verify === 'no' ? 'co:' + type : props.co ? 'co:' + props.co : '';
      return { tips, ontips, verify, co };
    } else {
      return {};
    }
  });

  const mv: any = ref(props.modelValue);
  watch(
    () => props.modelValue,
    (v: any) => {
      console.log(149, v);
      mv.value = v;
    },
    { deep: true, immediate: true }
  );
  const el: any = ref(null);
  // const rows = ref(1);
  watch(
    () => mv.value,
    (v: any) => {
      let value = v;
      if (typeof props.maxLength === 'number' && !isNaN(props.maxLength)) {
        value = value.slice(0, props.maxLength);
        mv.value = value;
      }
      emits('update:modelValue', value);

      // 自动高度
      if (props.autoHeight) {
        el.value.style.height = 'auto';
        el.value.style.height = el.value.scrollHeight + 'px';
      }
    },
    { deep: true }
  );

  onMounted(() => {
    setTimeout(() => {
      ready.value = 1;
    }, 300);
  });
</script>
