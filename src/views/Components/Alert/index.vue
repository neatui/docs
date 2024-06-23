<template>
  <DocView>
    <div>
      <h1>{{ words['components.alert'] || 'Alert' }}</h1>
      <p>Displays important alert messages.</p>
    </div>
    <div>
      <h2>{{ words['docs.example'] || 'Example' }}</h2>
      <ul ui-row="space mob-24 dpc-12">
        <li>
          <CodeView :title="words['docs.basic'] || 'Basic'" file="/components/Alert/Basic.md">
            <div class="n-ms">
              <div class="" ui-note="@a">默认提示</div>
              <br />
              <div class="" ui-note="@a well">成功提示</div>
              <br />
              <div class="" ui-note="@a warn">警告提示</div>
              <br />
              <div class="" ui-note="@a risk">错误提示</div>
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
  import { DocView, CodeView } from '@/components';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
