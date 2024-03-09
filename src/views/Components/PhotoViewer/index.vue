<template>
  <h1>{{ words['components.photoViewer'] || 'PhotoViewer' }}</h1>
  <div class="w-ls">
    <!-- <PhotoViewer class="h-lm w-xl" :initial-slide="3" :files="files" /> -->
  </div>
</template>
<script setup lang="ts">
  // import { PhotoViewer } from '@neatui/vue';

  const ydkResource = '/upload/ydk-resources-cover.png';
  const yhjResource = '/upload/yhj-resources-cover.png';
  const yybResource = '/upload/yyb-resources-cover.png';

  import { storeToRefs, useBaseStore } from '@/store';
  import { ref } from 'vue';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
  const files = ref([{ imgUrl: ydkResource }, { imgUrl: yhjResource }, { imgUrl: yybResource }]);
</script>
