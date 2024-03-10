<template>
  <DocFileLoader :file="`/docs/${base.lang}/Installation.md`" />
</template>
<script setup lang="ts">
  import { DocFileLoader } from '@/components';
  import { useBaseStore } from '@/store';
  const base: any = useBaseStore();
</script>
