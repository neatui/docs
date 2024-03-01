<template>
  <div ui-card="@a">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';

  const props = defineProps({
    once: {
      type: Number,
      default: 0
    }
  });

  const route = useRoute();
  const init = ref(0);
  const view = ref('');
  const anim = (e: any) => {
    if (e.animationName === 'am-hide') {
      view.value = route.query.id ? 'item' : 'list';
    }
  };

  const a = () => {
    if (init.value) {
      if (!props.once) {
        view.value = route.query.id ? 'iteming' : 'listing';
      }
    } else {
      view.value = route.query.id ? 'item' : 'list';
      init.value = 1;
    }
  };

  watch(() => route.query, a);
  a();
</script>

<style lang="scss">
  @keyframes am-show {
    0% {
      opacity: 0;
      transform: translate3d(2em, 0, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes am-hide {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(2em, 0, 0);
    }
  }

  [am-view] {
    overflow: hidden;
    [am-view-item] {
      display: none;

      &[am-view-item~='row'] {
        flex-direction: row !important;
      }
    }
    &[am-view='list'] {
      [am-view-item~='list'] {
        flex-direction: column;
        display: flex;
        animation: am-show 0.5s ease both;
      }
    }
    &[am-view='listing'] {
      [am-view-item~='item'] {
        flex-direction: column;
        display: flex;
        animation: am-hide 0.3s ease-in-out both;
      }
    }
    &[am-view='item'] {
      [am-view-item~='item'] {
        display: flex;
        animation: am-show 0.5s ease both;
      }
    }
    &[am-view='iteming'] {
      [am-view-item~='list'] {
        display: flex;
        animation: am-hide 0.3s ease-in-out both;
      }
    }
  }
</style>
