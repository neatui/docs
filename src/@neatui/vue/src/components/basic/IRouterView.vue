<template>
  <div :am-view="view" :am-mode="mode" class="iroute-view pr full bg-back" :view-full="full ? 1 : 0" @animationend="anim">
    <div :class="listClass" :style="listStyle" am-view-item="list">
      <slot name="list" :mode="mode"></slot>
    </div>
    <div :class="itemClass" :style="itemStyle" am-view-item="item" ref="itemRef" v-if="view === 'iteming' || view === 'listing' || view === 'item'">
      <div class="iroute-view-dark" @click="cancel"></div>
      <div class="iroute-view-body" :style="mode === 'preview' || mode === 'pop-up' ? 'box-shadow: rgba(0, 0, 0, 0.08) -5px 0px 10px 0px;' : 'width: 100%;'">
        <slot name="item" :mode="mode"></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { deepcopy } from '@fekit/utils';
  import { ref, watch, provide, reactive } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();

  interface Props {
    full?: boolean | 0 | 1;
    once?: number;
    mode?: 'default' | 'preview' | 'pop-up' | 'window';
    queryName?: string;
    listClass?: string;
    listStyle?: string;
    itemClass?: string;
    itemStyle?: string;
  }
  const props: any = withDefaults(defineProps<Props>(), {
    full: 0,
    once: 0,
    mode: 'default',
    queryName: 'id',
    listClass: 'full',
    listStyle: '',
    itemClass: 'full',
    itemStyle: ''
  });
  const state: any = reactive({
    first: 1,
    list: null,
    item: null
  });

  const evs = (v: any = 'list', p: any = 'item') => {
    return (then: any = () => {}, param: any) => {
      watch(
        () => view.value,
        () => {
          if (view.value === v) {
            if (param) {
              state[p] = param;
            }
            if (!state.first) {
              then({ view: view.value, mode: props.mode, param: deepcopy(state[v] || {}) });
            } else {
              state.first = 0;
            }
          }
        },
        { deep: true, immediate: true }
      );
    };
  };
  provide('onlist', evs('list', 'item'));
  provide('onitem', evs('item', 'list'));

  const init = ref(0);
  const view = ref('');
  const anim = (e: any) => {
    if (
      e.animationName === 'am-show-default' ||
      e.animationName === 'am-show-preview' ||
      e.animationName === 'am-show-pop-up' ||
      e.animationName === 'am-hide-default' ||
      e.animationName === 'am-hide-preview' ||
      e.animationName === 'am-hide-pop-up'
    ) {
      view.value = route.query[props.queryName] ? 'item' : 'list';
    }
  };

  const a = () => {
    if (init.value) {
      if (!props.once) {
        view.value = route.query[props.queryName] ? 'iteming' : 'listing';
      }
    } else {
      view.value = route.query[props.queryName] ? 'item' : 'list';
      init.value = 1;
    }
  };

  watch(() => route.query[props.queryName], a);
  a();

  // 取消
  const cancel = ({ target }: any = {}) => {
    const _query = { ...route.query };
    delete _query[props.queryName];
    router.push({ path: route.path, query: _query });
  };
</script>

<style lang="scss">
  .iroute-view-dark {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .iroute-view-body {
    z-index: 1;
  }

  [am-mode='preview'] {
    .iroute-view-body > * {
      height: 100%;
    }
  }

  // 默认模式
  [am-view][am-mode~='default'] {
    overflow: hidden;

    @keyframes am-show-default {
      0% {
        opacity: 0;
        transform: translate3d(2em, 0, 0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes am-hide-default {
      0% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      100% {
        opacity: 0;
        transform: translate3d(2em, 0, 0);
      }
    }

    &[view-full~='1'] {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 15;
    }

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
        animation: am-show-default 0.35s ease both;
      }
    }
    &[am-view='listing'] {
      [am-view-item~='item'] {
        flex-direction: column;
        display: flex;
        animation: am-hide-default 0.3s ease-in-out both;
      }
    }
    &[am-view='item'] {
      [am-view-item~='item'] {
        display: flex;
        animation: am-show-default 0.35s ease both;
      }
    }
    &[am-view='iteming'] {
      [am-view-item~='list'] {
        display: flex;
        animation: am-hide-default 0.3s ease-in-out both;
      }
    }
  }

  // 默认模式
  [am-view][am-mode~='preview'] {
    overflow: hidden;

    @keyframes am-show-preview {
      0% {
        opacity: 0;
        transform: translate3d(110%, 0, 0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes am-hide-preview {
      0% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      100% {
        opacity: 0;
        transform: translate3d(110%, 0, 0);
      }
    }

    &[view-full~='1'] {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 15;
    }

    [am-view-item] {
      &[am-view-item~='row'] {
        flex-direction: row !important;
      }

      &[am-view-item~='list'] {
        display: flex;
      }
      &[am-view-item~='item'] {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        display: flex;
        justify-content: flex-end;
        align-items: stretch;
        align-content: space-between;
        pointer-events: none;
        & > * {
          pointer-events: auto;
        }
      }
    }
    &[am-view='list'],
    &[am-view='listing'] {
      [am-view-item~='item'] {
        display: flex;
        animation: am-hide-preview 0.5s ease-in-out both;
      }
    }
    &[am-view='item'],
    &[am-view='iteming'] {
      [am-view-item~='item'] {
        display: flex;
        animation: am-show-preview 0.5s ease both;
      }
    }

    .side-preview {
      min-width: 10rem;
      height: 100%;
      box-shadow: -0.25em 0 0.5em rgba(0, 0, 0, 0.05);
      pointer-events: auto;

      &[ui-card~='@a'][ui-card~=':max'] {
        width: 100%;
      }
    }
  }

  // 弹出窗口
  [am-view][am-mode~='pop-up'] {
    overflow: hidden;

    @keyframes am-show-pop-up {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes am-hide-pop-up {
      0% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      100% {
        opacity: 0;
        transform: translate3d(0, 0, 0) scale(0.95);
      }
    }

    &[view-full~='1'] {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 15;
    }

    [am-view-item] {
      &[am-view-item~='row'] {
        flex-direction: row !important;
      }

      &[am-view-item~='list'] {
        display: flex;
      }
      &[am-view-item~='item'] {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        pointer-events: none;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.35s;
        & > * {
          pointer-events: auto;
        }
      }
    }
    &[am-view='list'],
    &[am-view='listing'] {
      [am-view-item~='item'] {
        display: flex;
        opacity: 0;
        & > * {
          animation: am-hide-pop-up 0.35s ease both;
        }
      }
    }
    &[am-view='item'],
    &[am-view='iteming'] {
      [am-view-item~='item'] {
        display: flex;
        opacity: 1;
        & > * {
          animation: am-show-pop-up 0.35s ease both;
        }
      }
    }
  }
</style>
