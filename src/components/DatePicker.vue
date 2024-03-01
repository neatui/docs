<template>
  <div ref="inputRef" :ui-form="`@a type:date sz:${ui.sz}`" :data-view="state.view">
    <div ui-form="@a type:input" @click="state.view = !state.view">
      <div ui-form-prefix="">
        <i class="css-icon-calendar"></i>
      </div>
      <input type="text" readonly="true" :placeholder="props.placeholder" :value="state.selected" />
      <div ui-form-suffix="">
        <i class="icon icon-dropdown"></i>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="state.view" :style="`width:${width}px; height:${height}px; z-index:100;`">
        <OnClickOutside @trigger="state.view = 0">
          <div v-show="state.view" ui-calendar="@a" style="width: 300px; height: 200px; z-index: 100" ref="dropdownRef">
            <div ui-calendar-head="">
              <div ui-flex="row lm" class="nx-ss-sub">
                <span class="fw-auto">{{ curr.y }}-{{ curr.m }}</span>
              </div>
              <div ui-flex="row rm">
                <button class="fs-xs mr-ss" ui-btn="@a main s">使用</button>
              </div>
            </div>
            <ul ui-calendar-week="">
              <li><span>日</span></li>
              <li><span>一</span></li>
              <li><span>二</span></li>
              <li><span>三</span></li>
              <li><span>四</span></li>
              <li><span>五</span></li>
              <li><span>六</span></li>
            </ul>
            <ul ui-calendar-days="">
              <li v-for="(item, idx) in curr.days" :key="idx" :class="`${item.isToday ? 'today' : ''} ${state.selected && state.selected === item.date ? 'active' : ''}`">
                <div v-if="item.day" @click="change(item)">
                  <span>{{ item.day }}</span>
                </div>
              </li>
            </ul>
            <div ui-calendar-foot="">
              <div ui-flex="row lm">
                <div ui-calendar-prev-year="" @click="prev('y')"></div>
                <div ui-calendar-prev="" @click="prev('m')"></div>
              </div>
              <div ui-flex="row cm" class="nx-ss-sub">
                <ul class="fs-xs n-sm-sub" ui-flex="row lm">
                  <li ui-btn="@a s none">年</li>
                  <li ui-btn="@a s none">月</li>
                  <li ui-btn="@a s none">日</li>
                </ul>
              </div>
              <div ui-flex="row rm">
                <div ui-calendar-next="" @click="next('m')"></div>
                <div ui-calendar-next-year="" @click="next('y')"></div>
              </div>
            </div>
          </div>
        </OnClickOutside>
      </div>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
  import { computed, toRefs, onMounted, watch, nextTick } from 'vue';
  import { reactive, ref } from 'vue';
  import { createPopper } from '@popperjs/core';
  import { useElementSize } from '@vueuse/core';
  import { OnClickOutside } from '@vueuse/components';

  const inputRef: any = ref(null);
  const dropdownRef: any = ref(null);
  const { width, height } = useElementSize(inputRef);
  const cDate = (date: any = null) => {
    const _date = new Date(date);
    return date && _date instanceof Date && !isNaN(_date.getTime()) ? _date : new Date();
  };
  // 外部入参
  const props = defineProps({
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    ui: {
      type: Object,
      default: () => ({ sz: 'm' })
    }
  });
  // 内部数据
  const state: any = reactive({
    view: ref(0),
    selected: ref(''),
    date: ref(props.value),
    curr: computed(() => {
      const date = cDate(state.date);
      const calendar = [];
      const y: any = date.getFullYear();
      const m: any = date.getMonth() + 1;
      const d: any = date.getDate();
      const w = new Date(`${y}-${m}-1`).getDay();
      const days = new Date(y, m, 0).getDate();
      for (let i = 0; i < w; i++) {
        calendar.push({});
      }
      for (let i = 1; i <= days; i++) {
        calendar.push({
          date: `${y}-${m}-${i}`,
          day: i,
          isToday: d === i
        });
      }
      for (let i = 0; calendar.length < 42; i++) {
        calendar.push({});
      }
      return { days: calendar, y, m, d };
    }),
    styles: ''
  });
  const { curr = {} }: any = toRefs(state);
  // 更新时间
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
  const emit = defineEmits(['change']);
  const change = (item: any) => {
    state.selected = item.date;
    emit('change', item.date);
  };

  watch(
    () => state.view,
    () => {
      if (state.view) {
        nextTick(() => {
          if (inputRef.value && dropdownRef.value) {
            createPopper(inputRef.value, dropdownRef.value);
          }
        });
      }
    }
  );

  onMounted(() => {
    // if (inputRef.value) {
    //   const domRect = inputRef.value.getBoundingClientRect();
    //   state.styles = `;width:${domRect.width}px;top:${domRect.top}px; left:${domRect.left}px;`;
    // }
    // window.addEventListener('resize', () => {
    //   if (inputRef.value) {
    //     const domRect = inputRef.value.getBoundingClientRect();
    //     state.styles = `;width:${domRect.width}px;top:${domRect.top}px; left:${domRect.left}px;`;
    //   }
    // });
    // window.addEventListener('scroll', () => {
    //   console.log(158);
    // });
    // const callback = (mutationList: any, observer: any) => {
    //   console.log(mutationList);
    //   for (const mutation of mutationList) {
    //     if (mutation.type === 'childList') {
    //       console.log('A child node has been added or removed.');
    //     } else if (mutation.type === 'attributes') {
    //       console.log(`The ${mutation.attributeName} attribute was modified.`);
    //     }
    //   }
    // };
    // const observer = new MutationObserver(callback);
    // observer.observe(inputRef.value, { attributes: true, childList: true, subtree: true });
    // if (inputRef.value && dropdownRef.value) {
    //   createPopper(inputRef.value, dropdownRef.value);
    // }
  });
</script>
