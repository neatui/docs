<template>
  <ul v-if="props.options?.length" class="my-sm-sub lh-ss">
    <li
      class="hover:bg-main-ss n-sl r-ss b-solid b-xs"
      :class="`${item.value === mv ? 'bk-main-ml bg-main-ss' : 'bk-case'}`"
      v-for="(item, idx) of props.options"
      :key="idx"
      @click="mv = item.value === mv ? '' : item.value"
    >
      <label ui-form="@a type:radio" style="pointer-events: none">
        <input type="radio" :name="field" :data-name="field" :checked="item.value === mv" /><span class="lh-ss">{{ item.label || item }}</span>
      </label>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { watch, ref } from 'vue';
  const emits = defineEmits(['update:modelValue']);
  const props = defineProps({
    field: { type: String, default: '' },
    theme: { type: String, default: '@a' },
    sz: { type: String, default: 'm' },
    co: { type: String, default: '' },
    block: { type: Boolean, default: true },
    tips: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    options: {
      type: Array as () => any[],
      default: () => []
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    rules: {
      type: Array,
      default: () => []
    }
  });

  // eslint-disable-next-line vue/no-dupe-keys
  const field: any = Math.random().toString(36).substring(2, 12);
  // 内部数据
  const mv: any = ref(props.modelValue);
  watch(
    () => props.modelValue,
    (value: any) => {
      mv.value = value;
    }
  );
  watch(
    () => mv.value,
    (value: any) => {
      emits('update:modelValue', value);
    }
  );
</script>
