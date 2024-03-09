<template>
  <DocView>
    <div class="doc mb-lm-sub">
      <div>
        <h3>体验</h3>
        <p>如果您面对一无所知MCUI踌躇不前，不知道是否值得一试。那么你可以先下载这个小DEMO。尝试着体验一下MCUI吧！</p>
        <a ui-btn="@a main :border" href="//mcui.asnowsoft.com/views/start/guides/demo.zip"><i class="icon icon-download"></i><span>MCUI DEMO</span></a>
      </div>
      <div>
        <h3>开始</h3>
        <p ui-note="@a info" class="vc-sub" ui-pos="lm"><i class="icon lh-ss fs-mm mr-ss icon-play"></i><span>查看本章视频教程</span></p>
        <p>
          在项目开始之前，我们准备了多种技术栈以及构建方式的脚手架可以让你快速进入开发工作。脚手架已经安装好了MCUI及其它打包编译工具。如果你想自己构建项目请跳过本章节继续向下阅读。
        </p>
        <div class="ac" ui-cards="@a bg:fore bk:line" ui-row="space mob-24 pad-8">
          <div>
            <div class="n-mm">
              <svg width="48" height="48">
                <image xlink:href="https://cdn.mcui.fekit.cn/img/html5.svg" src="https://cdn.mcui.fekit.cn/img/html5.png" width="48" height="48"></image>
              </svg>
              <h4>普通HTML5</h4>
              <p class="mx-ss-sub">
                <a class="fs-ss" ui-btn="@a main s :border" target="_blank" href="https://gitlab.com/mcui/ui-framework.git">GIT</a>
                <a class="fs-ss" ui-btn="@a main s :border" target="_blank" href="https://gitlab.com/mcui/ui-framework/-/archive/master/ui-framework-master.zip">下载</a>
              </p>
            </div>
          </div>
          <div>
            <div class="n-mm">
              <svg width="48" height="48">
                <image xlink:href="https://cdn.mcui.fekit.cn/img/vue.svg" src="https://cdn.mcui.fekit.cn/img/vue.png" width="48" height="48"></image>
              </svg>
              <h4>VUE项目</h4>
              <p class="mx-ss-sub">
                <a class="fs-ss" ui-btn="@a main s :border" target="_blank" href="https://gitlab.com/mcui/mcui.desktop.git">GIT</a>
                <a class="fs-ss" ui-btn="@a main s :border" target="_blank" href="https://gitlab.com/mcui/ui-vue-framework/-/archive/master/ui-vue-framework-master.zip">下载</a>
              </p>
            </div>
          </div>
          <div>
            <div class="n-mm">
              <svg width="48" height="48">
                <image xlink:href="https://cdn.mcui.fekit.cn/img/react.svg" src="https://cdn.mcui.fekit.cn/img/react.png" width="48" height="48"></image>
              </svg>
              <h4>REACT项目</h4>
              <p class="mx-ss-sub">
                <a class="fs-ss" ui-btn="@a main s :border" target="_blank" href="https://gitlab.com/mcui/ui-react-framework.git">GIT</a>
                <!-- <a class="fs-ss" ui-btn="@a main s :border" href="https://gitlab.com/mcui/ui-vue-framework/-/archive/master/ui-vue-framework-master.zip">直接下载</a> -->
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-mm-sub">
        <div>
          <h3 id="install">安装</h3>
          <p>MCUI提供以下几种方式帮你快速上手，每一种方式针对具有不同技能等级的开发者和不同的使用场景。继续阅读下面的内容，看看哪种方式适合你的需求吧。</p>
        </div>
        <div>
          <h4>传统开发</h4>
          <p ui-note="@a info" class="vc-sub" ui-pos="lm"><i class="icon lh-ss fs-mm mr-ss icon-play"></i><span>查看本章视频教程</span></p>
          <p>
            如果您在开发项目时直接使用<code class="co-code">css</code>开发。没有使用到<code class="co-code">less/scss</code>预编译语言。也没有使用<code class="co-code">
              gulp/webpack
            </code>
            这类打包工具，那么您就是使用传统方式开发。
          </p>
          <div class="mb-sl-sub">
            <div>
              <h5>在线引用</h5>
              <pre
                lang="html"
                type="HTML"
                theme="default"
                tinted="true"
              ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-tag"><code class="h-bra">&lt;</code>link</code><code class="h-key"> rel</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">stylesheet</code><code class="h-equ">"</code><code class="h-key"> href</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">//mcui.asnowsoft.com/code/mcui.min.css</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
            </div>
            <div>
              <h5>下载文件</h5>
              <p>请到主题库中选择一款喜欢的MCUI主题下载使用：<a class="co-link" href="#/themes">选主题</a></p>
            </div>
          </div>
          <p ui-note="@a warn">
            如果您使用传统方式HTML+CSS+JS(JQ)开发，则只能选用一款已经定制好的主题文件。无法灵活组合定制自己的主题色卡与组件。因此强烈建议您尝试使用<code class="co-code">scss</code
            >预编译源文件进行模块化开发来定制您的专属主题及多主题切换功能。
          </p>
        </div>
        <div class="mb-mm-sub">
          <div>
            <h4>定制开发 <sup class="co-main fs-ss">推荐</sup></h4>
            <p ui-note="@a info" class="vc-sub" ui-pos="lm"><i class="icon lh-ss fs-mm mr-ss icon-play"></i><span>查看本章视频教程</span></p>
            <p>如果您已经使用scss和npm。</p>
          </div>
          <div>
            <h5>下载SCSS源码</h5>
            <p>
              <a ui-btn="info l" href="#">MCUI模块源码</a>
            </p>
          </div>
          <div>
            <h5>通过NPM安装 <sup class="fs-ss co-main">推荐</sup></h5>
            <pre
              lang="npm"
              type="NPM"
              theme="default"
              tinted="true"
            ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code></code><code class="mc-tinting-body">npm i @mcui/core</code></code></pre>
          </div>
        </div>
        <p ui-note="@a risk">
          如果您不是使用MCUI官方下载的打包工具，那么你需要注意将<code class="co-code">Autoprefixer</code>集成到你的编译工具和编译过程中。以此来自动为某些 CSS 属性添加兼容性代码
        </p>
      </div>
    </div>
  </DocView>
</template>
<script setup lang="ts">
  import { DocView, CodeView } from '@/components';
</script>
