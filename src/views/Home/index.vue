<template>
  <div class="home full bg-home">
    <div class="home-anim pa z-xs">
      <div class="am-decoration"></div>
    </div>
    <div class="full pr z-mm" ui-flex="col xy">
      <HeadView page="home" />
      <div class="flex-block">
        <IPullScrollView class="full" ui-flex="col cm" :pull="false" :load="false">
          <!-- <div></div> -->
          <div class="box co-w nb-xl ac nx-ms" ui-flex="col cb">
            <div>
              <h1 class="fs-xl mob:fs-ls">
                <b class="nl-ss fs-ls* mob:fs-ms*">{{ words['base.title'] }}</b>
              </h1>
              <p class="fs-mm fw0 mob:fs-sl">{{ words['base.description'] }}</p>
              <div ui-flex="row cm" class="mx-sl-sub mt-mm">
                <RouterLink to="/docs" ui-btn="@a w l :border">
                  <span class="co-w">{{ words['common.start_using'] }}</span>
                </RouterLink>
              </div>
            </div>
            <div ui-hide="=mob" class="full-x max-w-ll* h-ml* r-ms mt-ls bg-fore n-ms">
              <HomeDemo></HomeDemo>
            </div>
          </div>
        </IPullScrollView>
      </div>
      <ul class="full-w ac co-w fs-ss n-sl o-ll mr-sl-sub" ui-flex="row cm">
        <li>{{ words['base.copyright'] }}</li>
        <li>
          <span ui-hide="=mob">{{ words['base.support'] }}：</span>
          <span>{{ words['base.tel'] }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
  import IPullScrollView from '@/components/IPullScrollView.vue';
  import { storeToRefs, useBaseStore } from '@/store';
  import HeadView from '@/views/modules/HeadView.vue';
  import HomeDemo from './HomeDemo.vue';

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
