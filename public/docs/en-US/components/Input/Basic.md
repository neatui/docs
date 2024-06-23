# Basic

```vue
<template>
  <Input v-model="value" />
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { Input } from '@neatui/vue';
  const value: any = ref();
</script>
```
