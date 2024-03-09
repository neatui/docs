<template>
  <DocView>
    <div>
      <h1>{{ words['components.datePicker'] || 'DatePicker' }}</h1>
      <p>这是简介</p>
    </div>
    <div>
      <ul ui-row="space mob-24 dpc-12">
        <li>
          <CodeView file="/components/DateView/ex1.md">
            <p class="mb-sm">日期：{{ value1 }}</p>
            <DateView v-model="value1" :frame="true" format="YYYY-MM-DD HH:mm" :time="{ h: false, m: true }" />
          </CodeView>
        </li>
        <li>
          <CodeView file="">
            <p class="mb-sm">
              <code>value: </code><code>{{ value2 }}</code>
            </p>
            <DatePicker class="w-lm" v-model="value2" :placeholder="'请选择时间'" />
          </CodeView>
        </li>
        <li>
          <CodeView file="/components/DateView/ex1.md">
            <p class="mb-sm">日期范围：{{ value1 }}</p>
            <DateRangeView v-model="value3" :frame="true" :picker-range="{ y: 1 }" />
          </CodeView>
        </li>
        <li>
          <CodeView file="/components/DateView/ex1.md">
            <p class="mb-sm">日期范围：{{ value1 }}</p>
            <DateRangePicker class="w-lm" v-model="value4" :picker-range="{ y: 1 }" />
          </CodeView>
        </li>
      </ul>
    </div>
    <div>
      <h2>API</h2>
      <div>
        <h3>Attributes</h3>
        <table ui-table="@b" class="b-solid b-line b-xs r-sm">
          <thead>
            <tr class="fs-xs bold o-lm">
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
              <td>绑定值</td>
              <td><code>String</code></td>
              <td><code>''</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td>frame</td>
              <td>是否显示框架</td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>format</code></td>
              <td>数据格式化</td>
              <td><code>String</code></td>
              <td><code>'YYYY-MM-DD'</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td>modelValue</td>
              <td>222</td>
              <td>string | number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>222</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rules</td>
              <td>222</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>theme</td>
              <td>222</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>sz</td>
              <td>222</td>
              <td>'' | 'xs' | 's' | 'm' | 'l' | 'xl'</td>
              <td>-</td>
            </tr>
            <tr>
              <td>co</td>
              <td>222</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>block</td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>ready</td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>type</td>
              <td>222</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>tips</td>
              <td>222</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>maxlength</td>
              <td>222</td>
              <td>null | number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>minlength</td>
              <td>222</td>
              <td>null | number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>clearable</td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>verify</td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>prefix</td>
              <td>222</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>suffix</td>
              <td>222</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>interacted</td>
              <td>222</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocView>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { DocView, CodeView } from '@/components';
  import { DateView, DateRangeView, DatePicker, DateRangePicker } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  // 示例1
  const value1: any = ref(null);

  // 示例2
  const value2: any = ref('');

  // 示例3
  const value3: any = ref([]);

  // 示例4
  const value4: any = ref([]);
</script>
