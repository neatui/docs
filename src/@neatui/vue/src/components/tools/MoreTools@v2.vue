<template>
  <div ui-tips="@a ux:hover">
    <button :ui-btn="`@a none s :square`"><i class="icon icon-more"></i></button>
    <div ui-tips-box="bl" class="n-sl">
      <slot name="prefix"></slot>
      <slot>
        <div>
          <h6 class="fs-xs o-mm nowrap">每页显示数量</h6>
          <div ui-btns="@a line s :group :border">
            <button @click="setLinkMode('default')"><code :class="`${state.tools.confs.linkMode === 'default' ? 'co-main' : ''}`">跳转</code></button>
            <button @click="setLinkMode('preview')"><code :class="`${state.tools.confs.linkMode === 'preview' ? 'co-main' : ''}`">预览</code></button>
            <button @click="setLinkMode('windows')"><code :class="`${state.tools.confs.linkMode === 'windows' ? 'co-main' : ''}`">新窗口</code></button>
          </div>
        </div>
        <div ui-line="@a" class="mt-sm mb-ss"></div>
        <div>
          <h6 class="fs-xs o-mm nowrap">每页显示数量</h6>
          <div ui-btns="@a line s :group :border">
            <button @click="setPageSize(10)"><code :class="`${state.tools.param.pageSize === 10 ? 'co-main' : ''}`">10</code></button>
            <button @click="setPageSize(20)"><code :class="`${state.tools.param.pageSize === 20 ? 'co-main' : ''}`">20</code></button>
            <button @click="setPageSize(50)"><code :class="`${state.tools.param.pageSize === 50 ? 'co-main' : ''}`">50</code></button>
            <button @click="setPageSize(100)"><code :class="`${state.tools.param.pageSize === 100 ? 'co-main' : ''}`">100</code></button>
          </div>
        </div>
      </slot>
      <slot name="prefix"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { reactive, computed } from 'vue';
  import { useRoute } from 'vue-router';
  const emits = defineEmits(['update:confs', 'update:param']);
  const props = defineProps({
    confs: {
      type: Object,
      default: () => ({})
    },
    param: {
      type: Object,
      default: () => ({})
    }
  });

  const route = useRoute();
  const state: any = reactive({
    name: computed(() => 'confs' + route.path?.replace(/\//g, '_')),
    tools: {
      confs: {},
      param: {}
    }
  });

  const init = () => {
    const _cache = JSON.parse(localStorage.getItem(`${state.name}`) || '{}');
    state.tools.confs = _cache.confs || JSON.parse(JSON.stringify(props.confs));
    state.tools.param = _cache.param || JSON.parse(JSON.stringify(props.param));
    emits('update:confs', state.tools.confs);
    emits('update:param', state.tools.param);
  };
  init();

  const setLinkMode = (linkMode: any) => {
    state.tools.confs.linkMode = linkMode;
    emits('update:confs', state.tools.confs);
    localStorage.setItem(state.name, JSON.stringify(state.tools));
  };

  const setPageSize = (pageSize: any) => {
    state.tools.param.pageSize = pageSize;
    emits('update:param', state.tools.param);
    localStorage.setItem(state.name, JSON.stringify(state.tools));
  };
</script>
