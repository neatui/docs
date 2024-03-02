<template>
  <div ref="dom"></div>
</template>
<script setup lang="ts">
  import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
  import ResizeObserver from 'resize-observer-polyfill';
  import * as echarts from 'echarts';

  // 类型
  interface Props {
    option?: object;
  }

  // 入参
  const props: any = withDefaults(defineProps<Props>(), {
    option: () => ({})
  });

  const dom: any = ref(null);
  let obs: any = null;
  let ex: any = null;
  let timer: any = null;

  // 重绘
  const redraw = () => {
    if (ex) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        ex?.resize();
      }, 3);
    }
  };

  watch(
    () => props.option,
    () => {
      if (ex) {
        ex?.setOption(props.option);
      }
    },
    { deep: true }
  );

  onMounted(() => {
    if (dom.value) {
      ex = echarts.init(dom.value);
      ex?.setOption(props.option);

      // 监听参考元素变化
      obs = new ResizeObserver(redraw);
      obs?.observe(dom.value);
    }
  });

  onBeforeUnmount(() => {
    // 清除监听参考元素变化;
    obs?.disconnect();
  });
</script>
