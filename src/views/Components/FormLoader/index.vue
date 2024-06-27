<template>
  <DocView>
    <div>
      <h1>IFormLoader</h1>
      <p>通过配置JSON规则来自动生成表单。</p>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space">
        <li ui-col="mob-24">
          <CodeView file="/components/FormLoader/ex1.md">
            <h5>基础用法</h5>
            <FormLoader :form="ex1.form" :data="ex1.data" :idx="ex1.id">
              <template #diy="{ col = {} }: any = {}">
                <div class="lh-ml r-ss nx-sm ny-xs b-solid bk-case b-xs" ui-flex="row lm">
                  <span>这是一个自定义模型</span>
                  <div ui-tips="@a ux:hover">
                    <i class="icon icon-theme ml-sm"></i>
                    <div ui-tips-box="rb">
                      <div class="n-ms w-ms h-mm" ui-scroll=":x :y">
                        {{ col }}
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template v-slot:UploadAAA="{ col }">
                <div>
                  <h1>主功能是同一个</h1>
                  <p>提示文案：{{ col.model[1].aaa }}</p>
                </div>
              </template>
            </FormLoader>
          </CodeView>
        </li>
      </ul>
    </div>
    <div>
      <h2>API</h2>
    </div>
  </DocView>
</template>
<script setup lang="ts">
  import { reactive } from 'vue';
  import { DocView, CodeView } from '@/components';
  import { FormLoader } from '@neatui/vue';
  import { validatePhoneNumber } from '@fekit/utils';

  const ex1: any = reactive({
    id: 1,
    form: [
      {
        label: '文本',
        field: 'input',
        model: 'Input'
      },
      {
        label: '校验',
        field: 'phone',
        model: 'Input',
        rules: [
          {
            msg: '这是必填项',
            type: 'risk',
            required: true
          },
          {
            msg: '请输入正确的手机号',
            type: 'risk',
            validator: validatePhoneNumber
          }
        ]
      },
      {
        label: '日期',
        field: 'birthday',
        model: 'DatePicker'
      },
      {
        label: '单选',
        field: 'sex',
        model: 'Select',
        enums: [
          { label: '男', value: 1 },
          { label: '女', value: 2 }
        ]
      },
      {
        label: '多选',
        field: 'buy',
        model: 'MoreSelect',
        enums: [
          { label: '衣服', value: '1' },
          { label: '手机', value: '2' },
          { label: '外卖', value: '3' }
        ]
      },
      {
        label: '带搜索单选',
        field: 'search_select',
        model: ['Select', { search: true }],
        enums: [
          { label: '衣服', value: '1' },
          { label: '手机', value: '2' },
          { label: '外卖', value: '3' }
        ]
      },
      {
        label: '树型',
        field: 'treeData',
        model: [
          'SelectTree',
          {
            search: true,
            multiple: true,
            optional: 'end',
            chain: true,
            paths: true
          }
        ],
        enums: [
          {
            value: '1',
            label: 'Node 1',
            child: [
              {
                value: '11',
                label: 'Node 1.1'
              },
              {
                value: '12',
                label: 'Node 1.2'
              }
            ]
          },
          {
            value: '2',
            label: 'Node 2',
            child: [
              {
                value: '21',
                label: 'Node 2.1'
              },
              {
                value: '22',
                label: 'Node 2.2'
              }
            ]
          }
        ]
      },
      {
        label: '上传附件',
        field: 'files',
        model: [
          'UploadAAA',
          {
            aaa: '这是第一个',
            multiple: true,
            upload: async (data: any) => {
              console.log(145, data);
              return 'xxx';
            }
          }
        ]
      },
      {
        label: '上传附件',
        field: 'files',
        model: [
          'UploadAAA',
          {
            aaa: '这是第二个',
            multiple: true,
            upload: async (data: any) => {
              console.log(145, data);
              return 'xxx';
            }
          }
        ]
      },
      {
        label: '自定义模型',
        field: 'diy'
      }
    ],
    data: {
      // input: '',
      // phone: '',
      // sex: '',
      // buy: []
    },
    submit() {}
  });

  // setTimeout(() => {
  //   ex1.data = {
  //     input: '111',
  //     phone: '1',
  //     birthday: '2023-10-10',
  //     sex: 1,
  //     buy: [1, 2],
  //     search_select: 1
  //   };
  // }, 3000);

  // const getDate = (sex: any) => {
  //   console.log('getDate');
  //   return new Promise((resolve, reject) => {
  //     const aaa: any = {
  //       1: [
  //         { label: '香烟', value: '1' },
  //         { label: '电子产品', value: '2' },
  //         { label: '外卖', value: '3' }
  //       ],
  //       2: [
  //         { label: '衣服', value: '1' },
  //         { label: '护肤品', value: '2' },
  //         { label: '美妆', value: '3' }
  //       ]
  //     };
  //     setTimeout(() => {
  //       const response = {
  //         list: aaa[sex] || []
  //       };
  //       resolve(response);
  //     }, 2000);
  //   });
  // };

  // const state: any = reactive({
  //   form: [
  //     { label: '名字', field: 'name' },
  //     {
  //       label: '姓别',
  //       field: 'sex',
  //       // model: (data: any, form: any) => {
  //       //   console.log(135, data.name);
  //       //   return ['Select', { tips: data.name === '1' ? 'aaa' : 'bbb' }];
  //       // },
  //       // model: {
  //       //   value: ['Select'],
  //       //   setup(data: any) {
  //       //     console.log(144);
  //       //     return ['Select', { tips: data.name === '1' ? 'aaa' : '' }];
  //       //   },
  //       //   watch: ['name']
  //       // },
  //       enums: [
  //         { label: '男', value: 1 },
  //         { label: '女', value: 2 }
  //       ],
  //       rules: [{ type: 'risk', msg: '这是必填', required: true }]
  //     }
  //     // {
  //     //   label: '张三专属',
  //     //   field: 'zszs',
  //     //   clear(data: any, form: any, route: any, router: any) {
  //     //     console.log(145);
  //     //     return {
  //     //       value: true,
  //     //       setup: (data: any) => {
  //     //         console.log('触发了张三专属');
  //     //         return data.name !== '张三';
  //     //       },
  //     //       watch: ['name']
  //     //     };
  //     //   }
  //     // },
  //     // {
  //     //   label: '男生可见',
  //     //   field: 'body',
  //     //   // clear: {
  //     //   //   setup: (data: any) => {
  //     //   //     console.log(73);
  //     //   //     return data.sex !== 1;
  //     //   //   },
  //     //   //   watch: []
  //     //   // }
  //     //   clear: (data: any) => {
  //     //     return data.sex !== 1;
  //     //   }
  //     // },
  //     // {
  //     //   label: '女生可见',
  //     //   field: 'girl',
  //     //   clear: {
  //     //     value: true,
  //     //     setup: (data: any) => data.sex !== 2,
  //     //     watch: ['sex']
  //     //   }
  //     // }
  //     // {
  //     //   label: '购买产品',
  //     //   field: 'buy',
  //     //   model: {
  //     //     setup(data: any) {
  //     //       const _text = data.sex ? '<span ui-load="@d"></span><span>正在载入</span>' : '请先选择性别';
  //     //       return [
  //     //         'Select',
  //     //         {
  //     //           spare: `<p ui-flex="row cm">${_text}</p>`
  //     //         }
  //     //       ];
  //     //     },
  //     //     watch: ['sex']
  //     //   },
  //     //   // 没有默认值，没有依赖关系
  //     //   enums: []
  //     //   // enums: {
  //     //   //   value: [],
  //     //   //   setup: async (data: any) => {
  //     //   //     console.log('请求枚举');
  //     //   //     const res: any = await getDate(data.sex);
  //     //   //     return res.list;
  //     //   //   },
  //     //   //   watch: ['sex']
  //     //   // }
  //     //   // 返回默认值，异步请求和依赖关系
  //     //   // enums: (data: any) => {
  //     //   //   return {
  //     //   //     default: [],
  //     //   //     setup: async () => {
  //     //   //       await getDate(data.sex);
  //     //   //     },
  //     //   //     dependencies: []
  //     //   //   };
  //     //   // }
  //     //   // enums: ['@',async()=>{ await getDate(data.sex); },['sex']]
  //     //   // query: async (data: any) => {
  //     //   //   const res: any = await getDate(data.sex);
  //     //   // }
  //     //   // setup() {},
  //     //   // watch: {
  //     //   //   enums: ['sex']
  //     //   // }
  //     // }
  //   ],
  //   data: {
  //     // name: '',
  //     // sex: '',
  //     // birthday: '',
  //     // body: '',
  //     // girl: '',
  //     // buy: ''
  //   }
  // });

  // setTimeout(() => {
  //   state.data = {
  //     name: '111',
  //     sex: '1',
  //     birthday: '2023-10-10',
  //     body: 'aaa',
  //     girl: 'bbb',
  //     buy: [1]
  //   };
  // }, 3000);

  // 提交
  // const submit = () => {
  //   console.log(state.data);
  // };
</script>
