<template>
  <PageView>
    <HeadView>
      <!-- <div class="al mr-sm-sub" ui-flex="row lm">
        <a href="#/" ui-flex="row lm">
          <b class="nl-ss fs-ms">{{ words['base.title'] || '前端开发者平台' }}</b>
        </a>
        <span class="mx-ms mob:mx-sm o-ss">|</span>
        <RouterLink ui-btn="@a none s" to="/plugins">
          <b>{{ words['menu.plugins'] || '插件' }}</b>
        </RouterLink>
      </div>
      <div ui-hide="<dpc" class="ml-sl-sub" ui-flex="row rm">
        <RouterLink ui-btn="@a none s" a-active-class="co-main" to="/plugins">{{ words['menu.aaa'] || '常用插件' }}</RouterLink>
        <RouterLink class="co-link ux-click" a-active-class="co-main" to="/plugins/guide">{{ words['menu.bbb'] || '如何开发插件？' }}</RouterLink>
        <MoreLangs />
      </div>
      <div ui-hide=">pad" class="ml-sm-sub">
        <MoreLangs />
        <IFollowView>
          <button ui-btn="@a s none" class="nr-sm">
            <span class="icon icon-menu"></span>
          </button>
          <template #tips>
            <div class="min-w-sl max-h-lm n-sl nx-sl-sub ny-ss-sub" ui-scroll="x:hidden :y">
              <RouterLink ui-btn="@a none s" a-active-class="co-main" to="/plugins">{{ words['menu.aaa'] || '常用插件' }}</RouterLink>
              <RouterLink class="ux-click nowrap" a-active-class="co-main" to="/plugins/guide">{{ words['menu.bbb'] || '如何开发插件？' }}</RouterLink>
            </div>
          </template>
        </IFollowView>
      </div> -->
    </HeadView>
    <div class="flex-block">
      <BodyView>
        <div class="midden">
          <div v-if="route.query.id">
            <div class="ny-sm">
              <div class="box">
                <span @click="router.back()">返回</span>
              </div>
            </div>
            <div class="box bg-fore n-ms r-sl">
              <h1>这是详情页</h1>
              <p class="fs-ss o-ms">2022-10-09</p>
              <div>
                <p>这里是详情，解析MD文件</p>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="flex-fixed">
              <div class="box">
                <h1>{{ words['plugins.title'] || '插件' }}</h1>
                <p>{{ words['plugins.describe'] || '这里提供或收集了围绕整个项目生态所需的各种插件，以供开发者在开发过程中遇到的各个场景提供插件选用指导。' }}</p>
              </div>
            </div>
            <div class="box">
              <ul ui-cards="@a bg:fore" ui-row="space mob-24 pad-12 dpc-8">
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>
                      <div class="my-sm-sub">
                        <h3 class="mob:fs-ms">@fekit/toast <sup class="bg-main co-fore r-ss nx-ss ny-xs lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                        <p class="co-desc" ui-omit="2">插件简介文字插件简介文字，插件简介文字插件简介文字插件简介文字插件简介文字，插件简介文字插件简介文字插件简介文字。</p>
                        <RouterLink class="co-link hover-underline" to="/plugins?id=1">了解更多 »</RouterLink>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <FootView />
      </BodyView>
    </div>
  </PageView>
</template>
<script setup lang="ts">
  import { storeToRefs, useBaseStore } from '@/store';
  import { useRoute, useRouter } from 'vue-router';
  import PageView from '@/views/modules/PageView.vue';
  import BodyView from '@/views/modules/BodyView.vue';
  import HeadView from '@/views/modules/HeadView.vue';
  import FootView from '@/views/modules/FootView.vue';
  import { CoverView } from '@/components';

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
  const route: any = useRoute();
  const router: any = useRouter();
</script>
