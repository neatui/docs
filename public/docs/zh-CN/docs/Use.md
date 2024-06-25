# 使用

## 样式配置

如前文介绍所述，我们的UI框架样式是基于 `@neatui/css` 的。组件本身只有极少有样式，大部份是基于 `@neatui/css` 原子样式库。所以我们使用 `@neatui` 的第一步是引用样式库。

### 配置主题色

创建一个 `scss`

```scss
$theme: (
  'light': (
    main: #18a058,
    vice: #41b856,
    text: #222222,
    fore: #ffffff,
    back: #f5f5f5,
    link: #d07950,
    code: #e23861,
    well: #4bbc73,
    warn: #f59023,
    risk: #f95850
  ),
  'dark': (
    main: #18a058,
    vice: #41b856,
    text: #ffffff,
    fore: #222222,
    back: #171717,
    link: #dd7f49,
    code: #e23861,
    well: #4bbc73,
    warn: #f59023,
    risk: #f95850
  )
);

@import '@neatui/css';
```

## 使用组件

```vue
<template>
  <Input v-model="value" />
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { Input } from '@neatui/vue';
  const value: any = ref('');
</script>
```
