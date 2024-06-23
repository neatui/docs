```html
<template>
  <FormLoader :form="ex1.form" :data="ex1.data" />
</template>
<script setup lang="ts">
  import { FormLoader } from '@neatui/vue';

  const ex1: any = reactive({
    // 表单结构
    form: [
      {
        label: '名字',
        field: 'name',
        rules: [
          // 添加一条校验规则
          { type: 'risk', msg: '这是必填', required: true }
        ]
      },
      {
        label: '姓别',
        field: 'sex',
        // 配置单选选择器模型
        model: 'Select',
        enums: [
          { label: '男', value: 1 },
          { label: '女', value: 2 }
        ]
      },
      {
        label: '喜欢购买的产品',
        field: 'buy',
        // 配置多选选择器模型
        model: 'MoreSelect',
        enums: [
          { label: '衣服', value: '1' },
          { label: '手机', value: '2' },
          { label: '外卖', value: '3' }
        ]
      }
    ],
    // 表单数据
    data: {
      name: '',
      sex: '',
      buy: []
    }
  });
</script>
```
