<template>
  <DocView>
    <div>
      <h1>{{ words['components.pagination'] || 'Pagination' }}</h1>
      <p>采用分页的形式分隔长列表，每次只加载一个页面。</p>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space mob-24 dpc-12">
        <li>
          <CodeView file="/components/Input/Input.md">
            <h5>基础用法</h5>
            <div class="bg-weak r-sm n-ms">
              <Pagination v-model="state.param" :data="state.pagination" :defined="{ current: 'page' }" />
            </div>
          </CodeView>
        </li>
      </ul>
    </div>
    <div>
      <h2>API</h2>
      <div>
        <h3>IFollowView</h3>
        <table ui-table="@b" class="b-solid b-line b-xs r-sm">
          <thead>
            <tr>
              <td>参数</td>
              <td>说明</td>
              <td>类型</td>
              <td>默认值</td>
              <td>版本</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>xxx</code></td>
              <td>xxx</td>
              <td>string | number</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocView>
</template>
<script setup lang="ts">
  import { reactive, watch } from 'vue';
  import { Pagination } from '@neatui/vue';
  import { DocView, CodeView } from '@/components';
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
