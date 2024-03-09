<template>
  <DocView>
    <div>
      <h1>{{ words['components.IRouterView'] || 'IRouterView' }}</h1>
      <p>路由组件</p>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space mob-24">
        <li>
          <CodeView file="/components/Input/Input.md">
            <h5>基础用法</h5>
            <IRouterView mode="preview" item-class="full n-ms">
              <template #list>
                <ListView />
              </template>
              <template #item>
                <ItemView />
              </template>
            </IRouterView>
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
  import { IRouterView } from '@/@neatui/vue';
  import { DocView, CodeView } from '@/components';
  import { storeToRefs, useBaseStore } from '@/store';
  import ListView from './ListView.vue';
  import ItemView from './ItemView.vue';

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
