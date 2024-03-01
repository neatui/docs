<template>
  <div class="full-w ny-ms">
    <TableLoader
      :table="state.table"
      :lists="state.data"
      :rows="{
        event: {
          dblclick: fToItem
        }
      }"
    >
      <template #operate="">
        <div class="ar mob:ac ml-sm-sub nowrap">
          <button ui-btn="@a s none :square" @click="fToItem"><i class="icon icon-view co-link"></i></button>
        </div>
      </template>
    </TableLoader>
  </div>
</template>
<script setup lang="ts">
  import { inject, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { TableLoader } from '@/@neatui/vue';
  const router: any = useRouter();

  const onlist: any = inject('onlist', () => {});
  onlist(
    (a: any) => {
      console.log(6, 'onlist', a, a.param.action === 'edit' ? '这里要刷新' : '这里不要刷新');
    },
    { ccc: 222 }
  );

  const fToItem = () => {
    router.push({ query: { id: 1 } });
  };

  const state: any = {
    table: [
      {
        label: '标题',
        field: 'name',
        attrs: { class: 'ux-link' },
        event: {
          click: fToItem
        }
      },
      {
        label: '手机号',
        field: 'phone'
      },
      {
        label: '状态',
        field: 'status',
        logic: true
      }
    ],
    data: [
      {
        name: '点击打开详情页',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      },
      {
        name: '点击打开详情页',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      },
      {
        name: '点击打开详情页',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      },
      {
        name: '点击打开详情页',
        phone: 13888776666,
        status: 1,
        groupIdList: 1
      }
    ]
  };
</script>
