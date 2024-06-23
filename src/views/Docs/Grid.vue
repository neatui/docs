<template>
  <div>
    <DocLoader :file="file" />
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import DocLoader from '@/components/DocLoader.vue';
  import { useBaseStore } from '@/store';
  import { useRoute } from 'vue-router';

  const route: any = useRoute();
  const base: any = useBaseStore();
  const file: any = computed(() => `/md/${base.lang}${route.path}.md`);
</script>
