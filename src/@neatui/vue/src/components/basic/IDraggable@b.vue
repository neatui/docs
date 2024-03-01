<template>
  <ul ref="aaa">
    <li
      v-for="(item, idx) in list || []"
      :key="idx"
      style="user-select: none"
      class="drag-move-item b-solid b-line b-xs n-sm"
      :data-move-ing="state.__moveing"
      @mousedown="fMoveSta($event, list, idx)"
      @mousemove="fMoveIng($event, list, idx)"
      @mouseup="fMoveEnd($event, list, idx)"
      @mouseleave="fMoveOut($event, list, idx)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { reactive, ref, PropType } from 'vue';
  const props = defineProps({
    list: {
      type: Array as PropType<any[]>,
      default: () => []
    }
  });
  const state: any = reactive({
    __moveing: 0,
    __x: 0,
    __y: 0
  });

  const aaa: any = ref(null);

  // class Drag {
  //   constructor(el: any) {}
  // }

  // 按下
  const fMoveSta = (e: any, arr: any, idx: any) => {
    console.log('sta', e, idx);
    state.__moveing = 1;
    state.__x = e.clientX;
    state.__y = e.clientY;
    state.__e = e.target;
    // state.__e.style.pointerEvents = 'none';
  };
  // 移动
  const fMoveIng = (e: any, arr: any, idx: any) => {
    if (state.__moveing) {
      // const deltaX = e.clientX - state.__x;
      // const deltaY = e.clientY - state.__y;
      // state.__e.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      if (e.target !== state.__e) {
        const _h = e?.target?.getBoundingClientRect()?.height || 0;
        const _v = _h / 2 > 0 ? _h / 2 : 0;
        state.__moveEndNodeIsNext = e?.layerY > _v ? 1 : 0;
        e?.target?.setAttribute('data-ins', e?.layerY > _v ? 'next' : 'prev');
      }
    }
  };
  const fMoveEnd = (e: any, arr: any, i2: any) => {
    if (state.__moveing) {
      e?.target?.removeAttribute('data-ins');
    }
    state.__moveing = 0;
  };
  const fMoveOut = (e: any, arr: any, idx: any) => {
    e?.target?.removeAttribute('data-ins');
  };
</script>
<style lang="scss">
  .drag-move-item {
    position: relative;
    transition: all 250ms;
    &[data-move-ing~='1'] {
      transition: all 50ms;
    }
  }
</style>
