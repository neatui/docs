<template>
  <div ui-date="@a" class="fekit-date-view pr" :class="`${frame ? 'b-solid b-line b-xs r-sm' : ''}`" ui-flex="col xy" style="width: 22em">
    <div ui-date-head="" class="flex-fixed nx-sl mt-ss ny-sm b-solid b-back" ui-flex="row xm">
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
          <p class="nowrap" ui-flex="row cm" ui-btns="@a none xs">
            <b class="nx-ss" @click="setPanelType('year')">{{ state.curr.y }}年</b>
            <b class="nx-ss" @click="setPanelType('month')">{{ state.curr.M }}月</b>
            <!-- <b class="nx-ss" @click="setPanelType('time')">时间</b> -->
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
    <div ui-date-body="" class="flex-block pr">
      <div class="full">
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
                :class="`${item.range ? 'bg-main+o-xs' : ''} ${item.sta ? 'r-lt-sl r-lb-sl' : ''} ${item.end ? 'r-rt-sl r-rb-sl' : ''}`"
                ui-flex="col cm"
                @click="change(item)"
                @mouseenter="setRangeValue(item)"
              >
                <div
                  ui-flex="col cm"
                  class="r-sm b-solid bk-none b-xs my-ss ux-scale"
                  style="width: 1.8em; height: 1.8em"
                  :class="`${item.isLastMonth || item.isNextMonth ? 'co-idle' : item.isHoliday ? 'co-risk' : ''} ${
                    item.selected ? 'active bg-main+o-lm co-fore' : 'hover-bg-weak'
                  }`"
                >
                  <span>{{ item.day }}</span>
                </div>
              </div>
              <div class="pa full-x lh-xs ny-ss ob-no ol-no nowrap s-ml bold" style="transform-origin: 50% 100%" ui-flex="row ct" v-html="extras(item)"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!state.isNoTime" class="ny-sm nx-ms">
      <div class="full ac b-solid b-back b-xs r-sm" ui-row="mob-8" style="width: 100%; height: 3em; padding: 0.5em">
        <ul
          :style="`${state.panel ? '' : 'pointer-events: none; opacity:.35'}`"
          class="fekit-date-view-time-scroll"
          ref="ths"
          ui-scroll=":y xs"
          ui-btns="@a none s :block"
          data-type="h"
          @scroll="timeScroll"
        >
          <li v-for="(item, idx) in hours" :key="idx">
            {{ item }}
          </li>
        </ul>
        <ul
          :style="`${state.panel ? '' : 'pointer-events: none; opacity:.35'}`"
          class="fekit-date-view-time-scroll"
          ref="tms"
          ui-scroll=":y xs"
          ui-btns="@a none s :block"
          data-type="m"
          @scroll="timeScroll"
        >
          <li v-for="(item, idx) in seconds" :key="idx">
            {{ item }}
          </li>
        </ul>
        <ul
          :style="`${state.panel ? '' : 'pointer-events: none; opacity:.35'}`"
          class="fekit-date-view-time-scroll"
          ref="tss"
          ui-scroll=":y xs"
          ui-btns="@a none s :block"
          data-type="s"
          @scroll="timeScroll"
        >
          <li v-for="(item, idx) in seconds" :key="idx">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div v-if="tools" ui-date-foot="" ui-flex="row xm" class="flex-fixed nx-sl ny-sl b-solid bk-line+o-mm bt-xs">
      <div ui-flex="row lm" class="nl-ss">
        <div v-if="state.panel" ui-flex="row lm">
          <span :anim-editing="state.type === 'date'" ui-btn="@a xs none" class="nx-ss" @click="setPanelType('date')">{{ idate(state.panel).format('YYYY-MM-DD') }}</span>
          <span v-if="!state.isNoTime" :anim-editing="state.type === 'time'" ui-btn="@a xs none" class="nx-ss" @click="setPanelType('time')">
            {{ idate(state.panel).format('HH:mm:ss') }}
          </span>
        </div>
        <div v-else-if="state.shortcuts?.length" ui-flex="row lm">
          <div class="mr-sm-sub nx-sl-sub ny-ss-sub lh-ss nowrap fs-ss dib-sub" ui-scroll=":x y:hidden">
            <p v-for="(item, idx) in state.shortcuts" :key="idx" class="bg-main+o-xs co-main r-xl" ui-btn="@a xs none :round" @click="item?.func">{{ item?.text }}</p>
            <p class="bg-main+o-xs co-main r-xl" ui-btn="@a xs none :round"><Icon class="co-main" name="more" /></p>
          </div>
        </div>
        <div>&nbsp;</div>
      </div>
      <div class="ml-ss-sub" ui-flex="row rm">
        <button v-if="state.panel" ui-btn="@a xs none" class="nx-ss co-risk" @click="remove">清除</button>
        <button v-if="state.panel && !state.isNoTime" ui-btn="@a xs none" class="nx-ss co-main" @click="update">确定</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, ref, reactive, watch, onMounted } from 'vue';
  import { idate, isDateString, isObject, isString } from '@fekit/utils';
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

  const emits: any = defineEmits(['update:modelValue', 'change', 'update']);
  interface TimeProps {
    h: boolean | number;
    m?: boolean | number;
    s?: boolean | number;
  }
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
    time?: boolean | TimeProps;
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
    time: false
  });

  // 小时
  const hours = computed(() => {
    const _hours: any = [];
    for (let i = 0; i < 24; i++) {
      _hours.push(i > 9 ? `${i}` : `0${i}`);
    }
    return _hours;
  });
  // 分秒
  const seconds = computed(() => {
    const _seconds: any = [];
    for (let i = 0; i < 60; i++) {
      _seconds.push(i > 9 ? `${i}` : `0${i}`);
    }
    return _seconds;
  });

  // 内部数据
  const state: any = reactive({
    // 面板显示时间
    panel: '',
    // 当前时间计算
    curr: computed(() => {
      const date = idate(state.panel);
      const days = date.calendar({ group: true, value: [state.panel] });
      return { days, ...date.attr };
    }),
    type: 'date',
    // 值
    value: '',
    // 快捷选择
    shortcuts: computed(() => {
      return props.shortcuts.map((item: any) => {
        return isString(item) ? shortcutsList[item] : item;
      });
    }),
    isNoTime: computed(() => {
      if (isObject(props.time)) {
        return !(props.time.h || props.time.m || props.time.s);
      } else {
        return !props.time;
      }
    })
  });

  const ths: any = ref(null);
  const tms: any = ref(null);
  const tss: any = ref(null);
  const setTimeValue = () => {
    const { H = 0, m = 0, s = 0 }: any = state.curr || {};
    if (state.panel) {
      if (ths.value && ths.value.children[H]) {
        ths.value.scrollTop = ths.value.children[H].offsetTop;
      }
      if (tms.value && tms.value.children[m]) {
        tms.value.scrollTop = tms.value.children[m].offsetTop;
      }
      if (tss.value && tss.value.children[s]) {
        tss.value.scrollTop = tss.value.children[s].offsetTop;
      }
    } else {
      if (ths.value && ths.value.children[H]) {
        ths.value.scrollTop = ths.value.children[0].offsetTop;
      }
      if (tms.value && tms.value.children[m]) {
        tms.value.scrollTop = tms.value.children[0].offsetTop;
      }
      if (tss.value && tss.value.children[s]) {
        tss.value.scrollTop = tss.value.children[0].offsetTop;
      }
    }
  };

  watch(
    () => props.modelValue,
    (value: any) => {
      // 面板显示日期
      state.panel = value || '';
      // 值
      state.value = value || '';
    },
    { deep: true, immediate: true }
  );

  onMounted(() => {
    setTimeValue();
  });
  watch(
    () => state.panel,
    () => {
      setTimeValue();
    }
  );

  // 更新时间
  const upload = (a: any = 'm', b: any = 1) => {
    const date = cDate(state.panel);
    if (a === 'm') {
      date.setMonth(date.getMonth() + b);
    } else {
      date.setFullYear(date.getFullYear() + b);
    }
    return idate(date).format(props.format);
  };

  // 日期前翻
  const prev = (type: any = 'm') => {
    state.panel = upload(type, -1);
  };
  // 日期后翻
  const next = (type: any = 'm') => {
    state.panel = upload(type, 1);
  };

  // 向外通信
  const change = (item: any) => {
    state.panel = item ? idate(item.date).format(props.format) : item;
    emits('change', state.value);
    if (state.isNoTime) {
      update();
    }
  };

  // 清空日期
  const remove = () => {
    state.panel = '';
    update();
  };

  // 更新数据
  const update = () => {
    emits('update:modelValue', state.panel ? idate(state.panel).format(props.format) : '');
    emits('update', state.panel ? idate(state.panel).format(props.format) : '');
  };

  // 设置范围
  const setRangeValue = (item: any) => {};
  // 设置面板类型
  const setPanelType = (type: any) => {
    state.type = type;
  };

  // 时间滚动
  const _timer: any = ref(null);
  const timeScroll = (ev: any) => {
    const item: any = ev.target?.children[0];
    const type: any = ev.target.getAttribute('data-type') || '';
    if (state.panel && item) {
      clearTimeout(_timer.value);
      _timer.value = setTimeout(() => {
        const h = item.offsetHeight;
        const index = Math.floor(ev.target.scrollTop / h);
        const { YYYY = 0, MM = 0, DD = 0, HH = '', mm = '', ss = '' }: any = state.curr || {};
        if (type === 'h') {
          state.panel = idate(`${YYYY}-${MM}-${DD} ${index}:${mm}:${ss}`).format('YYYY-MM-DD HH:mm:ss');
        }
        if (type === 'm') {
          state.panel = idate(`${YYYY}-${MM}-${DD} ${HH}:${index}:${ss}`).format('YYYY-MM-DD HH:mm:ss');
        }
        if (type === 's') {
          state.panel = idate(`${YYYY}-${MM}-${DD} ${HH}:${mm}:${index}`).format('YYYY-MM-DD HH:mm:ss');
        }
      }, 100);
    }
  };
</script>
<style lang="scss">
  .fekit-date-view-time-scroll {
    position: relative;
    height: 100%;
    scroll-snap-type: y mandatory;
    & > * {
      scroll-snap-align: center;
    }
  }
</style>
