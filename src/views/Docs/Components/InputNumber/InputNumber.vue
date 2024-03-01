<template>
  <div :ui-form="`${theme} sz:${sz} ${state.co} type:input ${block ? ' :block' : ''} ${disabled ? 'disabled' : ''} ${readonly ? 'readonly' : ''}`" @click="emits('click', $event)">
    <div v-if="ready" :ui-form-tips="state.ontips">{{ state.tips }}</div>
    <div ui-form-prefix="">
      <template v-for="(item, idx) in prefix" :key="idx">
        <div v-html="isObject(item) ? item.html : item"></div>
      </template>
      <slot name="prefix"></slot>
      <button v-if="controls" ui-btn="@a weak s :block" @click="count()">+</button>
    </div>
    <slot>
      <input
        v-model="modelValue"
        type="number"
        :id="id"
        :placeholder="placeholder"
        :readonly="readonly || disabled"
        @focus="emits('focus', $event)"
        @input="fInput"
        @change="fChange"
        @blur="emits('blur', $event)"
      />
    </slot>
    <div ui-form-suffix="">
      <i ui-form-clean="" v-if="clearable && modelValue && !readonly && !disabled" @click.stop="fClear"></i>
      <slot name="suffix"></slot>
      <template v-for="(item, idx) in suffix" :key="idx">
        <div v-html="isObject(item) ? item.html : item"></div>
      </template>
      <button v-if="controls" ui-btn="@a weak s :block" @click="count(false)">-</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { isObject } from '@fekit/utils';
  import { ref, watch, computed, onMounted, PropType, nextTick } from 'vue';

  const emits = defineEmits(['update:modelValue', 'click', 'blur', 'focus', 'change', 'input', 'clear']);
  const props = defineProps({
    theme: { type: String, default: '@a' },
    sz: { type: String, default: '' },
    co: { type: String, default: '' },
    block: { type: Boolean, default: true },
    id: {
      type: String,
      default: ''
    },
    // 值
    modelValue: {
      type: Number,
      default: null
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
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否只读
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
    // 最大值
    max: {
      type: Number,
      default: null
    },
    //最小值
    min: {
      type: Number,
      default: null
    },
    //数字精度
    precision: {
      type: Number,
      default: null
    },
    // 即时验证
    instantVerify: {
      type: Boolean,
      default: false
    },
    // 是否显示验证信息 - 非即时验证时使用
    showVerify: {
      type: Boolean,
      default: false
    },
    // 是否使用控制按钮
    controls: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
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
      let extraVerify = false;
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
        tips = props.tips || '';
        const res: any = props.rules?.some((rule: any) => {
          tips = rule.msg;
          type = rule.type;
          return rule.required;
        });
        verify = res || props.tips ? 'no' : '';

        if (!props.showVerify && props.tips) {
          tips = props.tips;
          type = 'main';
          extraVerify = !props.instantVerify;
        }
      }

      // 是否显示提示
      const ontips = verify === 'no' && tips && (props.instantVerify || props.showVerify || extraVerify) ? 'show' : '';
      // 状态颜色
      const co = verify === 'no' ? 'co:' + type : props.co ? 'co:' + props.co : '';
      return { tips, ontips, verify, co };
    } else {
      return {};
    }
  });

  const modelValue = ref(props.modelValue);

  // 输入
  const fInput = (event: Event) => {
    ready.value = 1;
    emits('update:modelValue', Number((event.target as HTMLInputElement).value));
    emits('input', event);
  };
  const fChange = (event: Event) => {
    const value = Number((event.target as HTMLInputElement).value);
    // 限制最大值
    if (props.max && value > props.max) {
      modelValue.value = props.max;
      emits('update:modelValue', modelValue.value);
    }
    // 限制最小值
    if (props.min && value < props.min) {
      modelValue.value = props.min;
      emits('update:modelValue', modelValue.value);
    }
    // 限制数据精度
    if (props.precision !== null && props.precision !== undefined && props.precision >= 0) {
      const p = Math.floor(props.precision);
      const multiplier = Math.pow(10, p);
      modelValue.value = Math.round(modelValue.value * multiplier) / multiplier;
      emits('update:modelValue', modelValue.value);
    }
    emits('change', event);
  };

  // 按钮控制加减
  const count = (add = true) => {
    let _step = props.step;
    if (props.precision !== null && props.precision !== undefined && props.precision >= 0) {
      const m = Math.pow(10, props.precision);
      _step = Math.round(props.step * m) / m;
    }
    modelValue.value = getNum(modelValue.value || 0, _step, add);
  };

  // 匹配小数点后有几位
  const countDecimal = (num: any) => {
    const regex = /\.(\d+)/;
    const match = regex.exec(num.toString());
    return match ? match[1].length : 0;
  };

  // 加减计算
  const getNum = (n1: number, n2: number, add = true) => {
    const multiple = Math.max(countDecimal(n1), countDecimal(n2));
    const m1 = Math.pow(10, multiple);
    const _n1 = Math.floor(n1 * m1);
    const _n2 = Math.floor(n2 * m1);
    return add ? (_n1 + _n2) / m1 : (_n1 - _n2) / m1;
  };

  // 清空
  const fClear = () => {
    emits('update:modelValue', '');
    emits('clear');
  };
  // 监听异步数据
  watch(
    () => props.modelValue,
    (newValue) => {
      modelValue.value = newValue;
    }
  );

  onMounted(() => {
    setTimeout(() => {
      if (props.modelValue || props.tips) ready.value = 1;
    }, 300);
  });
</script>
