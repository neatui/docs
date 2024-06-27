<template>
  <div :ui-form="`@a type:select sz:${sz}`" :ui-form-open="state.show ? 'show' : ''" class="mc-cascader">
    <IFollowView
      ref="ifollow"
      :tipBoxStyle="`${state.flatOpts.length && state.flatOpts[0]?.length > 0 ? 'min-width: 10em;' : 'min-width: 100%'}`"
      pos="bl"
      tipBoxClass="ny-sm nx-no"
    >
      <Input v-model="state.selectd.label" :clearable="false" :disabled="disabled" readonly v-bind="bindProps">
        <template #suffix><i ui-form-select=""></i></template>
      </Input>
      <template #tips v-if="!readonly && !disabled">
        <div v-if="state.flatOpts?.length && state.flatOpts[0]?.length > 0" ui-flex="row">
          <template v-for="(opt, optIndex) in state.flatOpts" :key="optIndex">
            <ul v-if="opt?.length" class="min-h-ms max-h-ls" :class="`nx-sm lh-ml ${optIndex === 0 ? '' : 'bl-xs bk-back b-solid'}`" ui-scroll=":y s">
              <!-- 多选 -->
              <template v-if="multiple">
                <li v-for="(item, idx) of opt" :key="idx" class="ux-hover nx-sm r-ss nowrap" @click="multiSelect(item, optIndex)">
                  <div ui-flex="row xm">
                    <div ui-form="@a type:checkbox :block`">
                      <input
                        :checked="item.checkedStatus === 'all'"
                        :class="`mr-sm ${item.checkedStatus === 'part' ? 'part-style' : ''}`"
                        :name="formName"
                        type="checkbox"
                        @change="(e: any) => inputChange(e.target.checked, item, optIndex)"
                        @click.stop="() => {}"
                      />
                      <span :class="`${state.selectd.value[optIndex] === item.value ? 'co-main' : ''}`"> {{ item.label || item }}</span>
                    </div>
                    <i v-if="item.children?.length" :class="`icon icon-next ${state.selectd.value[optIndex] === item.value ? 'co-main' : 'co-note'}`"></i>
                  </div>
                </li>
              </template>
              <!-- 单选 -->
              <template v-else>
                <li
                  v-for="(item, idx) of opt"
                  :key="idx"
                  :class="item.value === state.transSelected?.value ? 'co-main' : ''"
                  class="ux-hover nx-sm r-ss nowrap"
                  @click="select(item, optIndex)"
                >
                  <IFollowView v-if="item.optTips" event="hover">
                    <div ui-flex="row xm">
                      <span :class="`${state.transSelected.value[optIndex] === item.value ? 'co-main' : ''}`"> {{ item.label || item }}</span>
                      <i v-if="item.children?.length" :class="`icon icon-next ${state.transSelected.value[optIndex] === item.value ? 'co-main' : 'co-note'}`"></i>
                    </div>
                    <template #tips>
                      <div class="nowrap">{{ item.optTips }}</div>
                    </template>
                  </IFollowView>
                  <div v-else ui-flex="row xm">
                    <span :class="`${state.transSelected.value[optIndex] === item.value ? 'co-main' : ''}`"> {{ item.label || item }}</span>
                    <i v-if="item.children?.length" :class="`icon icon-next ${state.transSelected.value[optIndex] === item.value ? 'co-main' : 'co-note'}`"></i>
                  </div>
                </li>
              </template>
            </ul>
          </template>
        </div>
        <div v-else class="w-full ny-ms" ui-flex="col cm" v-html="spare"></div>

        <ul v-if="tools" class="nx-sm lh-ml">
          <li class="my-ss">
            <div class="o-mm" ui-line="@a"></div>
          </li>
          <li ui-flex="row xm">
            <div v-if="!multiple">
              <p class="nx-sm r-ss nowrap">
                <span>单选</span>
              </p>
            </div>
            <label v-else class="nx-sm r-ss nowrap" ui-form="@a type:checkbox :block`">
              <input :checked="state.checkAll" name="checkAll" type="checkbox" @change="checkAllChange" />
              <span :class="`${state.checkAll ? 'co-main' : ''}`">全选</span>
            </label>
            <div>
              <button v-show="state.selectd?.value" class="co-risk" ui-btn="@a none s" @click="remove">清空</button>
            </div>
          </li>
        </ul>
      </template>
    </IFollowView>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref, watch, computed } from 'vue';
  import { Input } from '../form';
  import IFollowView from '../basic/IFollowView.vue';
  import { deepcopy } from '@fekit/utils';

  const ifollow: any = ref(null);

  const props = defineProps({
    theme: { type: String, default: '@a' },
    sz: { type: String, default: 'm' },
    co: { type: String, default: '' },
    block: { type: Boolean, default: true },
    // 提示文案
    tips: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Array as () => any[],
      default: () => []
    },
    ui: {
      type: Object,
      default: () => ({ sz: 'm' })
    },
    modelValue: {
      type: [String, Number, Array as () => any[]],
      default: ''
    },
    tools: {
      type: Boolean,
      default: true
    },
    spare: {
      type: String,
      default: '当前没有可选项'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    // 单选时生效,当为true时选中任何一级节点都生效
    changeOnSelect: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits(['update:modelValue']);

  const state: any = reactive({
    view: 1,
    pos: 'bl',
    show: 0,
    search: '',
    flatOpts: [], // 拉平的数据
    selectd: { label: '', value: '' },
    transSelected: { label: '', value: [] }, // 单选选中节点 - 单选过渡节点(记录选中的级联节点)
    checkAll: false //全选
  });

  // modelValue与input组件的v-model绑定属性重复，会造成覆盖问题。需要删掉
  const bindProps: any = computed(() => {
    const result: any = { ...props };
    delete result.modelValue;
    return bindProps;
  });

  const formName = new Date().getTime().toString();

  // 根据子节点获取所有父节点
  const getParents = (treeData: any, val: any) => {
    for (const i in treeData) {
      if (treeData[i].value === val && (!treeData[i].children?.length || props.changeOnSelect)) {
        return [{ label: treeData[i].label, value: treeData[i].value }];
      }
      if (treeData[i].children) {
        const result: any = getParents(treeData[i].children, val);
        if (result !== undefined) {
          return result.concat({ label: treeData[i].label, value: treeData[i].value });
        }
      }
    }
  };

  // 单选有值时默认展开
  const handleExpand = () => {
    state.flatOpts = [[...props.options]];
    if (state.transSelected.value) {
      const deepMap = (treeData: any, optIndex: any) => {
        for (const i in treeData) {
          if (treeData[i].value === state.transSelected?.value[optIndex] && treeData[i]?.children?.length > 0) {
            state.flatOpts.push([...treeData[i].children]);
            deepMap(treeData[i].children, optIndex + 1);
          }
        }
      };
      deepMap(props.options, 0);
    }
  };

  // 根据传入的value处理内部selectd(单选)
  const getSelected = () => {
    const p = getParents(props.options, props.modelValue);
    if (p) {
      p.reverse();
      const label = p.map((item: any) => item.label);
      const value = p.map((item: any) => item.value);
      state.transSelected.value = value;
      state.selectd.label = label.join('/');
      state.selectd.value = props.modelValue;

      //当有值的时候默认展开
      handleExpand();
    } else {
      state.selectd = { label: '', value: '' };
      state.transSelected = { label: '', value: [] };
    }
  };

  // 选择(单选)
  const select = (item: any = {}, optIndex: any) => {
    const label = optIndex === 0 ? [] : state.transSelected.label?.split('/').splice(0, optIndex);
    const _label = [...label, item.label];
    state.transSelected.label = _label.length > 0 ? _label.join('/') : '';
    const _value = optIndex === 0 ? [] : state.transSelected.value?.splice(0, optIndex);
    state.transSelected.value = [..._value, item.value];

    if (item.children?.length > 0) {
      const _opt = optIndex < state.flatOpts.length ? state.flatOpts.slice(0, optIndex + 1) : state.flatOpts;
      state.flatOpts = [..._opt, item.children];
      if (props.changeOnSelect) {
        state.selectd.label = state.transSelected.label;
        state.selectd.value = item.value;
      }
    } else {
      state.selectd.label = state.transSelected.label;
      state.selectd.value = item.value;
      ifollow.value.cancel();
    }
  };

  // 勾选样式处理(多选)
  const handleCheck = (clear = false, value = []) => {
    state.flatOpts = state.flatOpts.map((optItem: any) => {
      return optItem.map((item: any) => {
        const all = item.childNodes?.every((n: any) => {
          return state.selectd.value.includes(n.value);
        });
        const part = item.childNodes?.some((n: any) => {
          return state.selectd.value.includes(n.value);
        });
        item.checkedStatus = clear || (!all && !part) ? 'none' : all ? 'all' : 'part';
        return item;
      });
    });
  };

  //寻找某个节点对应的所有最底部子节点
  const searchChildNode = (n: any) => {
    const childNodes: any = [];
    // 递归查找子节点
    const deepMap = (opts: any) => {
      if (opts.children?.length > 0) {
        opts.children.map((item: any) => {
          deepMap(item);
        });
      } else {
        childNodes.push(opts);
      }
    };
    deepMap(n);
    return childNodes;
  };

  //获取所有的子节点
  const getAllChildNode = () => {
    const nodes: any = [];
    props.options.map((item: any) => {
      const itemNodes = searchChildNode(item);
      nodes.push(...itemNodes);
    });
    return nodes;
  };

  // 根据传入的value处理内部selectd(多选)
  const getMultiSelected = (value: any) => {
    const nodes = getAllChildNode();
    const _label: any = [];
    nodes?.map((item: any) => {
      if (value?.includes(item.value)) {
        _label.push(item.label);
      }
    });
    const label = _label?.length > 0 ? _label.join(' | ') : '';
    state.selectd.label = label;
    state.selectd.value = value;
  };

  // 将拉平的数组的每个节点加入子节点
  const handleFlatOpts = () => {
    state.flatOpts.map((optItem: any) => {
      return optItem.map((item: any) => {
        item.childNodes = searchChildNode(item);
        return item;
      });
    });
  };

  // 初始化赋值 && 处理样式
  const init = () => {
    state.flatOpts = [[...deepcopy(props.options)]];
    if (props.multiple) {
      getMultiSelected(props.modelValue);
      handleFlatOpts();
      handleCheck();
    } else {
      getSelected();
    }
  };
  init();

  // 选择(多选)
  const multiSelect = (item: any = {}, optIndex: any) => {
    if (item.children?.length > 0) {
      const _opt = optIndex < state.flatOpts.length ? state.flatOpts.slice(0, optIndex + 1) : state.flatOpts;
      state.flatOpts = [..._opt, item.children];
      handleFlatOpts();
      handleCheck();
    }
  };

  // 复选框选择事件
  const inputChange = (checked: any, item: any = {}, optIndex: any) => {
    const childNodes = searchChildNode(item);
    const labels: any = [];
    const values: any = [];
    childNodes.map((item: any) => {
      labels.push(item.label);
      values.push(item.value);
    });

    if (checked) {
      const labelList = state.selectd?.label === '' ? [] : state.selectd?.label?.split(' | ');
      const _label = [...new Set([...labelList, ...labels])] || [];
      state.selectd.label = _label?.length > 0 ? _label.join(' | ') : '';
      state.selectd.value = [...new Set([...state.selectd.value, ...values])];
    } else {
      const labelList = state.selectd?.label === '' ? [] : state.selectd.label?.split(' | ');
      const _label =
        labelList?.filter((item: any) => {
          return !labels.includes(item);
        }) || [];
      state.selectd.label = _label.length > 0 ? _label.join(' | ') : '';
      state.selectd.value =
        state.selectd?.value?.filter((item: any) => {
          return !values.includes(item);
        }) || [];
    }
    handleCheck();
  };

  // 全选
  const checkAllChange = ({ target }: any) => {
    state.checkAll = target.checked;
    if (state.checkAll) {
      const allNodes = getAllChildNode();
      const _value = allNodes.map((n: any) => n.value);
      getMultiSelected(_value);
      handleFlatOpts();
      handleCheck();
    } else {
      state.selectd = {
        label: '',
        value: props.multiple ? [] : ''
      };
      handleCheck(true);
    }
  };

  // 清空
  const remove = () => {
    state.selectd = {
      label: '',
      value: props.multiple ? [] : ''
    };
    if (props.multiple) {
      handleCheck(true);
      state.checkAll = false;
    } else {
      state.transSelected = {
        label: '',
        value: []
      };
    }
    ifollow.value.cancel();
  };
  // 取消
  const cancel = () => {
    ifollow.value.cancel();
  };

  watch(
    () => props.options,
    () => {
      init();
    },
    { deep: true }
  );

  watch(
    () => [props.modelValue, state.selectd.value],
    (n: any, o: any) => {
      if (n[0] !== o[0]) {
        if (props.multiple) {
          getMultiSelected(props.modelValue);
        } else {
          getSelected();
          handleExpand();
        }
      }
      if (n[1] !== o[1]) {
        emit('update:modelValue', state.selectd.value);
      }
    },
    { deep: true }
  );

  defineExpose({
    select,
    remove,
    cancel
  });
</script>
. .
