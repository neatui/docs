<template>
  <div :ui-form="`${theme} sz:${sz} ${state.co} type:input ${block ? ' :block' : ''} ${disabled ? 'disabled' : ''} ${readonly ? 'readonly' : ''}`" @click="emits('click', $event)">
    <div v-if="ready" :ui-form-tips="state.ontips">{{ state.tips }}</div>
    <div ui-form-prefix="">
      <template v-for="(item, idx) in prefix" :key="idx">
        <div v-html="isObject(item) ? item.html : item"></div>
      </template>
      <slot name="prefix"></slot>
    </div>
    <slot>
      <div ui-flex="row lm">
        <input v-model="sta" :type="type" :placeholder="placeholder" :readonly="readonly || disabled" @focus="emits('focus', $event)" @blur="emits('blur', $event)" />
        <span class="o-mm">⇀</span>
        <input v-model="end" :type="type" :placeholder="placeholder" :readonly="readonly || disabled" @focus="emits('focus', $event)" @blur="emits('blur', $event)" />
      </div>
    </slot>
    <div ui-form-suffix="">
      <i ui-form-clean="" v-if="clearable && sta && !readonly && !disabled" @click.stop="fClear"></i>
      <slot name="suffix"></slot>
      <template v-for="(item, idx) in suffix" :key="idx">
        <div v-html="isObject(item) ? item.html : item"></div>
      </template>
    </div>
    <i v-if="ready && verify" :ui-form-verify="state.verify"></i>
  </div>
</template>

<script setup lang="ts">
  import { isObject } from '@fekit/utils';
  import { ref, watch, computed, PropType } from 'vue';

  const emits = defineEmits(['update:modelValue', 'click', 'blur', 'focus', 'change', 'clear']);

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
   * verify         是否是示校验图标
   * prefix         前缀内容
   * suffix         后缀内容
   * interacted     用户是否交互
   */

  // 类型
  interface Props {
    modelValue?: Array<string | number>;
    placeholder?: string;
    rules?: Array<object>;
    theme?: string;
    sz?: '' | 'xs' | 's' | 'm' | 'l' | 'xl';
    co?: string;
    block?: boolean;
    // ready?: boolean;
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
    modelValue: () => [],
    placeholder: '',
    rules: () => [],
    theme: '@a',
    sz: '',
    co: '',
    block: true,
    // ready: false,
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
  // const props = defineProps({
  //   theme: { type: String, default: '@a' },
  //   sz: { type: String, default: '' },
  //   co: { type: String, default: '' },
  //   block: { type: Boolean, default: true },
  //   // 值
  //   modelValue: {
  //     type: Array,
  //     default: () => []
  //   },
  //   // 类型
  //   type: {
  //     type: String,
  //     default: 'text'
  //   },
  //   // 提示文案
  //   tips: {
  //     type: String,
  //     default: ''
  //   },
  //   // 内容占位
  //   placeholder: {
  //     type: String,
  //     default: ''
  //   },
  //   // 最大长度
  //   maxlength: {
  //     type: Number,
  //     default: null
  //   },
  //   // 最小长度
  //   minlength: {
  //     type: Number,
  //     default: null
  //   },
  //   // 是否禁用
  //   disabled: {
  //     type: Boolean,
  //     default: false
  //   },
  //   // 是否中读
  //   readonly: {
  //     type: Boolean,
  //     default: false
  //   },
  //   // 是否显示清除按钮
  //   clearable: {
  //     type: Boolean,
  //     default: true
  //   },
  //   // 校验规则
  //   rules: {
  //     type: Array,
  //     default: () => []
  //   },
  //   // 是否是示校验图标
  //   verify: {
  //     type: Boolean,
  //     default: false
  //   },
  //   prefix: {
  //     type: Array as PropType<any[]>,
  //     default: () => []
  //   },
  //   suffix: {
  //     type: Array as PropType<any[]>,
  //     default: () => []
  //   }
  // });

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

  const sta: any = ref('');
  const end: any = ref('');

  // 清空
  function fClear() {
    emits('update:modelValue', []);
    emits('clear');
  }

  watch(
    () => props.modelValue,
    (newValue) => {
      sta.value = newValue[0];
      end.value = newValue[1];
    },
    {
      deep: true,
      immediate: true
    }
  );
  watch([() => sta.value, () => end.value], () => {
    emits('update:modelValue', [sta.value, end.value]);
  });
</script>
