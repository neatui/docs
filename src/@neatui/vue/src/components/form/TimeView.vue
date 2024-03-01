<template>
  <div :class="`${frame ? 'b-solid b-line b-xs r-sm' : ''}`" ui-flex="col xy">
    <div ui-calendar-head="" class="nx-sl ny-sm b-solid b-line bb-xs">
      <div ui-flex="row lm"></div>
      <div ui-flex="row cm" class="nx-ss-sub">
        <p class="mx-ss-sub">
          <b>{{ curr.y }}年</b>
          <b>{{ curr.m }}月</b>
          <b>{{ curr.d }}日</b>
        </p>
      </div>
      <div ui-flex="row rm"></div>
    </div>
    <div ui-flex="row am" class="fs-xs bold nx-sl nt-sm"><span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span></div>
    <div>
      <ul ui-calendar-days="" ui-flex="row lm" class="flex-wrap nx-sm">
        <li class="ew7 n-sm ux-none" v-for="(item, idx) in curr.days" :key="idx">
          <div v-if="item.day" @click="change(item)" ui-cover="-xs">
            <div
              ui-flex="col cm"
              class="r-sm b-solid bk-none b-xs"
              :class="`${item.isToday ? 'bk-main+o-ls' : item.isLastMonth || item.isNextMonth ? 'co-note' : item.isHoliday ? 'co-risk' : ''} ${
                state.selected && state.selected === item.date ? 'active bg-main+o-ls co-fore' : 'hover-bg-weak'
              }`"
            >
              <span>{{ item.day }}</span>
              <sup style="font-size: 0.6em; margin-top: -0.3em; position: absolute; left: 100%; top: 0" v-if="item.holiday" class="lh-ss">休</sup>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div ui-calendar-foot="" ui-flex="row xm" class="nx-sl nb-sl">
      <div ui-flex="row lm">
        <div ui-btn="@a s none :square" @click="prev('y')">
          <svg style="width: 1em; height: 1em" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M220.1 481.5L502 199.3c7.6-7.6 17.8-11.8 28.5-11.8s20.9 4.2 28.5 11.8c7.5 7.6 11.8 17.8 11.8 28.5s-4.2 20.9-11.8 28.5L305.5 510l253.4 253.7c7.3 7.6 11.4 17.8 11.3 28.4-0.1 10.6-4.3 20.7-11.8 28.2-7.5 7.5-17.6 11.7-28.1 11.8-10.6 0.1-20.7-4-28.3-11.3L220.1 538.5c-7.5-7.6-11.8-17.8-11.8-28.5s4.2-21 11.8-28.5z"
              p-id="3429"
            ></path>
            <path
              d="M453.3 514.5c0-10.7 4.2-20.9 11.8-28.5L747 203.9c7.6-7.6 17.8-11.8 28.5-11.8s20.9 4.2 28.5 11.8c7.5 7.6 11.8 17.8 11.8 28.5s-4.2 20.9-11.8 28.5L550.5 514.5l253.4 253.7c7.3 7.6 11.4 17.8 11.3 28.4-0.1 10.6-4.3 20.7-11.8 28.2-7.5 7.5-17.6 11.7-28.1 11.8-10.6 0.1-20.7-4-28.3-11.3L465.1 543c-7.5-7.5-11.8-17.8-11.8-28.5z"
              p-id="3430"
            ></path>
          </svg>
        </div>
        <div ui-btn="@a s none :square" @click="prev('m')">
          <svg style="width: 1em; height: 1em" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M684.2 827.6c-7.7 7.7-18.1 12-28.9 12-10.9 0-21.3-4.3-28.9-12L339.8 540.7c-7.7-7.7-12-18.1-12-29 0-10.9 4.3-21.3 12-29l286.6-286.9c7.7-7.5 18.1-11.6 28.8-11.5 10.7 0.1 21 4.4 28.6 12 7.6 7.6 11.9 17.9 12 28.6 0.1 10.7-4 21.1-11.5 28.8L426.6 511.8l257.6 257.9c7.7 7.7 12 18.1 12 29s-4.3 21.2-12 28.9z"
              p-id="1281"
            ></path>
          </svg>
        </div>
      </div>
      <div ui-flex="row cm" class="nx-ss-sub">
        <ul class="fs-xs n-sm-sub" ui-flex="row lm">
          <li ui-btn="@a s none">年</li>
          <li ui-btn="@a s none">月</li>
          <li ui-btn="@a s none">日</li>
        </ul>
      </div>
      <div ui-flex="row rm">
        <div ui-btn="@a s none :square" @click="next('m')">
          <svg style="width: 1em; height: 1em" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M339.8 827.6c-7.7-7.7-12-18.1-12-29s4.3-21.3 12-29l257.6-257.9-257.6-257.9c-7.5-7.7-11.6-18.1-11.5-28.8 0.1-10.7 4.4-21 12-28.6 7.6-7.6 17.9-11.9 28.6-12 10.7-0.1 21.1 4 28.8 11.5l286.6 286.9c7.7 7.7 12 18.1 12 29 0 10.9-4.3 21.3-12 29L397.7 827.6c-7.7 7.7-18.1 12-28.9 12-10.9 0-21.4-4.3-29-12z"
              p-id="3084"
            ></path>
          </svg>
        </div>
        <div ui-btn="@a s none :square" @click="next('y')">
          <svg style="width: 1em; height: 1em" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M803.9 481.5L522.1 199.3a40.18 40.18 0 0 0-28.5-11.8c-10.7 0-20.9 4.2-28.5 11.8-7.5 7.6-11.8 17.8-11.8 28.5s4.2 20.9 11.8 28.5L718.5 510 465.1 763.6c-7.3 7.6-11.4 17.8-11.3 28.4 0.1 10.6 4.3 20.7 11.8 28.2 7.5 7.5 17.6 11.7 28.1 11.8 10.6 0.1 20.7-4 28.3-11.3l281.9-282.2c7.5-7.6 11.8-17.8 11.8-28.5s-4.2-21-11.8-28.5z"
              p-id="3256"
            ></path>
            <path
              d="M570.7 514.5c0-10.7-4.2-20.9-11.8-28.5L277 203.9a40.18 40.18 0 0 0-28.5-11.8c-10.7 0-20.9 4.2-28.5 11.8-7.5 7.6-11.8 17.8-11.8 28.5s4.2 20.9 11.8 28.5l253.4 253.7-253.3 253.6c-7.3 7.6-11.4 17.8-11.3 28.4 0.1 10.6 4.3 20.7 11.8 28.2 7.5 7.5 17.6 11.7 28.1 11.8 10.6 0.1 20.7-4 28.3-11.3L558.9 543c7.5-7.5 11.8-17.8 11.8-28.5z"
              p-id="3257"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, reactive, toRefs } from 'vue';
  import { idate } from '@fekit/utils';
  // 创建日期
  const cDate = (date: any = null) => {
    const _date = new Date(date);
    return date && _date instanceof Date && !isNaN(_date.getTime()) ? _date : new Date();
  };
  // 个位补零
  const numfill = (num: string | number = '') => {
    return Number(num) < 10 ? `0${num}` : num;
  };
  // 外部入参
  const props = defineProps({
    frame: { type: Boolean, default: false },
    theme: { type: String, default: '@a' },
    sz: { type: String, default: 'm' },
    co: { type: String, default: '' },
    block: { type: Boolean, default: true },
    // 提示文案
    tips: {
      type: String,
      default: ''
    },
    // 提示文案
    placeholder: {
      type: String,
      default: ''
    },
    // 格式
    format: {
      type: String,
      default: ''
    },
    // 值
    value: {
      type: [String, Number],
      default: ''
    },
    // 值
    modelValue: { type: [String, Number], default: '' },
    // 节假日
    holiday: {
      type: Object,
      default: () => ({})
    },
    // 校验规则
    rules: {
      type: Array,
      default: () => []
    },
    // 是否是示校验图标
    verify: {
      type: Boolean,
      default: false
    }
  });

  // 内部数据
  const state: any = reactive({
    view: 1,
    show: 0,
    pos: 'bl',
    selected: '',
    date: props.value,
    curr: computed(() => {
      const date = cDate(state.date);
      const calendar = [];
      // 年
      const y: any = date.getFullYear();
      // 月
      const m: any = date.getMonth() + 1;
      // 日
      const d: any = date.getDate();
      // 本月第一天星期几
      const w = new Date(`${y}-${m}-1`).getDay();
      // 当前月份一共几天
      const days = new Date(y, m, 0).getDate();

      // 当前
      const curr = new Date();
      const curr_y = curr.getFullYear();
      const curr_m = curr.getMonth() + 1;
      const curr_d = curr.getDate();

      // 上月
      const last = new Date(y, m - 1, 0);
      const last_y = last.getFullYear();
      const last_m = last.getMonth() + 1;

      // 下月
      const next = new Date(y, m + 1, 0);
      const next_y = next.getFullYear();
      const next_m = next.getMonth() + 1;
      let prevdays = last.getDate();

      for (let i = 0; i < w; i++) {
        calendar.unshift({
          date: `${last_y}-${numfill(last_m)}-${prevdays}`,
          day: prevdays,
          isLastMonth: 1
        });
        prevdays = prevdays - 1;
      }
      for (let i = 1; i <= days; i++) {
        const _i = numfill(i);
        calendar.push({
          date: `${y}-${numfill(m)}-${_i}`,
          day: _i,
          isToday: curr_y === y && curr_m === m && curr_d === i,
          isHoliday: props.holiday[`${y}-${numfill(m)}-${_i}`]?.name ? 1 : 0,
          holiday: props.holiday[`${y}-${numfill(m)}-${_i}`]?.name
        });
      }
      for (let i = 1; calendar.length < 42; i++) {
        const _i = numfill(i);
        calendar.push({
          date: `${next_y}-${numfill(next_m)}-${_i}`,
          day: _i,
          isNextMonth: 1
        });
      }
      return { days: calendar, y, m, d };
    }),
    value: computed(() => {
      return props.format ? idate(state.selected || props.value).format(props.format) : state.selected || props.value;
    })
  });
  const { curr = {} }: any = toRefs(state);

  const upload = (a: any = 'm', b: any = 1) => {
    const date = cDate(state.date);
    if (a === 'm') {
      date.setMonth(date.getMonth() + b);
    } else {
      date.setFullYear(date.getFullYear() + b);
    }
    return date.toISOString().substring(0, 10);
  };

  // 日期前翻
  const prev = (type: any = 'm') => {
    state.date = upload(type, -1);
  };
  // 日期后翻
  const next = (type: any = 'm') => {
    state.date = upload(type, 1);
  };

  // 向外通信
  const emits = defineEmits(['change']);
  const change = (item: any) => {
    state.selected = item.date;
    state.date = item.date;
    emits('change', item.date);
  };
</script>
