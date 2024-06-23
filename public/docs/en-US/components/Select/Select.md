```html
<template>
  <select v-model="value1" :options="enums" />
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { Select } from '@neatui/vue';

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
  const value1: any = ref('');
</script>
```
