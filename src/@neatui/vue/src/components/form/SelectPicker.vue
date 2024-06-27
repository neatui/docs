<template>
  <div :ui-form="`@a type:select sz:${sz}`" ref="dom">
    <IPickerView ref="ipicker">
      <Input v-bind="$props" :clearable="false" readonly v-model="state.selectd.label">
        <template #suffix><i ui-form-select=""></i></template>
      </Input>
      <template #options>
        <div class="full n-xs" ui-flex="col xy">
          <div class="flex-fixed n-ms b-solid bk-line bb-xs" ui-flex="row xm">
            <div><button class="co-note" @click="cancel">取消</button></div>
            <div><button class="co-main" @click="select">确定</button></div>
          </div>
          <div class="flex-block">
            <IScrollView class="full n-ms" :pull="false" :load="false">
              <ul v-if="props.options?.length" class="my-sm-sub">
                <li class="ux-hover n-sm r-ss b-solid bk-case b-xs" v-for="(item, idx) of props.options" :key="idx" @click="mv = item.value">
                  <label ui-form="@a type:radio">
                    <input type="radio" :name="item.field" :checked="item.value === mv" /><span>{{ item.label || item }}</span>
                  </label>
                </li>
              </ul>
            </IScrollView>
          </div>
        </div>
      </template>
    </IPickerView>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, computed } from 'vue';
  import { Input } from '../form';
  import { IPickerView, IScrollView } from '../basic';
  import { watch } from 'vue';
  const ipicker: any = ref(null);
  const emits = defineEmits(['update:modelValue']);
  const props = defineProps({
    theme: { type: String, default: '@a' },
    sz: { type: String, default: 'm' },
    co: { type: String, default: '' },
    block: { type: Boolean, default: true },
    tips: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    options: {
      type: Array as () => any[],
      default: () => []
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    rules: {
      type: Array,
      default: () => []
    }
  });
  // 内部数据
  const mv: any = ref(props.modelValue);
  watch(
    () => props.modelValue,
    (v: any) => {
      mv.value = v;
    },
    { deep: true, immediate: true }
  );
  const state = reactive({
    view: 0,
    show: 0,
    selectd: computed(() => {
      let _value: any = {};
      for (const key in props.options) {
        if (`${props.options[key]?.value}` === `${props.modelValue}`) {
          _value = props.options[key];
        }
      }
      return _value;
    })
  });
  // 更新
  const change = ({ value = null }: any = {}) => {
    emits('update:modelValue', value);
  };
  // 选定
  const select = () => {
    change(mv);
    ipicker.value?.hide();
  };
  // 清空
  const remove = () => {
    mv.value = '';
  };
  // 取消
  const cancel = () => {
    ipicker.value?.hide();
  };
</script>
. .
