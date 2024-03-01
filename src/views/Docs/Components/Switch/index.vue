<template>
  <h1>{{ words['components.switch'] || 'Switch' }}</h1>
  <div class="w-ls">
    <Switch />
  </div>
</template>
<script setup lang="ts">
  import { Switch } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
