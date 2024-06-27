<template>
  <ul v-if="props.options?.length" class="pr my-sm-sub">
    <li v-if="ready" :ui-form-tips="state.ontips">{{ state.tips }}</li>
    <li
      v-for="(item, idx) of props.options"
      :key="idx"
      :class="`${mv?.some((i: any) => `${i}` === `${item.value}`) ? 'bg-main-ss bk-main-ml' : 'bk-case'}`"
      class="n-sm r-ss b-solid b-xs"
      @click.stop="select(item.value)"
    >
      <label ui-form="@a type:checkbox :block" style="pointer-events: none">
        <input :checked="mv?.some((i: any) => `${i}` === `${item.value}`)" :name="field" type="checkbox" />
        <span class="ml-sm">{{ item.label || item }}</span>
      </label>
    </li>
  </ul>
</template>

<script lang="ts" setup>
  import { ref, watch, computed, onMounted } from 'vue';

  const emits = defineEmits(['update:modelValue']);
  const props: any = defineProps({
    theme: { type: String, default: '@a' },
    sz: { type: String, default: 'm' },
    co: { type: String, default: '' },
    block: { type: Boolean, default: true },
    tips: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    modelValue: {
      type: Array as () => any[],
      default: () => []
    },
    options: {
      type: Array as () => any[],
      default: () => []
    },
    rules: {
      type: Array,
      default: () => []
    },
    field: {
      type: String,
      default: () => {
        const _name = (l: any) => Array.from({ length: l }, () => 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)]).join('');
        return _name(8);
      }
    }
  });

  const mv: any = ref(props.modelValue);

  const state: any = computed(() => {
    if (ready.value) {
      // 提示文案
      let tips = '';
      // 错误类型
      let type = '';
      // 验证结果
      let verify = '';
      if (mv.value) {
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

  // 选中
  const select = (item: any) => {
    const values = [...mv.value];
    values?.indexOf(item) !== -1 ? values?.splice(values?.indexOf(item), 1) : values?.push(item);
    mv.value = values;
  };

  watch(
    () => props.modelValue,
    () => {
      mv.value = props.modelValue;
    },
    { deep: true, immediate: true }
  );
  watch(
    () => mv.value,
    (v: any) => {
      emits('update:modelValue', v);
    },
    { deep: true, immediate: true }
  );

  const ready: any = ref(0);
  onMounted(() => {
    setTimeout(() => {
      ready.value = 1;
    }, 300);
  });
</script>
