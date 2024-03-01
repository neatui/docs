<template>
  <PageView>
    <div class="flex-block">
      <BodyView>
        <div class="n-ms">
          <div>
            <h1>Development</h1>
            <p>这里为前端开发者提供全方面的指导，引导开发者快速进入开发工作。</p>
          </div>
        </div>
        <FootView />
      </BodyView>
    </div>
  </PageView>
</template>
<script setup lang="ts">
  import IFollowView from '@/components/IFollowView.vue';
  import PageView from '@/views/modules/PageView.vue';
  import HeadView from '@/views/modules/HeadView.vue';
  import BodyView from '@/views/modules/BodyView.vue';
  import FootView from '@/views/modules/FootView.vue';
  import MoreLangs from '@/views/modules/MoreLangs.vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
