# @neatui/core

MCUI 核心组件，MCUI 全局架构性组件。官网 [https://mcui.fekit.cn/](https://mcui.fekit.cn/)

## 安装

### 安装核心

```
npm i @neatui/core
```

### 安装组件

```
npm i @neatui/btns
```

## 引用

```scss
// main.scss

// 添加主题
$theme: (
  light: (
    main: #d52932,
    // 主体
    vice: #67337d,
    // 辅助
    text: #000000,
    // 文本
    back: #ffffff,
    // 底色
    link: #0d66d0,
    // 链接
    code: #e23861,
    // 代码
    well: #4bbc73,
    // 提倡
    warn: #fb9a2a,
    // 警告
    risk: #f95850,
    // 风险
    info: #0889e4 // 信息
  ),
  dark: (
    main: #91cc48,
    vice: #ffa60f,
    text: rgba(255, 255, 255, 0.9),
    back: #262629,
    link: #00b9ff,
    code: #e23861,
    well: #49ca74,
    warn: #fb9a2a,
    risk: #fd7466,
    info: #949af9
  )
  // 添加更多主题...
);

// 引用框架核心
@import '~@neatui/core';

// 引用业务组件
@import '~@neatui/btns';
// 引用更多组件...
```

## 使用

### 颜色

```scss
@import '~@neatui/core';

.header {
  position: fixed;
  width: 100%;
  height: 4rem;
  left: 0;
  top: 0;

  @include theme {
    background-color: co(back);
    color: co(text);
  }
}
```

↓

```css
/* 编译成css: */
.header {
  position: fixed;
  width: 100%;
  height: 4rem;
  left: 0;
  top: 0;
}
[mcui~='light'] .header {
  background-color: #ffffff;
  color: #000000;
}
[mcui~='dark'] .header {
  background-color: #262629;
  color: rgba(255, 255, 255, 0.9);
}
```

### 响应三端

```scss
@import '~@neatui/core';

body {
  font-size: 14px;

  @include mob {
    font-size: 12px;
  }
}
```

↓

```css
/* 编译成css: */
body {
  font-size: 14px;
}
@media screen and (max-width: 767px) {
  body {
    font-size: 12px;
  }
}
```

## 更多

详细文档请到MCUI官网 [https://mcui.fekit.cn](https://mcui.fekit.cn)
