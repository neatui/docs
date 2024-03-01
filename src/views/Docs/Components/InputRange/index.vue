<template>
  <h1>{{ words['components.inputRanger'] || 'InputRanger' }}</h1>
  <div class="w-ls">
    <span>value：{{ value }}</span>
    <InputRange v-model="value" />
  </div>
</template>
<script setup lang="ts">
  import { InputRange } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  import { ref } from 'vue';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const value: any = ref(['aaa', 'bbb']);
</script>
