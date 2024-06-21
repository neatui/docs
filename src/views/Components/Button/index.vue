<template>
  <DocView>
    <div>
      <h1>{{ words['components.button'] || 'Button' }}</h1>
      <p>
        一款扁平化风格的按钮组件。我们建议使用 <code class="co-code">button</code> 做为按钮标签，但是也可以向任意HTML元素设定
        <code class="co-code">ui-btn="@a"</code> 来定义一个基础按钮。通过追加各种声明
        <code class="co-code">ui-btn="@a s main :round"</code> 来定义按钮的大小，形态与主题颜色。这些声明可以进行任意组合，从而形成更多种按钮风格。
      </p>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space mob-24">
        <li>
          <CodeView file="/components/Input/Input.md">
            <h5>基础用法</h5>
            <div class="doc nb-mm-sub">
              <div>
                <h3>默认按钮</h3>
                <p><button ui-btn="@a">默认按钮</button></p>
                <pre
                  lang="html"
                  type="HTML"
                  theme="default"
                  tinted="true"
                ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>默认按钮<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
              </div>
              <div>
                <h3>语义类型</h3>
                <p>
                  按钮的语义类型包括主题类型和状态类型,主题类型跟随网站主题风格色卡而变化，一般设有主体<code class="co-code">main</code>、辅助<code class="co-code">vice</code
                  >、阅读<code class="co-code">read</code>、反色<code class="co-code">back</code>等4个类型；状态类型包括提倡<code class="co-code">well</code>、警告<code
                    class="co-code"
                    >warn</code
                  >、消极<code class="co-code">warn</code>、信息<code class="co-code">info</code>。反色<code class="co-code">back</code>用在深色背景上。
                </p>
                <table ui-table="@a grid">
                  <tbody>
                    <tr>
                      <th>演示</th>
                      <th>类型</th>
                      <th>说明</th>
                    </tr>
                    <tr>
                      <td><button ui-btn="@a none">隐式</button></td>
                      <td>
                        <code class="co-code"><code ui-hide="mob">ui-btn="@a </code>none<code ui-hide="mob">"</code></code>
                      </td>
                      <td>用于一些需要点击交互反馈但是又不需要按钮样式的内容。</td>
                    </tr>
                    <tr>
                      <td><button ui-btn="@a main">主体</button></td>
                      <td>
                        <code class="co-code"><code ui-hide="mob">ui-btn="@a </code>main<code ui-hide="mob">"</code></code>
                      </td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><button ui-btn="@a vice">辅助</button></td>
                      <td>
                        <code class="co-code"><code ui-hide="mob">ui-btn="@a </code>vice<code ui-hide="mob">"</code></code>
                      </td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><button ui-btn="@a read">阅读</button></td>
                      <td>
                        <code class="co-code"><code ui-hide="mob">ui-btn="@a </code>read<code ui-hide="mob">"</code></code>
                      </td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><button ui-btn="@a weak">浅底</button></td>
                      <td>
                        <code class="co-code"><code ui-hide="mob">ui-btn="@a </code>read<code ui-hide="mob">"</code></code>
                      </td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td class="bg-read"><button ui-btn="@a back">反色</button></td>
                      <td>
                        <code class="co-code"><code ui-hide="mob">ui-btn="@a </code>back<code ui-hide="mob">"</code></code>
                      </td>
                      <td>用于深色背景上</td>
                    </tr>
                    <tr>
                      <td><button ui-btn="@a well">提倡</button></td>
                      <td>
                        <code class="co-code"><code ui-hide="mob">ui-btn="@a </code>well<code ui-hide="mob">"</code></code>
                      </td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><button ui-btn="@a warn">警告</button></td>
                      <td>
                        <code class="co-code"><code ui-hide="mob">ui-btn="@a </code>warn<code ui-hide="mob">"</code></code>
                      </td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><button ui-btn="@a risk">风险</button></td>
                      <td>
                        <code class="co-code"><code ui-hide="mob">ui-btn="@a </code>risk<code ui-hide="mob">"</code></code>
                      </td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><button ui-btn="@a info">信息</button></td>
                      <td>
                        <code class="co-code"><code ui-hide="mob">ui-btn="@a </code>info<code ui-hide="mob">"</code></code>
                      </td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3>线框按钮</h3>
                <p>通过添加声明<code class="co-code">:border</code>可以将接钮设置为线框按钮。</p>
                <div class="my-ss-sub">
                  <button ui-btn="@a main :border"><span>主体</span></button>
                  <button ui-btn="@a vice :border"><span>辅助</span></button>
                  <button ui-btn="@a read :border"><span>阅读</span></button>
                  <button ui-btn="@a note :border"><span>备注</span></button>
                  <div class="dib n-sm bg-read">
                    <button ui-btn="@a back :border"><span>反色</span></button>
                  </div>
                  <button ui-btn="@a well :border"><span>提倡</span></button>
                  <button ui-btn="@a warn :border"><span>警告</span></button>
                  <button ui-btn="@a risk :border"><span>风险</span></button>
                  <button ui-btn="@a info :border"><span>信息</span></button>
                </div>
                <pre
                  lang="html"
                  type="HTML"
                  theme="default"
                  tinted="true"
                ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a main :border</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>主体<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
              </div>
              <div>
                <h3>圆形按钮</h3>
                <p>通过添加声明<code class="co-code">:round</code>可以将接钮设置为圆形按钮。可以与其它扩展属性同时声明。</p>
                <div class="my-ss-sub">
                  <button ui-btn="@a main :round"><span>主体</span></button>
                  <button ui-btn="@a vice :round"><span>辅助</span></button>
                  <button ui-btn="@a well :round"><span>提倡</span></button>
                  <button ui-btn="@a warn :round"><span>警告</span></button>
                  <button ui-btn="@a risk :round :border"><span>风险</span></button>
                  <button ui-btn="@a info :round :border"><span>信息</span></button>
                </div>
                <pre
                  lang="html"
                  type="HTML"
                  theme="default"
                  tinted="true"
                ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a main :round</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>主体<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
              </div>
              <div>
                <h3>按钮尺寸</h3>
                <ul class="my-sl-sub">
                  <li>
                    <p>同一字号有5种不同的按钮尺寸</p>
                    <div class="my-ss-sub">
                      <button ui-btn="@a xs read">极小号</button>
                      <button ui-btn="@a s info">小号</button>
                      <button ui-btn="@a m well">中号(默认)</button>
                      <button ui-btn="@a l warn">大号</button>
                      <button ui-btn="@a xl risk">超大号</button>
                    </div>
                    <pre
                      lang="html"
                      type="HTML"
                      theme="default"
                      tinted="true"
                    ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a xs read</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>极小号<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a s info</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>小号<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a m well</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>中号<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a l warn</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>大号<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a xl risk</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>超大号<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
                  </li>
                  <li>
                    <p>铵钮尺寸是响应字号系统的</p>
                    <div class="my-ss-sub">
                      <button class="fs-ss" ui-btn="@a info :round">SIZE FS-SS</button>
                      <button class="fs-ms" ui-btn="@a well :round">SIZE FS-MS</button>
                      <button class="fs-ls" ui-btn="@a warn :round">SIZE FS-LS</button>
                    </div>
                  </li>
                  <li>
                    <p>必要时也可以关闭响应字号</p>
                    <p class="my-sm" ui-note="@a risk">注意如果关闭了响应字号时，字体如果太大，可能会撑到按钮之外哦！</p>
                    <div class="my-ss-sub">
                      <button class="fs-ss" ui-btn="@a well :abs">SIZE FS-SS</button>
                      <button class="fs-ms" ui-btn="@a warn :abs">SIZE FS-MS</button>
                      <button class="fs-ls" ui-btn="@a risk :abs">SIZE FS-LS</button>
                    </div>
                    <pre
                      lang="html"
                      type="HTML"
                      theme="default"
                      tinted="true"
                    ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code><code>2</code><code>3</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> class</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">fs-ss</code><code class="h-equ">"</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a well :abs</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>SIZE FS-SS<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> class</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">fs-ms</code><code class="h-equ">"</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a warn :abs</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>SIZE FS-MS<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> class</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">fs-ls</code><code class="h-equ">"</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a risk :abs</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>SIZE FS-LS<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
                  </li>
                </ul>
              </div>
              <div>
                <h3>方形按钮</h3>
                <p ui-note="@a risk">仅适用于图标按钮，文字放不下啦!</p>
                <div class="my-ss-sub">
                  <button ui-btn="@a well :square"><i ui-load="@d"></i></button>
                  <button ui-btn="@a warn :square"><i ui-icon="search"></i></button>
                  <button ui-btn="@a risk :square :border"><i class="icon icon-download"></i></button>
                  <button ui-btn="@a info :square :border"><i ui-icon="refresh"></i></button>
                </div>
                <pre
                  lang="html"
                  type="HTML"
                  theme="default"
                  tinted="true"
                ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code><code>2</code><code>3</code><code>4</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a well :square</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>i</code><code class="h-key"> ui-load</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@d</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/i</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a warn :square</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>i</code><code class="h-key"> ui-icon</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">search</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/i</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a risk :square :border</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>i</code><code class="h-key"> class</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">icon icon-download</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/i</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-key"> ui-btn</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a info :square :border</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>i</code><code class="h-key"> ui-icon</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">refresh</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/i</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
              </div>
              <div>
                <h3>圆形按钮</h3>
                <p ui-note="@a risk">仅适用于图标按钮，文字放不下啦!</p>
                <div class="my-ss-sub">
                  <button ui-btn="@a well :square :round"><i ui-load="@d"></i></button>
                  <button ui-btn="@a warn :square :round"><i ui-icon="search"></i></button>
                  <button ui-btn="@a risk :square :round :border"><i class="icon icon-download"></i></button>
                  <button ui-btn="@a info :square :round :border"><i ui-icon="refresh"></i></button>
                </div>
              </div>
              <div>
                <h3>带图标的按钮</h3>
                <div class="my-ss-sub">
                  <button ui-btn="@a well"><i ui-load="@d"></i><span>加载中</span></button>
                  <button ui-btn="@a warn"><i ui-icon="search"></i><span>搜索</span></button>
                </div>
              </div>
              <div>
                <h3>禁用按钮</h3>
                <div class="my-ss-sub">
                  <button ui-btn="@a well :disabled">禁用按钮</button>
                  <button ui-btn="@a warn :disabled :round">禁用按钮</button>
                  <button ui-btn="@a risk :disabled :border">禁用按钮</button>
                  <button ui-btn="@a info :disabled :square"><i ui-icon="search"></i></button>
                </div>
              </div>
              <div>
                <h3>按钮群组</h3>
                <div ui-btns="@a line :group :border">
                  <button>按钮一</button>
                  <button>按钮二</button>
                  <button>按钮三</button>
                  <button>按钮四</button>
                  <button>按钮五</button>
                </div>
                <pre
                  lang="html"
                  theme="default"
                  tinted="true"
                ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code><code>6</code><code>7</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-key"> ui-btns</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">@a line :group :border</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>按钮一<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>按钮二<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>按钮三<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>按钮四<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>按钮五<code class="h-tag"><code class="h-bra">&lt;</code>/button</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
              </div>
              <div>
                <h3>扩展属性</h3>
                <table ui-table="@a grid">
                  <tbody>
                    <tr>
                      <th>属性</th>
                      <th>演示</th>
                      <th>说明</th>
                    </tr>
                    <tr>
                      <td><code class="co-code">:border</code></td>
                      <td><button ui-btn="@a main :border">按钮</button></td>
                      <td>线框按钮</td>
                    </tr>
                    <tr>
                      <td><code class="co-code">:round</code></td>
                      <td><button ui-btn="@a main :round">按钮</button></td>
                      <td>圆角按钮</td>
                    </tr>
                    <tr>
                      <td><code class="co-code">:square</code></td>
                      <td>
                        <button ui-btn="@a main :square"><i ui-load="@d"></i></button>
                      </td>
                      <td>正方形按钮，一般用于图标按钮。</td>
                    </tr>
                    <tr>
                      <td><code class="co-code">:disabled</code></td>
                      <td><button ui-btn="@a main :disabled">按钮</button></td>
                      <td>禁用按钮</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CodeView>
        </li>
      </ul>
    </div>
    <!-- <div>
      <h2>API</h2>
      <div>
        <h3>Input</h3>
        <table ui-table="@b" class="b-solid b-line b-xs r-sm">
          <thead>
            <tr>
              <td>参数</td>
              <td>说明</td>
              <td>类型</td>
              <td>默认值</td>
              <td>版本</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>v-model</code></td>
              <td>222</td>
              <td>string | number</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> -->
  </DocView>
  <Layer id="ex1"><div class="bg-fore w-xl h-mm r-sm n-ms">这是弹层内容</div></Layer>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { Layer, LayerById, Input, InputRange } from '@neatui/vue';
  import { DocView, CodeView } from '@/components';
  import { validatePhoneNumber } from '@fekit/utils';
  import { storeToRefs, useBaseStore } from '@/store';
  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  // 示例1
  const value1: any = ref('');

  // 示例2
  const value2: any = ref('');

  // 示例3
  const value3: any = ref('');
  const rules3: any = [
    {
      msg: '这是必填项',
      type: 'risk',
      required: true
    },
    {
      msg: '请输入正确的手机号',
      type: 'risk',
      validator: validatePhoneNumber
    },
    {
      msg: '手机号需要186开头',
      type: 'risk',
      validator: (res: any) => {
        return res.startsWith('186');
      }
    }
  ];

  // 示例4
  const value4: any = ref([]);

  const fShowLayer = () => {
    LayerById('ex1')
      .init({
        on: {
          show() {
            alert('图层已显示');
          },
          hide() {
            alert('图层已隐藏');
          }
        }
      })
      .show();
  };
</script>
