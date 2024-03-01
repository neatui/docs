<template>
  <PageView>
    <HeadView />
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
            <div class="flex-fixed ny-ms">
              <div class="box">
                <h1>{{ words['plugins.title'] }}</h1>
                <p>{{ words['plugins.desc'] }}</p>
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
      </BodyView>
    </div>
    <FootView />
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
