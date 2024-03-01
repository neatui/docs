# 基础 UI 组件

```javascript
// 规则描述 Rule Description 简称 RD
const rd = {
  // 筛选配置
  limit: [
    {
      label: '',
      field: '',
      paths: '',
      enums: [],
      modle: '',
      value: '',
      rules: [],
      logic: true | false,
      _view: 1,
    }
  ],

  // 表格配置
  table: [
    {
      label: '', // 标签名
      field: '', // 字段名
      paths: '', // 源数据里的JSON结构层级 如{a:{aa:{aaaa:1},b:{bb:{bbb:2}}} 如果field是bbb则需要在paths里填写'b.bb'告诉驱动器这个字段在源数据中所处的位置
      enums: [], // 枚举
      modle: '', // 模型 链接Link|复制Copy|图片Image|标签Tag|... 有一个特殊的自定义代码'@',当驱动器不会自动处理这个字段需要手工在业务代码里处理
      value: '', // 显示内容，一般不填写，只有需要计算显示值时才使用，比如给显示值设置特殊格式{ value: ()=> idate(val).format('YYYY-MM-DD') }
      event: {}, // 事件
      attrs: {}, // 属性
      popup: {}, // 提示（无限套娃遍历）
      logic: true, // 逻辑控制（开启关闭）
      fixed: true|false|1｜0｜'l'|'r' // 是否固定
      rules: [], // 校验规则
      view: true|false|'always', // 是否显示（自动生成静态值交互可控）
      chlid:[], // 子元素（无限套娃遍历）
      clear: true|false // 是否清除字段，代替logic，logic另有他用
    }
  ],

  // 表单配置
  form: [
    {
      label: '', // 标签名
      field: '', // 字段名
      paths: '', // 源数据里的JSON结构层级 如{a:{aa:{aaaa:1},b:{bb:{bbb:2}}} 如果field是bbb则需要在paths里填写'b.bb'告诉驱动器这个字段在源数据中所处的位置
      enums: [], // 枚举
      modle: '', // 模型 简写'Select'，详细写法 ['Select',{ attrName:'1' }]
      value: '',
      event: {}, // 事件
      attrs: {}, // 属性
      logic: true, // 逻辑控制（开启关闭）
      rules: [
        {
          type: 'risk',
          msg: '这是必填项',
          required: true
        },
        {
          type: 'risk',
          msg: '请正确填写中文名',
          validator: () => validateChineseName
        }
      ],
      logic: true | false, // 是否显示
      media: 'mob-24 pad-12 dpc-8', // 媒体查询

      // 数组类型
      array: true,
      // 子块标题
      title: (data: any, item: any) => {
        return item.customerName + '的评价';
      },
      // 子块字段
      child: []
    }
  ]
};
```

## 封装组件

```
TableLoader           ✓
LimitLoader           ✓
FormView              ✓
FormRowView           ✓
FormColView           ✓


Grid                  0%
Button                0%
Input                 ✓
NumberInput           0%
Radio                 0%
Checkbox              0%
Rate                  0%
Slider                0%
Select                ✓
MoreSelect            ✓
SearchSelect          ✓
SearchMoreSelect      ✓
PageSelect            ✓
TreeSelect            ✓
CascaderSelect        ✓
DatePicker            50%  急
TimePicker            50%  急
DateTimePicker        50%  急
Switch                50%
Textarea              50%
FileUpload            0%
ImageUpload           ✓
Avatar                0%
Badge                 0%
Calendar              0%
Card                  0%
Carousel              0%
Collapse              0%
Empty                 0%
Image                 ✓
InfiniteScroll        0%
Pagination            ✓
Progress              0%
Result                0%
Tag                   0%
Timeline              0%
Tree                  0%
Tabs                  0%
Divider               0%
Message               0%
```

## Version

```
v1.0.0
开源第一版本
```
