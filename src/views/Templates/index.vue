<template>
  <PageView>
    <HeadView />
    <div class="flex-block">
      <BodyView>
        <Item v-if="route.query.id" />
        <List v-else />
      </BodyView>
    </div>
    <!-- <FootView /> -->
  </PageView>
</template>
<script setup lang="ts">
  import { storeToRefs, useBaseStore } from '@/store';
  import { useRoute } from 'vue-router';
  import PageView from '@/views/modules/PageView.vue';
  import HeadView from '@/views/modules/HeadView.vue';
  import BodyView from '@/views/modules/BodyView.vue';
  import FootView from '@/views/modules/FootView.vue';

  // 列表
  import List from './list.vue';
  // 详情
  import Item from './item.vue';

  const route: any = useRoute();

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
