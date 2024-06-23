```vue
<template>
  <Tree
    :options="state.options"
    v-model:selectedKeys="state.selectedKeys"
    v-model:checkedKeys="state.checkedKeys"
    :defaultExpandAll="false"
    :autoExpandSelected="true"
    :treeData="state.treeData"
    :checkable="true"
  />
</template>
<script setup lang="ts">
  import { reactive, watch } from 'vue';
  import { Tree } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  import { DocView, CodeView } from '@/components';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const state = reactive({
    selectedKeys: '111',
    checkedKeys: ['112'] as Array<string | number>,
    options: {
      label: 'name',
      id: 'key',
      children: 'childrenPremission'
    },
    treeData: [
      {
        key: '1',
        name: 'Node 1',
        childrenPremission: [
          {
            key: '11',
            name: 'Node 1.1',
            childrenPremission: [
              {
                key: '111',
                name: 'Node 1.1.1',
                childrenPremission: []
              },
              {
                key: '112',
                name: 'Node 1.1.2',
                childrenPremission: []
              }
            ]
          },
          {
            key: '12',
            name: 'Node 1.2',
            childrenPremission: []
          }
        ]
      },
      {
        key: '2',
        name: 'Node 2',
        childrenPremission: []
      }
    ],
    test: [
      {
        key: '1',
        name: 'Node 1',
        childrenPremission: [
          {
            key: '11',
            name: 'Node 1.1',
            childrenPremission: [
              {
                key: '111',
                name: 'Node 1.1.1',
                childrenPremission: []
              }
            ]
          },
          {
            key: '12',
            name: 'Node 1.2',
            childrenPremission: []
          }
        ]
      }
    ]
  });

  setTimeout(() => {
    // state.checkedKeys = ['112'];
  }, 2000);

  watch(
    () => state.checkedKeys,
    () => {
      console.log(state.checkedKeys, '外部数据变动');
    }
  );
</script>
```
