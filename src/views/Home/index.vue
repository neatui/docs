<template>
  <div class="home">
    <div class="home-anim pa z-xs">
      <div class="am-decoration"></div>
    </div>
    <div class="full pr z-mm" ui-flex="col xy">
      <HeadView page="home" />
      <div class="flex-block">
        <IPullScrollView class="full" ui-flex="col cm" :pull="false" :load="false">
          <div></div>
          <div class="box co-w nb-xl ac nx-ms" ui-flex="col cm">
            <h1 class="fs-xl mob:fs-ls">
              <b class="nl-ss fs-xl* mob:fs-ls*">{{ words['base.title'] || 'MCUI' }}</b>
            </h1>
            <h2 class="mob:fs-sl">{{ words['base.description'] || '助力设计开发者「更轻松」打造出「极致体验」的产品，让开发者与用户体验每个细节的恰到好处～' }}</h2>
            <div ui-flex="row cm" class="mx-sl-sub mt-mm">
              <RouterLink to="/docs" ui-btn="@a w l :border">
                <span class="co-w">{{ words['common.start_using'] || '开始使用' }}</span>
              </RouterLink>
            </div>
          </div>
        </IPullScrollView>
      </div>
      <div class="ac co-w fs-ss n-sl o-ll">©2023 Junbo</div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import IPullScrollView from '@/components/IPullScrollView.vue';
  import { storeToRefs, useBaseStore } from '@/store';
  import HeadView from '@/views/modules/HeadView.vue';
  import { parse, stringify } from 'flatted';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const aaa = stringify([
    {
      name: 'John',
      age: 30,
      clear: () => {
        console.log('Hello!');
      }
    }
  ]);
  console.log(aaa);
  const bbb = parse(aaa);
  console.log(bbb);
</script>
