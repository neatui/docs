<template>
  <DocFileLoader :file="`/docs/Introduction.md`" />
</template>
<script setup lang="ts">
  import { DocFileLoader } from '@/components';
  import { useBaseStore } from '@/store';
  const base: any = useBaseStore();
</script>
