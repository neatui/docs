<template>
  <div ref="dom" :class="btnClass" :style="btnStyle" @click="toggle" @mouseover="show" @mouseout="hide">
    <slot>
      <button ui-btn="@a s case :border"><i class="icon icon-dropdown"></i></button>
    </slot>
  </div>
  <Teleport to="#ifollow" v-if="$slots.tips">
    <div
      ref="tip"
      :class="tipClass"
      :style="`position: fixed; pointer-events: none; ${tipStyle}`"
      ui-tips="@a"
      :ui-tips-view="state.show ? 1 : 0"
      @mouseover="show"
      @mouseout="hide"
    >
      <div ref="box" :ui-tips-box="state.pos" :class="tipBoxClass" :style="tipBoxStyle">
        <slot name="tips"></slot>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
  import { reactive, ref, onMounted, onUnmounted, watch } from 'vue';
  import Follow from '@fekit/follow';

  const area: any = document.querySelector('#ifollow');
  if (!area) {
    const el = document.createElement('div');
    el.id = 'ifollow';
    document.body.appendChild(el);
  }

  const props = defineProps({
    pos: { type: String, default: 'bl' },
    event: { type: String, default: 'click' },
    btnClass: { type: String, default: 'dib' },
    btnStyle: { type: String, default: 'dib' },
    tipClass: { type: String, default: '' },
    tipStyle: { type: String, default: '' },
    tipBoxClass: { type: String, default: '' },
    tipBoxStyle: { type: String, default: '' }
  });

  const dom: any = ref(null);
  const tip: any = ref(null);
  const box: any = ref(null);
  const state = reactive({
    view: 0,
    show: 0,
    pos: props.pos,
    hover: 0
  });

  const showTimer: any = ref(null);
  const hideTimer: any = ref(null);
  watch(
    () => state.hover,
    () => {
      clearTimeout(showTimer.value);
      clearTimeout(hideTimer.value);
      if (state.hover) {
        showTimer.value = setTimeout(() => {
          state.show = 1;
        }, 100);
      } else {
        hideTimer.value = setTimeout(() => {
          state.show = 0;
        }, 100);
      }
    }
  );

  // 开关
  const toggle = () => {
    if (props.event === 'click') {
      state.show = state.show ? 0 : 1;
    }
  };

  const show = () => {
    if (props.event === 'hover') {
      state.hover = 1;
    }
  };

  const hide = () => {
    if (props.event === 'hover') {
      state.hover = 0;
    }
  };
  // 取消
  const cancel = ({ target }: any = {}) => {
    if (tip.value && !tip.value?.contains(target) && dom.value && !dom.value.contains(target)) {
      state.show = 0;
    }
  };

  onMounted(() => {
    document.addEventListener('click', cancel, true);
  });

  const ex: any = ref(null);
  watch([() => dom.value, () => tip.value], () => {
    if (dom.value && tip.value) {
      ex.value = new Follow(dom.value, tip.value, (status) => {
        if (status === 'b') {
          const _pos = props.pos.replace(/b/g, 't');
          state.pos = _pos;
        } else {
          const _pos = props.pos.replace(/t/g, 'b');
          state.pos = _pos;
        }
      });
    } else {
      ex.value = null;
    }
  });

  onUnmounted(() => {
    document.removeEventListener('click', cancel, true);
    state.show = 0;
    if (ex.value) {
      ex.value.remove();
    }
  });

  watch(
    () => state.show,
    (show: any) => {
      if (ex.value) {
        if (show) {
          ex.value.listen();
        } else {
          ex.value.remove();
        }
      }
    }
  );

  defineExpose({
    toggle,
    show,
    hide,
    cancel
  });
</script>
