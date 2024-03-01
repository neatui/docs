<template>
  <PageView>
    <HeadView />
    <div class="flex-block">
      <RouterView v-if="base.ready" />
    </div>
    <FootView />
  </PageView>
</template>
<script setup lang="ts">
  import { useBaseStore } from '@/store';
  import PageView from '@/views/modules/PageView.vue';
  import HeadView from '@/views/modules/HeadView.vue';
  import FootView from '@/views/modules/FootView.vue';

  const base: any = useBaseStore();
</script>
