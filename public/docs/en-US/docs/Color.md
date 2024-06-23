# Color

What is unique is that MCUI can develop multiple sets of website theme colors that can be seamlessly switched at almost zero cost. All you have to do is fill in the basic color values ​​of one or more sets of theme color cards. The multi-theme generator will generate the color values ​​required for all details of the entire site based on the color cards you define. I believe this is very worth looking forward to!

According to the MCUI design specifications, the colors in all components are calculated based on the basic color cards, and it is guaranteed that when the basic color cards are changed, the color calculation formula of the components still conforms to the design principles and color recognition standards. For example, when the bright theme is switched to the dark theme, the color value calculated by the color calculation formula still conforms to the primary and secondary relationship of the content and the visual hierarchy. For details, please refer to the color specifications in Chapter 2 of the "Design Specifications".

The MCUI framework is designed for a switchable multi-theme architecture, so color recognition does not directly use words related to colors, such as `red`, `black`, `white`, `light`, `dark` etc., but uses words with content type semantics as identification names.

## Experience it

点击下面按钮切换主题试试？
Click the button below to switch the theme?

## Add a theme

It is very simple to add a theme color card. Just refer to the following sample code and add a global variable named $theme to the beginning of the scss file. Add a few fixed semantic names and the color values ​​of the object. After adding the theme in scss, set theme="theme name" in the root html tag to switch to the corresponding theme.

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
