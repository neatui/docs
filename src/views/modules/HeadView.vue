<template>
  <div class="header full-x h-ss+ mob:h-ss flex-fixed mob:nx-sl mob:nb-ss pr mob:pf mob:ot-sm z-ls b-solid b-back mob:bb-no" :class="`${page === 'home' ? '' : 'bb-xs'}`">
    <div class="full n-sl mob:r-sl" ui-flex="row xm" :class="`${page === 'home' ? 'co-w' : 'bg-fore+o-xl'}`">
      <slot>
        <div class="al mr-ss-sub">
          <a href="#/" ui-flex="row lm">
            <i class="icon icon-logo fs-ls pr mb-ss" :class="`${page === 'home' ? 'co-w' : 'co-main'}`"></i>
            <b class="nl-ss fs-ms fw7">{{ words['base.title'] || 'NeatUI' }}</b>
          </a>
        </div>
        <div ui-hide="<dpc" class="ml-sl-sub" ui-flex="row rm">
          <RouterLink ui-btn="@a none s" active-class="co-main fw7" to="/design">{{ words['menu.design'] || '规范' }}</RouterLink>
          <RouterLink ui-btn="@a none s" active-class="co-main fw7" to="/development">{{ words['menu.development'] || '开发' }}</RouterLink>
          <RouterLink ui-btn="@a none s" active-class="co-main fw7" to="/docs/components">{{ words['menu.components'] || '组件' }}</RouterLink>
          <!-- <IFollowView>
            <div ui-btn="@a none s" class="nr-sm">
              <span>{{ words['menu.components'] || '组件' }}</span>
              <span class="icon icon-dropdown"></span>
            </div>
            <template #tips>
              <ul class="n-sl" ui-flex="col xm">
                <RouterLink class="nowrap nx-sl ny-ss r-sm ux-hover" active-class="co-main" to="/docs/components">
                  <span>MCUI</span>
                </RouterLink>
              </ul>
            </template>
          </IFollowView> -->
          <RouterLink ui-btn="@a none s" active-class="co-main fw7" to="/plugins">{{ words['menu.plugins'] || '插件' }}</RouterLink>
          <RouterLink ui-btn="@a none s" active-class="co-main fw7" to="/case">{{ words['menu.case'] || '案例' }}</RouterLink>
          <RouterLink ui-btn="@a none s" active-class="co-main fw7" to="/blog">{{ words['menu.blog'] || '博客' }}</RouterLink>
          <!-- <a href="https://www.npmjs.com/search?q=%40mcui" target="_blank" ui-btn="@a none s"><span class="ux-link">NPM</span></a> -->
          <MoreLangs />
        </div>
        <div ui-hide=">pad" class="ml-sm-sub">
          <MoreLangs />
          <IFollowView>
            <button ui-btn="@a s none" class="nr-sm">
              <span class="icon icon-menu"></span>
            </button>
            <template #tips>
              <div class="min-w-sl max-h-lm nx-sm-sub ny-ss-sub" ui-scroll="x:hidden :y">
                <RouterLink class="full-x ux-hover r-sm" active-class="co-main fw7" to="/design">{{ words['menu.design'] || '规范' }}</RouterLink>
                <RouterLink class="full-x ux-hover r-sm" active-class="co-main fw7" to="/development">{{ words['menu.development'] || '开发' }}</RouterLink>
                <RouterLink class="full-x ux-hover r-sm" active-class="co-main fw7" to="/docs/components">{{ words['menu.components'] || '组件' }}</RouterLink>
                <RouterLink class="full-x ux-hover r-sm" active-class="co-main fw7" to="/plugins">{{ words['menu.plugins'] || '插件' }}</RouterLink>
                <RouterLink class="full-x ux-hover r-sm" active-class="co-main fw7" to="/case">{{ words['menu.case'] || '案例' }}</RouterLink>
                <RouterLink class="full-x ux-hover r-sm" active-class="co-main fw7" to="/blog">{{ words['menu.blog'] || '博客' }}</RouterLink>
                <!-- <a class="full-x ux-hover r-ms" href="https://www.npmjs.com/search?q=%40mcui" target="_blank"><span class="ux-link">NPM</span></a> -->
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
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
  const props: any = defineProps({
    page: {
      type: String,
      default: 'page'
    }
  });
</script>
