<template>
  <PageView>
    <HeadView />
    <div class="flex-block">
      <BodyView>
        <div class="midden">
          <div v-if="route.query.id">
            <div class="ny-sm">
              <div class="box">
                <span @click="router.back()">返回</span>
              </div>
            </div>
            <div class="box bg-fore n-ms r-sl">
              <h1>这是详情页</h1>
              <p class="fs-ss o-ms">2022-10-09</p>
              <div>
                <p>这里是详情，解析MD文件</p>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="flex-fixed ny-ms">
              <div class="box">
                <h1>{{ words['plugins.title'] }}</h1>
                <p>{{ words['plugins.desc'] }}</p>
              </div>
            </div>
            <div class="box">
              <ul ui-cards="@a bg:fore" ui-row="space mob-24 pad-12 dpc-8">
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <div class="my-sm-sub">
                        <h3 class="mob:fs-ms">@fekit/toast <sup class="bg-main co-fore r-ss n-ss lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                        <p class="co-desc" ui-omit="2">插件简介文字插件简介文字，插件简介文字插件简介文字插件简介文字插件简介文字，插件简介文字插件简介文字插件简介文字。</p>
                        <RouterLink class="co-link hover-underline" to="/plugins?id=1">了解更多 »</RouterLink>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <div class="my-sm-sub">
                        <h3>@fekit/toast <sup class="bg-main co-fore r-ss n-ss lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                        <p class="my-ss">一款超轻量的“TOAST”插件，打包后2K，可扩展各种主题样式，目前已有三款主题可用，欢迎使用!</p>
                        <a class="co-link hover-underline" href="#/plugins/js/toast">了解更多 »</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/scrollto <sup class="bg-main co-fore r-ss n-ss lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                      <p class="my-ss">一个设置滚动条缓动滚动到指定位置或指定ID标签位置的原生JS插件。</p>
                      <a class="co-link hover-underline" href="#/plugins/js/scrollto">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/inview <sup class="bg-main co-fore r-ss n-ss lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                      <p class="my-ss">页面滚动时监听指定元素滚动到可视区域时播放动画</p>
                      <a class="co-link hover-underline" href="#/plugins/js/inview">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/cookie <sup class="bg-main co-fore r-ss n-ss lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                      <p class="my-ss">一个操作cookie的常用方法。可以对cookie进行增删改查工作，并且可以单条或者批量操作。</p>
                      <a class="co-link hover-underline" href="#/plugins/js/cookie">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/mc-tinting</h3>
                      <p class="my-ss">一款可扩展的代码高亮插件，目前仅扩展有前端代码语言（HTML+JS+CSS+SASS）；如需其它语言高亮可联系我。</p>
                      <a class="co-link hover-underline" href="#/plugins/js/mc-tinting">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/fixed <sup class="bg-main co-fore r-ss n-ss lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                      <p class="my-ss">指定元素滚动到窗口指定位置时固定在指定位置。</p>
                      <a class="co-link hover-underline" href="#/plugins/js/fixed">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/floor <sup class="bg-main co-fore r-ss n-ss lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                      <p class="my-ss">一个楼层监听插件，当楼层滚动到可见区域的指定位置时触发回调，可用于楼层绑定导航等场景。</p>
                      <a class="co-link hover-underline" href="#/plugins/js/floor">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/url <sup class="bg-main co-fore r-ss n-ss lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                      <p class="my-ss">
                        一款URL网址传参操作插件，可以单个或批量的对网址hash或search参数进行增删改查操作。亮点是容错能力强，可批量操作，可以开启错误或无效参数自动过滤。
                      </p>
                      <a class="co-link hover-underline" href="#/plugins/js/url">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/mc-fixtab</h3>
                      <p class="my-ss">根据楼层自动生成楼层相关联的导航。</p>
                      <a class="co-link hover-underline" href="#/plugins/js/fixtab">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/mc-watch</h3>
                      <p class="my-ss">一个数据双向绑定的小功能插件</p>
                      <a class="co-link hover-underline" href="https://plugins.fekit.cn/plugins/mc-watch/">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/mc-banner</h3>
                      <p class="my-ss">超轻量的简易版焦点图, 仅4K</p>
                      <a class="co-link hover-underline" href="#/plugins/js/banner/">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/mc-layer</h3>
                      <p class="my-ss">插件介绍插件介绍插件介绍插件介绍插件介绍插件介绍</p>
                      <a class="co-link hover-underline" href="#/plugins/js/layer/">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/mc-vroll</h3>
                      <p class="my-ss">插件介绍插件介绍插件介绍插件介绍插件介绍插件介绍</p>
                      <a class="co-link hover-underline" href="#/plugins/js/vroll/">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/lazyload <sup class="bg-main co-fore r-ss n-ss lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                      <p class="my-ss">页面滚动时监听指定图片到指定位置时等懒加载，配合 <a href="#/plugins/js/inview">@fekit/inview</a> 可以实现超棒的用户体验!</p>
                      <a class="co-link hover-underline" href="#/plugins/js/lazyload">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/mc-ratio</h3>
                      <p class="my-ss">
                        一个移动端大小屏自适应方案支持插件,可以横向自适应和横竖双向自适应，包括根字号全局适配和标签区域内局部自适应。并且可以开启DPR让网页UI达到原生APP的细腻程度
                      </p>
                      <a class="co-link hover-underline" href="#/plugins/js/ratio/">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/mc-ajax</h3>
                      <p class="my-ss">一款原生JS超轻量ajax插件</p>
                      <a class="co-link hover-underline" href="https://www.npmjs.com/package/@fekit/mc-ajax">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/mc-jsonp</h3>
                      <p class="my-ss">一款原生JS超轻量jsonp接口请求插件</p>
                      <a class="co-link hover-underline" href="https://www.npmjs.com/package/@fekit/mc-jsonp">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/mc-vis</h3>
                      <p class="my-ss">监听当前页面是否可见状态，可用于客户端转入后台或其它应用后又转回来时后触发事件</p>
                      <a class="co-link hover-underline" href="#/plugins/js/mc-vis">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/mc-editor</h3>
                      <p class="my-ss">为PROCMS而生的富文本编辑器，正在开发中...</p>
                      <span class="co-note" href="/">了解更多 »</span>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/mc-scale</h3>
                      <p class="my-ss">scale 内核的自适应解决方案，这个方案在一些特殊场景下使用...</p>
                      <a class="co-link hover-underline" href="#/plugins/js/scale">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/react-layer <sup class="bg-main co-fore r-ss n-ss lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                      <p class="my-ss">适用于react框架的图层管理插件，可用于弹框，Toast等图层功能。...</p>
                      <a class="co-link hover-underline" href="#/plugins/react/react-layer">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/react-store <sup class="bg-main co-fore r-ss n-ss lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                      <p class="my-ss">基于react-redux,react-saga的数据管理插件，解决多模块redux配置问题。...</p>
                      <a class="co-link hover-underline" href="#/plugins/react/react-store">了解更多 »</a>
                    </div>
                  </div>
                </li>
                <li class="am-view" data-theme="aa" data-inview="view">
                  <div>
                    <div ui-card-body="">
                      <!--<CoverView>
                        <img class="lazyload r-sm" src="@/assets/img/none.png" data-src="http://mcui.fekit.cn/img/toast.gif" alt="" />
                      </CoverView>-->
                      <h3>@fekit/storage <sup class="bg-main co-fore r-ss n-ss lh-xs dib s-lm pr ot-ss or-ss">TS</sup></h3>
                      <p class="my-ss">一个操作 本地存储 ( localStorage ) 的常用方法。可以对 localStorage 进行增删改查工作，并且可以单条或者批量操作。可以设置过期时间。</p>
                      <a class="co-link hover-underline" href="#/plugins/js/storage">了解更多 »</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </BodyView>
    </div>
    <FootView />
  </PageView>
</template>
<script setup lang="ts">
  import { storeToRefs, useBaseStore } from '@/store';
  import { useRoute, useRouter } from 'vue-router';
  import PageView from '@/views/modules/PageView.vue';
  import BodyView from '@/views/modules/BodyView.vue';
  import HeadView from '@/views/modules/HeadView.vue';
  import FootView from '@/views/modules/FootView.vue';
  import { CoverView } from '@/components';

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
  const route: any = useRoute();
  const router: any = useRouter();
</script>
