<template>
  <dl v-for="(menu, idx) in menus" :key="idx">
    <dt>
      <h3 class="bold">{{ menu.word || menu.name }}</h3>
    </dt>
    <dd class="pr mb-sl">
      <ul ui-cards="@a bg:fore" ui-row="mob-24 pad-12 pad-l-8 dpc-m-6" class="n-sl-sub">
        <li v-for="(sub, i) in menu.chlid" :key="i">
          <div class="am-view">
            <div ui-card-body="">
              <CoverView>
                <img v-if="sub.image" class="lazyload r-sm" style="pointer-events: none" src="" :data-src="sub.image" alt="" />
                <iframe
                  v-else
                  class="lazyload r-sm"
                  scale="2"
                  style="pointer-events: none"
                  src=""
                  data-src="https://mcui.fekit.cn/cover.html?demo=components/general/card/a/demo/cover.htm"
                ></iframe>
              </CoverView>
              <RouterLink active-class="co-main" class="full-x nx-sm ny-ss r-sm" :to="sub.path">{{ sub.word || sub.name }}</RouterLink>
            </div>
          </div>
        </li>
      </ul>
    </dd>
  </dl>
</template>
<script setup lang="ts">
  import { useBaseStore } from '@/store';
  import { CoverView } from '@/components';

  const base: any = useBaseStore();
  const menus = base.menus.find((item: any) => item.name === 'Components')?.chlid || [];
</script>
