<template>
  <ul>
    <li
      v-for="(item, idx) in list || []"
      :key="idx"
      class="pr drag-page-move n-sm"
      draggable="true"
      @dragstart.self="fMoveSta($event, list, idx)"
      @dragend.self="fMoveEnd($event, list, idx)"
      @dragenter.self="fMoveInt($event, list, idx)"
      @dragover.prevent="fMoveIng($event)"
      @dragleave="fMoveOut($event)"
    >
      <slot :item="item" :idx="idx">{{ item.label }}</slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { reactive, PropType } from 'vue';
  const props = defineProps({
    list: {
      type: Array as PropType<any[]>,
      default: () => []
    }
  });
  const state: any = reactive({});

  // 按下
  const fMoveSta = (e: any, arr: any, idx: any) => {
    state.__page_moveing = 1;
    state.__page_moveStaNode = { e, arr, idx };
  };
  // 移动
  const fMoveIng = (e: any) => {
    if (state.__page_moveing) {
      const _h = e?.target?.getBoundingClientRect()?.height || 0;
      const _v = _h / 2 > 0 ? _h / 2 : 0;
      state.__page_moveEndNodeIsNext = e?.layerY > _v ? 1 : 0;
      console.log(40, e, _v, e?.layerY > _v ? 'next' : 'prev');
      e?.target?.setAttribute('data-ins', e?.layerY > _v ? 'next' : 'prev');
    }
  };
  // 移入
  const fMoveInt = (e: any, arr: any, idx: any, page: any = '') => {
    if (state.__page_moveing) {
      state.__page_moveEndNode = { e, arr, idx, page };
    }
  };
  // 移出
  const fMoveOut = (e: any) => {
    if (state.__page_moveing) {
      e?.target?.removeAttribute('data-ins');
    }
  };
  // 松开
  const fMoveEnd = (_e: any, arr: any, i2: any) => {
    if (state.__page_moveing) {
      if (state.__page_moveEndNode) {
        const [item] = arr.splice(i2, 1);
        let idx = state.__page_moveEndNode?.idx || 0;
        if (state.__page_moveEndNodeIsNext && i2 >= idx) {
          idx = idx + 1;
        }
        if (!state.__page_moveEndNodeIsNext && i2 < idx) {
          idx = idx - 1;
        }
        state.__page_moveEndNode?.arr?.splice(idx, 0, item);
        fMoveOut(state.__page_moveEndNode?.e);
      }
      state.__page_moveing = 0;
    }
  };
</script>
<style lang="scss">
  .drag-page-move {
    &[data-ins='prev'] {
      box-shadow: inset 0 1px 0 0 #000;
    }
    &[data-ins='next'] {
      box-shadow: inset 0 -1px 0 0 #000;
    }
  }
</style>
