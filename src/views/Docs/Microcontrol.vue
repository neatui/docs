<template>
  <DocView>
    <div class="doc mb-ls-sub">
      <div>
        <h2>微控系统</h2>
        <p>微控系统包括内边距、外边距，圆角、边框粗度</p>
      </div>
      <div>
        <h3>边距</h3>
        <div>
          <!-- <p>类名规则：<code class="co-code">.*<code>{内外}</code>*<code>{上下左右}</code>-**<code>{增量}</code><code>{加 <codeclass="co-code">-sub为当前元素的子集不加为当前元素}</codeclass="co-code"></code></code></p> -->
          <p><code class="co-code">.n-**</code> 设置内边距</p>
          <p><code class="co-code">.m-**</code> 设置外边距</p>
        </div>
        <div class="mb-mm-sub">
          <div>
            <h4>边距分度</h4>
            <table ui-table="@a grid">
              <tbody>
                <tr>
                  <th>分度名</th>
                  <th>度量值</th>
                  <th>演示</th>
                </tr>
                <tr>
                  <td><code>.*-</code><code class="co-code">no</code></td>
                  <td><span>0</span></td>
                  <td><div class="trim-demo nr-no"></div></td>
                </tr>
                <tr>
                  <td><code>.*-</code><code class="co-code">xs</code></td>
                  <td><span>1px</span></td>
                  <td><div class="trim-demo nr-xs"></div></td>
                </tr>
                <tr>
                  <td><code>.*-</code><code class="co-code">ss</code></td>
                  <td><span>0.25rem</span></td>
                  <td><div class="trim-demo nr-ss"></div></td>
                </tr>
                <tr>
                  <td><code>.*-</code><code class="co-code">sm</code></td>
                  <td><span>0.5rem</span></td>
                  <td><div class="trim-demo nr-sm"></div></td>
                </tr>
                <tr>
                  <td><code>.*-</code><code class="co-code">sl</code></td>
                  <td><span>1rem</span></td>
                  <td><div class="trim-demo nr-sl"></div></td>
                </tr>
                <tr>
                  <td><code>.*-</code><code class="co-code">ms</code></td>
                  <td><span>1.5rem</span></td>
                  <td><div class="trim-demo nr-ms"></div></td>
                </tr>
                <tr>
                  <td><code>.*-</code><code class="co-code">mm</code></td>
                  <td><span>2rem</span></td>
                  <td><div class="trim-demo nr-mm"></div></td>
                </tr>
                <tr>
                  <td><code>.*-</code><code class="co-code">ml</code></td>
                  <td><span>2.5rem</span></td>
                  <td><div class="trim-demo nr-ml"></div></td>
                </tr>
                <tr>
                  <td><code>.*-</code><code class="co-code">ls</code></td>
                  <td><span>3rem</span></td>
                  <td><div class="trim-demo nr-ls"></div></td>
                </tr>
                <tr>
                  <td><code>.*-</code><code class="co-code">lm</code></td>
                  <td><span>4rem</span></td>
                  <td><div class="trim-demo nr-lm"></div></td>
                </tr>
                <tr>
                  <td><code>.*-</code><code class="co-code">ll</code></td>
                  <td><span>5rem</span></td>
                  <td><div class="trim-demo nr-ll"></div></td>
                </tr>
                <tr>
                  <td><code>.*-</code><code class="co-code">xl</code></td>
                  <td><span>6rem</span></td>
                  <td><div class="trim-demo nr-xl"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4>边距方向</h4>
            <table ui-table="@a grid">
              <tbody>
                <tr>
                  <th>类名</th>
                  <th>左边距</th>
                  <th>右边距</th>
                  <th>上边距</th>
                  <th>下边距</th>
                  <th>演示</th>
                  <th>备注</th>
                </tr>
                <tr>
                  <td><code>.n</code><code class="co-code"></code><code>-*</code></td>
                  <td><i>√</i></td>
                  <td><i>√</i></td>
                  <td><i>√</i></td>
                  <td><i>√</i></td>
                  <td><div class="trim-demo n-sm"></div></td>
                  <td>当前元素上下左右都加内边距</td>
                </tr>
                <tr>
                  <td><code>.n</code><code class="co-code">x</code><code>-*</code></td>
                  <td><i>√</i></td>
                  <td><i>√</i></td>
                  <td></td>
                  <td></td>
                  <td><div class="trim-demo nx-sm"></div></td>
                  <td>当前元素的水平方向加内边距</td>
                </tr>
                <tr>
                  <td><code>.n</code><code class="co-code">y</code><code>-*</code></td>
                  <td></td>
                  <td></td>
                  <td><i>√</i></td>
                  <td><i>√</i></td>
                  <td><div class="trim-demo ny-sm"></div></td>
                  <td>当前元素的垂直方向加内边距</td>
                </tr>
                <tr>
                  <td><code>.n</code><code class="co-code">l</code><code>-*</code></td>
                  <td><i>√</i></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="trim-demo nl-sm"></div></td>
                  <td>当前元素的左边加内边距</td>
                </tr>
                <tr>
                  <td><code>.n</code><code class="co-code">r</code><code>-*</code></td>
                  <td></td>
                  <td><i>√</i></td>
                  <td></td>
                  <td></td>
                  <td><div class="trim-demo nr-sm"></div></td>
                  <td>当前元素的右边加内边距</td>
                </tr>
                <tr>
                  <td><code>.n</code><code class="co-code">t</code><code>-*</code></td>
                  <td></td>
                  <td></td>
                  <td><i>√</i></td>
                  <td></td>
                  <td><div class="trim-demo nt-sm"></div></td>
                  <td>当前元素的上边加内边距</td>
                </tr>
                <tr>
                  <td><code>.n</code><code class="co-code">b</code><code>-*</code></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><i>√</i></td>
                  <td><div class="trim-demo nb-sm"></div></td>
                  <td>当前元素的下边加内边距</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4>设置子级<sup class="co-risk">超级好用</sup></h4>
            <p>
              当你有一个列表，每个子元素都要内/外边距时，你只需在父级元素中设置<code>.n(m)-ms-<code class="co-code">sub</code></code
              >即可，写的少而做的多!
            </p>
            <div class="n-ms-sub">
              <span class="trim-demo"></span>
              <span class="trim-demo"></span>
              <span class="trim-demo"></span>
            </div>
            <pre
              lang="html"
              type="HTML"
              theme="default"
              tinted="true"
            ><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code><code>2</code><code>3</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-tag"><code class="h-bra">&lt;</code>div</code><code class="h-key"> class</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">n-ms-sub</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
  <code class="h-tag"><code class="h-bra">&lt;</code>span</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/span</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>span</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/span</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>span</code><code class="h-tag"><code class="h-bra">&gt;</code></code><code class="h-tag"><code class="h-bra">&lt;</code>/span</code><code class="h-tag"><code class="h-bra">&gt;</code></code>
<code class="h-tag"><code class="h-bra">&lt;</code>/div</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
          </div>
          <div>
            <h4>内边距</h4>
            <p>外部距从0.25rem到4rem一共有16级。可以灵活运用，分别设置上、下、左、右其中一个方向。或设置横向（左右）、纵向（上下）或四个方向（上、下、左、右）全部设置。</p>
            <table ui-table="@a grid">
              <tbody>
                <tr>
                  <th>类名</th>
                  <th>演示</th>
                </tr>
                <tr>
                  <td><code class="co-code">.m-ss</code></td>
                  <td><span>margin: 0.5rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-sm</code></td>
                  <td><span>margin: 1rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-sl</code></td>
                  <td><span>margin: 1.5rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-ms</code></td>
                  <td><span>margin: 2rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-mm</code></td>
                  <td><span>margin: 2.5rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-ml</code></td>
                  <td><span>margin: 3rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-ls</code></td>
                  <td><span>margin: 3.5rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-lm</code></td>
                  <td><span>margin: 4rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-ll</code></td>
                  <td><span>margin: 4.5rem</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4>内边距</h4>
            <p>外部距从0.25rem到4rem一共有16级。可以灵活运用，分别设置上、下、左、右其中一个方向。或设置横向（左右）、纵向（上下）或四个方向（上、下、左、右）全部设置。</p>
            <table ui-table="@a grid">
              <tbody>
                <tr>
                  <th>类名</th>
                  <th>演示</th>
                </tr>
                <tr>
                  <td><code class="co-code">.m-ss</code></td>
                  <td><span>margin: 0.5rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-sm</code></td>
                  <td><span>margin: 1rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-sl</code></td>
                  <td><span>margin: 1.5rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-ms</code></td>
                  <td><span>margin: 2rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-mm</code></td>
                  <td><span>margin: 2.5rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-ml</code></td>
                  <td><span>margin: 3rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-ls</code></td>
                  <td><span>margin: 3.5rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-lm</code></td>
                  <td><span>margin: 4rem</span></td>
                </tr>
                <tr>
                  <td><code class="co-code">.m-ll</code></td>
                  <td><span>margin: 4.5rem</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="mb-mm-sub">
        <div>
          <h3>圆角</h3>
          <table ui-table="@a grid">
            <tbody>
              <tr>
                <td><code class="co-code">.r-no</code></td>
                <td><span>border-radius: 0</span></td>
                <td><div style="width: 3rem; height: 3rem" class="trim-w r-no"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.r-xs</code></td>
                <td><span>border-radius: 0.1em</span></td>
                <td><div style="width: 3rem; height: 3rem" class="trim-w r-xs"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.r-ss</code></td>
                <td><span>border-radius: 0.2em</span></td>
                <td><div style="width: 3rem; height: 3rem" class="trim-w r-ss"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.r-sm</code></td>
                <td><span>border-radius: 0.3em</span></td>
                <td><div style="width: 3rem; height: 3rem" class="trim-w r-sm"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.r-sl</code></td>
                <td><span>border-radius: 0.4em</span></td>
                <td><div style="width: 3rem; height: 3rem" class="trim-w r-ms"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.r-ms</code></td>
                <td><span>border-radius: 0.5em</span></td>
                <td><div style="width: 3rem; height: 3rem" class="trim-w r-ms"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.r-mm</code></td>
                <td><span>border-radius: 0.6em</span></td>
                <td><div style="width: 3rem; height: 3rem" class="trim-w r-mm"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.r-ml</code></td>
                <td><span>border-radius: 0.7em</span></td>
                <td><div style="width: 3rem; height: 3rem" class="trim-w r-ml"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.r-ls</code></td>
                <td><span>border-radius: 0.8em</span></td>
                <td><div style="width: 3rem; height: 3rem" class="trim-w r-ls"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.r-lm</code></td>
                <td><span>border-radius: 0.9em</span></td>
                <td><div style="width: 3rem; height: 3rem" class="trim-w r-lm"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.r-ll</code></td>
                <td><span>border-radius: 1.0em</span></td>
                <td><div style="width: 3rem; height: 3rem" class="trim-w r-ll"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.r-xl</code></td>
                <td><span>border-radius: 1.1em</span></td>
                <td><div style="width: 3rem; height: 3rem" class="trim-w r-xl"></div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>边框</h3>
          <p>xxx</p>
          <table ui-table="@a grid">
            <tbody>
              <tr>
                <th>类名</th>
                <th>演示</th>
              </tr>
              <tr>
                <td><code class="co-code">.b1</code></td>
                <td><span>border: 1px</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>固宽</h3>
          <p>主要用于表单输入框</p>
          <table ui-table="@a grid fix">
            <thead>
              <tr>
                <th class="w-ss">类名</th>
                <th>演示</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code class="co-code">.w-no</code></td>
                <td><div class="w-no trim-w"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.w-xs</code></td>
                <td><div class="w-xs trim-w"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.w-ss</code></td>
                <td><div class="w-ss trim-w"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.w-sm</code></td>
                <td><div class="w-sm trim-w"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.w-sl</code></td>
                <td><div class="w-sl trim-w"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.w-ms</code></td>
                <td><div class="w-ms trim-w"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.w-mm</code></td>
                <td><div class="w-mm trim-w"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.w-ml</code></td>
                <td><div class="w-ml trim-w"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.w-ls</code></td>
                <td><div class="w-ls trim-w"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.w-lm</code></td>
                <td><div class="w-lm trim-w"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.w-ll</code></td>
                <td><div class="w-ll trim-w"></div></td>
              </tr>
              <tr>
                <td><code class="co-code">.w-xl</code></td>
                <td><div class="w-xl trim-w"></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DocView>
</template>
<script setup lang="ts">
  import { DocView, CodeView } from '@/components';
</script>
