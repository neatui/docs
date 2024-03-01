<template>
  <IFollowView>
    <button ui-btn="@a none" class="nr-sm fs-ss">
      <img class="h-no+" src="/static/img/zh-CN.png" alt="" />
      <span class="nl-ss" ui-hide="<pad">{{ words['lang.name'] }}</span>
      <span class="icon icon-dropdown"></span>
    </button>
    <template #tips>
      <ul class="n-sl nx-sl-sub ny-ss-sub nowrap co-read fs-ss">
        <li class="ux-hover r-sm" @click="base.lang = 'zh-CN'" ui-flex="row lm">
          <img class="h-no+ pa" src="/static/img/zh-CN.png" alt="" />
          <span class="ml-mm nl-ss">简体中文</span>
        </li>
        <li class="ux-hover r-sm" @click="base.lang = 'en-US'" ui-flex="row lm">
          <img class="h-no+ pa" src="/static/img/en-US.png" alt="" />
          <span class="ml-mm nl-ss">English</span>
        </li>
      </ul>
    </template>
  </IFollowView>
</template>
<script setup lang="ts">
  import IFollowView from '@/components/IFollowView.vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
