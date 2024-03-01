<template>
  <div class="full" ui-flex="col xy">
    <div class="flex-block" ui-flex="col xy">
      <RouterView v-if="base.ready" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { watch } from 'vue';
  import { useBaseStore } from '@/store';
  const base: any = useBaseStore();
</script>
