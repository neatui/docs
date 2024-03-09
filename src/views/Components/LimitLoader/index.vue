<template>
  <DocView>
    <div>
      <h1>{{ words['components.LimitLoader'] || 'LimitLoader' }}</h1>
      <p>LimitLoader为所有管理端提供无代码自动生成筛选功能模块的解决方案</p>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space mob-24">
        <li>
          <CodeView file="/components/LimitLoader/ex1.md">
            <h5>基础用法</h5>
            <div class="n-ms r-sm b-solid b-line b-xs">
              <LimitLoader :limit="limit" :param="param" />
            </div>
          </CodeView>
        </li>
      </ul>
    </div>
    <div>
      <h2>API</h2>
      <ul class="mb-mm-sub">
        <li>
          <h3>组件入参</h3>
          <table ui-table="@b" class="b-solid b-line b-xs r-sm">
            <thead>
              <tr>
                <td>参数</td>
                <td>说明</td>
                <td>类型</td>
                <td>必填</td>
                <td>默认值/可选值</td>
                <td>版本</td>
                <td>备注</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>words</code></td>
                <td>多语言包</td>
                <td><code>object</code></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td><code>limit</code></td>
                <td>结构配置</td>
                <td><code>object</code></td>
                <td><i class="icon icon-selected fs-ss co-well"></i></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td><code>param</code></td>
                <td>数据</td>
                <td><code>object</code></td>
                <td><i class="icon icon-selected fs-ss co-well"></i></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>
          <h3>limit</h3>
          <table ui-table="@b" class="b-solid b-line b-xs r-sm">
            <thead>
              <tr>
                <td>参数</td>
                <td>说明</td>
                <td>类型</td>
                <td>必填</td>
                <td>默认值/可选值</td>
                <td>版本</td>
                <td>备注</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>label</code></td>
                <td>多语言包</td>
                <td><code>string</code></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td><code>field</code></td>
                <td>字段名</td>
                <td><code>string</code></td>
                <td><i class="icon icon-selected fs-ss co-well"></i></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td><code>attrs</code></td>
                <td>属性</td>
                <td><code>object</code></td>
                <td><i class="icon icon-selected fs-ss co-well"></i></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td><code>model</code></td>
                <td>模型</td>
                <td><code>string | array</code></td>
                <td>-</td>
                <td>
                  <code>Input(默认值) | Select | Cascader</code>
                </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td><code>enums</code></td>
                <td>数据</td>
                <td><code>array</code></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr class="co-risk">
                <td><code>view</code> <span>(已废弃)</span></td>
                <td>显示字段</td>
                <td><code>boolean</code></td>
                <td>-</td>
                <td>-</td>
                <td><code>&lt; V1.3.26</code></td>
                <td>-</td>
              </tr>
              <tr>
                <td><code>close</code></td>
                <td>关闭字段</td>
                <td><code>boolean</code></td>
                <td>-</td>
                <td>-</td>
                <td><code>&gt; V1.3.26</code></td>
                <td>-</td>
              </tr>
              <tr>
                <td><code>clear</code></td>
                <td>清除字段</td>
                <td><code>boolean</code></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </div>
  </DocView>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { LimitLoader } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  import { DocView, CodeView } from '@/components';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const param: any = ref({});
  const limit: any = ref([
    {
      label: '名字',
      field: 'name',
      model: 'Input'
    },
    {
      label: '手机号',
      field: 'phone',
      model: 'Input'
    },
    {
      label: '时间',
      field: 'time',
      model: ['DateRangePicker', { class: 'w-ls' }]
    },
    {
      label: '学历',
      field: 'edu',
      enums: [
        { label: '小学', value: '1' },
        { label: '中学', value: '2' },
        { label: '大学', value: '3' }
      ],
      model: 'Select'
    },
    {
      label: '求职',
      field: 'work',
      enums: [
        { label: '月嫂', value: '1' },
        { label: '保洁', value: '2' },
        { label: '护工', value: '3' }
      ],
      model: 'MoreSelect'
    }
  ]);
</script>
