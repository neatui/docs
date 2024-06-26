<template>
  <IPullScrollView class="file-loader doc n-ms mob:n-sl" :pull="false" :load="false">
    <slot></slot>
  </IPullScrollView>
</template>
<script setup lang="ts">
  import { onMounted, nextTick, ref, onUnmounted } from 'vue';
  import IPullScrollView from '@/components/IPullScrollView.vue';
  import LazyLoad from '@fekit/lazyload';
  import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
  const ex: any = ref(null);
  onMounted(() => {
    nextTick(() => {
      ex.value = new LazyLoad({ el: '.lazyload', area: '.fekit-ipull-scroll' });
    });
  });
  onBeforeRouteUpdate(() => {
    nextTick(() => {
      setTimeout(() => {
        ex.value = new LazyLoad({ el: '.lazyload', area: '.fekit-ipull-scroll' });
      }, 10);
    });
  });
  onBeforeRouteLeave(() => {
    ex.value?.remove();
  });
  onUnmounted(() => {
    ex.value?.remove();
  });
</script>
