```vue
<template>
  <LimitLoader :limit="limit" :param="param" />
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { LimitLoader } from '@neatui/vue';

  const param: any = ref({});
  const limit: any = ref([
    {
      label: '名字',
      field: 'name'
    },
    {
      label: '手机号',
      field: 'phone'
    },
    {
      label: '时间',
      field: 'time',
      model: ['DateRangePicker', { class: 'w-ls' }]
    },
    {
      label: '学历',
      field: 'edu',
      enums: [
        { label: '小学', value: '1' },
        { label: '中学', value: '2' },
        { label: '大学', value: '3' }
      ],
      model: 'Select'
    },
    {
      label: '求职',
      field: 'work',
      enums: [
        { label: '月嫂', value: '1' },
        { label: '保洁', value: '2' },
        { label: '护工', value: '3' }
      ],
      model: 'MoreSelect'
    }
  ]);
</script>
```
