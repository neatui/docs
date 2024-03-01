<template>
  <div class="full pf ot-no ol-no z-sm" ui-flex="col cy">
    <div class="flex-block" ui-flex="col cm">
      <p>
        <i class="icon icon-fail fs-lm"></i>
      </p>
      <p>{{ words['fail.tips'] || '程序出了点小问题，请稍后重试' }}!</p>
    </div>
    <div class="n-sl fs-ss o-ms">{{ words['fail.code'] || '异常码' }}: ERR{{ error.code }}</div>
  </div>
</template>
<script setup lang="ts">
  import { storeToRefs, useBaseStore } from '@/store';
  const base = useBaseStore();
  const { error = {}, words = {} }: any = storeToRefs(base);
  console.log('fail');
</script>
