<template>
  <DocView>
    <div class="doc mb-ls-sub">
      <div>
        <h3>栅格系统</h3>
        <p>MCUI栅格系统采用独家设计的属性多重条件声明式语法响应式栅格系统。代码可节省90%以上。极大的节约开发者的时间与代码体积。</p>
      </div>
      <div>
        <h4>等分栅格:</h4>
        <div class="ac" ui-row="space mob-24 pad-12 dpc-8">
          <div>
            <div class="bg-weak h-sm r-sm" ui-flex="row cm">1</div>
          </div>
          <div>
            <div class="bg-weak h-sm r-sm" ui-flex="row cm">2</div>
          </div>
          <div>
            <div class="bg-weak h-sm r-sm" ui-flex="row cm">3</div>
          </div>
          <div>
            <div class="bg-weak h-sm r-sm" ui-flex="row cm">4</div>
          </div>
          <div>
            <div class="bg-weak h-sm r-sm" ui-flex="row cm">5</div>
          </div>
          <div>
            <div class="bg-weak h-sm r-sm" ui-flex="row cm">6</div>
          </div>
        </div>
        <pre
          lang="html"
          data-number="1"
          ui-scroll=""
          theme="default"
          tinted="true"
        ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code><code>6</code><code>7</code><code>8</code><code>9</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-com">&lt;!-- 如果是等分栅格，直接在容器元素中写row属性声明即可达到上面示例的效果 --&gt;</code>
<code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-key"> ui-row</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">mob-24 pad-12 dpc-8</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>1<code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>2<code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>3<code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>4<code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>5<code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>6<code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
        <h4 class="mt-mm">自由栅格</h4>
        <div class="ac" ui-row="space">
          <div ui-col="mob-12 pad-6">
            <div class="bg-weak h-sm r-sm" ui-flex="row cm"><span class="co-link">col</span>=<span class="co-risk">"mob-12 pad-6"</span></div>
          </div>
          <div ui-col="mob-12 pad-12">
            <div class="bg-weak h-sm r-sm" ui-flex="row cm"><span class="co-link">col</span>=<span class="co-risk">"mob-12 pad-12"</span></div>
          </div>
          <div ui-col="mob-12 pad-6">
            <div class="bg-weak h-sm r-sm" ui-flex="row cm"><span class="co-link">col</span>=<span class="co-risk">"mob-12 pad-6"</span></div>
          </div>
          <div ui-col="mob-12 pad-9">
            <div class="bg-weak h-sm r-sm" ui-flex="row cm"><span class="co-link">col</span>=<span class="co-risk">"mob-12 pad-10"</span></div>
          </div>
          <div ui-col="mob-12 pad-6">
            <div class="bg-weak h-sm r-sm" ui-flex="row cm"><span class="co-link">col</span>=<span class="co-risk">"mob-12 pad-4"</span></div>
          </div>
          <div ui-col="mob-12 pad-9">
            <div class="bg-weak h-sm r-sm" ui-flex="row cm"><span class="co-link">col</span>=<span class="co-risk">"mob-12 pad-10"</span></div>
          </div>
        </div>

        <pre
          lang="html"
          data-number="1"
          ui-scroll=""
          theme="default"
          tinted="true"
        ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code><code>6</code><code>7</code><code>8</code><code>9</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-com">&lt;!-- 如果是自由栅格，则在每个格子元素中写col属性声明,注意即使row没有任何额外属性也仍然需要在容器是写上row属性名 --&gt;</code>
<code class="h-tag"><code class="h-bra">&lt;</code>div</code> ui-row<code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-key"> ui-col</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">mob-12 pad-6</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-key"> ui-col</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">mob-12 pad-12</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-key"> ui-col</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">mob-12 pad-6</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-key"> ui-col</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">mob-12 pad-9</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-key"> ui-col</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">mob-12 pad-6</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-key"> ui-col</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">mob-12 pad-9</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
      </div>
      <div>
        <h3>声明间距</h3>
        <div>
          <table class="ui-table mt-sm mb-mm" ui-table="@a :line">
            <tbody>
              <tr>
                <td>宽/高<span ui-hide="<pad">都要间距</span></td>
                <td>仅宽度<span ui-hide="<pad">要间距</span></td>
                <td>仅高度<span ui-hide="<pad">要间距</span></td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code class="co-code"><span ui-hide="<pad">ui-row="</span>space<span ui-hide="<pad">"</span></code>
                  </p>
                </td>
                <td>
                  <p>
                    <code class="co-code"><span ui-hide="<pad">ui-row="</span>w-space<span ui-hide="<pad">"</span></code>
                  </p>
                </td>
                <td>
                  <p>
                    <code class="co-code"><span ui-hide="<pad">ui-row="</span>v-space<span ui-hide="<pad">"</span></code>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="my-mm">
          <h4>默认间距示例:</h4>
          <p></p>
        </div>
      </div>
    </div>
  </DocView>
</template>
<script setup lang="ts">
  import { DocView, CodeView } from '@/components';
</script>
