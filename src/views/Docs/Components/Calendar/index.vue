<template>
  <DocView>
    <div>
      <h1>{{ words['components.calendar'] || 'Calendar' }}</h1>
      <p>按照日历形式展示数据的容器</p>
    </div>
    <div>
      <h2>示例代码</h2>
      <ul ui-row="space mob-24 dpc-12">
        <li>
          <CodeView file="/docs/components/Input/Input.md">
            <h5>基础用法</h5>
            <div class="w-xl">
              <Calendar :frame="true" />
            </div>
          </CodeView>
        </li>
      </ul>
    </div>
  </DocView>
</template>
<script setup lang="ts">
  import { Calendar } from '@neatui/vue';
  import { DocView, CodeView } from '@/components';

  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
