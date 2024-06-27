<template>
  <div v-if="props.options?.length" class="mr-sm-sub mb-sm-sub">
    <span
      class="lh-ss ny-sm nx-ms r-xl dib"
      :class="`${mv == item.value ? 'bg-main-sm co-main' : 'bg-weak'}`"
      v-for="(item, idx) of props.options"
      :key="idx"
      @click="mv = item.value === mv ? '' : item.value"
    >
      {{ item.label || item }}
    </span>
  </div>
</template>

<script setup lang="ts">
  import { watch, ref } from 'vue';
  const emits = defineEmits(['update:modelValue']);
  const props = defineProps({
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
