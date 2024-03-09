<template>
  <DocView>
    <div>
      <h1>{{ words['components.input'] || 'Input' }}</h1>
      <p>通过鼠标或键盘输入字符</p>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space mob-24 dpc-12">
        <li>
          <CodeView file="/components/Input/Input.md">
            <h5>基础用法</h5>
            <div class="max-w-ls">
              <Input v-model="value1"> </Input>
            </div>
          </CodeView>
        </li>
        <li>
          <CodeView file="/components/Input/Input.md">
            <h5>数字类型</h5>
            <div class="max-w-ls">
              <Input v-model="value2" type="number"> </Input>
            </div>
          </CodeView>
        </li>
        <li>
          <CodeView file="/components/Input/Input-2.md">
            <h5>添加校验规则</h5>
            <div class="max-w-ls">
              <Input v-model="value3" :rules="rules3" :verify="true"> </Input>
            </div>
          </CodeView>
        </li>
        <li>
          <CodeView file="/components/Input/Input-2.md">
            <h5>多值输入</h5>
            <div class="max-w-ls">
              <InputRange v-model="value4"> </InputRange>
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
  import { ref, watch } from 'vue';
  import { Input, InputRange } from '@neatui/vue';
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
</script>
