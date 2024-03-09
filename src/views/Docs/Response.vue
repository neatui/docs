<template>
  <DocView>
    <div class="doc mb-mm-sub">
      <div>
        <h3>栅格系统</h3>
        <p>MCUI栅格系统采用独家设计的属性多重条件声明式语法响应式栅格系统。代码可节省90%以上。极大的节约开发者的时间与代码体积。</p>
      </div>
      <div>
        <h3>尺寸断点</h3>
        <p>MCUI栅格系统默认主题采用9级*12格。比Bootstrap的4级*12格响应更加精细。</p>
        <table class="ui-table" ui-table="@a grid">
          <thead>
            <tr>
              <th>标识</th>
              <th>断点尺寸</th>
              <th>设备</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code class="co-code">mob</code>, <br /><code class="co-code">mob-s</code></td>
              <td>默认</td>
              <td><span>默认、iPhone 4/5/SE</span></td>
            </tr>
            <tr>
              <td><code class="co-code">mob-m</code></td>
              <td>&gt;480</td>
              <td><span>iPhone 6/7/8/X</span></td>
            </tr>
            <tr>
              <td><code class="co-code">mob-l</code></td>
              <td>&gt;640</td>
              <td><span>Surface Duo, Large screen for mobile or small screen for tablet</span></td>
            </tr>
            <tr>
              <td><code class="co-code">pad</code>, <br /><code class="co-code">pad-s</code></td>
              <td>&gt;800</td>
              <td>iPad</td>
            </tr>
            <tr>
              <td><code class="co-code">pad-m</code></td>
              <td>&gt;960</td>
              <td>iPad Pro</td>
            </tr>
            <tr>
              <td><code class="co-code">pad-l</code></td>
              <td>&gt;1120</td>
              <td>Large screen for tablet or small screen for desktop</td>
            </tr>
            <tr>
              <td><code class="co-code">dpc</code>, <br /><code class="co-code">dpc-s</code></td>
              <td>&gt;1280</td>
              <td>Small screen for desktop</td>
            </tr>
            <tr>
              <td><code class="co-code">dpc-m</code></td>
              <td>&gt;1440</td>
              <td>Medium screen for desktop</td>
            </tr>
            <tr>
              <td><code class="co-code">dpc-l</code></td>
              <td>&gt;1600</td>
              <td>Large screen for desktop</td>
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
