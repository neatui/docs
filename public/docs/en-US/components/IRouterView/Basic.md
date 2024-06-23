# Bisic

```vue
<template>
  <IRouterView :mode="state.mode">
    <template #list>
      <ListView />
    </template>
    <template #item>
      <ItemView />
    </template>
  </IRouterView>
</template>
<script setup lang="ts">
  import { reactive } from 'vue';
  import { IRouterView } from '@neatui/vue';
  // 列表
  import ListView from './ListView.vue';
  // 详情
  import ItemView from './ItemView.vue';

  const state: any = reactive({
    mode: 'default'
  });
</script>
```
