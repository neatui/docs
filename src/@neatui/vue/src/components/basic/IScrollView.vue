<template>
  <div class="full fekit-ipull-scroll" ui-scroll=":y" ref="root">
    <div>
      <div class="fs-xs co-text o-mm" fekit-pullload-head="" v-if="pull">
        <div v-show="demo.store.pull < 2" ui-flex="row cm">
          <i class="pulldown icon icon-pulldown" :class="`${demo.store.pull === 1 ? 'toup' : ''}`"></i>
          <span v-show="demo.store.pull === 0">下拉刷新</span>
          <span v-show="demo.store.pull === 1">松开加载</span>
        </div>
        <div v-show="demo.store.pull === 2" ui-flex="row cm">
          <span ui-load="@d"></span>
          <!-- <span>正在刷新</span> -->
        </div>
        <div v-show="demo.store.pull === 3" ui-flex="row cm">
          <span>刷新完成</span>
        </div>
      </div>
      <slot></slot>
      <div class="fs-xs co-text o-mm mb-sm" fekit-pullload-foot="" v-if="load">
        <transition name="fekit-pullload-fade" mode="out-in">
          <div v-if="demo.store.load === 2" ui-flex="row cm">
            <span ui-load="@d"></span>
            <!-- <span>正在加载</span> -->
          </div>
          <div v-else-if="demo.store.load === 3">没有更多了</div>
          <div v-else>&nbsp;</div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  import PullLoad, { Easing } from '@fekit/pullload';
  const emits = defineEmits(['onpull', 'onload']);
  const props: any = defineProps({
    pull: {
      type: Boolean,
      default: false
    },
    load: {
      type: Boolean,
      default: false
    }
  });
  const root: any = ref(null);
  const demo: any = ref(null);
  demo.value = new PullLoad({
    easing: Easing.easeOut,
    friction: 0.3,
    triggerDistance: 60,
    loadingDistance: 50,
    ...(props.pull
      ? {
          onpull: async () => {
            emits('onpull', demo.value);
          }
        }
      : {}),
    ...(props.pull
      ? {
          onload: async () => {
            emits('onload', demo.value);
          }
        }
      : {})
  });

  onMounted(() => {
    if (root.value) {
      demo.value?.listen(root.value);
      if (props.pull) {
        demo.value?.ispull();
      }
    }
  });
  onBeforeUnmount(() => {
    demo.value?.remove();
  });

  const pullload = () => {
    demo.value?.ispull();
  };

  defineExpose({ pullload, ex: () => demo.value });
</script>

<style lang="scss">
  .fekit-ipull-scroll {
    [fekit-pullload-head],
    [fekit-pullload-foot] {
      position: absolute;
      width: 100%;
      height: 2em;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
    [fekit-pullload-head] {
      bottom: 100%;
      margin-bottom: 1em;
    }
    [fekit-pullload-foot] {
      position: relative;
      top: 100%;
    }

    .fekit-pullload-fade-enter-active,
    .fekit-pullload-fade-leave-active {
      transition: opacity 0.2s;
    }
    .fekit-pullload-fade-enter,
    .fekit-pullload-fade-leave-to {
      opacity: 0;
    }

    .pulldown {
      transition: all 0.3s;
      display: inline-block;
      &.toup {
        transform: rotate(180deg);
      }
    }
  }
</style>
