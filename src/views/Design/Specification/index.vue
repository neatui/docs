<template>
  <div class="full" ui-flex="row xy">
    <Sidebar>
      <span class="o-mm fs-xs bold mt-sl">设计前的准备</span>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/followView">设计稿尺寸</RouterLink>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/followView">图标设计</RouterLink>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/followView">设计字体</RouterLink>
      <span class="o-mm fs-xs bold mt-sl">设计原则</span>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/followView">内容优先</RouterLink>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/followView">统一性</RouterLink>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/followView">阶梯性</RouterLink>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/followView">响应性</RouterLink>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/followView">扩展性</RouterLink>
      <span class="o-mm fs-xs bold mt-sl">设计规范</span>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/photoEditor">布局</RouterLink>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/photoEditor">栅格系统</RouterLink>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/photoEditor">间距</RouterLink>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/photoEditor">颜色</RouterLink>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/photoEditor">字号</RouterLink>
      <span class="o-mm fs-xs bold mt-sl">用户体验</span>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/photoEditor">用户反馈</RouterLink>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/photoEditor">动画</RouterLink>
      <span class="o-mm fs-xs bold mt-sl">设计资源</span>
      <RouterLink active-class="co-main" class="ux-hover r-sm" to="/docs/design/photoEditor">用户反馈</RouterLink>
    </Sidebar>
    <div class="flex-block nl-mm">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
  import Sidebar from '@/components/Sidebar.vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
