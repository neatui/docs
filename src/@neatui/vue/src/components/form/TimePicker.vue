<template>
  <div></div>
</template>

<script setup lang="ts">
  interface Props {
    props?: any;
  }

  const props = withDefaults(defineProps<Props>(), {});
</script>
