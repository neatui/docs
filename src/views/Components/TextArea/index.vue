<template>
  <h1>{{ words['components.textArea'] || 'TextArea' }}</h1>
  <div class="w-ls">
    <span>value: {{ value }}</span>
    <TextArea v-model="value"></TextArea>
  </div>
</template>
<script setup lang="ts">
  import { TextArea } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  import { ref } from 'vue';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const value = ref('');
</script>
