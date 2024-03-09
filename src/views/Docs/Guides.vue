<template>
  <DocView>
    <div class="doc doc-line-space mb-lm-sub">
      <div>
        <h3>介绍</h3>
        <div>
          <p>
            <span class="co-mack">MCUI</span>名称取自MODULE COMPONENTS
            UI，是一套高度模块化可组装可拆卸式的前端框架，同时也是一套UI设计规范。通过MCUI核心基础组件可以快速架构出标准的UI框架，基于核心组件按需导入丰富的业务组件和插件可以实现高质量的响应式网站。
          </p>
          <p>
            MCUI旨在为开发者构建一个基于准标设计规范的多主题切换、多级字号切换及响应多端的UI前端架构。有着比其它框架更加精密的尺寸响应和更加细腻的布局排版调控能力。我们致力于打造极致体验的前端UI框架。
          </p>
          <p ui-note="@a risk">
            由于本框架的核心优势在于定制高质量的多主题多级字号响应的前端UI模板，因此对于开发者水平有更高的要求。使用MCUI开发必须需要采用scss预编译样式以及会使用scss基本的颜色函数。如果您对此并不了解，可以先进入
            <a ui-hover="co:link :underline" target="_black" href="https://www.sass.hk/">https://www.sass.hk/</a> 学习一些scss的基础。
          </p>
        </div>
      </div>
      <div>
        <h3>兼容</h3>
        <p>
          本框架正常兼容到IE10及以上，最低兼容到IE8（需要引用额外的辅助插件实现优雅降级）,如需兼容IE低版本请参阅<a ui-hover=":underline" class="co-link" href="#/start/low"
            >[降级方案]</a
          >查看详情。
        </p>
      </div>
      <div>
        <h3>特性</h3>
        <ul>
          <li>配套有基于<code class="co-code">Webpack</code>的构建工具，可快速创建已内置本组件库的项目</li>
          <li>支持定制多主题</li>
          <li>支持全局多字号切换</li>
          <li>更加精密的响应控制系统</li>
          <li>更加细腻的排版微调系统</li>
          <li>符合设计原则与颜色识别标准的动态颜色计算</li>
          <li>详尽的文档和示例</li>
        </ul>
      </div>
      <div>
        <h3>示例</h3>
        <p class="mr-sm-sub">
          <a ui-hover="text :underline" target="_black" href="https://asnowsoft.com/">PROCMS官网</a>
          <a ui-hover="text :underline" target="_black" href="//mcui.asnowsoft.com/">MCUI官网</a>
          <a ui-hover="text :underline" target="_black" href="//mcui.asnowsoft.com/views/template/admin1/demo/index.html">ADMIN</a>
        </p>
        <p><a class="co-link" ui-hover=":underline" href="#/template">更多模板案例</a></p>
      </div>

      <div>
        <h3>版本</h3>
        <div ui-cite="@a well" class="mb-sm-sub">
          <p>2020-06-30</p>
          <div>
            <h5>最新版本：<a class="co-link" ui-hover=":underline" href="//mcui.asnowsoft.com/v1.0.0/" target="_block">V1.0.0</a></h5>
          </div>
          <div>
            <h5>更新内容：</h5>
            <ol>
              <li>1、新增核心组件栅格系统 <code class="co-code">col@theme=aa</code></li>
              <li>2、新增核心组件字号系统 <code class="co-code">col@size=aa</code></li>
            </ol>
          </div>
          <div>
            <h5 class="com-title">参与人员:</h5>
            <div><span>@Junbo</span></div>
          </div>
        </div>
        <p><a class="co-link" ui-hover=":underline" href="#">更多历史版本</a></p>
      </div>
      <div>
        <h3>反馈</h3>
        <div>
          <p>如果您在使用中遇到问题，请通过以下方式联系我。</p>
          <p>
            技术交流QQ群：<a
              class="co-link"
              ui-hover=":underline"
              target="_blank"
              href="//shang.qq.com/wpa/qunwpa?idkey=d1a3c48ad682530ef27ea5fa0fba12ec32a2747b7110256916b88d3a2cd52360"
              >137972383</a
            >、<a class="co-link" ui-hover=":underline" target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=29cbdbb827a104b9d41722ea7d93969d10108850f0a799d41eb40206a4c2f0f8"
              >153965675</a
            >
          </p>
          <p>Email: <a class="co-link" ui-hover=":underline" href="mailto:xiaojunbo@126.com">xiaojunbo@126.com</a></p>
        </div>
        <p ui-note="@a well">特别感谢所有MCUI使用者和参与者的支持和付出。</p>
      </div>
      <div>
        <h3>声明</h3>
        <p>MCUI基于MIT开源协议！你可以自由使用，复制，修改，可以用于自己的项目，可以免费分发或用来盈利；唯一的限制是必须包含许可声明。</p>
      </div>
      <div>
        <h3>贡献</h3>
        <p>@Junbo</p>
      </div>
    </div>
  </DocView>
</template>
<script setup lang="ts">
  import { DocView, CodeView } from '@/components';
</script>
