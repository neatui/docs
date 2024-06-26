# 颜色

与众不同的是，MCUI可以几乎零成本开发出可无缝切换的多套网站主题色。您要做的仅仅是填写一套或多套主题色卡的基础色值。多主题生成器会根据您定义的色卡开生成全站所有细节所需的色值。相信这非常值得期待！

依据MCUI设计规范，所有组件中的颜色都基于基础色卡计算而来，并且保证在基础色卡变更时，组件的颜色计算公式仍然符合设计原则与颜色识别标准。例如当明亮主题切换为黑暗主题时，颜色计算公式计算出的颜色值仍然符合内容主次关系与视觉层次。详情请参考《设计规范》第二章颜色规范。

MCUI框架为可切换的多主题架构而设计，因此颜色识别不会直接使用跟颜色相关的单词，比如 `red`、`black`、`white`、`light`、`dark` 等，而是使用以内容类型语义的单词做为识别名称。

## 体验一下

点击下面按钮切换主题试试？

## 添加主题

添加一套主题色卡非常简单，只需要参考下面示例代码在scss文件的开头添加一个全局变量名为$theme的对象。在对象中添加几个固定语义名和对象的色值即可。在scss中添加主题后，在html根标签中设置theme="主题名称"即切换到了对应主题。

```scss
// 在所有scss开头定义全局放题变量
$theme: (
  // 添加一套主题 [theme='mcui']
  'mcui':
    (
      main: #d52932,
      vice: #4bbc73,
      text: #000000,
      back: #ffffff,
      back: #f7f7f7,
      link: #0067b8,
      code: #dd1144,
      well: #4bbc73,
      warn: #fb9a2a,
      risk: #f95850,
      info: #08a5e4
    ),

  // 继续添加第二套主题 [theme='dark']
  'dark':
    (
      main: #ffa60f,
      vice: #b7d07a,
      text: #cccccc,
      back: #202020,
      back: #191919,
      link: #00b9ff,
      code: #e23861,
      well: #4bbc73,
      warn: #fb9a2a,
      risk: #f95850,
      info: #0889e4
    )
);
// 引入MCUI核心
@import '~@mcui/core';
```
