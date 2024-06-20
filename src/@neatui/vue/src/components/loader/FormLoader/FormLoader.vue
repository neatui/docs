<template>
  <div class="form-loader n-sm-sub" :data-level="level" ui-row="">
    <div v-for="(node, i1) in $form" v-if="!node.clear" :key="i1" class="form-loader-item" :id="node._fid" :ui-col="node.media">
      <div :id="`form${index + '' ? '-' + index : ''}-field-${node.field}`" v-bind="node.attrs" :data-level="level" data-node="child">
        <slot :name="node.field" v-model:node="node" v-model:data="data">
          <div v-if="node.label[0] !== '*'" :class="`form-loader-label ${node.vertical ? 'flex-block' : 'flex-fixed nr-sm'} o-ls`" :style="labelcss(node)" ui-flex="row xm">
            <slot v-if="slots.includes(`${node.field}-label`)" :name="`${node.field}-label`"></slot>
            <slot v-else name="every-label" v-bind:node="node" v-bind="data">
              <template v-if="node.label[0]">
                <h6 class="flex-block pr" v-if="node.vertical" v-bind="node.label[1]">
                  <template v-if="node.label[0] === '*'"></template>
                  <template v-else>
                    <b v-if="node.rules.some((v) => v.required)" class="co-risk">﹡</b><span>{{ node.label[0] }}</span>
                  </template>
                </h6>
                <h6 v-else class="flex-block ar pr" v-bind="node.label[1]">
                  <template v-if="node.label[0] === '*'"></template>
                  <template v-else>
                    <b v-if="node.rules.some((v) => v.required)" class="co-risk">﹡</b><span>{{ node.label[0] }}</span>
                  </template>
                </h6>
              </template>
            </slot>
            <div v-if="node.array">
              <el-button size="s" @click="fAdd(node, data[node.field])">
                <span>+</span>
              </el-button>
            </div>
          </div>
          <template v-if="node.array">
            <template v-if="isArray(node.array)">
              <div class="form-loader-group-array">
                <div v-for="(item, i2) in data[node.field]" :key="i2" class="form-loader-array-item" ui-flex="row xm">
                  <div class="flex-block">
                    <FormLoader
                      v-model:form="node.array"
                      v-model:data="item"
                      v-model:fulldata="data"
                      :rows="rows"
                      :level="level + 1"
                      :index="i2"
                      :debug="debug"
                      :interacted="interacted"
                      :slots="slots"
                    >
                      <!-- 通用插槽 -->
                      <template v-slot:every-label="slotprops"><slot name="every-label" v-bind="slotprops"></slot></template>
                      <template v-slot:array-label="slotprops"><slot name="array-label" v-bind="slotprops"></slot></template>
                      <template v-slot:child-label="slotprops"><slot name="child-label" v-bind="slotprops"></slot></template>

                      <!-- 拉圾VUE2不能直接遍历 -->
                      <template v-if="slots[0]" v-slot:[slots[0]]="slotprops"><slot :name="slots[0]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[1]" v-slot:[slots[1]]="slotprops"><slot :name="slots[1]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[2]" v-slot:[slots[2]]="slotprops"><slot :name="slots[2]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[3]" v-slot:[slots[3]]="slotprops"><slot :name="slots[3]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[4]" v-slot:[slots[4]]="slotprops"><slot :name="slots[4]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[5]" v-slot:[slots[5]]="slotprops"><slot :name="slots[5]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[6]" v-slot:[slots[6]]="slotprops"><slot :name="slots[6]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[7]" v-slot:[slots[7]]="slotprops"><slot :name="slots[7]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[8]" v-slot:[slots[8]]="slotprops"><slot :name="slots[8]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[9]" v-slot:[slots[9]]="slotprops"><slot :name="slots[9]" v-bind="slotprops"></slot></template>

                      <template v-if="slots[10]" v-slot:[slots[10]]="slotprops"><slot :name="slots[10]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[11]" v-slot:[slots[11]]="slotprops"><slot :name="slots[11]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[12]" v-slot:[slots[12]]="slotprops"><slot :name="slots[12]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[13]" v-slot:[slots[13]]="slotprops"><slot :name="slots[13]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[14]" v-slot:[slots[14]]="slotprops"><slot :name="slots[14]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[15]" v-slot:[slots[15]]="slotprops"><slot :name="slots[15]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[16]" v-slot:[slots[16]]="slotprops"><slot :name="slots[16]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[17]" v-slot:[slots[17]]="slotprops"><slot :name="slots[17]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[18]" v-slot:[slots[18]]="slotprops"><slot :name="slots[18]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[19]" v-slot:[slots[19]]="slotprops"><slot :name="slots[19]" v-bind="slotprops"></slot></template>

                      <template v-if="slots[20]" v-slot:[slots[20]]="slotprops"><slot :name="slots[20]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[21]" v-slot:[slots[21]]="slotprops"><slot :name="slots[21]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[22]" v-slot:[slots[22]]="slotprops"><slot :name="slots[22]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[23]" v-slot:[slots[23]]="slotprops"><slot :name="slots[23]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[24]" v-slot:[slots[24]]="slotprops"><slot :name="slots[24]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[25]" v-slot:[slots[25]]="slotprops"><slot :name="slots[25]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[26]" v-slot:[slots[26]]="slotprops"><slot :name="slots[26]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[27]" v-slot:[slots[27]]="slotprops"><slot :name="slots[27]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[28]" v-slot:[slots[28]]="slotprops"><slot :name="slots[28]" v-bind="slotprops"></slot></template>
                      <template v-if="slots[29]" v-slot:[slots[29]]="slotprops"><slot :name="slots[29]" v-bind="slotprops"></slot></template>
                    </FormLoader>
                  </div>
                  <div class="flex-fixed" @click="fDel(data[node.field], i2)">-</div>
                </div>
              </div>
            </template>
            <div v-else v-html="err(`配置错误：Field: ${node.field} 配置了属性值 [array] 必须是一个数组`)"></div>
          </template>
          <template v-else-if="node.child">
            <template v-if="isArray(node.child)">
              <FormLoader
                class="form-loader-group-child"
                v-model:form="node.child"
                v-model:data="data[node.field]"
                v-model:fulldata="data"
                :rows="rows"
                :level="level + 1"
                :debug="debug"
                :interacted="interacted"
                :slots="slots"
              >
                <!-- 通用插槽 -->
                <template v-slot:every-label="slotprops"><slot name="every-label" v-bind="slotprops"></slot></template>
                <template v-slot:array-label="slotprops"><slot name="array-label" v-bind="slotprops"></slot></template>
                <template v-slot:child-label="slotprops"><slot name="child-label" v-bind="slotprops"></slot></template>

                <!-- 拉圾VUE2不能直接遍历 -->
                <template v-if="slots[0]" v-slot:[slots[0]]="slotprops"><slot :name="slots[0]" v-bind="slotprops"></slot></template>
                <template v-if="slots[1]" v-slot:[slots[1]]="slotprops"><slot :name="slots[1]" v-bind="slotprops"></slot></template>
                <template v-if="slots[2]" v-slot:[slots[2]]="slotprops"><slot :name="slots[2]" v-bind="slotprops"></slot></template>
                <template v-if="slots[3]" v-slot:[slots[3]]="slotprops"><slot :name="slots[3]" v-bind="slotprops"></slot></template>
                <template v-if="slots[4]" v-slot:[slots[4]]="slotprops"><slot :name="slots[4]" v-bind="slotprops"></slot></template>
                <template v-if="slots[5]" v-slot:[slots[5]]="slotprops"><slot :name="slots[5]" v-bind="slotprops"></slot></template>
                <template v-if="slots[6]" v-slot:[slots[6]]="slotprops"><slot :name="slots[6]" v-bind="slotprops"></slot></template>
                <template v-if="slots[7]" v-slot:[slots[7]]="slotprops"><slot :name="slots[7]" v-bind="slotprops"></slot></template>
                <template v-if="slots[8]" v-slot:[slots[8]]="slotprops"><slot :name="slots[8]" v-bind="slotprops"></slot></template>
                <template v-if="slots[9]" v-slot:[slots[9]]="slotprops"><slot :name="slots[9]" v-bind="slotprops"></slot></template>

                <template v-if="slots[10]" v-slot:[slots[10]]="slotprops"><slot :name="slots[10]" v-bind="slotprops"></slot></template>
                <template v-if="slots[11]" v-slot:[slots[11]]="slotprops"><slot :name="slots[11]" v-bind="slotprops"></slot></template>
                <template v-if="slots[12]" v-slot:[slots[12]]="slotprops"><slot :name="slots[12]" v-bind="slotprops"></slot></template>
                <template v-if="slots[13]" v-slot:[slots[13]]="slotprops"><slot :name="slots[13]" v-bind="slotprops"></slot></template>
                <template v-if="slots[14]" v-slot:[slots[14]]="slotprops"><slot :name="slots[14]" v-bind="slotprops"></slot></template>
                <template v-if="slots[15]" v-slot:[slots[15]]="slotprops"><slot :name="slots[15]" v-bind="slotprops"></slot></template>
                <template v-if="slots[16]" v-slot:[slots[16]]="slotprops"><slot :name="slots[16]" v-bind="slotprops"></slot></template>
                <template v-if="slots[17]" v-slot:[slots[17]]="slotprops"><slot :name="slots[17]" v-bind="slotprops"></slot></template>
                <template v-if="slots[18]" v-slot:[slots[18]]="slotprops"><slot :name="slots[18]" v-bind="slotprops"></slot></template>
                <template v-if="slots[19]" v-slot:[slots[19]]="slotprops"><slot :name="slots[19]" v-bind="slotprops"></slot></template>

                <template v-if="slots[20]" v-slot:[slots[20]]="slotprops"><slot :name="slots[20]" v-bind="slotprops"></slot></template>
                <template v-if="slots[21]" v-slot:[slots[21]]="slotprops"><slot :name="slots[21]" v-bind="slotprops"></slot></template>
                <template v-if="slots[22]" v-slot:[slots[22]]="slotprops"><slot :name="slots[22]" v-bind="slotprops"></slot></template>
                <template v-if="slots[23]" v-slot:[slots[23]]="slotprops"><slot :name="slots[23]" v-bind="slotprops"></slot></template>
                <template v-if="slots[24]" v-slot:[slots[24]]="slotprops"><slot :name="slots[24]" v-bind="slotprops"></slot></template>
                <template v-if="slots[25]" v-slot:[slots[25]]="slotprops"><slot :name="slots[25]" v-bind="slotprops"></slot></template>
                <template v-if="slots[26]" v-slot:[slots[26]]="slotprops"><slot :name="slots[26]" v-bind="slotprops"></slot></template>
                <template v-if="slots[27]" v-slot:[slots[27]]="slotprops"><slot :name="slots[27]" v-bind="slotprops"></slot></template>
                <template v-if="slots[28]" v-slot:[slots[28]]="slotprops"><slot :name="slots[28]" v-bind="slotprops"></slot></template>
                <template v-if="slots[29]" v-slot:[slots[29]]="slotprops"><slot :name="slots[29]" v-bind="slotprops"></slot></template>
              </FormLoader>
            </template>
            <div v-else v-html="err(`配置错误：Field: ${node.field} 配置了属性值 [child] 必须是一个数组`)"></div>
          </template>
          <template v-else>
            <FormRender v-model:node="node" v-model:data="data" :interacted="interacted" :data-field="node.field">
              <template v-slot:[`${node.field}-value`]="slotprops">
                <slot :name="`${node.field}-value`" v-bind="slotprops"></slot>
              </template>
            </FormRender>
          </template>
        </slot>
      </div>
    </div>
    <div class="full-x" ui-flex="row lm">
      <div class="flex-fixed" :style="labelcss(node)">&nbsp;</div>
      <div class="flex-block"><slot name="submit"></slot></div>
    </div>
  </div>
</template>

<script>
  import { deepcopy, isArray, isFunction, isString } from '@fekit/utils';

  // 根据表单结构生成数据结构
  const _rows = (arr) => {
    const data = {};
    for (const node of arr) {
      data[node.field] = node.child ? _rows(node.child) : node.array ? [] : '';
    }
    return data;
  };

  export default {
    name: 'FormLoader',
    components: {
      FormRender: () => import('./FormRender.vue'),
      FormLoader: () => import('./FormLoader.vue')
    },
    props: {
      debug: {
        type: Boolean,
        default: false
      },
      form: {
        type: Array,
        default: () => []
      },
      data: {
        type: Object,
        default: () => ({})
      },
      fulldata: {
        type: Object,
        default: () => null
      },
      rows: {
        type: String,
        default: 'mob-24 pad-12 dpc-8'
      },
      interacted: {
        type: Boolean,
        default: false
      },
      array: {
        type: Boolean,
        default: false
      },
      level: {
        type: Number,
        default: 0
      },
      index: {
        type: String,
        default: ''
      },
      vertical: {
        type: Boolean,
        default: false
      },
      slots: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        node: [],
        lw: 0
      };
    },
    computed: {
      $form() {
        const form = this.form;
        const data = this.fulldata || this.data;
        return deepcopy(form)?.map((node = {}) => {
          // 清除字段
          if (isFunction(node.clear)) {
            node.clear = node.clear(data, node);
            if (node.clear && data[node.field] !== '') {
              this.$set(data, node.field, '');
            }
          }

          // 水平垂直
          if (isFunction(node.vertical)) {
            node.vertical = node.vertical(data, node);
          }
          if (!node.vertical) {
            node.vertical = this.vertical;
          }

          // 模型处理
          if (isFunction(node.model)) {
            node.model = node.model(data, node);
          }
          if (node.model) {
            if (isString(node.model)) {
              node.model = [node.model, { verify: false }];
            }
          } else {
            node.model = ['', { verify: false }];
          }
          if (!node.model[1]) {
            node.model[1] = {};
          }
          if (node.model[1]) {
            node.model[1] = {
              verify: false,
              clearable: true,
              ...node.model[1]
            };
          }

          // 枚举处理
          if (isFunction(node.enums)) {
            node.enums = node.enums(data, node);
          }

          // 规则处理
          if (isFunction(node.rules)) {
            node.rules = node.rules(data, node);
          }
          if (!node.rules) {
            node.rules = [];
          }

          // 媒体查询
          if (isFunction(node.media)) {
            node.media = node.media(data, node);
          }
          if (!node.media) {
            node.media = this.rows;
          }

          // 属性处理
          if (isFunction(node.attrs)) {
            node.attrs = node.attrs(data, node);
          }
          if (!node.attrs) {
            node.attrs = {};
          }
          if (node.attrs) {
            node.attrs = {
              'ui-flex': node.vertical ? 'col xt' : 'row xt',
              ...node.attrs
            };
          }

          // 名称处理
          if (isFunction(node.label)) {
            node.label = node.label(data, node);
          }
          if (node.label) {
            if (isString(node.label)) {
              node.label = [node.label, { class: '', style: '' }];
            }
          } else {
            node.label = ['*', { class: '', style: '' }];
          }
          if (!node.label[1]) {
            node.label[1] = { class: '', style: '' };
          }
          node.label[0] = node.label[0] && node.label[0] !== '*' && !((node.array || node.child) && node.vertical) ? node.label[0] + ':' : node.label[0] || '';
          this.clw(node.label[0]);
          // 默认样式处理
          if (node.label[1]) {
            node.label[1].style = `${node.vertical && node?.rules?.some((v) => v.required) ? 'text-indent: -1em;' : ''} ${node.label[1] || ''}`;
          }

          return node;
        });
      }
    },
    methods: {
      // 错误提示
      err(text) {
        return `<p class="co-risk" ui-flex="row lm"><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width: 1.2em; height: 1.2em;"><path d="M906.666667 759.466667L578.133333 187.733333C565.333333 164.266667 539.733333 149.333333 512 149.333333s-53.333333 14.933333-66.133333 38.4L117.333333 759.466667c-12.8 23.466667-12.8 53.333333 0 76.8 14.933333 23.466667 38.4 38.4 66.133334 38.4h657.066666c27.733333 0 53.333333-14.933333 66.133334-38.4 14.933333-23.466667 14.933333-53.333333 0-76.8z m-426.666667-366.933334c0-19.2 14.933333-32 32-32s32 14.933333 32 32v189.866667c0 19.2-14.933333 32-32 32s-32-14.933333-32-32v-189.866667zM512 744.533333c-23.466667 0-44.8-19.2-44.8-44.8 0-23.466667 19.2-44.8 44.8-44.8s44.8 19.2 44.8 44.8c0 25.6-19.2 44.8-44.8 44.8z"></path></svg>${text}</p>`;
      },
      clw(label = '') {
        let _lw = 0;
        if (isString(label)) {
          for (let i = 0; i < label.length; i++) {
            const char = label[i];
            if (/^[\u4e00-\u9fa5]+$/.test(char)) {
              _lw += 1;
            } else {
              _lw += 0.5;
            }
          }
        }
        _lw += 3;
        if (_lw > this.lw) {
          this.lw = _lw;
        }
      },
      // label样式
      labelcss(node) {
        if (node.vertical) {
          // 竖向
          return ``;
        } else {
          // 横向
          return `width:${this.lw}em; max-width:50%;`;
        }
      },
      // 数据预处理
      predata() {
        const fields = [];
        // 补全数据字段
        this.$form.forEach((item) => {
          if (!fields.includes(item.field)) {
            fields.push(item.field);
          } else {
            console.error(`表单字段重复：${item.field}`);
          }
          if (!this.data.hasOwnProperty(item.field)) {
            if (item.array) {
              this.$set(this.data, item.field, []);
            } else if (item.child) {
              this.$set(this.data, item.field, {});
            } else if ((item.model[0] === 'Checkbox' && item.enums) || item.model[1]?.multiple) {
              this.$set(this.data, item.field, []);
            } else {
              this.$set(this.data, item.field, '');
            }
          }
        });
      },
      // 添加数组项
      fAdd(node, data) {
        const rows = _rows(node.array);
        data?.push(rows);
      },
      // 删除数组项
      fDel(data, idx) {
        data?.splice(idx, 1);
      },
      isArray
    },
    watch: {
      $form: {
        handler() {
          this.predata();
        },
        deep: true,
        immediate: true
      }
    }
  };
</script>
<style>
  .form-loader {
    position: relative;
    width: 100%;
    font-size: 13px;
  }

  .form-loader-label {
    padding-top: 4px;
    line-height: 18px;
  }
</style>
