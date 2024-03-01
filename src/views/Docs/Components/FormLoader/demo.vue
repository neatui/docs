<template>
  <div ui-row="mob-24 pad-12 pad-l-8 dpc-m-6">
    <div>
      <div class="b-solid">
        <FormLoader rows="mob-24" :form="state.form" :data="state.data" />
        <button class="mt-ms" ui-btn="@a main" @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { reactive } from 'vue';
  import { FormLoader } from '@neatui/vue';

  const getDate = (sex: any) => {
    console.log('getDate');
    return new Promise((resolve, reject) => {
      const aaa: any = {
        1: [
          { label: '香烟', value: '1' },
          { label: '电子产品', value: '2' },
          { label: '外卖', value: '3' }
        ],
        2: [
          { label: '衣服', value: '1' },
          { label: '护肤品', value: '2' },
          { label: '美妆', value: '3' }
        ]
      };
      setTimeout(() => {
        const response = {
          list: aaa[sex] || []
        };
        resolve(response);
      }, 2000);
    });
  };

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
        ]
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
        // 没有默认值，没有依赖关系
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

  // 提交
  const submit = () => {
    console.log(state.data);
  };
</script>
