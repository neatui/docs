<template>
  <DocView>
    <div class="doc mb-ls-sub">
      <div>
        <h3>重置</h3>
        <p>为了保证在不同浏览器下的样式尽可能保持统一效果，MCUI重置了一些浏览器自带的默认样式。</p>
        <p ui-note="@a warn">
          这不是必须阅读的，您可以直接跳过本章节。如果需要，你可以点击<code class="j_load co-code" load-file="views/core/base/reset.htm" load-area="#j_load_reset">【reset】</code
          >查看详情！
        </p>
        <div id="j_load_reset"></div>
      </div>
      <div>
        <h3>基础</h3>
        <p>与众不同</p>
      </div>
      <div class="mb-mm-sub">
        <div>
          <h3>对齐</h3>
          <p>对齐是布局排版中使用最频繁的样式之一。因此MCUI在基础样式中预设了含括全部对齐方式的即用类名。</p>
        </div>
        <div>
          <h4>水平对齐</h4>
          <table ui-table="@a grid">
            <tbody>
              <tr ui-row="fn">
                <th ui-col="mob-8">类名</th>
                <th ui-col="mob-16">样式说明</th>
              </tr>
              <tr>
                <td><code class="co-code">.al</code></td>
                <td>当前元素水平左对齐</td>
              </tr>
              <tr>
                <td><code class="co-code">.al-sub</code></td>
                <td>当前元素的子元素水平左对齐</td>
              </tr>
              <tr>
                <td><code class="co-code">.ac</code></td>
                <td>当前元素水平居中对齐</td>
              </tr>
              <tr>
                <td><code class="co-code">.ac-sub</code></td>
                <td>当前元素的子元素水平左对齐</td>
              </tr>
              <tr>
                <td><code class="co-code">.ar</code></td>
                <td>当前元素水平右对齐</td>
              </tr>
              <tr>
                <td><code class="co-code">.ar-sub</code></td>
                <td>当前元素的子元素水平右对齐</td>
              </tr>
              <tr>
                <td><code class="co-code">.aj</code></td>
                <td>当前元素内容水平两端对齐</td>
              </tr>
              <tr>
                <td><code class="co-code">.aj-sub</code></td>
                <td>当前元素的子元素水平右对齐</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4>垂直对齐</h4>
          <p>垂直对齐的元素属性必须是行内块级元素。</p>
          <table ui-table="@a grid">
            <tbody>
              <tr ui-row="fn">
                <th ui-col="mob-8">类名</th>
                <th ui-col="mob-16">样式说明</th>
              </tr>
              <tr>
                <td><code class="co-code">.vt</code></td>
                <td>垂直方向顶部对齐</td>
              </tr>
              <tr>
                <td><code class="co-code">.vt-sub</code></td>
                <td>当前元素的子元素垂直方向顶部对齐</td>
              </tr>
              <tr>
                <td><code class="co-code">.vm</code></td>
                <td>垂直方向居中对齐</td>
              </tr>
              <tr>
                <td><code class="co-code">.vm-sub</code></td>
                <td>当前元素的子元素垂直方向居中对齐</td>
              </tr>
              <tr>
                <td><code class="co-code">.vb</code></td>
                <td>垂直方向底部对齐</td>
              </tr>
              <tr>
                <td><code class="co-code">.vb-sub</code></td>
                <td>当前元素的子元素垂直方向底部对齐</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mb-sl-sub">
          <div>
            <h4>区块对齐</h4>
            <p>区块元素对齐可以实现水平垂直双向对齐。但是需要遵循一些特定的HTML结构。</p>
          </div>
          <table ui-table="@a grid">
            <tbody>
              <tr ui-row="fn">
                <th ui-col="mob-12 pad-8">属性</th>
                <th ui-col="mob-12 pad-16">样式说明</th>
              </tr>
              <tr>
                <td><code class="co-code">ui-pos="lt"</code></td>
                <td>左上</td>
              </tr>
              <tr>
                <td><code class="co-code">ui-pos="ct"</code></td>
                <td>中上</td>
              </tr>
              <tr>
                <td><code class="co-code">ui-pos="rt"</code></td>
                <td>右上</td>
              </tr>
              <tr>
                <td><code class="co-code">ui-pos="lm"</code></td>
                <td>左中</td>
              </tr>
              <tr>
                <td><code class="co-code">ui-pos="cm"</code></td>
                <td>中中</td>
              </tr>
              <tr>
                <td><code class="co-code">ui-pos="rm"</code></td>
                <td>右中</td>
              </tr>
              <tr>
                <td><code class="co-code">ui-pos="lb"</code></td>
                <td>左下</td>
              </tr>
              <tr>
                <td><code class="co-code">ui-pos="cb"</code></td>
                <td>中下</td>
              </tr>
              <tr>
                <td><code class="co-code">ui-pos="rb"</code></td>
                <td>右下</td>
              </tr>
            </tbody>
          </table>
          <div ui-demo="@a">
            <div ui-demo-view="">
              <ul ui-pos=":col ct" style="height: 200px; border: 1px solid rgba(0, 0, 0, 0.3)">
                <li style="border: 1px solid rgba(0, 0, 0, 0.3); padding: 0 10px">1</li>
                <li style="border: 1px solid rgba(0, 0, 0, 0.3); padding: 0 10px">2</li>
                <li style="border: 1px solid rgba(0, 0, 0, 0.3); padding: 0 10px">3</li>
              </ul>
            </div>
            <div ui-demo-tool=""></div>
            <div ui-demo-code=""></div>
          </div>
          <div>
            <h5>示例：</h5>
            <pre
              class="tinting"
              data-number="1"
              lang="html"
              type="HTML"
              theme="default"
              tinted="true"
            ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-key"> ui-pos</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">cm</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
    ...
  <code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
          </div>
        </div>
      </div>

      <div>
        <h3>浮动</h3>
        <table ui-table="@a grid">
          <tbody>
            <tr ui-row="fn">
              <th ui-col="mob-8">类名</th>
              <th ui-col="mob-16">样式说明</th>
            </tr>
            <tr>
              <td><code class="co-code">.fl</code></td>
              <td>当前元素向左浮动</td>
            </tr>
            <tr>
              <td><code class="co-code">.fl-sub</code></td>
              <td>当前元素的子元素向左浮动</td>
            </tr>
            <tr>
              <td><code class="co-code">.fr</code></td>
              <td>当前元素向右浮动</td>
            </tr>
            <tr>
              <td><code class="co-code">.fr-sub</code></td>
              <td>当前元素的子元素向右浮动</td>
            </tr>
            <tr>
              <td><code class="co-code">.fn</code></td>
              <td>当前元素不要浮动</td>
            </tr>
            <tr>
              <td><code class="co-code">.fn-sub</code></td>
              <td>当前元素的子元素不要浮动</td>
            </tr>
            <tr>
              <td><code class="co-code">.cb</code></td>
              <td>清除当前元素的浮动</td>
            </tr>
            <tr>
              <td><code class="co-code">.cb-sub</code></td>
              <td>清除当前元素的子元素的浮动</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3>定位</h3>
        <table ui-table="@a grid">
          <tbody>
            <tr ui-row="fn">
              <th ui-col="mob-8">类名</th>
              <th ui-col="mob-16">样式说明</th>
            </tr>
            <tr>
              <td><code class="co-code">.pr</code></td>
              <td>相对定位</td>
            </tr>
            <tr>
              <td><code class="co-code">.pr-sub</code></td>
              <td>当前元素的子元素相对定位</td>
            </tr>
            <tr>
              <td><code class="co-code">.pa</code></td>
              <td>绝对定位</td>
            </tr>
            <tr>
              <td><code class="co-code">.pa-sub</code></td>
              <td>当前元素的子元素绝对定位</td>
            </tr>
            <tr>
              <td><code class="co-code">.pf</code></td>
              <td>悬浮定位</td>
            </tr>
            <tr>
              <td><code class="co-code">.pf-sub</code></td>
              <td>当前元素的子元素悬浮定位</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mb-mm-sub">
        <h3>文字</h3>
        <div>
          <h4>文字粗细</h4>
          <p>
            字体粗细度有9级,分别是从<code class="co-code">.fw1</code>到<code class="co-code">.fw9</code>，分别设置100-900的粗细度，另外还有一个常用的<code class="co-code"
              >.blod</code
            >系统默认的粗体字可供使用
          </p>
          <table class="mb-sm" ui-table="@a grid">
            <tbody>
              <tr ui-row="fn">
                <th ui-col="mob-8">类名</th>
                <th ui-col="mob-16">样式说明</th>
              </tr>
              <tr>
                <td><code class="co-code">.fw1</code></td>
                <td><span class="fw1">文字粗细度为100</span></td>
              </tr>
              <tr>
                <td><code class="co-code">.fw2</code></td>
                <td><span class="fw2">文字粗细度为200</span></td>
              </tr>
              <tr>
                <td><code class="co-code">.fw3</code></td>
                <td><span class="fw3">文字粗细度为300</span></td>
              </tr>
              <tr>
                <td><code class="co-code">.fw4</code></td>
                <td><span class="fw4">文字粗细度为400</span></td>
              </tr>
              <tr>
                <td><code class="co-code">.fw5</code></td>
                <td><span class="fw5">文字粗细度为500</span></td>
              </tr>
              <tr>
                <td><code class="co-code">.fw6</code></td>
                <td><span class="fw6">文字粗细度为600</span></td>
              </tr>
              <tr>
                <td><code class="co-code">.fw7</code> 或 <code class="co-code">.bold</code></td>
                <td><span class="fw7">文字粗细度为700</span></td>
              </tr>
              <tr>
                <td><code class="co-code">.fw8</code></td>
                <td><span class="fw8">文字粗细度为800</span></td>
              </tr>
              <tr>
                <td><code class="co-code">.fw9</code></td>
                <td><span class="fw9">文字粗细度为900</span></td>
              </tr>
            </tbody>
          </table>
          <p ui-note="@a warn">
            注意每款字体都不一样，并不是每个粗细度都能显示。但它会显示最接近的精细度。建议您使用 细:<code class="co-code">.fw3</code>、粗:<code class="co-code">.fw7</code>或<code
              class="co-code"
              >.bold</code
            >
          </p>
        </div>
        <div>
          <h4>文字大小</h4>
          <p ui-cite="@a well">字体大小做为一个全局架构性的核心组件单独讲解，详情请查看<a class="co-link" href="#/core/size">【字号系统】</a></p>
        </div>
      </div>
      <div>
        <h3>布局容器</h3>
        <table ui-table="@a grid" class="vt">
          <tbody>
            <tr>
              <th>类名</th>
              <th>说明</th>
            </tr>
            <tr>
              <td><code class="co-code">.box</code></td>
              <td>
                <p>
                  页面布局容器，响应根标签<code class="co-code">html</code>标答的 <code class="co-code">layout=""</code> 属性，默认为<code class="co-code">fixed</code
                  >，另外可选<code class="co-code">auto</code>、<code class="co-code">full</code>
                </p>
                <p class="co-main">具体效果请点击下面按钮试试:</p>
                <p class="mr-sm-sub">
                  <button class="j_layout" data-layout="base" ui-btn="@a main s :border">base</button>
                  <button class="j_layout" data-layout="slim" ui-btn="@a main s :border">slim</button>
                  <button class="j_layout" data-layout="auto" ui-btn="@a main s :border">auto</button>
                  <button class="j_layout" data-layout="wide" ui-btn="@a main s :border">wide</button>
                  <button class="j_layout" data-layout="full" ui-btn="@a main s :border">full</button>
                </p>
              </td>
            </tr>
            <tr>
              <td><code class="co-code">.doc</code></td>
              <td>文档区块容器，容器内定义了一些提升用户阅读体验的样式。</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocView>
</template>
<script setup lang="ts">
  import { DocView, CodeView } from '@/components';
</script>
