<template>
  <DocView>
    <div class="doc mb-ll-sub">
      <div>
        <h3>主题色卡</h3>
        <div class="aj">
          <p>
            与众不同的是，MCUI可以几乎零成本开发出可无缝切换的多套网站主题色。您要做的仅仅是填写一套或多套主题色卡的基础色值。多主题生成器会根据您定义的色卡开生成全站所有细节所需的色值。相信这非常值得期待！
          </p>
          <p>
            依据MCUI设计规范，所有组件中的颜色都基于基础色卡计算而来，并且保证在基础色卡变更时，组件的颜色计算公式仍然符合设计原则与颜色识别标准。例如当明亮主题切换为黑暗主题时，颜色计算公式计算出的颜色值仍然符合内容主次关系与视觉层次。详情请参考<a
              href="#/start/design"
              class="co-link hover-underline"
              >《设计规范》</a
            >第二章颜色规范。
          </p>
          <p>MCUI框架为可切换的多主题架构而设计，因此颜色识别不会直接使用跟颜色相关的单词，比如red、black、white、light、dark等，而是使用以内容类型语义的单词做为识别名称。</p>
        </div>
      </div>
      <div>
        <h3>体验一下</h3>
        <p>点击下面按钮切换主题试试？</p>
        <p class="mr-ss-sub">
          <button class="j_theme" data-theme="mcui" ui-btn="@a s main :border">mcui</button>
          <button class="j_theme" data-theme="dark" ui-btn="@a s main :border">dark</button>
          <!-- <button class="j_theme" data-theme="wenyi" ui-btn="@a s main :border">wenyi</button> -->
        </p>
      </div>
      <div>
        <h3>添加主题</h3>
        <p>
          添加一套主题色卡非常简单，只需要参考下面示例代码在<code class="co-code">scss</code>文件的开头添加一个全局变量名为<code class="co-code">$theme</code
          >的对象。在对象中添加几个固定语义名和对象的色值即可。在<code class="co-code">scss</code>中添加主题后，在<code class="co-code">html</code>根标签中设置<code class="co-code"
            >theme="主题名称"</code
          >即切换到了对应主题。
        </p>

        <pre
          lang="scss"
          data-number="1"
          type="SCSS"
          theme="default"
          tinted="true"
        ><code class="mc-tinting-area" data-digit="2"><code class="mc-tinting-number"><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code><code>6</code><code>7</code><code>8</code><code>9</code><code>10</code><code>11</code><code>12</code><code>13</code><code>14</code><code>15</code><code>16</code><code>17</code><code>18</code><code>19</code><code>20</code><code>21</code><code>22</code><code>23</code><code>24</code><code>25</code><code>26</code><code>27</code><code>28</code><code>29</code><code>30</code><code>31</code><code>32</code><code>33</code><code>34</code><code>35</code></code><code class="mc-tinting-body">// 以下代码就是上一段【体验一下】定义的两款主题
// 在所有scss开头定义全局放题变量
$theme: (
  // 添加一套主题 [theme='mcui']
  'mcui': (             
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
  'dark': (
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
@import '~@mcui/core';</code></code></pre>
        <p ui-note="@a risk">如果没有定义主题颜色，则框架自动使用一套默认的蔸底色卡 <code class="co-code">[theme='_sys']</code>。</p>
      </div>
      <div>
        <h3>基础颜色</h3>
        <p>
          基础颜色就是上一段所示添加一款主题色卡需要填写的颜色名与色值。基础颜色包括主题颜色和状态颜色。主题颜色是设计稿的整体风格色调，完全由设计稿自由发挥。状态颜色则需遵循基本的WEB颜色使用规范或不成文的使用习惯。
        </p>
        <div class="mb-sl-sub">
          <div>
            <h4>主题颜色</h4>
            <p>主题颜色一般定义6个，分别是[主体]、[辅助]、[文本]、[前景]、[底色]、[链接]、[代码]。</p>
            <div class="my-ss-sub">
              <span class="demo-bg bg-main"><code>main</code></span>
              <span class="demo-bg bg-vice"><code>vice</code></span>
              <span class="demo-bg bg-text"><code>text</code></span>
              <span class="demo-bg bg-fore co-text"><code>fore</code></span>
              <span class="demo-bg bg-back co-text"><code>back</code></span>
              <span class="demo-bg bg-link"><code>link</code></span>
              <span class="demo-bg bg-code"><code>code</code></span>
            </div>
          </div>
          <div>
            <h4>状态颜色</h4>
            <p>状态一般是固定为4个，分别为[提倡]、[警告]、[风险]、[信息]</p>
            <p ui-note="@a warn">
              状态颜色色值可以变化,但总的来说需要使用绿/黄/红几大色系。且【成功=绿】、【警告=黄】、【失败=红】状态与色系需对应上不能乱用。【信息】一般使用蓝色，但是也可以使用绿黄红色之外的其它颜色。
            </p>
            <div class="my-ss-sub">
              <span class="demo-bg demo-bg-well"><code>well</code></span>
              <span class="demo-bg demo-bg-warn"><code>warn</code></span>
              <span class="demo-bg demo-bg-risk"><code>risk</code></span>
              <span class="demo-bg demo-bg-info"><code>info</code></span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>扩展颜色</h3>
        <p>扩展语义颜色一般是由基础颜色自动计算而来的，但是也可以直接在定义放题色卡时直接写上。</p>
        <div class="mb-sl-sub">
          <div>
            <h4>基本的扩展颜色</h4>
            <p>基本扩展颜色在多主题内核心会自动生成，共有4个分别是有[阅读]、[备注]、[废弃]、[边沿]、[线条]、[淡底]。</p>
            <div class="mb-sm my-ss-sub">
              <span class="demo-bg bg-read"><code>read</code></span>
              <span class="demo-bg bg-desc co-text"><code>desc</code></span>
              <span class="demo-bg bg-note co-text"><code>note</code></span>
              <span class="demo-bg bg-idle co-text"><code>idle</code></span>
              <span class="demo-bg bg-case co-text"><code>case</code></span>
              <span class="demo-bg bg-line co-text"><code>line</code></span>
              <span class="demo-bg bg-weak co-text"><code>weak</code></span>
              <span class="demo-bg bg-deep co-text"><code>deep</code></span>
            </div>
            <table ui-table="@a grid">
              <tbody>
                <tr>
                  <th>名称</th>
                  <th class="nowrap">语义</th>
                  <th>公式</th>
                </tr>
                <tr>
                  <td><code class="co-code">read</code></td>
                  <td>阅读</td>
                  <td><code class="co-code">mix(co(text), co(back), 75%)</code></td>
                </tr>
                <tr>
                  <td><code class="co-code">note</code></td>
                  <td>备注</td>
                  <td><code class="co-code">mix(co(text), co(back), 50%)</code></td>
                </tr>
                <tr>
                  <td><code class="co-code">idle</code></td>
                  <td>废弃</td>
                  <td><code class="co-code">mix(co(text), co(back), 25%)</code></td>
                </tr>
                <tr>
                  <td><code class="co-code">line</code></td>
                  <td>线条</td>
                  <td><code class="co-code">mix(co(text), co(back), 10%)</code></td>
                </tr>
                <tr>
                  <td><code class="co-code">weak</code></td>
                  <td>淡底</td>
                  <td><code class="co-code">mix(co(text), co(back), 3%)</code></td>
                </tr>
                <tr>
                  <td><code class="co-code">deep</code></td>
                  <td>加深</td>
                  <td>
                    <code class="co-code"
                      >rgb(red(map-get($s, 'back')) - (red(map-get($s, 'back')) * 0.05 + 3), green(map-get($s, 'back')) - (green(map-get($s, 'back')) * 0.05 + 3), blue(map-get($s,
                      'back')) - (blue(map-get($s, 'back')) * 0.05 + 3))</code
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4>常用的扩展颜色</h4>
            <p>以下只是选出一些常用的扩展颜色做为例子用于演示，在实际开发时在各种扩展组件中还可以通计颜色计算公式基于上面基础颜色和基本的扩展颜色扩展出千变万化的颜色。</p>
            <div class="mb-sm-sub">
              <div>
                <h5>按钮组件</h5>
                <p class="m-ss-sub">
                  <button ui-btn="@a main">主体</button>
                  <button ui-btn="@a vice">辅助</button>
                  <button ui-btn="@a read">阅读</button>
                  <button ui-btn="@a well">提倡</button>
                  <button ui-btn="@a warn">警告</button>
                  <button ui-btn="@a risk">风险</button>
                  <button ui-btn="@a info">信息</button>
                </p>
                <pre
                  lang="scss"
                  data-number="1"
                  type="SCSS"
                  theme="default"
                  tinted="true"
                ><code class="mc-tinting-area" data-digit="2"><code class="mc-tinting-number"><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code><code>6</code><code>7</code><code>8</code><code>9</code><code>10</code><code>11</code><code>12</code><code>13</code></code><code class="mc-tinting-body">@include theme {
  // 背景色
  $bg: co($name);
  background: $bg;

  // 根据背景色智能计算文字颜色是否反白
  $wd: lightness($bg) - (saturation($bg) / 3);
  @if ($wd &lt; 60%) {
    color: #fff;
  } @else {
    color: co(back);
  }
}</code></code></pre>
              </div>
              <div>
                <h5>提示组件</h5>
                <div class="demo-bg-z">
                  <p class="bg-note-main">main</p>
                  <p class="bg-note-well">well</p>
                  <p class="bg-note-warn">warn</p>
                  <p class="bg-note-risk">risk</p>
                  <p class="bg-note-info">info</p>
                </div>
                <pre
                  theme="default"
                  tinted="true"
                ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code></code><code class="mc-tinting-body">mix(co(text), co(back), 75%)</code></code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>预设类名</h3>
        <p>MCUI主题生成器会自动生成预定义好的文本颜色和背景色类名。详情请参考下表：</p>
        <div class="mb-sm-sub">
          <div>
            <h4>文本颜色</h4>
            <table ui-table="@a grid">
              <tbody>
                <tr>
                  <th>类名</th>
                  <th>语义</th>
                  <th>示例</th>
                  <th>备注</th>
                </tr>
                <tr>
                  <td><code class="co-code">.co-main</code></td>
                  <td><span>主体</span></td>
                  <td><span class="co-main">文本颜色</span></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.co-vice</code></td>
                  <td><span>辅助</span></td>
                  <td><span class="co-vice">文本颜色</span></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.co-text</code></td>
                  <td><span>文本</span></td>
                  <td><span class="co-text">文本颜色</span></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.co-read</code></td>
                  <td><span>阅读</span></td>
                  <td><span>文本颜色</span></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.co-note</code></td>
                  <td><span>备注</span></td>
                  <td><span class="co-note">文本颜色</span></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.co-link</code></td>
                  <td><span>链接</span></td>
                  <td><span class="co-link">文本颜色</span></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.co-code</code></td>
                  <td><span>代码</span></td>
                  <td><span class="co-code">文本颜色</span></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.co-well</code></td>
                  <td><span>提倡</span></td>
                  <td><span class="co-well">文本颜色</span></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.co-warn</code></td>
                  <td><span>警告</span></td>
                  <td><span class="co-warn">文本颜色</span></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.co-risk</code></td>
                  <td><span>风险</span></td>
                  <td><span class="co-risk">文本颜色</span></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.co-info</code></td>
                  <td><span>信息</span></td>
                  <td><span class="co-info">文本颜色</span></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4>背景颜色</h4>
            <p>背景颜色</p>
            <table ui-table="@a grid">
              <tbody>
                <tr>
                  <th>类名</th>
                  <th>语义</th>
                  <th>示例</th>
                  <th>备注</th>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-main</code></td>
                  <td><span>主体</span></td>
                  <td><code class="bg-main co-back r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-vice</code></td>
                  <td><span>辅助</span></td>
                  <td><code class="bg-vice co-back r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-fore</code></td>
                  <td><span>前景</span></td>
                  <td><code class="bg-fore co-read r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-back</code></td>
                  <td><span>底色</span></td>
                  <td><code class="bg-back co-read r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-text</code></td>
                  <td><span>文本</span></td>
                  <td><code class="bg-text co-back r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-read</code></td>
                  <td><span>阅读</span></td>
                  <td><code class="bg-read co-back r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-note</code></td>
                  <td><span>备注</span></td>
                  <td><code class="bg-note co-back r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-link</code></td>
                  <td><span>链接</span></td>
                  <td><code class="bg-link co-back r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-code</code></td>
                  <td><span>代码</span></td>
                  <td><code class="bg-code co-back r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-well</code></td>
                  <td><span>提倡</span></td>
                  <td><code class="bg-well co-back r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-warn</code></td>
                  <td><span>警告</span></td>
                  <td><code class="bg-warn co-back r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-risk</code></td>
                  <td><span>风险</span></td>
                  <td><code class="bg-risk co-back r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
                <tr>
                  <td><code class="co-code">.bg-info</code></td>
                  <td><span>信息</span></td>
                  <td><code class="bg-info co-back r-ss">背景颜色</code></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </DocView>
</template>
<script setup lang="ts">
  import { DocView, CodeView } from '@/components';
</script>
