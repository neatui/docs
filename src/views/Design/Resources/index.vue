<template>
  <BodyView>
    <div class="flex-fixed">
      <div class="box">
        <h1 class="am-view">{{ words['resources.title'] || '资源' }}</h1>
        <p class="am-view">{{ words['resources.describe'] || '这里提供一些设计物料下载，比如各个主体的LOGO源文件，各种标准组件的UI设计稿源文件下载。' }}</p>
      </div>
    </div>
    <div class="ny-mm">
      <div class="box">
        <RouterLink to="specification">Specification</RouterLink>
        <ul ui-cards="@a bg:fore" ui-row="space mob-24 pad-12 dpc-8">
          <li class="am-view" data-theme="aa" data-inview="view">
            <div>
              <div ui-card-body="">
                <CoverView>
                  <img class="r-sm lazyload" src="@/assets/img/none.png" data-src="/upload/ydk-resources-cover.png" alt="" />
                </CoverView>
                <h3>{{ words['resources.li1.title'] || '设计素材' }}</h3>
                <p class="my-ss co-desc">{{ words['resources.li1.describe'] || 'Sketch 组件包' }}</p>
                <a class="co-link hover-underline" target="_blank" href="/upload/resources1.zip">{{ words['common.download'] || '下载' }} »</a>
              </div>
            </div>
          </li>
          <li class="am-view" data-theme="aa" data-inview="view">
            <div>
              <div ui-card-body="">
                <CoverView>
                  <img class="r-sm lazyload" src="@/assets/img/none.png" data-src="/upload/yhj-resources-cover.png" alt="" />
                </CoverView>
                <h3>{{ words['resources.yhj.title'] || '设计素材' }}</h3>
                <p class="my-ss co-desc">{{ words['resources.yhj.describe'] || '包含的LOGO等设计源文件' }}</p>
                <a class="co-link hover-underline" target="_blank" href="/upload/yhj.zip">{{ words['common.download'] || '下载' }} »</a>
              </div>
            </div>
          </li>
          <li class="am-view" data-theme="aa" data-inview="view">
            <div>
              <div ui-card-body="">
                <CoverView>
                  <img class="r-sm lazyload" src="@/assets/img/none.png" data-src="/upload/yyb-resources-cover.png" alt="" />
                </CoverView>
                <h3>{{ words['resources.yyb.title'] || '设计素材' }}</h3>
                <p class="my-ss co-desc">{{ words['resources.yyb.describe'] || '包含的LOGO等设计源文件' }}</p>
                <a class="co-link hover-underline" target="_blank" href="/upload/yyb.zip">{{ words['common.download'] || '下载' }} »</a>
              </div>
            </div>
          </li>
          <li class="am-view" data-theme="aa" data-inview="view">
            <div>
              <div ui-card-body="">
                <CoverView>
                  <img class="r-sm lazyload" src="@/assets/img/none.png" data-src="/upload/ws-resources-cover.png" alt="" />
                </CoverView>
                <h3>{{ words['resources.ws.title'] || '玟胜国际' }}</h3>
                <p class="my-ss co-desc">{{ words['resources.ws.describe'] || '包含玟胜国际的LOGO等设计源文件' }}</p>
                <a class="co-link hover-underline" target="_blank" href="/upload/wsgj.zip">{{ words['common.download'] || '下载' }} »</a>
              </div>
            </div>
          </li>
          <li class="am-view" data-theme="aa" data-inview="view">
            <div>
              <div ui-card-body="">
                <CoverView>
                  <img class="r-sm lazyload" src="@/assets/img/none.png" data-src="/upload/ydkui-resources-cover.png" alt="" />
                </CoverView>
                <h3>{{ words['resources.ui.title'] || 'YDKUI组件包' }}</h3>
                <p class="my-ss co-desc">{{ words['resources.yyb.describe'] || '包含的LOGO等设计源文件' }}</p>
                <a class="co-link hover-underline" target="_blank" href="/upload/yyb.zip">{{ words['common.download'] || '下载' }} »</a>
              </div>
            </div>
          </li>
          <!-- <li class="am-view" data-theme="aa" data-inview="view">
            <div>
              <div ui-card-body="">
                <div ui-cover="16:9" class="bg-weak r-sm">
                  <img src="@/assets/img/ydkui-resources-cover.png" alt="" />
                </div>
                <h3>{{ words['resources.ui.title'] || 'YDKUI组件包' }}</h3>
                <p class="my-ss co-desc">{{ words['resources.yyb.describe'] || '包含的LOGO等设计源文件' }}</p>
                <a class="co-link hover-underline" target="_blank" href="/upload/yyb.zip">{{ words['common.download'] || '下载' }} »</a>
              </div>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
    <FootView />
  </BodyView>
</template>
<script setup lang="ts">
  import { storeToRefs, useBaseStore } from '@/store';
  import { CoverView } from '@/components';
  import BodyView from '@/views/modules/BodyView.vue';
  import FootView from '@/views/modules/FootView.vue';

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
