<template>
  <DocView>
    <div>
      <h1>TableLoader</h1>
      <p>通过鼠标或键盘输入字符</p>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space mob-24">
        <li>
          <CodeView file="/components/Input/Input.md">
            <h5>基础用法</h5>
            <div class="b-solid b-line b-xs ny-sm">
              <TableLoader
                :table="state.table"
                :lists="state.data"
                :rows="{
                  event: {
                    dblclick: fRowClick
                  }
                }"
              >
                <template #roleIdList><span>Slot 优先</span></template>
                <template #operate>
                  <div class="ar mob:ac ml-sm-sub nowrap">
                    <button ui-btn="@a s none :square"><i class="icon icon-view co-link"></i></button>
                    <button ui-btn="@a s none :square"><i class="icon icon-revise co-info"></i></button>
                    <button ui-btn="@a s none :square"><i class="icon icon-delete co-risk"></i></button>
                  </div>
                </template>
              </TableLoader>
            </div>
          </CodeView>
        </li>
      </ul>
    </div>
    <div>
      <h2>API</h2>
      <div>
        <h3>Input</h3>
        <table ui-table="@b" class="b-solid b-line b-xs r-sm">
          <thead>
            <tr>
              <td>参数</td>
              <td>说明</td>
              <td>类型</td>
              <td>默认值</td>
              <td>版本</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>v-model</code></td>
              <td>222</td>
              <td>string | number</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocView>
</template>
<script setup lang="ts">
  import { TableLoader } from '@neatui/vue';
  import { DocView, CodeView } from '@/components';
  import { dataToEnum } from '@fekit/utils/dist/common';

  const state: any = {
    table: [
      {
        thead: {},
        label: '姓名',
        field: 'name',
        logic: true,
        attrs: (data: any) => ({ class: 'ux-copy', 'data-copy': data.realName }),
        view: 1,
        event: {
          click(event, item) {
            alert(2);
          }
        },
        value(data: any) {
          return data.name + data.id;
        },
        sort: true
      },
      {
        label: '手机号',
        field: 'phone',
        attrs: (data: any) => ({ class: 'ux-copy', 'data-copy': data.phone }),
        logic: true,
        view: 1
      },
      {
        label: '状态',
        field: 'status',
        logic: true,
        view: 1,
        sort: true
      },
      {
        label: '用户组',
        field: 'groupIdList',
        logic: true,
        enums: [],
        popup() {
          // alert(101);
          console.log(102);
          return {
            value: '111111',
            child: [{ value: '1' }, { value: 2322 }]
          };
        },
        view: 1
      },
      {
        label: '角色',
        field: 'roleIdList',
        enums: [],
        logic: true,
        view: 1
      }
      // {
      //   label: '操作',
      //   field: 'opts',
      //   fixed: 'r',
      //   view: 1,
      //   attrs: { 'ui-flex': 'row rm', class: 'ml-sm-sub' },
      //   child: [
      //     {
      //       label: '查看',
      //       value: '<i class="icon icon-view" />',
      //       attrs: {
      //         'ui-btn': '@a s none :square',
      //         class: 'co-link'
      //       },
      //       // popup: { value: '查看', attrs: { event: 'hover', pos: 'tc' } },
      //       event: {
      //         click: ({ data, router }: any = {}) => {
      //           alert(66);
      //         }
      //       }
      //     },
      //     {
      //       label: (data: any) => (data.status === '1' ? '禁用' : '激活'),
      //       value: (data: any) => (data.status === '1' ? '<i class="icon icon-disabled2" />' : '<i class="icon icon-delete" />'),
      //       attrs: {
      //         'ui-btn': '@a s none :square',
      //         class: (data: any) => (data.status === '1' ? 'co-risk fs-sl' : 'co-well fs-sl')
      //       },
      //       // popup: { value: (data: any) => (data.status === '1' ? '禁用' : '激活'), attrs: { event: 'hover', pos: 'tc' } },
      //       event: {
      //         click: ({ data, router }: any = {}) => {
      //           alert(86);
      //         }
      //       }
      //     }
      //   ]
      // }
    ],
    data: [
      {
        name: 'aaa',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      },
      {
        name: 'aaa',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      },
      {
        name: 'aaa',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      },
      {
        name: 'aaa',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      },
      {
        name: 'aaa',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      },
      {
        name: 'aaa',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      },
      {
        name: 'aaa',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      },
      {
        name: 'aaa',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      },
      {
        name: 'aaa',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      },
      {
        name: 'aaa',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      }
    ]
  };

  const fRowClick = (a: any, b: any, c: any, d: any) => {
    alert('row click');
    console.log(a, b);
    b.stopPropagation();
  };
</script>
