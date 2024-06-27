<template>
  <div ui-date="@a" class="w-ll" :class="`${frame ? 'b-solid bk-line b-xs r-sm' : ''}`" ui-flex="col xy">
    <div ui-date-head="" class="nx-sl mt-ss ny-sm b-solid bk-back" ui-flex="row xm">
      <div ui-flex="row lm" class="o-lm">
        <div ui-btn="@a s none :square" @click="prev('y')">
          <Icon name="double-arrow-left" />
        </div>
        <div ui-btn="@a s none :square" @click="prev('m')">
          <Icon name="arrow-left" />
        </div>
      </div>
      <div ui-flex="row cm" class="nx-ss-sub">
        <div ui-flex="row cm" class="nx-ss-sub">
          <p class="mx-ss-sub">
            <b>{{ state.curr.y }}年</b>
            <b>{{ state.curr.m }}月</b>
          </p>
        </div>
      </div>
      <div ui-flex="row rm" class="o-lm">
        <div ui-btn="@a s none :square" @click="next('m')">
          <Icon name="arrow-right" />
        </div>
        <div ui-btn="@a s none :square" @click="next('y')">
          <Icon name="double-arrow-right" />
        </div>
      </div>
    </div>
    <div ui-date-body="">
      <div class="nb-sm">
        <ul ui-flex="row am" class="fs-xs nx-sm nt-sm">
          <li class="flex-block ac"><span>日</span></li>
          <li class="flex-block ac"><span>一</span></li>
          <li class="flex-block ac"><span>二</span></li>
          <li class="flex-block ac"><span>三</span></li>
          <li class="flex-block ac"><span>四</span></li>
          <li class="flex-block ac"><span>五</span></li>
          <li class="flex-block ac"><span>六</span></li>
        </ul>
        <ul ui-date-days="" ui-flex="col xm" class="flex-wrap nx-sm">
          <li v-for="(week, idx) in state.curr.days" :key="idx" :ui-date-week="idx + 1" class="flex-block" ui-flex="row am" style="margin-bottom: -0.25em">
            <div v-for="(item, i) in week" :key="i" class="pr flex-block nb-sm" ui-flex="col xy">
              <div
                v-if="item.day"
                :ui-date-day="item.day"
                class="flex-block"
                :class="`${item.range ? 'bg-main-xs' : ''} ${item.sta ? 'r-lt-sl r-lb-sl' : ''} ${item.end ? 'r-rt-sl r-rb-sl' : ''}`"
                ui-flex="col cm"
                @click="change(item)"
                @mouseenter="setRangeValue(item)"
              >
                <div
                  ui-flex="col cm"
                  class="r-sm b-solid bk-none b-xs my-ss ux-scale"
                  style="width: 1.8em; height: 1.8em"
                  :class="`${item.isLastMonth || item.isNextMonth ? 'co-idle' : item.isHoliday ? 'co-risk' : ''} ${item.selected ? 'active bg-main-lm co-fore' : 'hover-bg-weak'}`"
                >
                  <span>{{ item.day }}</span>
                </div>
              </div>
              <div class="pa full-x lh-xs ny-ss ob-no ol-no nowrap s-ml bold" style="transform-origin: 50% 110%" ui-flex="row ct" v-html="extras(item)"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="tools" ui-date-foot="" ui-flex="row xm" class="nx-sl ny-sl b-solid bk-line-mm bt-xs">
      <div ui-flex="row lm" class="nl-ss">
        <p v-if="state.date">
          <span class="nowrap">已选：</span>
          <span>{{ state.value }}</span>
        </p>
        <div v-else-if="state.shortcuts?.length" ui-flex="row lm">
          <span class="nowrap">推荐：</span>
          <div class="mr-sm-sub nx-sl-sub ny-ss-sub lh-ss nowrap fs-ss dib-sub" ui-scroll=":x y:hidden">
            <p v-for="(item, idx) in state.shortcuts" :key="idx" class="bg-main-xs co-main r-xl" ui-btn="@a xs none :round" @click="item?.func">{{ item?.text }}</p>
            <p class="bg-main-xs co-main r-xl" ui-btn="@a xs none :round"><Icon class="co-main" name="more" /></p>
          </div>
        </div>
        <div v-else>&nbsp;</div>
      </div>
      <div>
        <button v-if="state.value" ui-btn="@a xs none" class="co-risk" @click="change('')">清空</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, reactive, watch } from 'vue';
  import { idate, isDateString, isString } from '@fekit/utils';
  import { Icon } from '../basic';

  // 创建日期
  const cDate = (date: any = null) => {
    return isDateString(date) ? new Date(date) : new Date();
  };

  // 快捷预设
  const shortcutsList: any = {
    yesterday: {
      text: '昨天',
      func() {
        change({ date: idate(new Date().setDate(new Date().getDate() - 1)).format('YYYY-MM-DD') });
      }
    },
    today: {
      text: '今天',
      func() {
        change({ date: idate(new Date()).format('YYYY-MM-DD') });
      }
    },
    tomorrow: {
      text: '明天',
      func() {
        change({ date: idate(new Date().setDate(new Date().getDate() + 1)).format('YYYY-MM-DD') });
      }
    }
  };

  const emits: any = defineEmits(['update:modelValue', 'change']);
  interface Props {
    modelValue?: string | number;
    frame: boolean;
    tools?: boolean;
    range?: boolean;
    format?: string;
    picker?: 'date' | 'week' | 'month' | 'quarter';
    holiday?: object;
    shortcuts?: Array<'yesterday' | 'today' | 'tomorrow'>;
    extras?: (item: any) => string;
    rangeValue?: string;
  }
  const props: any = withDefaults(defineProps<Props>(), {
    // 值
    modelValue: '',
    // 是否显示框架
    frame: false,
    // 是否是示工具
    tools: true,
    // 时间范围
    range: false,
    // 面板类型
    picker: 'date',
    // 额外内容
    extras: (item: any) => {
      return `<i class="dib o-ms mb-xs r-xl ${item.today ? 'bg-main' : 'bg-none'}" style="width:.6em; height:.6em;"></i>`;
    },
    // 快捷选择
    shortcuts: () => ['yesterday', 'today', 'tomorrow'],
    // 数据格式化
    format: 'YYYY-MM-DD',
    // 节假日
    holiday: () => ({}),
    // 范围时间
    rangeValue: ''
  });

  // 内部数据
  const state: any = reactive({
    date: '',
    // 当前时间计算
    curr: computed(() => {
      const date = idate(state.date);
      const days = date.calendar({ group: true, value: [state.value] });
      const { y = 0, M: m = 0, d = 0 } = date.attr || {};
      return { days, y, m, d };
    }),
    // 值
    value: '',
    // 范围时间值
    rangeValue: '',
    // 快捷选择
    shortcuts: computed(() => {
      return props.shortcuts.map((item: any) => {
        return isString(item) ? shortcutsList[item] : item;
      });
    })
  });

  watch(
    () => props.modelValue,
    (value: any) => {
      state.date = value || '';
      state.value = value || '';
    },
    { deep: true, immediate: true }
  );
  // 范围时间值
  watch(
    () => props.rangeValue,
    (value: any) => {
      state.rangeValue = value;
    },
    { deep: true, immediate: true }
  );

  // 更新时间
  const upload = (a: any = 'm', b: any = 1) => {
    const date = cDate(state.date);
    if (a === 'm') {
      date.setMonth(date.getMonth() + b);
    } else {
      date.setFullYear(date.getFullYear() + b);
    }
    return idate(date).format(props.format);
  };

  // 日期前翻
  const prev = (type: any = 'm') => {
    state.date = upload(type, -1);
  };
  // 日期后翻
  const next = (type: any = 'm') => {
    state.date = upload(type, 1);
  };
  // 设置范围时间
  const setRangeValue = (item: any) => {
    if (state.value) {
      state.rangeValue = idate(item.date).format(props.format);
    }
  };

  // 向外通信
  const change = (item: any) => {
    emits('update:modelValue', item ? idate(item.date).format(props.format) : item);
    emits('change', state.value);
  };
  // 向外通信范围时间
</script>
