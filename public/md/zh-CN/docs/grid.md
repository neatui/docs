# Title

这是介绍文案

## 示例

### Basic

```vue
<template>
  <div>这是一个VUE组件 {{ route.path }}</div>
</template>
<script setup lang="ts">
  import { useRoute } from 'vue-router';

  const route: any = useRoute();
</script>
```
