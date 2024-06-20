<template>
  <div class="flex-block pr">
    <el-input v-if="node.model[0] === 'Input'" v-model="value" class="full-w" v-bind="{ ...(node.model[1] || {}) }" @input="setInteracted" @blur="setInteracted" />
    <el-input
      v-if="node.model[0] === 'TextArea'"
      v-model="value"
      class="full-w"
      v-bind="{ ...(node.model[1] || {}, { type: 'textarea', rows: 3 }) }"
      @input="setInteracted"
      @blur="setInteracted"
    />
    <el-select v-else-if="node.model[0] === 'Select'" v-model="value" v-bind="{ ...(node.model[1] || {}) }" @input="setInteracted" @blur="setInteracted">
      <el-option v-for="item in node.enums" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
    <el-radio-group v-else-if="node.model[0] === 'Radio'" v-model="value" v-bind="{ ...(node.model[1] || {}) }" @input="setInteracted" @blur="setInteracted">
      <el-radio v-for="item in node.enums" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
    </el-radio-group>
    <el-checkbox-group v-else-if="node.model[0] === 'Checkbox' && node.enums" v-model="value" v-bind="{ ...(node.model[1] || {}) }" @input="setInteracted" @blur="setInteracted">
      <el-checkbox v-for="item in node.enums" :key="item.value" :label="item.value">{{ item.label }}</el-checkbox>
    </el-checkbox-group>
    <el-checkbox v-else-if="node.model[0] === 'Checkbox'" v-model="value" v-bind="{ ...(node.model[1] || {}) }" @input="setInteracted" @blur="setInteracted"> </el-checkbox>
    <el-switch v-else-if="node.model[0] === 'Switch'" v-model="value" v-bind="{ ...(node.model[1] || {}) }" @input="setInteracted" @blur="setInteracted"> </el-switch>
    <el-time-select v-else-if="node.model[0] === 'TimeSelect'" v-model="value" v-bind="{ ...(node.model[1] || {}) }" @input="setInteracted" @blur="setInteracted"> </el-time-select>
    <el-time-picker v-else-if="node.model[0] === 'TimePicker'" v-model="value" v-bind="{ ...(node.model[1] || {}) }" @input="setInteracted" @blur="setInteracted"> </el-time-picker>
    <el-date-picker v-else-if="node.model[0] === 'DatePicker'" v-model="value" v-bind="{ ...(node.model[1] || {}) }" @input="setInteracted" @blur="setInteracted"> </el-date-picker>
    <el-date-picker
      v-else-if="node.model[0] === 'DateTimePicker'"
      v-model="value"
      v-bind="{ ...(node.model[1] || {}, { type: 'datetime' }) }"
      @input="setInteracted"
      @blur="setInteracted"
    >
    </el-date-picker>
    <el-cascader
      v-else-if="node.model[0] === 'Cascader'"
      v-model="value"
      :options="node.enums"
      v-bind="{ ...node.model[1] }"
      @input="setInteracted"
      @blur="setInteracted"
    ></el-cascader>
    <gallery-value v-else-if="node.model[0] === 'SelectImg'" :form="data" :node="node" v-bind="{ ...node.model[1] }"></gallery-value>
    <!-- 自定义组件插槽 -->
    <slot v-else-if="node.model[0]" :name="node.model[0]" :data="data" :node="node" v-model:bind="bind"></slot>
    <!-- 自定义字段插槽 -->
    <slot v-else :name="`${node.field}-value`" :data="data" :node="node" v-model:bind="bind"></slot>
    <p v-show="error.verify === 'no'" class="form-loader-verify" :data-verify-type="error.co">{{ error.tips }}</p>
  </div>
</template>
<script>
  import { isFunction } from '@fekit/utils';
  import GalleryValue from '@/common/galleryValue';

  export default {
    components: { GalleryValue },
    props: {
      node: {
        type: Object,
        default: () => ({})
      },
      data: {
        type: Object,
        default: () => ({})
      },
      interacted: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        _interacted: false,
        bind: {
          value: null
        },
        error: {}
      };
    },
    created() {
      // console.log(54, this.$props.node);
    },
    computed: {
      value: {
        get() {
          return this.$props.data?.[this.$props.node?.field];
        },
        set(value) {
          const _value = this.$props.node.value;
          if (_value) {
            if (isFunction(_value)) {
              this.$set(this.$props.data, this.$props.node.field, _value(value));
            } else {
              this.$set(this.$props.data, this.$props.node.field, _value);
            }
          } else {
            this.$set(this.$props.data, this.$props.node.field, value);
          }
          this.validate();
        }
      }
    },
    methods: {
      async validate() {
        if (this._interacted) {
          // 提示文案
          let tips = '';
          // 错误类型
          let type = '';
          // 验证结果
          let verify = '';
          const value = this.data[this.node.field];
          if (`${value}`) {
            // 有值
            let _err = false;
            // 遍历校验规则
            for (const rule of this.node.rules) {
              if (rule && rule.validator) {
                const yes = !(await rule.validator(value));
                if (yes) {
                  tips = rule.message;
                  type = rule.type;
                  _err = true;
                  break;
                }
              }
            }
            verify = _err ? 'no' : 'ok';
            // console.log(91);
          } else {
            // console.log(92);
            // 无值
            let _err = false;
            // 遍历校验规则
            for (const rule of this.node.rules) {
              if (rule) {
                tips = rule.message;
                type = rule.type;
                if (rule.required) {
                  _err = true;
                  break;
                }
              }
            }
            verify = _err ? 'no' : '';
          }
          if (verify !== 'no' && this.tips) {
            tips = this.tips;
          }
          // 是否显示提示
          const ontips = (verify === 'no' && tips) || this.tips ? 'show' : '';
          // 状态颜色
          const co = verify === 'no' ? 'co:' + type : this.co ? 'co:' + this.co : '';
          this.error = { tips, ontips, verify, co };
        } else {
          this.error = { tips: this.tips, ontips: this.tips ? 'show' : '', verify: '', co: '' };
        }
      },
      setInteracted() {
        // 用户交互
        if (!this._interacted) {
          setTimeout(() => {
            this._interacted = true;
            this.validate();
          }, 50);
        }
      }
    },
    watch: {
      bind: {
        handler(bind) {
          let value = bind.value;
          const run = this.$props.node.value;
          if (run) {
            if (isFunction(run)) {
              value = run(value);
            } else {
              value = run;
            }
          }
          this.$set(this.$props.data, this.$props.node.field, value);
          this.$set(this.bind, 'value', value);
        },
        deep: true
      },
      interacted: {
        handler(val) {
          this._interacted = val;
          this.validate();
        },
        deep: true
      },
      value: {
        handler() {
          this.validate();
        },
        deep: true
      }
    }
  };
</script>
<style>
  .form-loader .flex-block {
    overflow: unset !important;
  }

  .form-loader-verify {
    position: absolute;
    bottom: 100%;
    left: 0;
    background: #f95850;
    color: #fff;
    padding: 0.2em 0.5em;
    font-size: 0.8em;
    border-radius: 0.3em;
    margin-bottom: 0.3em;
    opacity: 0.9;
    z-index: 1;
  }
  .form-loader-verify[data-verify-type~='co:warn'] {
    background: #fb9a2a;
  }
  .form-loader-verify::before {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 3px solid transparent;
    border-top-color: #f95850;
    bottom: -6px;
    left: 0.7em;
  }
  .form-loader-verify[data-verify-type~='co:warn']::before {
    border-top-color: #fb9a2a;
  }

  .form-loader .el-radio__label,
  .form-loader .el-checkbox__label {
    font-size: 12px;
    padding-left: 4px;
  }
  .form-loader .el-textarea__inner {
    height: auto;
  }

  .form-loader .el-select,
  .form-loader .el-cascader {
    display: block;
  }
  .form-loader .el-radio-group {
    margin-top: 6px;
  }
  .form-loader .el-radio,
  .form-loader .el-checkbox {
    font-weight: normal;
    color: #0e255a;
  }
  .form-loader .el-switch,
  .form-loader .el-checkbox {
    margin-top: 4px;
  }
  .form-loader .el-radio__label {
    font-size: 12px;
    padding-left: 4px;
  }
  .form-loader .el-checkbox__label {
    font-size: 12px;
    padding-left: 4px;
  }

  .form-loader .el-date-editor .el-range-separator {
    line-height: 20px;
  }
</style>
