# @neatui/btns

MCUI按钮组件，依赖@neatui/core核心，文档详见官网 https://mcui.fekit.cn/

## 安装组件

```
npm i @neatui/btns
```

或

```
yarn add @neatui/btns
```

## 可选主题

- btns@a.scss
- btns@b.scss
  使用示例：

```html
<button ui-btn="@a">按钮</button>
```

## 指定语义

| 语议 | 属性 | 备注                                                     |
| ---- | ---- | -------------------------------------------------------- |
| 主体 | main | 跟随主题风格主体色                                       |
| 主体 | vice | 跟随主题风格辅助色                                       |
| 提倡 | well | 代表提倡的，安全的，推荐的，成功的，建议用户点击的       |
| 警告 | warn | 代表警告的，需再次确认的，并非绝对安全的，需要用户慎重的 |
| 风险 | risk | 代表失败的，危险的，错误的，有风险的，不建议用户操作的   |
| 信息 | info | 代表只读的，上面三个状态之外使用                         |

使用示例：

```html
<button ui-btn="@a well"></button>
```

## 指定大小

| 大小 | 属性 |
| ---- | ---- |
| 小   | s    |
| 中   | m    |
| 大   | l    |
| 特大 | x    |

使用示例：

```html
<button ui-btn="@a s"></button>
```

## 线形按钮

```html
<button ui-btn="@a :line"></button>
```

## 圆角按钮

```html
<button ui-btn="@a round"></button>
```

## 按钮群组

```html
<div ui-btns="@a line :border">
  <button>Button1</button>
  <button>Button2</button>
  <button>Button3</button>
</div>
```
