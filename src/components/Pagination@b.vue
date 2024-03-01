<template>
  <div class="full-x pading" ui-flex="xm">
    <div class="al mob-ac mr-sm-sub" ui-hide="=mob" ui-flex="row lm">
      <p>
        <span>{{ words['pading.total'] || '共' }}</span>
        <code class="nx-ss">{{ data.totalPages || 0 }}</code>
        <span>{{ words['pading.pages'] || '页' }}</span>
      </p>
      <p>
        <code class="nx-ss">{{ data.total || 0 }}</code>
        <span>{{ words['pading.records'] || '条记录' }}</span>
      </p>
    </div>
    <div class="ml-sl ar mob-ac">
      <div class="fr mob-fn m-ss-sub">
        <button :ui-btn="`@a s line :border :square ${data.current > 1 ? '' : ':disabled'}`" @click="prev"><i class="icon icon-prev"></i></button>
        <button v-for="idx in state.list" :key="idx" :ui-btn="`@a s :square :border ${idx === data.current ? 'main' : 'line'}`" ui-hide="<pad" @click="page(idx)">
          {{ idx }}
        </button>
        <button ui-btn="@a s line :border" ui-hide=">mob">
          <span>{{ words['pading.current'] || '当前第' }}</span>
          <code class="nx-ss">{{ data.current || 1 }}</code>
          <span>{{ words['pading.pages'] || '页' }}</span>
        </button>
        <button :ui-btn="`@a s line :border :square ${data.current < data.totalPages ? '' : ':disabled'}`" @click="next"><i class="icon icon-next"></i></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, computed } from 'vue';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const props: any = defineProps({
    data: {
      type: Object,
      default: () => {
        return {
          total: 0,
          totalPages: 0,
          current: 0
        };
      }
    }
  });

  const emit = defineEmits(['page']);
  const state = reactive({
    list: computed(() => {
      const _page = Number(props.data.current || 1);
      const list = [_page];
      if (_page > 1) {
        list.unshift(_page - 1);
      }
      if (_page > 2) {
        list.unshift(_page - 2);
      }
      const _max = 5 - list.length;
      for (let i = 1; i <= _max; i++) {
        if (_page + i <= props.data.totalPages) {
          list.push(_page + i);
        }
      }
      const _min = 5 - list.length;
      for (let i = 1; i <= _min; i++) {
        if (list[0] - 1 > 0) {
          list.unshift(list[0] - 1);
        }
      }
      return list;
    })
  });

  const prev = () => {
    const _page = Number(props.data.current) - 1 < 1 ? 1 : Number(props.data.current) - 1;
    emit('page', _page);
  };

  const next = () => {
    const _page = Number(props.data.current) + 1 > props.data.totalPages ? props.data.totalPages : Number(props.data.current) + 1;
    emit('page', _page);
  };

  const page = (idx: any) => {
    emit('page', idx);
  };
</script>
