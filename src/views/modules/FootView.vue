<template>
  <div class="fs-ss nx-ms ny-sm bg-fore b-solid bk-back bt-xs" style="overflow: hidden">
    <ul ui-flex="row cm" class="mr-sl-sub">
      <li>{{ words['base.copyright'] }}</li>
      <li>
        <span>{{ words['base.support'] }}：</span>
        <span>{{ words['base.tel'] }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
