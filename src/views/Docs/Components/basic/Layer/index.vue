<template>
  <DocView>
    <div>
      <h1>{{ words['components.layer'] || 'Layer' }}</h1>
      <!-- <p class="co-main">弹层组件, 这是一个弹层组件。</p> -->
      <p class="co-text">弹层组件, 这是一个弹层组件。</p>
      <p class="co-read">弹层组件, 这是一个弹层组件。</p>
      <p class="co-desc">弹层组件, 这是一个弹层组件。</p>
      <p class="co-note">弹层组件, 这是一个弹层组件。</p>
      <p class="co-idle">弹层组件, 这是一个弹层组件。</p>
      <p class="co-case">弹层组件, 这是一个弹层组件。</p>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space mob-24 dpc-12">
        <li>
          <CodeView file="/docs/components/Input/Input.md">
            <h5>基础用法</h5>
            <div class="max-w-ls">
              <button ui-btn="@a main" @click="fShowLayer">点击弹出图层</button>
            </div>
          </CodeView>
        </li>
      </ul>
    </div>
    <!-- <div>
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
    </div> -->
  </DocView>
  <Layer id="ex1"><div class="bg-fore w-xl h-mm r-sm n-ms">这是弹层内容</div></Layer>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { Layer, LayerById, Input, InputRange } from '@neatui/vue';
  import { DocView, CodeView } from '@/components';
  import { validatePhoneNumber } from '@fekit/utils';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  // 示例1
  const value1: any = ref('');

  // 示例2
  const value2: any = ref('');

  // 示例3
  const value3: any = ref('');
  const rules3: any = [
    {
      msg: '这是必填项',
      type: 'risk',
      required: true
    },
    {
      msg: '请输入正确的手机号',
      type: 'risk',
      validator: validatePhoneNumber
    },
    {
      msg: '手机号需要186开头',
      type: 'risk',
      validator: (res: any) => {
        return res.startsWith('186');
      }
    }
  ];

  // 示例4
  const value4: any = ref([]);

  const fShowLayer = () => {
    LayerById('ex1')
      .init({
        on: {
          show() {
            alert('图层已显示');
          },
          hide() {
            alert('图层已隐藏');
          }
        }
      })
      .show();
  };
</script>
