<template>
  <div class="bg-fore r-sm n-lm mob:n-mm mb-lm-sub">
    <div>
      <h1>{{ words['components.cascader'] || 'Cascader' }}</h1>
      <p>输入或选择时间的控件。</p>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space mob-24 dpc-12">
        <li>
          <CodeView file="/components/Input/Input.md">
            <h5>基础用法</h5>
            <div class="max-w-ls">
              <Cascader class="w-ll" v-model="multipleData" :options="options" :multiple="true" />
            </div>
          </CodeView>
        </li>
      </ul>
    </div>
    <div>
      <h2>API</h2>
      <div>
        <h3>TimePicker</h3>
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
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { Cascader } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  import { CodeView } from '@/components';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const singleData = ref('');
  const multipleData = ref([]);

  const options = ref([
    {
      value: 'zhejiang',
      label: '中国浙江省',
      children: [
        {
          value: 'hangzhou',
          label: '杭州市',
          children: [
            {
              value: '1111',
              label: '西湖区',
              children: [
                {
                  value: '1111',
                  label: '这是底层这是底层'
                }
              ]
            },
            {
              value: 'lyinsi',
              label: '灵隐寺'
            }
          ]
        }
      ]
    },
    {
      value: 'jiangsu',
      label: '江苏',
      children: [
        {
          value: 'nanjing',
          label: '南京',
          children: [
            {
              value: 'zhonghuamen',
              label: '中华门'
            },
            {
              value: 'zshanling',
              label: '中山陵'
            }
          ]
        }
      ]
    }
  ]);

  setTimeout(() => {
    singleData.value = 'lyinsi';
    // multipleData.value = ['lyinsi', '1111'];
    console.log(222);
  }, 2000);

  watch(
    () => singleData,
    () => {
      console.log(singleData.value, '外部数据变化');
    },
    { deep: true }
  );
  watch(
    () => multipleData,
    () => {
      console.log(multipleData.value);
    },
    { deep: true }
  );
</script>
