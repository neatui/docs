<template>
  <!-- 桌面端 -->
  <table ui-hide="<pad" ui-table="@b sz:l" ref="tableRef">
    <thead class="table-head-fixed">
      <tr>
        <th v-if="showSelectAll" col-fixed="1" min-width>
          <label class="mb-ss" ui-form="@a type:checkbox"><input type="checkbox" :checked="state.isAllSelect" @change="fSelectAll" /><span></span></label>
        </th>
        <template v-for="(col, idx) in state.table" :key="idx">
          <th v-if="!col._close" class="fs-xs nowrap" :min-width="col.fixed" :col-fixed="col.fixed" :col-fixed-side="col.fixed || 'l'" :data-field="col.field">
            <div :ui-flex="`row ${!slots.operate && idx === state._last ? 'rm' : 'lm'}`">
              <span class="nl-xs" v-if="col.sort" :ui-sort="0" @click="emits('onsort', col)">{{ col.label }}</span>
              <span class="nl-xs" v-else>{{ col.label }}</span>
              <IFollowView v-if="!slots.operate && idx === state._last" tipBoxClass="n-no">
                <button :ui-btn="`@a none s :square`">
                  <Icon name="tableloader-setting" class="co-read"></Icon>
                </button>
                <template #tips>
                  <div class="w-mm h-ls n-sl" ui-scroll="x:hidden :y">
                    <draggable
                      v-model="state.table"
                      :force-fallback="false"
                      item-key="name"
                      chosen-class="chosen"
                      animation="200"
                      filter=".forbid"
                      :move="(e: any) => !e.relatedContext.element.fixed"
                    >
                      <template #item="{ element, index }">
                        <div :class="`item ux-hover nowrap r-ss ${element.fixed ? 'forbid' : 'element'}`" :key="index">
                          <label ui-form="@a type:checkbox" class="ny-xs nx-sl">
                            <input type="checkbox" :checked="!element._close" @change="element._close = element._close ? 0 : 1" />
                            <span>
                              {{ element.label }}
                              <i v-if="element.fixed" class="icon icon-fixed fs-xs"></i>
                            </span>
                          </label>
                        </div>
                      </template>
                    </draggable>
                  </div>
                </template>
              </IFollowView>
            </div>
          </th>
        </template>
        <th v-if="slots.operate" col-fixed="r" class="fs-xs nowrap ar">
          <div ui-flex="row rm">
            <span class="mr-sm">{{ words['operate'] || '操作' }}</span>
            <IFollowView tipBoxClass="n-no">
              <button :ui-btn="`@a none s :square`">
                <Icon name="tableloader-setting" class="co-read"></Icon>
              </button>
              <template #tips>
                <div class="w-mm h-ls n-sl" ui-scroll="x:hidden :y">
                  <draggable
                    v-model="state.table"
                    :force-fallback="false"
                    item-key="name"
                    chosen-class="chosen"
                    animation="200"
                    filter=".forbid"
                    :move="(e: any) => !e.relatedContext.element.fixed"
                  >
                    <template #item="{ element, index }">
                      <div :class="`item ux-hover nowrap r-ss ${element.fixed ? 'forbid' : 'element'}`" :key="index">
                        <label ui-form="@a type:checkbox" class="ny-xs nx-sl">
                          <input type="checkbox" :checked="!element._close" @change="element._close = element._close ? 0 : 1" />
                          <span>
                            {{ element.label }}
                            <i v-if="element.fixed" class="icon icon-fixed fs-xs"></i>
                          </span>
                        </label>
                      </div>
                    </template>
                  </draggable>
                </div>
              </template>
            </IFollowView>
          </div>
        </th>
      </tr>
    </thead>
    <tbody :ui-tbody-load="state.load">
      <template v-if="lists.length">
        <tr v-for="(item, idx) in lists" :key="idx" v-bind="rows.attrs" v-on="event(rows.event, item, 'td')">
          <td v-if="showSelectAll" col-fixed="1" min-width>
            <label class="mb-ss" ui-form="@a type:checkbox"><input type="checkbox" v-model="item.__selected" /><span></span></label>
          </td>
          <template v-for="(col, idx) in state.table" :key="idx">
            <td
              v-if="!col._close"
              :class="`${!slots.operate && idx === state._last ? 'ar' : ''}`"
              :min-width="col.fixed"
              :col-fixed="col.fixed"
              :col-fixed-side="col.fixed || 'l'"
              :data-field="col.field"
            >
              <slot v-if="slots[col.field]" :name="col.field"></slot>
              <TableColView v-else :col="col" :data="item" />
            </td>
          </template>
          <td v-if="slots.operate" col-fixed="r" class="ar"><slot name="operate" :item="item" :idx="idx"></slot></td>
        </tr>
      </template>
    </tbody>
  </table>
  <!-- 移动端 -->
  <div ui-hide=">mob">
    <table class="n-sl" ui-table="@a">
      <thead class="table-head-fixed">
        <tr>
          <th class="fs-xs ar ps nr-no">
            <div ui-flex="row xm">
              <span class="fs-xs bold">信息</span>
              <IFollowView>
                <button :ui-btn="`@a none s :square`"><Icon name="tableloader-setting" class="co-read"></Icon></button>
                <template #tips>
                  <draggable :list="state.table" :force-fallback="false" item-key="name" chosen-class="chosen" animation="200">
                    <template #item="{ element, index }">
                      <div class="item ux-hover nowrap r-ss" :key="index">
                        <label ui-form="@a type:checkbox" class="ny-xs nx-sl">
                          <input type="checkbox" :checked="!element._close" @change="element._close = element._close ? 0 : 1" />
                          <span>{{ element.label }}</span>
                        </label>
                      </div>
                    </template>
                  </draggable>
                </template>
              </IFollowView>
            </div>
          </th>
        </tr>
      </thead>
      <tbody :ui-tbody-load="state.load">
        <template v-if="lists.length">
          <tr v-for="(item, idx) in lists" :key="idx" v-bind="rows.attrs" v-on="event(rows.event, item)">
            <td ui-card="@a bk:line" class="mb-sl">
              <div ui-card-body="" class="n-ss">
                <ul>
                  <template v-for="(col, idx) in state.table" :key="idx">
                    <li v-if="!col._close" :class="`${col.fixed ? 'ps z-sm' : ''}`" ui-flex="row lm">
                      <div class="w-sl">{{ col.label }}:</div>
                      <TableColView :col="col" :data="item" />
                    </li>
                  </template>
                  <li v-if="slots.operate"><slot name="operate" :item="item" :idx="idx"></slot></li>
                </ul>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <div v-if="!lists.length" class="ny-ls o-mm" ui-flex="col cm">
    <div class="ac">
      <p><i class="icon icon-nodata fs-lm lh-ss"></i></p>
      <p>{{ words['common.nodata'] || '暂无记录' }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, onMounted, reactive, watch, ref, nextTick, onUnmounted, useSlots } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import draggable from 'vuedraggable';
  import { IFollowView, Icon } from '../../basic';
  import { itable } from '@fekit/itable';
  import TableColView from './TableColView.vue';
  import { isFunction, isObject, deepcopy } from '@fekit/utils';
  const route = useRoute();
  const router = useRouter();
  // 外部插槽
  const slots: any = useSlots();
  // 外部方法
  const emits = defineEmits(['update:table', 'onsort', 'refresh']);

  // 类型定义
  interface JSONRules {
    label: string | (() => string);
    field: string | (() => string);
    paths: string | (() => string);
    model?: string | Array<any> | (() => string | Array<any>);
    enums?: Array<any> | (() => string | Array<any>);
    rules?: Array<any> | (() => string | Array<any>);
    event?: Array<any> | (() => string | Array<any>);
    attrs?: Array<any> | (() => string | Array<any>);
    value?: any | (() => any);
    clear?: boolean | (() => boolean);
    sort?: boolean | (() => boolean);
  }
  interface Props {
    words?: { [key: string]: any };
    table: Array<JSONRules>;
    lists: Array<any>;
    showSelectAll?: boolean;
    rows?: {
      attrs?: { [key: string]: any };
      event?: { [key: string]: any };
    };
  }
  // 外部入参
  const props: any = withDefaults(defineProps<Props>(), {
    words: () => ({}),
    table: () => [],
    lists: () => [],
    showSelectAll: true,
    rows: () => ({ attrs: {}, event: {} })
  });

  // 内部数据
  const state: any = reactive({
    name: computed(() => 'confs' + route.path?.replace(/\//g, '_')),
    load: 0,
    tool: 1,
    mode: 0,
    id: 0,
    limit: computed(() => {
      const _cache = JSON.parse(localStorage.getItem(`${state.name}_limit`) || '{}');
      return (props.limit || [])?.map((item: any) => {
        if (_cache[item.field] && Object.prototype.hasOwnProperty.call(_cache[item.field], '_close')) {
          item._close = _cache[item.field]?._close;
        } else {
          if (item.close === true || item.close === 1 || item.close === 'always') {
            item._close = 1;
          }
        }
        return item;
      });
    }),
    table: [],
    param: {},
    // 列表是否全选
    isAllSelect: computed(() => {
      return (
        props.lists.length &&
        props.lists.every((item: any) => {
          return item.__selected;
        })
      );
    }),
    // 列表是否有在选行
    isHasSelect: computed(() => {
      return props.lists.filter((item: any) => {
        return item.__selected;
      });
    }),
    bulk: computed(() => {
      return props.isHasSelect.map((item: any) => {
        return item.customerId;
      });
    }),
    // 最后一列可见列
    last: 0
  });

  watch(
    () => props.table,
    () => {
      const _cache = JSON.parse(localStorage.getItem(`${state.name}_table`) || '{}');
      state._last = 0;
      state.table = deepcopy(props.table || [])
        ?.map((item: any, idx: number) => {
          // 缓存的显示信息
          if (_cache[item.field] && Object.prototype.hasOwnProperty.call(_cache[item.field], '_close')) {
            item._close = _cache[item.field]?._close;
          } else {
            if (item.close === true || item.close === 1 || item.close === 'always') {
              item._close = 1;
            }
          }
          // 缓存的排序信息
          if (_cache[item.field] && Object.prototype.hasOwnProperty.call(_cache[item.field], '_sort')) {
            item._sort = _cache[item.field]?._sort;
          }
          if (!item._close) {
            state._last = idx;
          }
          return item;
        })
        .sort((a: any, b: any) => a._sort - b._sort)
        .sort((a: any, b: any) => {
          const fixedOrder: any = { 1: -1, l: -1, r: 1 };
          const aFixed = a.fixed || '';
          const bFixed = b.fixed || '';
          return (fixedOrder[aFixed] || 0) - (fixedOrder[bFixed] || 0);
        });
    },
    {
      deep: true,
      immediate: true
    }
  );
  watch(
    [() => state.table],
    () => {
      const _table: any = {};
      state._last = 0;
      state.table.forEach((item: any, idx: number) => {
        _table[item.field] = { _sort: idx };
        if (Object.prototype.hasOwnProperty.call(item, '_close')) {
          _table[item.field]._close = item._close ? 1 : 0;
        }
        if (!item._close) {
          state._last = idx;
        }
      });
      console.log(338);
      localStorage.setItem(`${state.name}_table`, JSON.stringify(_table));
    },
    { deep: true }
  );

  // 全选
  const fSelectAll = ({ target = {} }: any = {}) => {
    props.lists.map((item: any = {}) => {
      item.__selected = target.checked;
    });
  };
  const tableRef: any = ref(null);
  onMounted(() => {
    nextTick(() => {
      if (tableRef.value) {
        itable.listen(tableRef.value);
      }
    });
  });
  watch(
    () => state.table,
    () => {
      nextTick(() => {
        itable.listen(tableRef.value);
      });
    },
    {
      deep: true
    }
  );
  onUnmounted(() => {
    itable.remove();
  });

  // 事件处理
  const event: any = (event: any, data: any): object => {
    const _event: any = {};
    if (isObject(event)) {
      for (const key in event) {
        const fun = event[key];
        if (isFunction(fun)) {
          _event[key] = (...args: any) => {
            return fun({ data, route, router }, ...args);
          };
        }
      }
    }
    return { ..._event };
  };
</script>
