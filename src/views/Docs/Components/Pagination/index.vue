<template>
  <h1>{{ words['components.pagination'] || 'Pagination' }}</h1>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    {{ state.param }}
    <br />
    {{ state.pagination }}
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="n-ms b-solid b-case b-xs" ui-flex="row xm">
      <div></div>
      <Pagination v-model="state.param" :data="state.pagination" :defined="{ current: 'page' }" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { reactive, watch } from 'vue';
  import { IFollowView, Pagination } from '@neatui/vue';
  // import Pagination from '../../../../@neatui/vue/src/components/tools/Pagination@a.vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
  const state: any = reactive({
    param: {
      page: 1,
      pageSize: 10
    },
    pagination: {
      total: 1000,
      totalPages: 100,
      page: 1
    }
  });
  watch(
    () => state.param.page,
    (page: any) => {
      state.pagination.page = page;
    },
    { deep: true }
  );
</script>
