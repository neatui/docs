<template>
  <h1>{{ words['components.autoComplete'] || 'AutoComplete' }}</h1>
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
