<template>
  <div ref="dom" :class="btnClass" :style="btnStyle" class="fekit-picker-button" data-aaa="111" @click="toggle">
    <slot></slot>
  </div>
  <Teleport to="#fekit">
    <div v-if="state.view" :view="state.view" am-view="am" class="fekit-picker">
      <div :ui-flex="`col cb`" class="fekit-picker-wrap" @animationend="anim" @click="_sys_hide">
        <div class="picker bg-fore picker-virtual-key">
          <slot name="options"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
  import { reactive, ref, onMounted } from 'vue';

  // 回调合集
  const on: any = {
    show() {},
    hide() {},
    open() {},
    none() {}
  };

  const area: any = document.querySelector('#fekit');
  if (!area) {
    const el = document.createElement('div');
    el.id = 'fekit';
    el.style.position = 'absolute';
    document.body.appendChild(el);
  }
  const emits = defineEmits(['update:modelValue', 'show', 'hide']);
  const props = defineProps({
    btnClass: { type: String, default: 'dib' },
    btnStyle: { type: String, default: 'dib' }
  });

  const dom: any = ref(null);
  const tip: any = ref(null);
  const state = reactive({
    view: 0,
    show: 0
  });

  // 开关
  const toggle = () => {
    state.view = state.view ? 0 : 2;
  };

  // 显示弹层
  const show = (then = () => {}) => {
    state.view = 2;
    on.show = then;
  };

  // 隐藏弹层
  const hide = (then = () => {}) => {
    if (state.view === 3) {
      state.view = 1;
      on.hide = then;
    }
  };

  // 监听动画
  const anim = () => {
    if (state.view === 1) {
      state.view = 0;
      on.hide();
      emits('hide');
    }
    if (state.view === 2) {
      state.view = 3;
      on.show();
      emits('show');
    }
  };

  // 取消
  const cancel = ({ target }: any = {}) => {
    if (tip.value && !tip.value?.contains(target) && dom.value && !dom.value.contains(target)) {
      state.show = 0;
    }
  };

  // 点暗层关闭
  const _sys_hide = (ev: any) => {
    if (ev.target.className === 'fekit-picker-wrap' && state.view === 3) {
      state.view = 1;
    }
  };

  onMounted(() => {
    document.addEventListener('click', cancel, true);
  });

  defineExpose({
    show,
    hide
  });
</script>

<style lang="scss">
  .fekit-picker-button {
    & > *,
    [ui-form-prefix],
    [ui-form-suffix] {
      pointer-events: none !important;
    }
  }

  .picker {
    width: 100%;
    max-height: 50%;
    border-radius: 0.5em 0.5em 0 0;
  }

  // 显示动画
  @keyframes am-show-am {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0) scale3d(1, 1, 1);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0%, 0) scale3d(1, 1, 1);
    }
  }

  // 隐藏动画
  @keyframes am-hide-am {
    0% {
      opacity: 1;
      transform: translate3d(0, 0%, 0) scale3d(1, 1, 1);
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 100%, 0) scale3d(1, 1, 1);
    }
  }

  // 引用显示
  %am-show-am {
    transform: translate3d(0, -150%, 0);
    opacity: 0;
    transform-style: preserve-3d;
  }

  // 引用隐藏
  %am-hide-am {
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    opacity: 0;
    transform-style: preserve-3d;
  }

  // 传参调用
  @mixin am-view-am($time: 450ms, $delay: 100ms) {
    &.show,
    &[view='2'] {
      & > * {
        @extend %am-show-am;
        animation: am-show-am $time $delay both;
      }
    }

    &.hide,
    &[view='1'] {
      opacity: 0;
      transition: ($time + $delay) * (4 * 0.1) ($time + $delay) * (6 * 0.1);
      pointer-events: none;

      & > * {
        @extend %am-hide-am;
        animation: am-hide-am $time $delay both;
      }
    }

    &.none,
    &[view='0'] {
      display: none;
    }
  }

  // 动画时间
  $time: 400ms;
  $delay: 100ms;

  // 全套引用
  [am-view='am'] {
    &.show,
    &[view='2'] {
      & > * {
        @extend %am-show-am;
        animation: am-show-am $time $delay both;
      }
    }

    &.hide,
    &[view='1'] {
      opacity: 0;
      transition: ($time + $delay) * 0.4 ($time + $delay) * 0.6;
      pointer-events: none;

      & > * {
        @extend %am-hide-am;
        animation: am-hide-am $time $delay ease-in-out both;
      }
    }

    &.none,
    &[view='0'] {
      display: none;
    }
  }

  @keyframes am-dark-show {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  @keyframes am-dark-hide {
    0% {
      background-color: rgba(0, 0, 0, 0.5);
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  // 弹层
  .fekit-picker {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0);
    pointer-events: none;
    transition: all 0.3s;

    &[view~='1'] {
      animation: am-dark-hide 0.3s both;
    }

    &[view~='2'],
    &[view~='3'] {
      animation: am-dark-show 0.3s both;
    }

    &-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      pointer-events: auto;

      & > * {
        position: relative !important;

        &.com-dialog {
          max-width: 80%;
        }
      }
    }

    &-close {
      position: absolute;
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
      right: 0.5rem;
      top: 0.5rem;
      text-align: center;
      transform: rotate(0deg);
      transition: all 0.2s;

      &:hover {
        transform: rotate(-90deg);
      }
    }

    &-close {
      position: absolute;
      width: 18px;
      height: 18px;
      right: 0.5em;
      top: 0.5em;
      padding: 0.25em;
      text-align: center;
      transition: all 0.2s;
      border-radius: 50%;
      background:
        linear-gradient(45deg, transparent 44%, currentColor 46%, currentColor 54%, transparent 56%) no-repeat center / 50% 50%,
        linear-gradient(-45deg, transparent 44%, currentColor 46%, currentColor 54%, transparent 56%) no-repeat center / 50% 50%;
      transform: scale(1) rotate(0deg);
      opacity: 0.8;
      transition: all 0.25s;

      &:hover {
        transform: scale(1) rotate(-90deg);
      }

      &:active {
        transform: scale(0.8) rotate(-90deg);
      }

      &::before {
        position: absolute;
        content: '';
        width: 200%;
        height: 200%;
        left: -50%;
        top: -50%;
      }
    }
  }

  @supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
    .picker-virtual-key {
      padding-bottom: constant(safe-area-inset-bottom) !important;
      padding-bottom: env(safe-area-inset-bottom) !important;
    }
  }

  html {
    &[size='xs'] {
      .fekit-picker-close {
        width: 16px;
        height: 16px;
      }
    }

    &[size='l'] {
      .fekit-picker-close {
        width: 20px;
        height: 20px;
      }
    }

    &[size='xl'] {
      .fekit-picker-close {
        width: 22px;
        height: 22px;
      }
    }
  }
</style>
