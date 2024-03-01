<template>
  <ul :class="`${root ? '' : 'nl-ms'}`">
    <li v-if="root" class="pr">
      <div ui-form="@a sz: co:risk type:none :block" class="full-w">
        <div style="left: 0.75em" :ui-form-tips="state.error.ontips">{{ state.error.tips }}</div>
      </div>
    </li>
    <li v-for="node in state.tree" :key="node[options.id || 'id']" style="cursor: pointer">
      <div ui-flex="row xm" :class="block ? 'ux-hover' : ''">
        <div
          @click="node._fold = !node._fold"
          :class="`triangle ${node._fold ? '' : 'icon-rotate'}`"
          :style="{ visibility: node[options.children || 'children']?.length ? 'visible' : 'hidden' }"
        ></div>
        <div ui-flex="row lm" class="flex-block" @click="select(node)">
          <!-- 多选 -->
          <label v-if="multiple" ui-form="@a type:checkbox sz:m" :class="block ? 'full' : ''">
            <input
              type="checkbox"
              :disabled="node.disabled"
              :checked="getCheckedStatus(node) === 'all'"
              :class="getCheckedStatus(node) === 'part' ? 'part-checked' : ''"
              @change="(e: any) => nodeClick(node, e.target.checked)"
            />
            <div ui-form-prefix="">
              <template v-for="(p, idx) in node.prefix" :key="idx">
                <div v-if="isObject(p)" v-bind="p.attrs">
                  <div v-html="isFunction(p.value) ? p.value(node) : p.value"></div>
                </div>
                <div v-else v-html="isFunction(p) ? p(node) : p"></div>
              </template>
              <slot name="prefix" :data="node"></slot>
            </div>
            <span v-bind="node.attrs" class="ux-hover nx-ss" style="color: unset; border-radius: 6px">{{ node[options.label || 'label'] }}</span>
            <div v-if="!multiple" ui-form-suffix="">
              <template v-for="(s, idx) in node.suffix" :key="idx">
                <div v-if="isObject(s)" v-bind="s.attrs">
                  <div v-html="isFunction(s.value) ? s.value(node) : s.value"></div>
                </div>
                <div v-else v-html="isFunction(s) ? s(node) : s"></div>
              </template>
              <slot name="suffix" :data="node"></slot>
            </div>
          </label>
          <!-- 单选  -->
          <template v-if="!multiple">
            <div ui-form-prefix="">
              <template v-for="(p, idx) in node.prefix" :key="idx">
                <div v-if="isObject(p)" v-bind="p.attrs">
                  <div v-html="isFunction(p.value) ? p.value(node) : p.value"></div>
                </div>
                <div v-else v-html="isFunction(p) ? p(node) : p"></div>
              </template>
              <slot name="prefix" :data="node"></slot>
            </div>
            <span
              style="border-radius: 6px"
              class="ux-hover nx-ss"
              :class="node[options.id || 'id'] === (isArray(props.modelValue) ? props.modelValue[0] : props.modelValue) ? 'co-main' : ''"
              @click="nodeClick(node)"
              >{{ node[options.label || 'label'] }}</span
            >
            <div ui-form-suffix="">
              <template v-for="(s, idx) in node.suffix" :key="idx">
                <div v-if="isObject(s)" v-bind="s.attrs">
                  <div v-html="isFunction(s.value) ? s.value(node) : s.value"></div>
                </div>
                <div v-else v-html="isFunction(s) ? s(node) : s"></div>
              </template>
              <slot name="suffix" :data="node"></slot>
            </div>
          </template>
        </div>
        <slot name="tools" :data="node"></slot>
      </div>
      <template v-if="node[options.children || 'children']?.length > 0 && node._fold">
        <TreeNode :key="node[options.id || 'id']" v-model="state.selected" v-bind="$props" :treeData="node[options.children || 'children']" :root="false" @select="tranSelect">
          <template #tools="{ data = {} }: any = {}">
            <slot name="tools" :data="data"></slot>
          </template>
          <template #suffix="{ data = {} }: any = {}">
            <slot name="suffix" :data="data"></slot>
          </template>
          <template #prefix="{ data = {} }: any = {}">
            <slot name="prefix" :data="data"></slot>
          </template>
        </TreeNode>
      </template>
    </li>
  </ul>
</template>

<script lang="ts" setup>
  import { reactive, computed, ref, watch } from 'vue';
  import TreeNode from './Tree.vue';
  import { isObject, isFunction, isArray, deepcopy } from '@fekit/utils';
  import { useRoute, useRouter } from 'vue-router';

  /**
   * 入参说明
   * modelValue     值
   * theme          主题
   * sz             尺寸
   * co             颜色
   * options        字段配置信息
   * expandedKeys   默认展开的节点
   * multiple      是否复选
   * treeData       树形结构数据
   * autoExpandSelected  是否展开选中的节点
   * defaultExpandAll    是否默认展开所有子节点
   * checkStrictly       multiple 状态下节点选择完全受控（父子节点选中状态不再关联）
   * root                是否为跟节点(外部不需要传入)
   * line                是否有线条
   */
  // 类型
  interface Props {
    modelValue?: Array<string | number> | string | number;
    options?: PropsOptions;
    theme?: string;
    sz?: '' | 'xs' | 's' | 'm' | 'l' | 'xl';
    co?: string;
    expandedKeys?: Array<string | number>;
    autoExpandSelected?: boolean;
    defaultExpandAll?: boolean;
    multiple?: boolean;
    treeData?: Array<Record<string, any>>;
    checkStrictly?: boolean;
    // attrs?: Record<string, any>;
    root?: boolean;
    line?: boolean;
    interacted?: boolean;
    rules?: Array<object>;
    block?: boolean;
  }

  interface PropsOptions {
    label?: string;
    id?: string;
    children?: string;
  }

  const props: any = withDefaults(defineProps<Props>(), {
    modelValue: '',
    expandedKeys: () => [],
    theme: '@a',
    sz: '',
    co: '',
    autoExpandSelected: false,
    defaultExpandAll: true,
    multiple: false,
    checkStrictly: false,
    treeData: () => [],
    options: () => ({ label: 'label', id: 'id', children: 'children' }),
    // attrs: () => ({}),
    root: true,
    line: false,
    interacted: false,
    rules: () => [],
    block: false
  });

  /*
    优先级
      展开传入的expandkeys节点 - expandedKeys数组不为空 -- 传入的需要展开的子节点是当前节点或者是当前节点的子节点
      展开所有 - defaultExpandAll = true && expandedKeys数组为空
      展开选中节点 - autoExpandSelected = true && defaultExpandAll = false && expandedKeys数组为空
   */

  const route = useRoute();
  const router = useRouter();

  const emit = defineEmits(['update:modelValue', 'select']);
  const change = (item: Array<string | number>) => {
    const _item = props.multiple ? item : isArray(item) ? item[0] : item;
    emit('update:modelValue', _item);
  };

  // 判断当前节点&&当前节点的子节点,是否存在于目标节点数组中
  const handleExpand = (targetKeys: Array<string | number>, node: any) => {
    if (targetKeys.includes(node[props.options.id])) {
      return true;
    } else {
      // 递归判断子节点是否存在于目标节点数组
      let childNodeVerify = false;
      const childKey: string = props.options.children || 'children';
      const idKey = props.options.id || 'id';
      const deepMap = (opts: any) => {
        opts.map((o: any) => {
          if (targetKeys.includes(o[idKey])) {
            childNodeVerify = true;
          } else {
            if (o[childKey]?.length > 0) deepMap(o[childKey]);
          }
        });
      };
      if (node[childKey]?.length > 0) deepMap(node[childKey]);
      return childNodeVerify;
    }
  };

  /*
    寻找某个节点对应的子节点
    type=bottom 只查找最底部子节点
    type=all 查找此节点以下所有子节点
   */
  const searchChildNode = (n: any, type = 'bottom') => {
    const childNodes: any = [];
    const childKey = props.options.children || 'children';
    // 递归查找子节点
    const deepMap = (opts: any) => {
      if (opts[childKey]?.length > 0) {
        opts[childKey].map((item: any) => {
          if (type === 'all') childNodes.push(opts[props.options.id || 'id']);
          deepMap(item);
        });
      } else {
        childNodes.push(opts[props.options.id || 'id']);
      }
    };
    deepMap(n);
    return childNodes;
  };

  const state: any = reactive({
    selected: [] as Array<string | number>,
    // 错误
    error: {},
    // 用户是否交互
    interacted: false,
    tree: [] as Array<Record<string, any>>
  });

  watch(
    () => props.treeData,
    () => {
      const _tree = deepcopy(props.treeData);
      state.tree = _tree?.map((n: any) => {
        if (props.expandedKeys?.length > 0) {
          n._fold = handleExpand(props.expandedKeys, n);
        } else if (props.defaultExpandAll) {
          n._fold = true;
        } else if (props.autoExpandSelected) {
          n._fold = handleExpand(state.selected, n);
        } else {
          n._fold = false;
        }
        return n;
      });
    },
    { deep: true, immediate: true }
  );

  // 获取节点勾选状态
  const getCheckedStatus = (node: any) => {
    if (props.multiple) {
      if (!props.checkStrictly) {
        const childNodes = searchChildNode(node);
        const all = childNodes.every((n: any) => state.selected.includes(n));
        const part = childNodes.some((n: any) => state.selected.includes(n));
        return !all && !part ? 'none' : all ? 'all' : 'part';
      } else {
        return state.selected.includes(node[props.options.id || 'id']) ? 'all' : 'none';
      }
    } else {
      return '';
    }
  };

  // 节点点击事件
  const nodeClick = (node: any, checked = true) => {
    const idKey: string = props.options.id || 'id';
    if (props.multiple) {
      const childNodes = searchChildNode(node, props.checkStrictly ? 'all' : 'boottom');
      if (checked) {
        state.selected = [...new Set([...state.selected, ...childNodes])];
      } else {
        state.selected = state.selected.filter((n: any) => !childNodes.includes(n));
      }
    } else {
      // 单选
      state.selected = [node[idKey]];
    }
  };

  const select = (node: any) => {
    emit('select', { node, data: state.selected, route, router });
  };

  const tranSelect = ({ node, data, route, router }: any) => {
    emit('select', { node, data, route, router });
  };

  watch(
    [() => props.modelValue, () => state.selected],
    (n: any, o: any) => {
      if (n[0] !== o[0]) {
        state.selected = isArray(props.modelValue) ? props.modelValue : props.modelValue ? [props.modelValue] : [];
      }
      if (n[1] !== o[1]) {
        change(state.selected);
      }
    },
    { deep: true, immediate: true }
  );

  // 校验
  watch(
    [() => state.interacted, () => state.selected],
    async () => {
      if (state.interacted || props.interacted) {
        // 提示文案
        let tips = '';
        // 错误类型
        let type = '';
        // 验证结果
        let verify = '';

        if (state.selected?.length) {
          // 有值
          let hasError = false;
          // 遍历校验规则
          for (const rule of props.rules) {
            if (rule && rule.validator) {
              const yes = !(await rule.validator(state.selected));
              if (yes) {
                tips = rule.msg;
                type = rule.type;
                hasError = true;
                break;
              }
            }
          }
          verify = hasError ? 'no' : 'ok';
        } else {
          // 无值
          let hasError = false;
          // 遍历校验规则
          for (const rule of props.rules) {
            if (rule) {
              tips = rule.msg;
              type = rule.type;
              if (rule.required) {
                hasError = true;
                break;
              }
            }
          }
          verify = hasError ? 'no' : '';
        }
        if (verify !== 'no' && props.tips) {
          tips = props.tips;
        }
        // 是否显示提示
        const ontips = (verify === 'no' && tips) || props.tips ? 'show' : '';
        // 状态颜色
        const co = verify === 'no' ? 'co:' + type : props.co ? 'co:' + props.co : '';
        state.error = { tips, ontips, verify, co };
      } else {
        state.error = { tips: props.tips, ontips: props.tips ? 'show' : '', verify: '', co: '' };
      }
    },
    { deep: true, immediate: true }
  );
</script>
<style lang="scss" scoped>
  .triangle {
    position: relative;
    width: 1.25em;
    height: 1em;
    margin-right: -0.25em;
    &::after {
      position: absolute;
      display: inline-block;
      content: '';
      width: 0;
      height: 0;
      border-width: 0.35em 0 0.35em 0.35em;
      border-style: solid;
      border-color: transparent;
      border-left-color: transparent;
      border-left-color: currentColor;
      top: 0.2em;
      left: 0.1em;
      transform: rotate(90deg);
      transition: all 0.25s;
      border-radius: 30%;
    }
    &.icon-rotate {
      &::after {
        transform: rotate(0deg);
      }
    }
  }
  [fekit-json-tree] {
    &,
    * {
      user-select: none;
      line-height: 1.5;
    }
  }

  // 线条
  [fekit-json-tree-line~='1'] {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      width: 1px;
      left: 0.5em;
      top: -0.5em;
      bottom: 1.25em;
      background-color: currentColor;
      opacity: 0.15;
    }

    & > li {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 0.5em;
        height: 1px;
        background: currentColor;
        left: -0.5em;
        top: 1.25em;
        opacity: 0.15;
      }
    }
  }
</style>
