<!-- 实验性插件 -->
<template>
  <Teleport :to="area">
    <div
      v-if="state.view"
      :am-view="am"
      :data-key="id"
      :style="`${`${dark}` ? 'background-color: rgba(0, 0, 0, ' + dark + ');' : ''}${zIndex ? 'z-index:' + zIndex + ';' : ''}`"
      :view="state.view"
      class="fekit-layer"
    >
      <div :ui-flex="`col ${flex}`" :style="wrapStyle" class="fekit-layer-wrap" @animationend="anim" @click="_sys_hide">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
  import { onBeforeUnmount, PropType, reactive, ref, watch } from 'vue';
  import { isFunction } from '@fekit/utils';

  // 弹层队列
  if (!(window as any)._FEKIT_LAYER_TASKS) {
    (window as any)._FEKIT_LAYER_TASKS = {};
  }
  const _tasks: any = (window as any)._FEKIT_LAYER_TASKS;

  // 弹窗入参
  const props: any = defineProps({
    zIndex: {
      type: [String, Number],
      default: ''
    },
    area: {
      type: String,
      default: '#fekit'
    },
    id: {
      type: String
    },
    am: {
      type: String as PropType<'aa' | 'ab' | 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ah' | 'ai' | 'aj' | 'ak' | 'al' | 'am' | 'an' | 'ao' | 'ap' | 'aq' | 'ar' | 'as' | 'at'>,
      default: 'as'
    },
    flex: {
      type: String as PropType<'lt' | 'ct' | 'rt' | 'lm' | 'cm' | 'rm' | 'lb' | 'cb' | 'rb'>,
      default: 'cm'
    },
    dark: {
      type: [String, Number],
      default: ''
    },
    darkClickClose: {
      type: Boolean,
      default: true
    },
    wrapStyle: {
      type: String,
      default: ''
    }
  });

  const _area: any = document.querySelector(props.area);
  if (!_area) {
    const el = document.createElement('div');
    el.id = (props.area || '#fekit').substring(1);
    el.style.position = 'absolute';
    document.body.appendChild(el);
  }

  // 状态管理
  const state = reactive({
    view: 0,
    params: {},
    top: 0
  });

  function disableScroll() {
    state.top = document.documentElement.scrollTop;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${state.top}px`;
    document.body.style.width = '100%';
  }

  function enableScroll() {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, state.top);
  }

  watch(
    () => state.view,
    (view: any) => {
      if (view === 2) {
        disableScroll();
      }
      if (view === 0) {
        enableScroll();
      }
    },
    { deep: true, immediate: true }
  );

  // 回调合集
  const on: any = {
    show: [],
    hide: [],
    open: [],
    none: []
  };

  // 注入参数
  const init = (params: any = {}) => {
    _tasks[id].params = params;
    if (params?.on?.show) {
      on.show.push(params.on.show);
    }
    if (params?.on?.hide) {
      on.hide.push(params.on.hide);
    }
    return _tasks[id];
  };

  // 显示弹层
  const show = (params: any = {}, then = () => {}) => {
    state.view = 2;
    if (params?.on?.show) {
      on.show.push(params.on.show);
    }
    if (params?.on?.hide) {
      on.hide.push(params.on.hide);
    }
    on.show.push(then);
  };

  // 隐藏弹层
  const hide = (_params: any = {}, then = () => {}) => {
    if (state.view === 3) {
      state.view = 1;
      on.hide.push(then);
    }
  };

  // 打开弹层(没有动画过程)
  const open = (_params: any = {}, then = () => {}) => {
    state.view = 3;
    on.show.push(then);
  };
  // 关闭弹层(没有动画过程)
  const none = (_params: any = {}, then = () => {}) => {
    state.view = 0;
    on.show.push(then);
  };

  // 点暗层关闭
  const _sys_hide = (ev: any) => {
    if (props.darkClickClose && ev.target.className === 'fekit-layer-wrap' && state.view === 3) {
      state.view = 1;
    }
  };

  // 监听动画
  const anim = () => {
    if (state.view === 1) {
      state.view = 0;
      on.hide.forEach((fun: any) => {
        isFunction(fun) && fun();
      });
    }
    if (state.view === 2) {
      state.view = 3;
      on.show.forEach((fun: any) => {
        isFunction(fun) && fun();
      });
    }
  };

  // 注册弹层
  const { id = '' }: any = { ...props };
  if (_tasks[id]) {
    console.error('Layer 有重复 id', id);
  }
  if (id) {
    _tasks[id] = { init, show, hide, open, none };
  } else {
    console.error('Layer 必须填写全局统一的 id');
  }

  // 卸载弹层
  onBeforeUnmount(() => {
    delete _tasks[id];
  });
</script>
<!-- <script lang="ts">
  export const LayerById = (id: any) => {
    return (window as any)._FEKIT_LAYER_TASKS[id];
  };
</script> -->

<style lang="scss">
  // 弹层
  .fekit-layer {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.75);
    pointer-events: none;

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
      width: 1.5em;
      height: 1.5em;
      left: 50%;
      bottom: -2.5rem;
      margin-left: -1rem;
      padding: 0.25em;
      text-align: center;
      transform: scale(1) translate3d(0, -100%, 0);
      transition: all 0.2s;
      color: #fff;
      box-shadow: 0 0 0 2px currentColor;
      border-radius: 50%;
      opacity: 0;
      background:
        linear-gradient(45deg, transparent 44%, currentColor 45%, currentColor 56%, transparent 57%) no-repeat center / 50% 50%,
        linear-gradient(-45deg, transparent 44%, currentColor 45%, currentColor 56%, transparent 57%) no-repeat center / 50% 50%;

      &:active {
        transform: scale(0.9);
      }
    }

    &[view='3'] {
      .fekit-layer-close {
        opacity: 0.85;
        transform: translate3d(0, 0, 0);
      }
    }

    // &-close {
    //   position: absolute;
    //   width: 2rem;
    //   height: 2rem;
    //   line-height: 2rem;
    //   right: 0.5rem;
    //   top: 0.5rem;
    //   text-align: center;
    //   transform: rotate(0deg);
    //   transition: all 0.2s;

    //   &:hover {
    //     transform: rotate(-90deg);
    //   }
    // }

    // &-close {
    //   position: absolute;
    //   width: 18px;
    //   height: 18px;
    //   right: 0.5em;
    //   top: 0.5em;
    //   padding: 0.25em;
    //   text-align: center;
    //   transition: all 0.2s;
    //   // box-shadow: 0 0 0 1px currentColor;
    //   border-radius: 50%;
    //   background: linear-gradient(45deg, transparent 44%, currentColor 46%, currentColor 54%, transparent 56%) no-repeat center / 50% 50%,
    //     linear-gradient(-45deg, transparent 44%, currentColor 46%, currentColor 54%, transparent 56%) no-repeat center / 50% 50%;
    //   transform: scale(1) rotate(0deg);
    //   opacity: 0.8;
    //   transition: all 0.25s;

    //   &:hover {
    //     transform: scale(1) rotate(-90deg);
    //   }

    //   &:active {
    //     transform: scale(0.8) rotate(-90deg);
    //   }

    //   &::before {
    //     position: absolute;
    //     content: '';
    //     width: 200%;
    //     height: 200%;
    //     left: -50%;
    //     top: -50%;
    //   }
    // }
  }

  // html {
  //   &[size='xs'] {
  //     .fekit-layer-close {
  //       width: 16px;
  //       height: 16px;
  //     }
  //   }
  //   &[size='l'] {
  //     .fekit-layer-close {
  //       width: 20px;
  //       height: 20px;
  //     }
  //   }
  //   &[size='xl'] {
  //     .fekit-layer-close {
  //       width: 22px;
  //       height: 22px;
  //     }
  //   }
  // }
</style>
