<template>
  <PageView>
    <HeadView />
    <div class="flex-block" ui-flex="row xy">
      <Sidebar class="n-sl">
        <span class="o-mm fs-xs bold mt-sl">{{ words['docs.introduction'] || 'Introduction' }}</span>
        <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/introduction">NeatUI</RouterLink>
        <span class="o-mm fs-xs bold mt-sl">{{ words['docs.guides'] || 'Guides' }}</span>
        <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/installation">{{ words['docs.installation'] || 'Installation' }}</RouterLink>
        <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/use">{{ words['docs.use'] || 'Use' }}</RouterLink>
        <!-- <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design">{{ words['docs.design'] || 'Design' }}</RouterLink> -->
        <span class="o-mm fs-xs bold mt-sl">{{ words['docs.style'] || 'Style' }}</span>
        <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/basic">{{ words['docs.basic'] || 'Basic' }}</RouterLink>
        <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/color">{{ words['docs.color'] || 'Color' }}</RouterLink>
        <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/fontsize">{{ words['docs.fontsize'] || 'Font size' }}</RouterLink>
        <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/layout">{{ words['docs.layout'] || 'Layout' }}</RouterLink>
        <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/response">{{ words['docs.response'] || 'Response' }}</RouterLink>
        <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/grid">{{ words['docs.grid'] || 'Grid' }}</RouterLink>
        <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/microcontrol">{{ words['docs.microcontrol'] || 'Microcontrol' }}</RouterLink>
        <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/interaction">{{ words['docs.interaction'] || 'Interaction' }}</RouterLink>
        <span class="o-mm fs-xs bold mt-sl">{{ words['docs.version'] || 'Version' }}</span>
        <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/version">{{ words['docs.change-log'] || 'Change log' }}</RouterLink>
      </Sidebar>
      <div class="flex-block">
        <BodyView>
          <RouterView />
        </BodyView>
      </div>
    </div>
  </PageView>
</template>
<script setup lang="ts">
  import Sidebar from '@/components/Sidebar.vue';
  import PageView from '@/views/modules/PageView.vue';
  import BodyView from '@/views/modules/BodyView.vue';
  import HeadView from '@/views/modules/HeadView.vue';
  import FootView from '@/views/modules/FootView.vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
