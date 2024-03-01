```vue
<template>
  <Input v-model="value" />
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { Input } from '@neatui/vue';
  // 值
  const value: any = ref();
</script>
```
