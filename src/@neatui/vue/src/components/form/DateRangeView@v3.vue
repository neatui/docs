<template>
  <div :class="`${frame ? 'b-solid bk-line b-xs r-sm' : ''}`" ui-flex="col xy" style="width: 41em">
    <div class="flex-block" ui-flex="row xy">
      <div class="w-ll flex-fixed" ui-flex="col xy">
        <div ui-date-head="" class="nx-sl mt-ss ny-sm b-solid bk-back" ui-flex="row xm">
          <div ui-flex="row lm" class="o-lm">
            <div ui-btn="@a s none :square" @click="prev(1, { y: -1 })">
              <Icon name="double-arrow-left" />
            </div>
            <div ui-btn="@a s none :square" @click="prev(1, { m: -1 })">
              <Icon name="arrow-left" />
            </div>
          </div>
          <div ui-flex="row cm" class="nx-ss-sub">
            <div ui-flex="row cm" class="nx-ss-sub">
              <p class="mx-ss-sub">
                <b>{{ sta.curr.y }}年</b>
                <b>{{ sta.curr.m }}月</b>
              </p>
            </div>
          </div>
          <div ui-flex="row rm">
            <div v-if="idate(sta.panel).update({ m: 1 }).time < idate(end.panel).time" ui-btn="@a s none :square" @click="next(1, { m: 1 })">
              <Icon name="arrow-right" />
            </div>
            <div v-else ui-btn="@a s none :square" class="o-sl">
              <Icon name="arrow-right" />
            </div>
            <div v-if="idate(sta.panel).update({ y: 1 }).time < idate(end.panel).time" ui-btn="@a s none :square" @click="next(1, { y: 1 })">
              <Icon name="double-arrow-right" />
            </div>
            <div v-else ui-btn="@a s none :square" class="o-sl">
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
              <li v-for="(week, idx) in sta.curr.days" :key="idx" :ui-date-week="idx + 1" class="flex-block" ui-flex="row am">
                <div v-for="(item, i) in week" :key="i" class="pr flex-block nb-sl" ui-flex="col xy">
                  <div
                    v-if="item.day"
                    :ui-date-day="item.day"
                    class="flex-block"
                    :class="`${item.range ? 'bg-main-xs' : ''} ${item.sta ? 'r-lt-sl r-lb-sl' : ''} ${item.end ? 'r-rt-sl r-rb-sl' : ''}`"
                    ui-flex="col cm"
                    @click="change(1, item)"
                  >
                    <div
                      ui-flex="col cm"
                      class="r-sm b-solid bk-none b-xs my-ss ux-scale"
                      style="width: 1.8em; height: 1.8em"
                      :class="`${item.isLastMonth || item.isNextMonth ? 'co-case' : item.holiday ? 'co-risk' : ''} ${
                        item.selected ? 'active bg-main-lm co-fore' : 'hover-bg-weak'
                      }`"
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
      </div>
      <div class="flex-block"></div>
      <div class="w-ll flex-fixed" ui-flex="col xy">
        <div ui-date-head="" class="nx-sl mt-ss ny-sm b-solid bk-back" ui-flex="row xm">
          <div ui-flex="row lm">
            <div v-if="idate(sta.panel).time < idate(end.panel).update({ y: -1 }).time" ui-btn="@a s none :square" @click="prev(2, { y: -1 })">
              <Icon name="double-arrow-left" />
            </div>
            <div v-else ui-btn="@a s none :square" class="o-sl">
              <Icon name="double-arrow-left" />
            </div>
            <div v-if="idate(sta.panel).time < idate(end.panel).update({ m: -1 }).time" ui-btn="@a s none :square" @click="prev(2, { m: -1 })">
              <Icon name="arrow-left" />
            </div>
            <div v-else ui-btn="@a s none :square" class="o-sl">
              <Icon name="arrow-left" />
            </div>
          </div>
          <div ui-flex="row cm" class="nx-ss-sub">
            <div ui-flex="row cm" class="nx-ss-sub">
              <p class="mx-ss-sub">
                <b>{{ end.curr.y }}年</b>
                <b>{{ end.curr.m }}月</b>
              </p>
            </div>
          </div>
          <div ui-flex="row rm" class="o-lm">
            <div ui-btn="@a s none :square" @click="next(2, { m: 1 })">
              <Icon name="arrow-right" />
            </div>
            <div ui-btn="@a s none :square" @click="next(2, { y: 1 })">
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
              <li v-for="(week, idx) in end.curr.days" :key="idx" :ui-date-week="idx + 1" class="flex-block" ui-flex="row am">
                <div v-for="(item, i) in week" :key="i" class="pr flex-block nb-sl" ui-flex="col xy">
                  <div
                    v-if="item.day"
                    :ui-date-day="item.day"
                    class="flex-block"
                    :class="`${item.range ? 'bg-main-xs' : ''} ${item.sta ? 'r-lt-sl r-lb-sl' : ''} ${item.end ? 'r-rt-sl r-rb-sl' : ''}`"
                    ui-flex="col cm"
                    @click="change(2, item)"
                  >
                    <div
                      ui-flex="col cm"
                      class="r-sm b-solid bk-none b-xs my-ss ux-scale"
                      style="width: 1.8em; height: 1.8em"
                      :class="`${item.isLastMonth || item.isNextMonth ? 'co-case' : item.holiday ? 'co-risk' : ''} ${
                        item.selected ? 'active bg-main-lm co-fore' : 'hover-bg-weak'
                      }`"
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
      </div>
    </div>
    <div v-if="tools" ui-date-foot="" ui-flex="row xm" class="nx-sl ny-sl b-solid bk-line-ls bt-xs">
      <div ui-flex="row lm" class="nl-ss">
        <p v-if="sta.value || end.value">
          <span class="nowrap">已选：</span>
          <span>{{ sta.value || '-' }} ~ {{ end.value || '-' }}</span>
        </p>
        <div v-else-if="com.shortcuts?.length" ui-flex="row lm">
          <span class="nowrap">推荐：</span>
          <div class="mr-sm-sub nx-sl-sub ny-ss-sub lh-ss nowrap fs-ss dib-sub" ui-scroll=":x y:hidden">
            <p v-for="(item, idx) in com.shortcuts" :key="idx" class="bg-main-xs co-main r-xl" ui-btn="@a xs none :round" @click="item?.func">{{ item?.text }}</p>
            <p class="bg-main-xs co-main r-xl" ui-btn="@a xs none :round"><Icon class="co-main" name="more" /></p>
          </div>
        </div>
        <div v-else>&nbsp;</div>
      </div>
      <div>
        <button v-if="sta.value" ui-btn="@a xs none" class="co-risk" @click="remove()">清空</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, reactive, watch } from 'vue';
  import { idate, isDateString, isString } from '@fekit/utils';
  import { Icon } from '../basic';

  // 创建日期
  // const cDate = (date: any = null) => {
  //   return isDateString(date) ? new Date(date) : new Date();
  // };

  // 快捷预设
  const shortcutsList: any = {
    yesterday: {
      text: '昨天',
      func() {
        change(0, { date: idate(new Date().setDate(new Date().getDate() - 1)).format('YYYY-MM-DD') });
      }
    },
    today: {
      text: '今天',
      func() {
        change(0, { date: idate(new Date()).format('YYYY-MM-DD') });
      }
    },
    tomorrow: {
      text: '明天',
      func() {
        change(0, { date: idate(new Date().setDate(new Date().getDate() + 1)).format('YYYY-MM-DD') });
      }
    }
  };

  const emits: any = defineEmits(['update:modelValue', 'change']);

  interface PickerRange {
    y?: number;
    m?: number;
    d?: number;
  }
  interface Props {
    modelValue?: Array<string | number>;
    frame: boolean;
    tools?: boolean;
    range?: boolean;
    pickerRange?: PickerRange;
    format?: string;
    picker?: 'date' | 'week' | 'month' | 'quarter';
    holiday?: object;
    shortcuts?: Array<'yesterday' | 'today' | 'tomorrow'>;
    extras?: (item: any) => string;
  }
  const props: any = withDefaults(defineProps<Props>(), {
    // 值
    modelValue: () => [],
    // 是否显示框架
    frame: false,
    // 是否是示工具
    tools: true,
    // 时间范围
    range: true,
    // 面板类型
    picker: 'date',
    // 面板范围
    pickerRange: () => ({ y: 0, m: 1, d: 0 }),
    // 额外内容
    extras: (item: any) => {
      return `<i class="dib o-ms mb-xs r-xl ${item.today ? 'bg-main' : 'bg-none'}" style="width:.6em; height:.6em;"></i>`;
    },
    // 快捷选择
    shortcuts: () => ['yesterday', 'today', 'tomorrow'],
    // 数据格式化
    format: 'YYYY-MM-DD',
    // 节假日
    holiday: () => ({})
  });

  // 公共数据
  const com: any = reactive({
    // 快捷选择
    shortcuts: computed(() => {
      return props.shortcuts.map((item: any) => {
        return isString(item) ? shortcutsList[item] : item;
      });
    })
  });

  // 开始数据
  const sta: any = reactive({
    // 面板日期
    panel: '',
    // 值
    value: '',
    // 当前时间计算
    curr: computed(() => {
      const date = idate(sta.panel);
      const days = date.calendar({ group: true, value: [sta.value, end.value] });
      const { y = 0, M: m = 0, d = 0 } = date.attr || {};
      return { days, y, m, d };
    })
  });

  // 结束数据
  const end: any = reactive({
    panel: '',
    value: '',
    // 当前时间计算
    curr: computed(() => {
      const date = idate(end.panel);
      const days = date.calendar({ group: true, value: [sta.value, end.value] });
      const { y = 0, M: m = 0, d = 0 } = date.attr || {};
      return { days, y, m, d };
    })
  });

  const init = ([a = '', b = '']: any = []) => {
    console.log(a, b);
    // 开始
    if (a && isDateString(a)) {
      sta.panel = a;
      sta.value = idate(a).format(props.format);
    }
    // 结束
    if (b && isDateString(b)) {
      if (a) {
        if (idate(b) >= idate(a)) {
          if (!b) {
            end.panel = idate(b).update(props.pickerRange).format(props.format);
          }
          end.value = idate(b).format(props.format);
        } else {
          sta.panel = b;
          if (!b) {
            end.panel = idate(a).update(props.pickerRange).format(props.format);
          }
          sta.value = idate(b).format(props.format);
          end.value = idate(a).format(props.format);
        }
      } else {
        sta.panel = b;
        sta.value = idate(b).format(props.format);
      }
    }
    if (!a && !b) {
      sta.panel = idate().format(props.format);
      end.panel = idate().update(props.pickerRange).format(props.format);
    }
  };

  watch(() => props.modelValue, init, { deep: true, immediate: true });
  watch(
    [() => sta.value, () => end.value],
    ([sta = '', end = '']: any = []) => {
      if ((sta && end) || (!sta && !end)) {
        emits('update:modelValue', [sta, end]);
      }
    },
    { deep: true, immediate: true }
  );

  // 日期前翻
  const prev = (panel: any = 0, type: any = { m: 1 }) => {
    if (panel === 1) {
      sta.panel = idate(sta.panel).update(type).format('YYYY-MM-DD');
    }
    if (panel === 2) {
      end.panel = idate(end.panel).update(type).format('YYYY-MM-DD');
    }
  };
  // 日期后翻
  const next = (panel: any = 0, type: any = 'm') => {
    if (panel === 1) {
      sta.panel = idate(sta.panel).update(type).format('YYYY-MM-DD');
    }
    if (panel === 2) {
      end.panel = idate(end.panel).update(type).format('YYYY-MM-DD');
    }
  };

  // 向外通信
  const change = (_panel: any = 0, item: any = '') => {
    // 如果已有值则清空
    if (sta.value && end.value) {
      sta.value = '';
      end.value = '';
    }

    if (!sta.value) {
      sta.value = idate(item.date).format(props.format);
    } else {
      if (idate(item.date).time < idate(sta.value).time) {
        end.value = idate(sta.value).format(props.format);
        sta.value = idate(item.date).format(props.format);
      } else {
        end.value = idate(item.date).format(props.format);
      }
    }
    // 更新面板
    // if (sta.value) {
    //   sta.panel = sta.value;
    // }
    // const { y: sta_y = '', M: sta_m = '' } = idate(sta.panel).attr || {};
    // const { y: end_y = '', M: end_m = '' } = idate(end.value).attr || {};
    // if (end.value && idate(`${end_y}-${end_m}-1`).time > idate(`${sta_y}-${sta_m}-1`).time) {
    //   console.log(370, sta.panel, end.value, idate(`${end_y}-${end_m}-1`).time > idate(`${sta_y}-${sta_m}-1`).time);
    //   end.panel = end.value;
    // }
  };

  const remove: any = () => {
    sta.value = '';
    end.value = '';
    init([]);
  };
</script>
