<template>
  <div ui-date="@a" class="fekit-date-view pr" :class="`${frame ? 'b-solid b-line b-xs r-sm' : ''}`" ui-flex="col xy" style="width: 31em; height: 24.5em">
    <div class="flex-block" ui-flex="row xy">
      <div style="width: 20em; height: 100%">
        <div ui-date-head="" class="h-xs+ flex-fixed nx-sl mt-ss ny-ss b-solid b-back -bb-xs" ui-flex="row xm">
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
              <p class="nx-ss-sub nowrap" ui-flex="row cm" ui-btns="@a none xs">
                <b @click="setPanelType('year')">{{ state.curr.y }}年</b>
                <b @click="setPanelType('month')">{{ state.curr.m }}月</b>
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
          <div class="full nb-sm">
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
      </div>
      <div style="width: 11em" class="flex-fixed b-solid b-back bl-xs" ui-flex="col xy">
        <div ui-date-head="" class="h-xs+ flex-fixed nx-sl mt-ss ny-ss b-solid b-back -bb-xs" ui-flex="row cm">
          <div ui-flex="row cm" class="nx-ss-sub">
            <div ui-flex="row cm" class="nx-ss-sub">
              <p class="nx-ss-sub nowrap" ui-flex="row cm" ui-btns="@a none xs">
                <b @click="setPanelType('year')">时间</b>
              </p>
            </div>
          </div>
        </div>
        <div ui-date-body="" class="flex-block pr nl-ss n-ss-sub ac">
          <div class="full" ui-row="mob-8">
            <div class="full" ui-scroll=":y" style="padding-bottom: 15.2em">
              <ul ui-btns="@a none s :block">
                <li>00</li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>04</li>
                <li>05</li>
                <li>06</li>
                <li>07</li>
                <li>08</li>
                <li>09</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
              </ul>
            </div>
            <div class="full" ui-scroll=":y" style="padding-bottom: 15.2em">
              <ul ui-btns="@a none s :block">
                <li>00</li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>04</li>
                <li>05</li>
                <li>06</li>
                <li>07</li>
                <li>08</li>
                <li>09</li>

                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>

                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>

                <li>30</li>
                <li>31</li>
                <li>32</li>
                <li>33</li>
                <li>34</li>
                <li>35</li>
                <li>36</li>
                <li>37</li>
                <li>38</li>
                <li>39</li>

                <li>40</li>
                <li>41</li>
                <li>42</li>
                <li>43</li>
                <li>44</li>
                <li>45</li>
                <li>46</li>
                <li>47</li>
                <li>48</li>
                <li>49</li>

                <li>50</li>
                <li>51</li>
                <li>52</li>
                <li>53</li>
                <li>54</li>
                <li>55</li>
                <li>56</li>
                <li>57</li>
                <li>58</li>
                <li>59</li>
              </ul>
            </div>
            <div class="full" ui-scroll=":y" style="padding-bottom: 15.2em">
              <ul ui-btns="@a none s :block">
                <li>00</li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>04</li>
                <li>05</li>
                <li>06</li>
                <li>07</li>
                <li>08</li>
                <li>09</li>

                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>

                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>

                <li>30</li>
                <li>31</li>
                <li>32</li>
                <li>33</li>
                <li>34</li>
                <li>35</li>
                <li>36</li>
                <li>37</li>
                <li>38</li>
                <li>39</li>

                <li>40</li>
                <li>41</li>
                <li>42</li>
                <li>43</li>
                <li>44</li>
                <li>45</li>
                <li>46</li>
                <li>47</li>
                <li>48</li>
                <li>49</li>

                <li>50</li>
                <li>51</li>
                <li>52</li>
                <li>53</li>
                <li>54</li>
                <li>55</li>
                <li>56</li>
                <li>57</li>
                <li>58</li>
                <li>59</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="tools" ui-date-foot="" ui-flex="row xm" class="flex-fixed nx-sl ny-sl b-solid bk-line+o-mm bt-xs">
      <div ui-flex="row lm" class="nl-ss">
        <p v-if="state.panel" ui-flex="row lm">
          <span ui-btn="@a xs none" class="nx-ss" @click="setPanelType('date')">{{ state.panel }}</span>
          <span v-if="!state.isNoTime" ui-btn="@a xs none" class="nx-ss" @click="setPanelType('time')"> {{ state.time.h }}:{{ state.time.m }}:{{ state.time.s }} </span>
        </p>
        <div v-else-if="state.shortcuts?.length" ui-flex="row lm">
          <div class="mr-sm-sub nx-sl-sub ny-ss-sub lh-ss nowrap fs-ss dib-sub" ui-scroll=":x y:hidden">
            <p v-for="(item, idx) in state.shortcuts" :key="idx" class="bg-main+o-xs co-main r-xl" ui-btn="@a xs none :round" @click="item?.func">{{ item?.text }}</p>
            <p class="bg-main+o-xs co-main r-xl" ui-btn="@a xs none :round"><Icon class="co-main" name="more" /></p>
          </div>
        </div>
        <div>&nbsp;</div>
      </div>
      <div class="ml-sm-sub" ui-flex="row rm">
        <button v-if="state.panel" ui-btn="@a xs none" class="nx-ss co-risk" @click="remove">清除</button>
        <button v-if="state.panel && !state.isNoTime" ui-btn="@a xs none" class="nx-ss co-main" @click="update">确定</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, reactive, watch } from 'vue';
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

  // 内部数据
  const state: any = reactive({
    // 面板显示时间
    panel: '',
    // 当前时间计算
    curr: computed(() => {
      const date = idate(state.panel);
      const days = date.calendar({ group: true, value: [state.panel] });
      const { y = 0, M: m = 0, d = 0 } = date.attr || {};
      return { days, y, m, d };
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
    // 时间
    time: {
      h: '00',
      m: '00',
      s: '00'
    },
    isNoTime: computed(() => {
      if (isObject(props.time)) {
        return !(props.time.h || props.time.m || props.time.s);
      } else {
        return props.time;
      }
    })
  });

  watch(
    () => props.modelValue,
    (value: any) => {
      // 面板显示日期
      state.panel = value || '';
      // 值
      state.value = value || '';
      // 时间
    },
    { deep: true, immediate: true }
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
      console.log('这是没有时间的');
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
    emits('update:modelValue', state.panel);
    emits('update', state.panel);
  };

  // 设置范围
  const setRangeValue = (item: any) => {};
  // 设置面板类型
  const setPanelType = (type: any) => {
    state.type = type;
  };
  // 设置年份
  const setYear = (y: any) => {
    state.type = 'month';
  };
  // 设置月份
  const setMonth = (m: any) => {
    state.type = 'date';
  };
</script>
<style lang="scss">
  @keyframes am-editing {
    0%,
    20% {
      opacity: 1;
    }
    40%,
    60% {
      opacity: 0;
    }
    80%,
    100% {
      opacity: 1;
    }
  }
  .am-editing {
    animation: am-editing 1s linear infinite;
  }
</style>
