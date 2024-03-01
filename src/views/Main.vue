<template>
  <ErrorView v-if="base.error.code" />
  <RouterView v-else />
</template>
<script setup lang="ts">
  import { watch } from 'vue';
  import { useBaseStore } from '@/store';
  import ErrorView from './Error.vue';

  const base: any = useBaseStore();
  await base.setTheme();
  await base.setFontSize();

  watch(
    () => base.lang,
    async () => {
      localStorage.setItem('lang', base.lang);
      await base.getWordsData();
    },
    {
      immediate: true
    }
  );
</script>
