<template>
  <div class="header fs-ss fw-auto co-text full-x h-ss+ mob:h-ss flex-fixed pr z-ls b-solid bk-line co-text" :class="`${page === 'home' ? '' : 'bb-xs'}`">
    <div class="full fs-sm n-sl mob:r-sl" ui-flex="row xm" :class="`${page === 'home' ? 'co-w' : 'bg-fore-xl'}`">
      <slot>
        <div ui-flex="row lm">
          <a href="#/" ui-flex="row lm">
            <i class="icon icon-logo fs-ls pr mb-ss" :class="`${page === 'home' ? 'co-w' : 'co-main'}`"></i>
            <b class="nl-ss fs-ms fw7">{{ words['base.title'] || 'NeatUI' }}</b>
          </a>
          <IFollowView pos="br">
            <button ui-btn="@a none" class="ml-ms fs-ss o-ls"><code>V2</code><span class="icon icon-dropdown"></span></button>
            <template #tips>
              <ul class="min-w-sm bg-fore r-sm nx-ss ny-sl fs-ss">
                <li ui-flex="row lm" class="ux-hover nx-sm ny-ss pr">
                  <a class="full" href="/v1"><code>V1</code></a>
                </li>
                <li ui-flex="row lm" class="ux-hover nx-sm ny-ss pr">
                  <a class="full" href="/"><code>V2</code></a>
                </li>
              </ul>
            </template>
          </IFollowView>
        </div>
        <div ui-hide="<dpc" class="ml-sl-sub" ui-flex="row rm">
          <RouterLink ui-btn="@a none s" active-class="co-main" to="/docs">{{ words['menu.docs'] || '文档' }}</RouterLink>
          <!-- <RouterLink ui-btn="@a none s" active-class="co-main" to="/development">{{ words['menu.development'] || '开发' }}</RouterLink> -->
          <RouterLink ui-btn="@a none s" active-class="co-main" to="/components">{{ words['menu.components'] || '组件' }}</RouterLink>
          <RouterLink ui-btn="@a none s" active-class="co-main" to="/plugins">{{ words['menu.plugins'] || '插件' }}</RouterLink>
          <RouterLink ui-btn="@a none s" active-class="co-main" to="/templates">{{ words['menu.templates'] || '模板' }}</RouterLink>
          <!-- <RouterLink ui-btn="@a none s" active-class="co-main" to="/tutorials">{{ words['menu.tutorials'] || '教程' }}</RouterLink> -->
          <MoreLangs />
          <a href="https://github.com/neatui/docs" target="_blank" ui-btn="@a none s :square">
            <i class="icon icon-github fs-mm"></i>
          </a>
        </div>
        <div ui-hide=">pad" class="ml-sm-sub">
          <MoreLangs />
          <IFollowView>
            <button ui-btn="@a s none" class="nr-sm">
              <span class="icon icon-menu"></span>
            </button>
            <template #tips>
              <div class="ny-sl nx-ss min-w-sl max-h-lm nx-sm-sub ny-ss-sub" ui-scroll="x:hidden :y">
                <RouterLink class="full-x ux-hover r-sm" active-class="co-main" to="/docs">{{ words['menu.docs'] || '文档' }}</RouterLink>
                <RouterLink class="full-x ux-hover r-sm" active-class="co-main" to="/components">{{ words['menu.components'] || '组件' }}</RouterLink>
                <RouterLink class="full-x ux-hover r-sm" active-class="co-main" to="/plugins">{{ words['menu.plugins'] || '插件' }}</RouterLink>
                <RouterLink class="full-x ux-hover r-sm" active-class="co-main" to="/templates">{{ words['menu.templates'] || '模板' }}</RouterLink>
                <!-- <RouterLink class="full-x ux-hover r-sm" active-class="co-main" to="/blog">{{ words['menu.blog'] || '博客' }}</RouterLink> -->
                <a class="full-x ux-hover r-sm" href="https://github.com/neatui/docs" target="_blank"> <i class="icon icon-github fs-ms"></i><span>Github</span> </a>
              </div>
            </template>
          </IFollowView>
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { storeToRefs, useBaseStore } from '@/store';
  import IFollowView from '@/components/IFollowView.vue';
  import MoreLangs from '@/views/modules/MoreLangs.vue';
  import { RouterLink } from 'vue-router';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
  const props: any = defineProps({
    page: {
      type: String,
      default: 'page'
    }
  });
</script>
