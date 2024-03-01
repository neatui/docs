<template>
  <PageView>
    <HeadView />
    <div class="flex-block">
      <RouterView v-if="base.ready" />
    </div>
  </PageView>
</template>
<script setup lang="ts">
  import { useBaseStore } from '@/store';
  import PageView from '@/views/modules/PageView.vue';
  import HeadView from '@/views/modules/HeadView.vue';

  const base: any = useBaseStore();
</script>
