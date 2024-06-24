# Use

## Style Configuration

### Configuring Theme Colors

Create a SCSS file

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

## Using Components

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
