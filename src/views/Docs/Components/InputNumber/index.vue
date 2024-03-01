<template>
  <h1>{{ words['components.inputNumber'] || 'InputNumber' }}</h1>
  <div class="w-ls">
    <p>value: {{ value }}</p>
    <InputNumber v-model="value" :step="0.1" :precision="0"> </InputNumber>
    <button @click="test">点击验证表单</button>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import InputNumber from './InputNumber.vue';

  const value: any = ref();
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
  const showVerify = ref(false);

  const test = () => {
    showVerify.value = true;
  };

  watch(
    () => value.value,
    () => {
      // console.log(value.value, 5);
    }
  );
</script>
