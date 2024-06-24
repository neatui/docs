<template>
  <PageView>
    <HeadView />
    <div class="flex-block bg-back" ui-flex="row xy">
      <div class="flex-flxed" ui-flex="col xy">
        <Sidebar class="flex-block n-sl">
          <dl v-for="(menu, idx) in menus" :key="idx">
            <dt>
              <span class="o-mm fs-xs bold mt-sl">{{ menu.word || menu.name }}</span>
            </dt>
            <dd v-for="(sub, i) in menu.chlid" :key="i" class="pr">
              <RouterLink active-class="co-main" class="full-x ux-hover nx-sm ny-ss r-sm fw-auto" :to="sub.path">
                {{ sub.word || sub.name }}
              </RouterLink>
            </dd>
          </dl>
        </Sidebar>
      </div>
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
  // import FootView from '@/views/modules/FootView.vue';
  import { useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const menus = base.menus.find((item: any) => item.name === 'Components')?.chlid || [];
</script>
