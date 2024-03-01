<template>
  <div class="fs-ss nx-ms ny-sm bg-fore b-solid b-back bt-xs" ui-flex="row cm" style="overflow: hidden">
    <ul ui-flex="row lm" class="mr-sl-sub">
      <li class="am-view">{{ words['base.copyright'] }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
