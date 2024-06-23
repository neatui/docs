# Font size

<div class="mb-mm-sub">
<div>
<h3>全局字号</h3>
<p>点击下面的按钮切换全局字号，本站选用的字号系统有5档，档位可扩展可选用不同档位的scss字号系统。如需前端记住字号状态，可以采用cookie方案。推荐命名用全站开源插件<a class="co-link" mcui-hover=":underline" href="#/plugins/mc-cookie">@fekit/cookie</a></p>
<button class="j_size" mcui-btn="@a s :abs :border" size="xs">极小</button>
<button class="j_size" mcui-btn="@a s :abs :border" size="s">小号</button>
<button class="j_size" mcui-btn="@a s :abs :border" size="m">中号</button>
<button class="j_size" mcui-btn="@a s :abs :border" size="l">大号</button>
<button class="j_size" mcui-btn="@a s :abs :border" size="xl">超大</button>
</div>
<div>
<h3>分级字号</h3>
<p>分级字号是响应全局字号的</p>
<table mcui-table="@a grid">
<tbody><tr>
<th>类名</th>
<th>字号</th>
<th>演示</th>
</tr>
<tr>
<td><code class="co-code">.fs-no</code></td>
<td><code class="co-code">0</code></td>
<td><span class="fs-no">文字等级: FS-NO</span></td>
</tr>
<tr>
<td><code class="co-code">.fs-xs</code></td>
<td><code class="co-code">0.8rem</code></td>
<td><span class="fs-xs">文字等级: FS-XS</span></td>
</tr>
<tr>
<td><code class="co-code">.fs-ss</code></td>
<td><code class="co-code">0.9rem</code></td>
<td><span class="fs-ss">文字等级: FS-SS</span></td>
</tr>
<tr>
<td><code class="co-code">.fs-sm</code></td>
<td><code class="co-code">1rem</code></td>
<td><span class="fs-sm">文字等级: FS-SM</span></td>
</tr>
<tr>
<td><code class="co-code">.fs-sl</code></td>
<td><code class="co-code">1.1rem</code></td>
<td><span class="fs-sl">文字等级: FS-SL</span></td>
</tr>
<tr>
<td><code class="co-code">.fs-ms</code></td>
<td><code class="co-code">1.2rem</code></td>
<td><span class="fs-ms">文字等级: FS-MS</span></td>
</tr>
<tr>
<td><code class="co-code">.fs-mm</code></td>
<td><code class="co-code">1.4rem</code></td>
<td><span class="fs-mm">文字等级: FS-MM</span></td>
</tr>
<tr>
<td><code class="co-code">.fs-ml</code></td>
<td><code class="co-code">1.8rem</code></td>
<td><span class="fs-ml">文字等级: FS-ML</span></td>
</tr>
<tr>
<td><code class="co-code">.fs-ls</code></td>
<td><code class="co-code">2.2rem</code></td>
<td><span class="fs-ls">文字等级: FS-LS</span></td>
</tr>
<tr>
<td><code class="co-code">.fs-lm</code></td>
<td><code class="co-code">2.6rem</code></td>
<td><span class="fs-lm">文字等级: FS-LM</span></td>
</tr>
<tr>
<td><code class="co-code">.fs-ll</code></td>
<td><code class="co-code">3.2rem</code></td>
<td><span class="fs-ll">文字等级: FS-LL</span></td>
</tr>
<tr>
<td><code class="co-code">.fs-xl</code></td>
<td><code class="co-code">3.8rem</code></td>
<td><span class="fs-xl">文字等级: FS-XL</span></td>
</tr>
</tbody></table>
</div>
<div>
<h3>分级行高</h3>
<p>对于视觉来说，行高与字号是息息相关的，所以行高也定义在字号模块文件中。</p>
<table mcui-table="@a grid">
<tbody><tr>
<th>类名</th>
<th>字号</th>
<th>演示</th>
</tr>
<tr>
<td><code class="co-code">h1, .h1</code></td>
<td><code class="co-code">1em</code></td>
<td><h1>标题字号: H1</h1></td>
</tr>
<tr>
<td><code class="co-code">h2, .h2</code></td>
<td><code class="co-code">1.1em</code></td>
<td><h2>标题字号: H2</h2></td>
</tr>
<tr>
<td><code class="co-code">h3, .h3</code></td>
<td><code class="co-code">1.2em</code></td>
<td><h3>标题字号: H3</h3></td>
</tr>
<tr>
<td><code class="co-code">h4, .h4</code></td>
<td><code class="co-code">1.4em</code></td>
<td><h4>标题字号: H4</h4></td>
</tr>
<tr>
<td><code class="co-code">h5, .h5</code></td>
<td><code class="co-code">1.6em</code></td>
<td><h5>标题字号: H5</h5></td>
</tr>
<tr>
<td><code class="co-code">h6, .h6</code></td>
<td><code class="co-code">2em</code></td>
<td><h6>标题字号: H6</h6></td>
</tr>
</tbody></table>
</div>
<div>
<h3>分级行高</h3>
<p>对于视觉来说，行高与字号是息息相关的，所以行高也定义在字号模块文件中。</p>
<table mcui-table="@a grid">
<tbody><tr>
<th>类名</th>
<th>行高</th>
<th>演示</th>
</tr>
<tr>
<td><code class="co-code">.lh-no</code></td>
<td><code class="co-code">0</code></td>
<td><div class="lh-no">行高等级: LH-NO</div></td>
</tr>
<tr>
<td><code class="co-code">.lh-xs</code></td>
<td><code class="co-code">1</code></td>
<td><div class="lh-xs">行高等级: LH-XS</div></td>
</tr>
<tr>
<td><code class="co-code">.lh-ss</code></td>
<td><code class="co-code">1.1</code></td>
<td><div class="lh-ss">行高等级: LH-SS</div></td>
</tr>
<tr>
<td><code class="co-code">.lh-sm</code></td>
<td><code class="co-code">1.2</code></td>
<td><div class="lh-sm">行高等级: LH-SM</div></td>
</tr>
<tr>
<td><code class="co-code">.lh-sl</code></td>
<td><code class="co-code">1.3</code></td>
<td><div class="lh-sl">行高等级: LH-SL</div></td>
</tr>
<tr>
<td><code class="co-code">.lh-ms</code></td>
<td><code class="co-code">1.4</code></td>
<td><div class="lh-ms">行高等级: LH-MS</div></td>
</tr>
<tr>
<td><code class="co-code">.lh-mm</code></td>
<td><code class="co-code">1.6</code></td>
<td><div class="lh-mm">行高等级: LH-MM</div></td>
</tr>
<tr>
<td><code class="co-code">.lh-ml</code></td>
<td><code class="co-code">2</code></td>
<td><div class="lh-ml">行高等级: LH-ML</div></td>
</tr>
<tr>
<td><code class="co-code">.lh-ls</code></td>
<td><code class="co-code">2.4</code></td>
<td><div class="lh-ls">行高等级: LH-LS</div></td>
</tr>
<tr>
<td><code class="co-code">.lh-lm</code></td>
<td><code class="co-code">2.8</code></td>
<td><div class="lh-lm">行高等级: LH-LM</div></td>
</tr>
<tr>
<td><code class="co-code">.lh-ll</code></td>
<td><code class="co-code">3.4</code></td>
<td><div class="lh-ll">行高等级: LH-LL</div></td>
</tr>
<tr>
<td><code class="co-code">.lh-xl</code></td>
<td><code class="co-code">4</code></td>
<td><div class="lh-xl">行高等级: LH-XL</div></td>
</tr>
</tbody></table>
</div>
<div>
<h3>字号断点</h3>
<p>字号有3个断点，可以通过<code class="co-code">.pad-*</code>和<code class="co-code">.mob-*</code>来单独设置在平板或移动端下的字号或行高。</p>
<p class="bg-weak n-sm r-sm"><span class="fs-ls pad-fs-ms mob-fs-ss">这段文本在不同尺寸设备中设置不同字号</span></p>
<pre lang="html" data-number="0" theme="default" tinted="true"><code class="mc-tinting-area" data-digit="1"><code class="mc-tinting-number"><code>1</code></code><code class="mc-tinting-body"><code data-lang="html"><code class="h-tag"><code class="h-bra">&lt;</code>span</code><code class="h-key"> class</code><code class="h-equ">=</code><code class="h-equ">"</code><code class="h-str">fs-ls pad-fs-ms mob-fs-ss</code><code class="h-equ">"</code><code class="h-tag"><code class="h-bra">&gt;</code></code>这段文本在不同尺寸设备中设置不同字号<code class="h-tag"><code class="h-bra">&lt;</code>/span</code><code class="h-tag"><code class="h-bra">&gt;</code></code></code></code></code></pre>
</div>
</div>
