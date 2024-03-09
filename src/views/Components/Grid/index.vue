<template>
  <h1>{{ words['components.grid'] || 'Grid' }}</h1>
  <div class="w-ls">
    <IFollowView>
      <div></div>
    </IFollowView>
  </div>
</template>
<script setup lang="ts">
  import { IFollowView } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
