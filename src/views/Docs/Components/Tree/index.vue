<template>
  <DocView>
    <div>
      <h1>{{ words['components.tree'] || 'Tree' }}</h1>
      <p>多层次的结构列表。</p>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space mob-24 dpc-12">
        <li>
          <CodeView file="/docs/components/Tree/ex1.md">
            <h5>基础用法</h5>
            <div class="w-ls">
              <Tree
                v-model="state.checkedKeys"
                :autoExpandSelected="false"
                :block="true"
                :checkStrictly="true"
                :defaultExpandAll="true"
                :interacted="true"
                :multiple="true"
                :options="state.options"
                :rules="[
                  {
                    msg: '这是必填项',
                    type: 'risk',
                    required: true
                  },
                  {
                    msg: 'xxx',
                    type: 'risk',
                    validator: (data: any) => {
                      // console.log(25,data[0])
                      return data[0] !== '111';
                    }
                  }
                ]"
                :treeData="state.treeData"
                @select="select"
              >
                <template #tools="{ data = {} }: any = {}">
                  <div class="parent-hover:show" @click="del(data.key)"><i class="icon icon-delete"></i></div>
                </template>
                <template #suffix="{ data = {} }: any = {}">
                  <div>{{ 'xxxx' + data.key }}</div>
                </template>
              </Tree>
            </div>
          </CodeView>
        </li>
      </ul>
    </div>
  </DocView>
</template>
<script lang="ts" setup>
  import { reactive, watch } from 'vue';
  import { Tree } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  import { DocView, CodeView } from '@/components';

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const state = reactive({
    checkedKeys: ['111', '112'] as Array<string | number>,
    options: {
      label: 'name',
      id: 'key',
      children: 'childrenPremission'
    },

    treeData: [] as any
  });

  const del = (key: any) => {
    console.log(key);
  };

  setTimeout(() => {
    // state.checkedKeys = ['112'];
    state.treeData = [
      {
        key: '1',
        name: 'Node 1',
        // attrs: { style: { color: 'blue' } },
        // prefix: [{ value: 'prefix', attrs: { style: { color: 'blue' } } }],
        // suffix: [
        //   {
        //     value: () => 'suffix'
        //   }
        // ],
        childrenPremission: [
          {
            key: '11',
            name: 'Node 1.1',
            childrenPremission: [
              {
                key: '111',
                name: 'Node 1.1.1',
                childrenPremission: []
              },
              {
                key: '112',
                name: 'Node 1.1.2',
                childrenPremission: []
              }
            ]
          },
          {
            key: '12',
            name: 'Node 1.2',
            childrenPremission: [
              {
                key: '121',
                name: 'Node 1.2.1',
                childrenPremission: []
              },
              {
                key: '122',
                name: 'Node 1.2.2',
                childrenPremission: []
              }
            ]
          }
        ]
      },
      {
        key: '2',
        name: 'Node 2',
        childrenPremission: []
      }
    ];
  }, 50);
  const select = (e: any) => {
    console.log(e);
  };

  watch(
    () => state.checkedKeys,
    () => {
      console.log(state.checkedKeys, '外部数据变动');
    }
  );
</script>
