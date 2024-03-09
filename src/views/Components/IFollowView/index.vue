<template>
  <DocView>
    <div>
      <h1>{{ words['components.followView'] || 'IFollowView' }}</h1>
      <p>下拉组件，为Selectt等需要下拉显示的组件提供基础支持。</p>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space mob-24 dpc-12">
        <li>
          <CodeView file="/components/Input/Input.md">
            <h5>基础用法</h5>
            <div class="max-w-ls">
              <IFollowView>
                <div ui-btn="@a s read :border">点击下拉 <span class="icon icon-dropdown"></span></div>
                <template #tips>
                  <div class="n-sl w-ml">
                    <h5 class="mb-sm">这是下拉内容</h5>
                    <p>多为下拉框Selectt等组件提供基础支持。</p>
                  </div>
                </template>
              </IFollowView>
            </div>
          </CodeView>
        </li>
      </ul>
    </div>
    <div>
      <h2>API</h2>
      <div>
        <h3>IFollowView</h3>
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
            <tr>
              <td><code>placeholder</code></td>
              <td>222</td>
              <td>string</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>rules</code></td>
              <td>222</td>
              <td>Array</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>theme</code></td>
              <td>222</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>sz</code></td>
              <td>222</td>
              <td>'' | 'xs' | 's' | 'm' | 'l' | 'xl'</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>co</code></td>
              <td>222</td>
              <td>string</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>block</code></td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>ready</code></td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>type</code></td>
              <td>222</td>
              <td>string</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>tips</code></td>
              <td>222</td>
              <td>string</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>maxlength</code></td>
              <td>222</td>
              <td>null | number</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>minlength</code></td>
              <td>222</td>
              <td>null | number</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>readonly</code></td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>clearable</code></td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>verify</code></td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>prefix</code></td>
              <td>222</td>
              <td>Array</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>suffix</code></td>
              <td>222</td>
              <td>Array</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>interacted</code></td>
              <td>222</td>
              <td>boolean</td>
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
  import { IFollowView } from '@neatui/vue';
  import { DocView, CodeView } from '@/components';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
