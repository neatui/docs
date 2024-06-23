```html
<template>
  <MoreSelect v-model="value2" :options="enums" />
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { MoreSelect } from '@neatui/vue';

  // 枚举
  const enums: any = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2',
      disable: true // 禁止选择此项
    },
    {
      label: '选项3',
      value: '3'
    }
  ];

  // 值
  const value2: any = ref([]);
</script>
```
