# @neatui/tags

MCUI 选项卡组件。本组件依赖框架核心 @neatui/core 。更多详情请访问官网 [https://mcui.fekit.cn/](https://mcui.fekit.cn/)

## 安装

### 安装核心

```
npm i @neatui/core
```

### 安装组件

```
npm i @neatui/tags
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
@import '~@neatui/tags/tags@a';
// 引用更多组件...
```

### html

```html
<!-- 群组 -->
<div ui-tags="@a main">
  <div class="active">标签1</div>
  <div>标签1</div>
  <div>标签1</div>
</div>

<!-- 单个 -->
<ul>
  <li ui-tag="@a info">信息</li>
  <li ui-tag="@a well">提倡</li>
  <li ui-tag="@a warn">警告</li>
  <li ui-tag="@a risk">风险</li>
</ul>
```

## 使用

## 更多

详细文档请到 MCUI 官网 [https://mcui.fekit.cn](https://mcui.fekit.cn)
