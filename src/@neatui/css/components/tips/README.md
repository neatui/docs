# @neatui/core

MCUI 选项卡组件。本组件依赖框架核心 @neatui/core 。更多详情请访问官网 [https://mcui.fekit.cn/](https://mcui.fekit.cn/)

## 安装

### 安装核心

```
npm i @neatui/core
```

### 安装组件

```
npm i @neatui/tabs
```

## 引用

### scss

```scss
$theme: (
  light: (
    main: #d52932,
    vice: #67337d,
    text: #000000,
    back: #ffffff,
    link: #0d66d0,
    code: #e23861,
    well: #4bbc73,
    warn: #fb9a2a,
    risk: #f95850,
    info: #0889e4
  )
  // 添加更多主题...
);

// 引用框架核心
@import '~@neatui/core';

// 引用业务组件
@import '~@neatui/tabs/tabs@a';
// 引用更多组件...
```

### html

```html
<div ui-tabs="@a">
  <div class="active">选择卡1</div>
  <div>选择卡2</div>
  <div>选择卡3</div>
</div>
```

## 使用

## 更多

详细文档请到 MCUI 官网 [https://mcui.fekit.cn](https://mcui.fekit.cn)
