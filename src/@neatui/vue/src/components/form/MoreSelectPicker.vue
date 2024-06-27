<template>
  <div :ui-form="`@a type:select sz:${sz}`" ref="dom">
    <IPickerView ref="ipicker">
      <Input v-bind="$props" :clearable="false" readonly v-model="state.value">
        <template #suffix><i ui-form-select=""></i></template>
      </Input>
      <template #options>
        <div class="full n-xs" ui-flex="col xy">
          <div class="flex-fixed n-ms b-solid bk-line bb-xs" ui-flex="row xm">
            <div><button class="co-note" @click="cancel">取消</button></div>
            <div><button class="co-main" @click="confirm">确定</button></div>
          </div>
          <div class="flex-block">
            <IScrollView class="full n-ms" :pull="false" :load="false">
              <ul v-if="props.options?.length" class="my-sm-sub">
                <li class="ux-hover n-sm r-ss nowrap b-solid bk-case b-xs" v-for="(item, idx) of props.options" :key="idx" @click.stop="select(item.value)">
                  <label style="pointer-events: none" ui-form="@a type:checkbox :block">
                    <input type="checkbox" :name="field" :checked="mv?.some((i: any) => `${i}` === `${item.value}`)" />
                    <span class="ml-sm">{{ item.label || item }}</span>
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
  import { reactive, ref, computed, watch } from 'vue';
  import { Input } from '../form';
  import { IPickerView, IScrollView } from '../basic';
  const ipicker: any = ref(null);
  const emits = defineEmits(['update:modelValue']);
  const props: any = defineProps({
    theme: { type: String, default: '@a' },
    sz: { type: String, default: 'm' },
    co: { type: String, default: '' },
    block: { type: Boolean, default: true },
    tips: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    modelValue: {
      type: Array as () => any[],
      default: () => []
    },
    options: {
      type: Array as () => any[],
      default: () => []
    },
    rules: {
      type: Array,
      default: () => []
    },
    field: {
      type: String,
      default: () => {
        const _name = (l: any) => Array.from({ length: l }, () => 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)]).join('');
        return _name(8);
      }
    }
  });
  const mv: any = ref(props.modelValue);
  const state: any = reactive({
    view: 0,
    value: '',
    // selectd: computed(() => {
    //   const result = props.options?.filter((item: any) => props.modelValue?.some((i: any) => `${i}` === `${item.value}`))?.map((item: any) => item.label);
    //   return result.join(' Ι ');
    // }),
    selectd: [],
    all: computed(() => {
      return props.options?.every((item: any) => props.modelValue?.some((i: any) => `${i}` === `${item.value}`));
    }),
    has: computed(() => {
      return props.options?.some((item: any) => props.modelValue?.some((i: any) => `${i}` === `${item.value}`));
    })
  });

  // 监听外部数据
  watch(
    () => props.modelValue,
    (v: any = []) => {
      mv.value = v;
      const selectd: any = props.options?.filter((item: any) => v?.some((i: any) => `${i}` === `${item.value}`))?.map((item: any) => item.label) || [];
      state.value = selectd.join(' Ι ') || '';
    },
    { deep: true, immediate: true }
  );
  // 更新
  const change = (item: any) => {
    emits('update:modelValue', item);
  };
  // 选中
  const select = (item: any) => {
    const values = [...mv.value];
    values?.indexOf(item) !== -1 ? values?.splice(values?.indexOf(item), 1) : values?.push(item);
    mv.value = values;
  };
  // 清除
  // const remove = () => {
  //   mv.value = [];
  // };
  // 确定
  const confirm = () => {
    change(mv.value);
    if (ipicker.value) {
      ipicker.value.hide();
    }
  };
  // 取消
  const cancel = () => {
    if (ipicker.value) {
      ipicker.value.hide();
    }
  };
</script>
. .
