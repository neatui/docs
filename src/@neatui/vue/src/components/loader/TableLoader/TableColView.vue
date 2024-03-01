<template>
  <template v-if="isArray(json.child)">
    <div :class="json?.attrs?.class?.includes('wrap') ? 'wrap' : 'nowrap'" v-bind="json.attrs" v-on="event(json, data)">
      <TableColView v-for="(sub, idx) in col.child" :key="idx" :col="sub" :data="data" />
    </div>
  </template>
  <template v-else-if="json.popup">
    <IFollowView>
      <TableColView :col="{ ...col, popup: null }" :data="data" />
      <template #tips>
        <TableColView :col="isFunction(col.popup) ? col.popup(data) : col.popup" :data="data" />
      </template>
    </IFollowView>
  </template>
  <template v-else>
    <div v-if="json.model === 'Image'" :class="json?.attrs?.class?.includes('wrap') ? 'wrap' : 'nowrap'" ui-img="@a read :round" v-bind="json.attrs" v-on="event(json, data)">
      <img :src="json.value || data[json.field] || DefaultImage" alt="" />
    </div>
    <div
      v-else
      :class="json?.attrs?.class?.includes('wrap') ? 'wrap' : 'nowrap'"
      v-bind="json.attrs"
      v-on="event(json, data)"
      v-html="
        json.value !== null && json.value !== undefined
          ? isFunction(json.value)
            ? json.value(json)
            : json.value
          : findEnumName(json.enums, data[json.field]) !== null && findEnumName(json.enums, data[json.field]) !== undefined
            ? findEnumName(json.enums, data[json.field])
            : '‐‐'
      "
    ></div>
  </template>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';
  import { isFunction, isArray, isObject, deepcopy } from '@fekit/utils';
  import { useRoute, useRouter } from 'vue-router';
  import TableColView from './TableColView.vue';
  import { IFollowView } from '../../basic';

  const DefaultImage =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACmBAMAAACipulEAAAAHlBMVEXMzMz////z8/Pf39/Z2dnS0tLq6urk5OTu7u74+PjCLuPVAAABxUlEQVRo3u2YsUsDMRSHX9Wzupn22qObVxAd7SCuV1BwvGrVtQcqjlYQHFVEVzv575qklReE9urlFTL8vqUvQz+Se3m5yyMAAAAAAAAAAAAAsFIu7rvz+DiqprxSi7itotxQi8kqOHslzqbHNAUnul3q/PJYutzi01Jn47/KSBm+jxep8yopSojqgklaV5qRDor5zsMKTru4gazTJmEtfKcyQU3Waf/UE3bGXPb7p5fDRwmnuhkWyvJEhmt/JzOiKZtyzph+6Us5O1zY0UTI2TKy5+4nl5W/M9PpT00NmEDG2dbDgiMR5w7R1ix84brycz7oyfGU6yLO3HmIGUUSzoY9m3jxqYAzsRuIt9VYwBm7Z1OTB57Owt1XfQFn649zEOg8YzctiYyz6Wpizxzxcmtunb5K1JGtR65TkdrMiCazsMOHnZ9zlx9ozHXq5XTfyBnr/ZwdPTy30Z6OJr5OfhOf6d934tPZ15mQJjrJSVN4O3mi/NEg5GzkNCVKBZy8estYeTuZdmbuDYWScDIHd29KSTmZEJ26GsUvxpEqJw/gDrvMXTuInsASvYsgeizlvaBAelZlvTUAAAAAAAAAAAAAsEp+AEDOpCBEwOONAAAAAElFTkSuQmCC';

  // 通过枚举值查找枚举名
  const findEnumName = (enums: any, val: any, join: boolean | string = ' Ι ') => {
    // 转换核心
    const _core = (v: any) => {
      const { label = v }: any = enums.find(({ value = '' }: any) => value == v) || {};
      return label;
    };
    // 判断枚举字典是否可用
    if (enums && enums.find) {
      // 兼容多种入参类型
      if (isArray(val)) {
        // 数组
        const arr = val.map((i: any) => _core(i));
        return join ? arr.join(join) : arr;
      } else {
        return _core(val);
      }
    } else {
      return val;
    }
  };

  const route = useRoute();
  const router = useRouter();

  const props: any = defineProps({
    col: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: [Object],
      default: () => ({})
    }
  });

  // 运行函数计算
  const runfun = (obj: any): any => {
    if (isArray(obj)) {
      obj = obj.map((i: any) => runfun(i));
    } else if (isObject(obj)) {
      for (const k in obj) {
        if (k !== 'event') {
          obj[k] = runfun(obj[k]);
        }
      }
    } else if (isFunction(obj)) {
      obj = obj(deepcopy(props.data));
    }
    return obj;
  };

  const json = computed(() => runfun(deepcopy(props.col)));

  // 事件处理
  const event: any = (col: any, data: any): object => {
    const _event: any = {};
    if (isObject(col.event)) {
      for (const key in col.event) {
        const fun = col.event[key];
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
