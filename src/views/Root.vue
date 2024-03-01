<template>
  <transition name="am-router">
    <Suspense>
      <template #default>
        <MainView />
      </template>
      <template #fallback>
        <LoadView />
      </template>
    </Suspense>
  </transition>
</template>
<script setup lang="ts">
  import { onMounted } from 'vue';
  import Clipboard from 'clipboard';
  import LoadView from './Load.vue';
  import MainView from './Main.vue';

  onMounted(() => {
    // 全局点击复制功能
    new Clipboard('.ux-copy', {
      text: (e: any): any => {
        e.setAttribute('data-copy-status', '1');
        setTimeout(() => {
          e.setAttribute('data-copy-status', '0');
        }, 500);
        return e.getAttribute('data-copy');
      }
    });
  });
</script>
