<template>
  <div :ui-cover="opts" class="cover r-sm">
    <div ui-flex="col cm" class="o-mm"><i ui-load="@d"></i></div>

    <slot></slot>
  </div>
</template>
<script setup lang="ts">
  const props: any = defineProps({
    opts: {
      type: String,
      default: '16:9'
    }
  });
</script>
