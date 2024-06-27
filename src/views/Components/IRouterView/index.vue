<template>
  <DocView>
    <div>
      <h1>{{ words['components.IRouterView'] || 'IRouterView' }}</h1>
      <DocFileLoader file="/components/IRouterView/index.md"></DocFileLoader>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space mob-24">
        <li>
          <CodeView file="/components/IRouterView/Basic.md">
            <div class="nx-ms nt-ms">
              <div class="bg-fore r-sm n-ms" ui-flex="row lm">
                <span class="mr-sm">模式：</span>
                <form name="form1" class="mr-sl-sub">
                  <label ui-form="@a type:radio">
                    <input type="radio" name="form1" value="default" v-model="state.mode" />
                    <span>default</span>
                  </label>
                  <label ui-form="@a type:radio">
                    <input type="radio" name="form1" value="preview" v-model="state.mode" />
                    <span>preview</span>
                  </label>
                  <label ui-form="@a type:radio">
                    <input type="radio" name="form1" value="pop-up" v-model="state.mode" />
                    <span>pop-up</span>
                  </label>
                </form>
              </div>
            </div>
            <IRouterView :mode="state.mode" item-class="pr full n-ms">
              <template #list>
                <ListView />
              </template>
              <template #item>
                <ItemView v-if="state.mode === 'default'" />
                <SideView v-else />
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
        <table ui-table="@b" class="b-solid bk-line b-xs r-sm">
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
  import { reactive } from 'vue';
  import { IRouterView } from '@neatui/vue';
  import { DocView, DocFileLoader, CodeView } from '@/components';
  import { storeToRefs, useBaseStore } from '@/store';
  import ListView from './ListView.vue';
  import ItemView from './ItemView.vue';
  import SideView from './SideView.vue';

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const state: any = reactive({
    mode: 'default'
  });
</script>
