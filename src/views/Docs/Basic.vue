<template>
  <DocFileLoader :file="`/docs/Basic.md`" />
</template>
<script setup lang="ts">
  import { reactive } from 'vue';
  import { DocFileLoader } from '@/components';
  import { useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const state: any = reactive({
    flex: '',
    x: '',
    y: ''
  });
</script>
