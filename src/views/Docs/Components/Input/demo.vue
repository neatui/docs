<template>
  <div class="full" ui-flex="col cm">
    <Input v-model="value" :rules="rules" :instantVerify="true" :showVerify="showVerify"> </Input>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { Input } from '@neatui/vue';

  const value: any = ref();
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const showVerify = ref(false);
  const rules: any = [
    {
      msg: '提示信息',
      required: true,
      type: 'risk',
      validator: (value: any) => {
        return value === 2;
      }
    }
  ];

  const test = () => {
    showVerify.value = true;
  };

  watch(
    () => value.value,
    () => {
      console.log(value.value, 5);
    }
  );
</script>
