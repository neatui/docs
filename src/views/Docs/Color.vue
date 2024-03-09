<template>
  <DocView>
    <DocFileLoader :file="`/docs/${base.lang}/Color.md`" />
  </DocView>
</template>
<script setup lang="ts">
  import { DocView, CodeView, DocFileLoader } from '@/components';
  import { useBaseStore } from '@/store';
  const base: any = useBaseStore();
</script>
