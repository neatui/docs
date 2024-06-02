<template>
  <h1>{{ words['components.tabs'] || 'Tabs' }}</h1>
  <div class="w-ls">
    <div>
      <ul ui-tabs="@a xs">
        <li class="active"><span>模板</span></li>
        <li><span>图层</span></li>
      </ul>
      <ul ui-tabs="@a s">
        <li class="active"><span>模板</span></li>
        <li><span>图层</span></li>
      </ul>
      <ul ui-tabs="@a m">
        <li class="active"><span>模板</span></li>
        <li><span>图层</span></li>
      </ul>
      <ul ui-tabs="@a l">
        <li class="active"><span>模板</span></li>
        <li><span>图层</span></li>
      </ul>
      <ul ui-tabs="@a xl">
        <li class="active"><span>模板</span></li>
        <li><span>图层</span></li>
      </ul>
    </div>
    <br />
    <br />
    <div class="n-sm-sub bg-fore">
      <div>
        <ul ui-tabs="@b xs">
          <li class="active"><span>模板</span></li>
          <li><span>图层</span></li>
        </ul>
      </div>
      <div>
        <ul ui-tabs="@b s">
          <li class="active"><span>模板</span></li>
          <li><span>图层</span></li>
        </ul>
      </div>
      <div>
        <ul ui-tabs="@b m">
          <li class="active"><span>模板</span></li>
          <li><span>图层</span></li>
        </ul>
      </div>
      <div>
        <ul ui-tabs="@b l">
          <li class="active"><span>模板</span></li>
          <li><span>图层</span></li>
        </ul>
      </div>
      <div>
        <ul ui-tabs="@b xl">
          <li class="active"><span>模板</span></li>
          <li><span>图层</span></li>
        </ul>
      </div>
    </div>
    <br />
    <br />
    <div class="n-sm-sub bg-fore">
      <div>
        <ul ui-tabs="@c xs">
          <li class="active"><span>模板</span></li>
          <li><span>图层</span></li>
        </ul>
      </div>
      <div>
        <ul ui-tabs="@c s">
          <li class="active"><span>模板</span></li>
          <li><span>图层</span></li>
        </ul>
      </div>
      <div>
        <ul ui-tabs="@c m">
          <li class="active"><span>模板</span></li>
          <li><span>图层</span></li>
        </ul>
      </div>
      <div>
        <ul ui-tabs="@c l">
          <li class="active"><span>模板</span></li>
          <li><span>图层</span></li>
        </ul>
      </div>
      <div>
        <ul ui-tabs="@c xl">
          <li class="active"><span>模板</span></li>
          <li><span>图层</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { IFollowView } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
</script>
