<template>
  <label ui-form="@a type:switch" class="lh-ls">
    <input type="checkbox" name="form2" :checked="value ? true : false" />
    <slot>&nbsp;</slot>
  </label>
</template>

<script setup lang="ts">
  import { ref, watch, computed, onMounted, PropType } from 'vue';

  const props = defineProps({
    theme: { type: String, default: '@a' },
    sz: { type: String, default: '' },
    co: { type: String, default: '' },
    block: { type: Boolean, default: true },
    // 值
    modelValue: {
      type: [Number, Boolean],
      default: false
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
    maxlength: {
      type: Number,
      default: null
    },
    // 最小长度
    minlength: {
      type: Number,
      default: null
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

  const value = ref(props.modelValue);
  // 监听异步数据
  watch(
    () => props.modelValue,
    (newValue) => {
      value.value = newValue;
    }
  );

  onMounted(() => {
    setTimeout(() => {
      ready.value = 1;
    }, 300);
  });
</script>
