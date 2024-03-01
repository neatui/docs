<template>
  <PageView>
    <HeadView />
    <div class="flex-block">
      <BodyView>
        <div class="ny-ms">
          <div class="box">
            <h1 class="am-view">{{ words['case.title'] || '案例' }}</h1>
            <p class="am-view">{{ words['case.describe'] || '这里提供一些开发案例' }}</p>
          </div>
        </div>
        <div>
          <div class="box">
            <ul ui-cards="@a bg:fore" ui-row="space mob-24 pad-12 dpc-8">
              <!-- <li class="am-view" data-theme="aa" data-inview="view">
                <div>
                  <div ui-card-body="">
                    <CoverView>
                      <img class="r-sm lazyload" src="@/assets/img/none.png" data-src="/upload/yhj-admin-cover.png" alt="" />
                    </CoverView>
                    <h3>MCUI Design</h3>
                    <p class="my-ss co-desc">{{ words['resources.ydk.describe'] || '参与开发部分模块（无法演示）' }}</p>
                    <a class="co-link hover-underline" target="_blank" href="https://erp.yhjcare.com/">https://erp.yhjcare.com/</a>
                  </div>
                  <div ui-card-foot="" ui-flex="row xm">
                    <div ui-flex="row lm" class="fs-xs mr-sm-sub">
                      <span ui-tag="@b main :round">VUE3</span>
                      <span ui-tag="@b main :round">Element UI</span>
                      <span ui-tag="@b main :round">MCUI</span>
                    </div>
                    <div></div>
                  </div>
                </div>
              </li> -->
              <!-- <li class="am-view" data-theme="aa" data-inview="view">
                <div>
                  <div ui-card-body="">
                    <CoverView>
                      <img class="r-sm lazyload" src="@/assets/img/none.png" data-src="/upload/yhj-app-cover.png" alt="" />
                    </CoverView>
                    <h3>优护佳APP</h3>
                    <p class="my-ss co-desc">{{ words['resources.yyb.describe'] || '主导开发，带一个成员一起完成（无法演示）' }}</p>
                    <a class="co-link hover-underline" target="_blank" href="/yyb.zip">{{ words['common.download'] || '下载' }} »</a>
                  </div>
                  <div ui-card-foot="" ui-flex="row xm">
                    <div ui-flex="row lm" class="fs-xs mr-sm-sub">
                      <span ui-tag="@b main :round">React native</span>
                    </div>
                    <div></div>
                  </div>
                </div>
              </li> -->
              <li class="am-view" data-theme="aa" data-inview="view">
                <div>
                  <div ui-card-body="">
                    <CoverView>
                      <img class="r-sm lazyload" src="@/assets/img/none.png" data-src="/upload/yhj-admin-cover.png" alt="" />
                    </CoverView>
                    <h3>QACMS</h3>
                    <p class="my-ss co-desc">{{ words['resources.qacms'] || '独立设计与开发，自开表单设计系统（演示基于Mock数据）' }}</p>
                    <a class="co-link hover-underline" target="_blank" href="http://qacms.fekit.cn/">http://qacms.fekit.cn/</a>
                  </div>
                  <div ui-card-foot="" ui-flex="row xm">
                    <div ui-flex="row lm" class="fs-xs mr-sm-sub">
                      <span ui-tag="@b main :round">VUE3</span>
                      <span ui-tag="@b main :round">MCUI</span>
                    </div>
                    <div></div>
                  </div>
                </div>
              </li>
              <!-- <li class="am-view" data-theme="aa" data-inview="view">
                <div>
                  <div ui-card-body="">
                    <CoverView>
                      <img class="r-sm lazyload" src="@/assets/img/none.png" data-src="/upload/yhj-admin-cover.png" alt="" />
                    </CoverView>
                    <h3>易得康获客管理系统</h3>
                    <p class="my-ss co-desc">{{ words['resources.maxmize'] || '主导开发，带1个成员共同完成（不可演示）' }}</p>
                    <a class="co-link hover-underline" target="_blank" href="https://maxmize.ydcare.cn/admin/">https://maxmize.ydcare.cn/admin/</a>
                  </div>
                  <div ui-card-foot="" ui-flex="row xm">
                    <div ui-flex="row lm" class="fs-xs mr-sm-sub">
                      <span ui-tag="@b main :round">VUE3</span>
                      <span ui-tag="@b main :round">MCUI</span>
                    </div>
                    <div></div>
                  </div>
                </div>
              </li> -->
              <!-- <li class="am-view" data-theme="aa" data-inview="view">
                <div>
                  <div ui-card-body="">
                    <CoverView>
                      <img class="r-sm lazyload" src="@/assets/img/none.png" data-src="/upload/yhj-admin-cover.png" alt="" />
                    </CoverView>
                    <h3>易得康简历管理系统</h3>
                    <p class="my-ss co-desc">{{ words['resources.resume'] || '独立开发（不可演示）' }}</p>
                    <a class="co-link hover-underline" target="_blank" href="https://resume.ydcare.cn/admin/">https://resume.ydcare.cn/admin/</a>
                  </div>
                  <div ui-card-foot="" ui-flex="row xm">
                    <div ui-flex="row lm" class="fs-xs mr-sm-sub">
                      <span ui-tag="@b main :round">React</span>
                      <span ui-tag="@b main :round">TS</span>
                      <span ui-tag="@b main :round">SCSS</span>
                      <span ui-tag="@b main :round">MCUI</span>
                    </div>
                    <div></div>
                  </div>
                </div>
              </li> -->
            </ul>
          </div>
        </div>
        <FootView />
      </BodyView>
    </div>
  </PageView>
</template>
<script setup lang="ts">
  import { storeToRefs, useBaseStore } from '@/store';
  import { CoverView } from '@/components';
  import PageView from '@/views/modules/PageView.vue';
  import HeadView from '@/views/modules/HeadView.vue';
  import BodyView from '@/views/modules/BodyView.vue';
  import FootView from '@/views/modules/FootView.vue';

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
