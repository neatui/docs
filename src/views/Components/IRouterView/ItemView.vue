<template>
  <div class="full-w bg-fore r-sm">
    <div class="nx-ss ny-sl b-solid bk-line bb-xs">
      <div ui-btn="@a s none" @click="onBack"><i class="icon icon-back"></i>返回</div>
    </div>
    <div class="n-ms h-mm*">
      <h4>这是详情页</h4>
      {{ mode }}
      <p class="mt-ms">您只需要关注列表和详情页的业务，其它的交给IRouterView。</p>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { inject, ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  const router: any = useRouter();

  const props = defineProps({
    mode: {
      type: String,
      default: ''
    }
  });

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
