```vue
<template>
  <FormLoader rows="space mob-24 pad-12" :form="state.form" :data="state.data" />
</template>
<script setup lang="ts">
  import { FormLoader } from '@neatui/vue';

  const state: any = reactive({
    form: [
      { label: '名字', field: 'name' },
      {
        label: '姓别',
        field: 'sex',
        model: ['Select'],
        enums: [
          { label: '男', value: 1 },
          { label: '女', value: 2 }
        ],
        rules: [{ type: 'risk', msg: '这是必填', required: true }]
      },
      {
        label: '张三专属',
        field: 'zszs',
        clear() {
          return {
            value: true,
            setup: (data: any) => {
              console.log('触发了张三专属');
              return data.name !== '张三';
            },
            watch: ['name']
          };
        }
      },
      {
        label: '男生可见',
        field: 'body',
        clear: (data: any) => {
          return data.sex !== 1;
        }
      },
      {
        label: '女生可见',
        field: 'girl',
        clear: {
          value: true,
          setup: (data: any) => data.sex !== 2,
          watch: ['sex']
        }
      },
      {
        label: '购买产品',
        field: 'buy',
        model: {
          setup(data: any) {
            return ['Select', { spare: `<p ui-flex="row cm">${data.sex ? '<span ui-load="@d"></span><span>正在载入</span>' : '请先选择性别'}</p>` }];
          },
          watch: ['sex']
        },
        enums: {
          value: [],
          setup: async (data: any) => {
            console.log('请求枚举');
            const res: any = await getDate(data.sex);
            return res.list;
          },
          watch: ['sex']
        }
      }
    ],
    data: {
      name: '',
      sex: '',
      body: '',
      girl: '',
      buy: ''
    }
  });
</script>
```
