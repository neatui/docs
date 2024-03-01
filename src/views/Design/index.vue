<template>
  <PageView>
    <HeadView />
    <div class="flex-block">
      <RouterView />
    </div>
  </PageView>
</template>
<script setup lang="ts">
  import IFollowView from '@/components/IFollowView.vue';
  import PageView from '@/views/modules/PageView.vue';
  import HeadView from '@/views/modules/HeadView.vue';
  import MoreLangs from '@/views/modules/MoreLangs.vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
