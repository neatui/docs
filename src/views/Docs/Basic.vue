<template>
  <DocFileLoader :file="`/docs/Basic.md`" />
  <ul class="viewbar fs-ss flex-fixed n-ss-sub" ui-flex="row lm :wrap">
    <li :class="state.flex === 'row' ? 'co-main' : ''" ui-btn="@a none :square" @click="state.flex = 'row'"><code>row</code></li>
    <li :class="state.flex === 'col' ? 'co-main' : ''" ui-btn="@a none :square" @click="state.flex = 'col'"><code>col</code></li>
    <li>|</li>
    <li :class="state.x === 'l' ? 'co-main' : ''" ui-btn="@a none :square" @click="state.x = 'l'"><code>l</code></li>
    <li :class="state.x === 'c' ? 'co-main' : ''" ui-btn="@a none :square" @click="state.x = 'c'"><code>c</code></li>
    <li :class="state.x === 'r' ? 'co-main' : ''" ui-btn="@a none :square" @click="state.x = 'r'"><code>r</code></li>
    <li :class="state.x === 'a' ? 'co-main' : ''" ui-btn="@a none :square" @click="state.x = 'a'"><code>a</code></li>
    <li :class="state.x === 'x' ? 'co-main' : ''" ui-btn="@a none :square" @click="state.x = 'x'"><code>x</code></li>
    <li>|</li>
    <li :class="state.y === 't' ? 'co-main' : ''" ui-btn="@a none :square" @click="state.y = 't'"><code>t</code></li>
    <li :class="state.y === 'm' ? 'co-main' : ''" ui-btn="@a none :square" @click="state.y = 'm'"><code>m</code></li>
    <li :class="state.y === 'b' ? 'co-main' : ''" ui-btn="@a none :square" @click="state.y = 'b'"><code>b</code></li>
    <li :class="state.y === 'd' ? 'co-main' : ''" ui-btn="@a none :square" @click="state.y = 'd'"><code>d</code></li>
    <li :class="state.y === 'y' ? 'co-main' : ''" ui-btn="@a none :square" @click="state.y = 'y'"><code>y</code></li>
  </ul>
  <ul :ui-flex="`${state.flex} ${state.x}${state.y}`" style="height: 200px; border: 1px solid rgba(0, 0, 0, 0.3)">
    <li style="border: 1px solid rgba(0, 0, 0, 0.3); padding: 0 10px">1</li>
    <li style="border: 1px solid rgba(0, 0, 0, 0.3); padding: 0 10px">2</li>
    <li style="border: 1px solid rgba(0, 0, 0, 0.3); padding: 0 10px">3</li>
  </ul>
</template>
<script setup lang="ts">
  import { reactive } from 'vue';
  import { DocFileLoader } from '@/components';
  import { useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const state: any = reactive({
    flex: '',
    x: '',
    y: ''
  });
</script>
