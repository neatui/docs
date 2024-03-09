<template>
  <h1>{{ words['components.photoEditor'] || 'PhotoEditor' }}</h1>
  <div class="w-ls">
    <!-- <PhotoEditor /> -->
  </div>
</template>
<script setup lang="ts">
  // import { PhotoEditor } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
