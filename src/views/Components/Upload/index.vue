<template>
  <h1>{{ words['components.upload'] || 'Upload' }}</h1>
  <div>
    <Upload :multiple="true" />
  </div>
</template>
<script setup lang="ts">
  import { Upload } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const uploadFn = (action: string, formData: FormData) => {
    return Promise.resolve('/img/url');
  };
</script>
