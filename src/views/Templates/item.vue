<template>
  <div ui-flex="col xy">
    <div class="box">
      <!-- <div class="nb-sm">
        <div ui-btn="@a s none" @click="router.back()"><i class="icon icon-back"></i>返回</div>
      </div> -->
      <div class="bg-fore r-sm" ui-flex="row lt">
        <div class="flex-block">
          <FileLoader file="/docs/case/case1.md" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { storeToRefs, useBaseStore } from '@/store';
  import { CoverView } from '@/components';
  import { useRoute, useRouter } from 'vue-router';
  import FileLoader from '@/components/FileLoader.vue';
  const route: any = useRoute();
  const router: any = useRouter();

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  // const fLink = (url: any) => {
  //   window.open(url, '_blank');
  // };
</script>
