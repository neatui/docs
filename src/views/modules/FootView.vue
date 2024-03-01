<template>
  <div class="fs-ss nx-ms ny-sl" ui-flex="row cm" style="overflow: hidden">
    <ul ui-flex="row lm" class="mr-sl-sub">
      <li class="am-view">©2023 {{ words['base.title'] }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
