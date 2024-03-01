<template>
  <div class="w-xl+ full-h bg-fore r-sm" style="box-shadow: -5px 0 10px 0 rgba(0, 0, 0, 0.08)">
    <div class="nx-ss ny-sm b-solid b-line bb-xs">
      <div ui-btn="@a s none" @click="onBack"><i class="icon icon-back"></i>返回</div>
    </div>
    <div class="n-ms">
      <h5>这是详情页</h5>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { inject, ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  const router: any = useRouter();

  const state: any = reactive({
    aaa: 1,
    bbb: 2
  });
  const onitem: any = inject('onitem');
  onitem(
    (a: any) => {
      console.log(7, 'onitem', a);
    },
    { action: 'edit', aaa: '这是item里面的参数', ...state }
  );

  const onBack = () => {
    router.push({ query: {} });
  };
</script>
