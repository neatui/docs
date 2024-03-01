<template>
  <div class="full-x pading" ui-flex="xm">
    <div class="ml-sl ar mob-ac" ui-flex="rm">
      <div class="mx-ss-sub" ui-flex="row rm">
        <!-- <div ui-tips="@a co:well ux:hover">
          <button ui-btn="@a s read :border" @click="prev">
            显示10条
            <i class="icon icon-dropdown fs-sl"></i>
          </button>
          <div ui-tips-box="tl">111</div>
        </div> -->
        <button :ui-btn="`@a s read :border :square ${data.page > 1 ? '' : ':disabled'}`" @click="prev"><i class="icon icon-prev"></i></button>
        <div class="dib ux-downmenu-hover">
          <div ui-btn="@a s read :border">
            <p>
              <code>{{ data.page || 0 }}/{{ data.pages || 0 }}</code>
              <i class="icon icon-dropdown fs-sl"></i>
            </p>
          </div>
          <div v-if="state.lists.length" class="pagination-more-list downmenu downmenu-top downmenu-c al">
            <ul ui-scroll=":y s" class="full n-ss-sub dib-sub">
              <li v-for="item in state.lists" :key="item">
                <button :ui-btn="`@a s :square ${item === data.page ? 'main' : 'read :border'}`" ui-hide="<pad" @click="page(item)">
                  <code>{{ item }}</code>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <button :ui-btn="`@a s read :border :square ${data.page < data.pages ? '' : ':disabled'}`" @click="next"><i class="icon icon-next"></i></button>
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
          pages: 0,
          page: 0
        };
      }
    }
  });

  const emit = defineEmits(['page']);
  const state = reactive({
    list: computed(() => {
      const _page = Number(props.data.page || 1);
      const list = [_page];
      if (_page > 1) {
        list.unshift(_page - 1);
      }
      if (_page > 2) {
        list.unshift(_page - 2);
      }
      const _max = 5 - list.length;
      for (let i = 1; i <= _max; i++) {
        if (_page + i <= props.data.pages) {
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
    }),
    lists: computed(() => {
      const _lists: any = [];
      for (let i = 1; i <= props.data.pages; i++) {
        _lists.push(i);
      }
      return _lists;
    })
  });

  const prev = () => {
    const _page = Number(props.data.page) - 1 < 1 ? 1 : Number(props.data.page) - 1;
    emit('page', _page);
  };

  const next = () => {
    const _page = Number(props.data.page) + 1 > props.data.pages ? props.data.pages : Number(props.data.page) + 1;
    emit('page', _page);
  };

  const page = (idx: any) => {
    emit('page', idx);
  };
</script>
