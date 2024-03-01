<template>
  <div :ui-form="`@a type:select ${sz ? 'sz:' + sz : ''}`">
    <IFollowView ref="ifollow" tipBoxClass="ny-sm nx-no" tipBoxStyle="min-width: 100%">
      <slot>
        <Input
          v-bind="{ placeholder, rules, theme, sz, co, block, ready: true, type: 'text', tips, disabled, readonly, clearable: false, verify, prefix, suffix, interacted }"
          :clearable="false"
          readonly
          v-model="state.value"
          :interacted="interacted"
        >
          <template #suffix><i ui-form-select=""></i></template>
        </Input>
      </slot>
      <template #tips>
        <ul v-if="props.options?.length" ui-scroll=":y s" class="nx-sm lh-ml" style="min-width: 100%; max-height: 15em">
          <template v-for="(item, idx) of props.options" :key="idx">
            <li v-if="item.disabled" class="ux-hover nx-sm r-ss o-ms nowrap">
              <label style="pointer-events: none" ui-form="@a type:checkbox :block">
                <input type="checkbox" :name="state.name" :checked="modelValue?.some((i: any) => `${i}` === `${item.value}`)" />
                <del class="ml-sm">{{ item.label || item }}</del>
              </label>
            </li>
            <li v-else class="ux-hover nx-sm r-ss nowrap" @click.stop="select(item.value)">
              <label style="pointer-events: none" ui-form="@a type:checkbox :block">
                <input type="checkbox" :name="state.name" :checked="modelValue?.some((i: any) => `${i}` === `${item.value}`)" />
                <span class="ml-sm">{{ item.label || item }}</span>
              </label>
            </li>
          </template>
        </ul>
        <div v-else class="w-full ny-ms" ui-flex="col cm" v-html="spare"></div>
        <ul class="nx-sm lh-sl" v-if="tools">
          <li class="my-ss"><div class="o-mm" ui-line="@a"></div></li>
          <li ui-flex="row xm">
            <div class="ux-hover nx-sm ny-ss r-ss nowrap co-main" @click.stop="allselect()">
              <label style="pointer-events: none" ui-form="@a type:checkbox :block">
                <input type="checkbox" :name="state.name" :checked="state.all" />
                <span class="ml-sm">全选({{ props.options?.length || 0 }})</span>
              </label>
            </div>
            <div>
              <button v-show="state.has" class="co-risk" ui-btn="@a none s" @click="remove">清空</button>
            </div>
          </li>
        </ul>
      </template>
    </IFollowView>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, computed, watch } from 'vue';
  import { Input } from '../form';
  import { IFollowView } from '../basic';
  const ifollow: any = ref(null);

  const emits = defineEmits(['update:modelValue']);

  /**
   * 入参说明
   *
   * modelValue     值
   * options        枚举列表
   * tools          是否显示工具栏
   * spare          空闲兜底内容
   * search         是否显示搜索框
   *
   * -----------------------------------------
   * theme          主题
   * sz             尺寸
   * co             颜色
   * block          撑满
   * ready          准备就绪
   * type           类型
   * tips           提示文案
   * placeholder    内容占位
   * maxlength      最大长度
   * minlength      最小长度
   * disabled       是否禁用
   * readonly       是否只读
   * clearable      是否显示清除按钮
   * rules          校验规则
   * verify         是否是示校验图标
   * prefix         前缀内容
   * suffix         后缀内容
   * interacted     用户是否交互
   */

  // 类型
  interface Props {
    modelValue?: Array<string | number>;
    options: Array<object>;
    tools?: boolean;
    spare?: string;

    // Input
    placeholder?: string;
    rules?: Array<object>;
    theme?: string;
    sz?: '' | 'xs' | 's' | 'm' | 'l' | 'xl';
    co?: string;
    block?: boolean;
    ready?: boolean;
    type?: string;
    tips?: string;
    maxlength?: null | number;
    minlength?: null | number;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    verify?: boolean;
    prefix?: Array<any>;
    suffix?: Array<any>;
    interacted?: boolean;
  }
  // 入参
  const props: any = withDefaults(defineProps<Props>(), {
    modelValue: () => [],
    options: () => [],
    tools: true,
    spare: '当前没有可选项',

    // Input
    placeholder: '',
    rules: () => [],
    theme: '@a',
    sz: '',
    co: '',
    block: true,
    ready: false,
    type: 'text',
    tips: '',
    maxlength: null,
    minlength: null,
    disabled: false,
    readonly: false,
    clearable: true,
    verify: false,
    prefix: () => [],
    suffix: () => [],
    interacted: false
  });
  // 内部数据
  const state: any = reactive({
    name: computed(() => {
      return Array.from({ length: 8 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');
    }),
    show: 0,
    value: '',
    all: computed(() => {
      return props.options?.every((item: any) => props.modelValue?.some((i: any) => `${i}` === `${item.value}`));
    }),
    has: computed(() => {
      return props.options?.some((item: any) => props.modelValue?.some((i: any) => `${i}` === `${item.value}`));
    })
  });

  // 监听外部数据
  watch(
    [() => props.modelValue, () => props.options],
    ([v = [], o = []]: any = []) => {
      const selectd: any = o?.filter((item: any) => v?.some((i: any) => `${i}` === `${item.value}`))?.map((item: any) => item.label) || [];
      state.value = selectd?.join(' Ι ') || '';
    },
    { deep: true, immediate: true }
  );

  // 更新
  const change = (item: any) => {
    emits('update:modelValue', item);
  };
  // 选中
  const select = (item: any) => {
    const s = [...props.modelValue];
    s?.indexOf(item) !== -1 ? s?.splice(s?.indexOf(item), 1) : s?.push(item);
    change(s);
  };
  // 全选
  const allselect = () => {
    const s = state.all ? [] : props.options?.map((item: any) => item.value);
    change(s);
  };
  // 清除
  const remove = () => {
    change([]);
    ifollow.value.cancel();
  };
</script>
. .
