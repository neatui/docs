<template>
  <div class="neatui-charts-view">
    <div :style="`padding-top: ${size * 100}%;`">
      <div ref="dom"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch, reactive, onMounted, onBeforeUnmount } from 'vue';
  import ResizeObserver from 'resize-observer-polyfill';
  import * as echarts from 'echarts';
  import { isArray, isObject, isString, deepcopy } from '@fekit/utils';
  import { useMyuiStore } from '@neatui/vue';

  // 框架数据
  const myui: any = useMyuiStore();

  // 类型
  interface Props {
    data?: object;
    size?: number;
  }

  // 入参
  const props: any = withDefaults(defineProps<Props>(), {
    data: () => ({}),
    size: 1
  });

  const dom: any = ref(null);
  let obs: any = null;
  let ex: any = null;
  let timer: any = null;

  const status: any = reactive({});

  // 设置颜色
  const color = (obj: any) => {
    if (isArray(obj)) {
      const _obj = obj.map((i: any) => {
        return color(i);
      });
      return _obj;
    } else if (isObject(obj)) {
      const _obj: any = {};
      for (const key in obj) {
        _obj[key] = color(obj[key]);
      }
      return _obj;
    } else {
      if (isString(obj)) {
        if (isArray(myui.themes)) {
          const _theme: any = myui.themes[myui.theme] || myui.themes[Object.keys(myui.themes)[0]] || {};
          if (_theme) {
            obj = obj?.replace(/^co\((\w*)\)$/, (res: any, co: any) => {
              return _theme[co] || '';
            });
          }
        }
      }
      return obj;
    }
  };

  // 重绘
  const redraw = () => {
    if (ex) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        ex?.resize();
      }, 3);
    }
  };

  // 设置
  const config = () => {
    if (ex) {
      const data = color(deepcopy(props.data));
      ex?.setOption(data);
    }
  };

  watch(
    [() => props.data, () => myui.theme],
    () => {
      config();
    },
    { deep: true }
  );

  onMounted(() => {
    if (dom.value) {
      ex = echarts.init(dom.value);
      config();

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
<style lang="scss">
  .neatui-charts-view {
    position: relative;
    & > * {
      width: 100%;
      box-sizing: content-box;
      height: 0;
      & > * {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
    }
  }
</style>
