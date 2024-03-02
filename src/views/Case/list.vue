<template>
  <div class="ny-ms">
    <div class="box">
      <h1 class="am-view">{{ words['cases.title'] || '案例' }}</h1>
      <p class="am-view">{{ words['cases.desc'] || '这里提供一些开发案例' }}</p>
    </div>
  </div>
  <div>
    <div class="box">
      <ul ui-cards="@a bg:fore" ui-row="space mob-24 pad-12 dpc-8">
        <li class="am-view" data-theme="aa" data-inview="view">
          <div>
            <div ui-card-body="">
              <div @click="fLink('http://qacms.fekit.cn/')">
                <CoverView opts="16:10">
                  <div class="n-mm" ui-flex="col cm">
                    <div class="full bg-1 r-sm pa z-ss o-ss"></div>
                    <img class="r-sm lazyload ux-none z-sm" src="@/assets/img/none.png" data-src="/upload/case1-cover.png" alt="" />
                  </div>
                </CoverView>
                <h3 class="ux-click">QACMS</h3>
                <p class="my-ss co-desc ux-none">{{ words['cases.1.desc'] || '基于 NeatUI 开发的表单设计系统（演示数据基于Mockjs）' }}</p>
              </div>
            </div>
            <div ui-card-foot="" ui-flex="row xm">
              <div ui-flex="row lm" class="fs-xs mr-sm-sub">
                <span ui-tag="@b main :round">VUE3</span>
                <span ui-tag="@b main :round">TS</span>
                <span ui-tag="@b main :round">Pinia</span>
                <span ui-tag="@b main :round">NeatUI</span>
              </div>
              <div></div>
            </div>
          </div>
        </li>
        <li class="am-view" data-theme="aa" data-inview="view">
          <div>
            <div ui-card-body="">
              <div @click="fLink('http://case.fekit.cn/aa/')">
                <CoverView opts="16:10">
                  <div class="n-mm" ui-flex="col cm">
                    <div class="full bg-2 r-sm pa z-ss o-ss"></div>
                    <img class="r-sm lazyload ux-none z-sm" src="@/assets/img/none.png" data-src="/upload/case2-cover.png" alt="" />
                  </div>
                </CoverView>
                <h3 class="ux-click">NeatUI Admin</h3>
                <p class="my-ss co-desc ux-none">{{ words['cases.2.desc'] || '基于 NeatUI 开发的管理系统模板（演示数据基于Mockjs）' }}</p>
              </div>
            </div>
            <div ui-card-foot="" ui-flex="row xm">
              <div ui-flex="row lm" class="fs-xs mr-sm-sub">
                <span ui-tag="@b main :round">VUE3</span>
                <span ui-tag="@b main :round">TS</span>
                <span ui-tag="@b main :round">Pinia</span>
                <span ui-tag="@b main :round">NeatUI</span>
              </div>
              <div></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { storeToRefs, useBaseStore } from '@/store';
  import { CoverView } from '@/components';
  import { useRoute, useRouter } from 'vue-router';

  const route: any = useRoute();
  const router: any = useRouter();

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const fLink = (id: any) => {
    window.open(id, '_blank');
    // router.push({ path: '/case', query: { id } });
  };
</script>
