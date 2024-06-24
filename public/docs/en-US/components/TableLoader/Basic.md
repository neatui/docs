# Basic

```vue
<template>
  <TableLoader :table="state.table" :lists="state.data">
    <template #operate>
      <div class="ar mob:ac ml-sm-sub nowrap">
        <button ui-btn="@a s none :square"><i class="icon icon-view co-link"></i></button>
        <button ui-btn="@a s none :square"><i class="icon icon-revise co-info"></i></button>
        <button ui-btn="@a s none :square"><i class="icon icon-delete co-risk"></i></button>
      </div>
    </template>
  </TableLoader>
</template>
<script setup lang="ts">
  import { reactive } from 'vue';

  const state: any = reactive({
    table: [],
    lists: []
  });
</script>
```
