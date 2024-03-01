<template>
  <PageView>
    <HeadView />
    <div class="flex-block">
      <RouterView />
    </div>
    <FootView />
  </PageView>
</template>
<script setup lang="ts">
  import PageView from '@/views/modules/PageView.vue';
  import HeadView from '@/views/modules/HeadView.vue';
  import FootView from '@/views/modules/FootView.vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
