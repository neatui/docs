<template>
  <PageView>
    <HeadView />
    <div class="flex-block">
      <BodyView>
        <div v-if="route.query.id" ui-flex="col xy">
          <div class="box">
            <div class="nb-sm">
              <div ui-btn="@a s none" @click="router.back()"><i class="icon icon-back"></i>返回</div>
            </div>
            <div class="bg-fore r-sm" ui-flex="row lt">
              <div class="flex-block">
                <FileLoader />
              </div>
              <div ui-hide="<dpc" class="flex-fixed w-xl+ n-ls">
                <ul>
                  <li>1111</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="box">
            <ul ui-cards="@a bg:fore" ui-row="space mob-24 pad-12 dpc-8">
              <li v-for="(item, idx) in data" :key="idx">
                <div class="am-view" @click="toDetail(item.id)">
                  <div ui-card-body="">
                    <CoverView>
                      <img class="lazyload r-sm" src="@/assets/img/none.png" :data-src="item.cover" alt="" />
                    </CoverView>
                    <div class="my-ss-sub">
                      <h3 ui-omit="1" class="mob:fs-ms">{{ item.title }}</h3>
                      <p class="fs-ss o-ms">{{ item.updated }}</p>
                      <p class="my-ss co-desc" ui-omit="2">{{ item.desc }}</p>
                    </div>

                    <div class="mt-sm" ui-flex="row xm">
                      <div ui-flex="row lm">
                        <div ui-img="@a sz:ss case :round"><img :src="item.author.avatar" /></div>
                        <span class="ml-ss">{{ item.author.name }}</span>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <FootView />
      </BodyView>
    </div>
  </PageView>
</template>
<script setup lang="ts">
  import BodyView from '@/views/modules/BodyView.vue';
  import PageView from '@/views/modules/PageView.vue';
  import HeadView from '@/views/modules/HeadView.vue';
  import FootView from '@/views/modules/FootView.vue';
  import FileLoader from '@/components/FileLoader.vue';
  import { useRoute, useRouter } from 'vue-router';
  import { CoverView } from '@/components';
  import { storeToRefs, useBaseStore } from '@/store';

  const base: any = useBaseStore();
  const route: any = useRoute();
  const router: any = useRouter();
  const { words = {} }: any = storeToRefs(base);

  const data: any = [
    {
      id: 9,
      title: '统一的图层管理解决方案',
      cover: '/upload/df7428f1c685d3eb.jpg.webp',
      author: {
        name: 'Junbo',
        avatar: '/upload/junbo.jpg'
      },
      desc: '我们今天讲的内容，其实技术本身来说是非常小的一个点，但是在用户体验和开发体验来说，我们其实还可以做的更好。关于这个问题，我们先从用户的视角来看待这个问题，然后从开发者的角度来解决问题，并且为后来开发者快速开发出极致体验的图层展现效果提供解决思路与现成方案。',
      created: '2023-09-10',
      updated: '2023-09-10'
    },
    {
      id: 8,
      title: '移动端自适应解决方案',
      cover: '/upload/812e4e5174b3757b.jpg.webp',
      author: {
        name: 'Junbo',
        avatar: '/upload/junbo.jpg'
      },
      desc: '“如何打造极致体验的移动端Web应用” 第一讲：移动端自适应解决方案想要做好一个移动端项目，首页就要解决自适应问题，谈到移动端自适应这个话题，如果要真正做好，那应该说是前端开发中的一个比较难以掌握的知识点了。甚至在很多项目中一些涉及到移动端自适应的特殊需求被当作不可实现而砍掉，以及在部份机型下则默认为不处理。今天，我们就来看看，我们应该如何来做好自适应？以及移动端乃至所有设备终端下的自适应到底可以做到什么极致？',
      created: '2023-09-10',
      updated: '2023-09-10'
    },
    {
      id: 7,
      title: '第七期 聊聊响应式与自适应',
      cover: '/upload/6a4decfef51ef5d1.png',
      author: {
        name: 'Junbo',
        avatar: '/upload/junbo.jpg'
      },
      desc: '响应式和自适应是很多初级甚至中级开发都较少涉及到的知识盲区，所以今天我们特意选这个话题来聊聊，希望大家可以在交流之后对响应式和自适应的基本原理有一个更为清晰的理解，同时聊聊各种场景下的有哪些解决方案以便在以后的工作中可以更加轻松驾驭。',
      created: '2023-09-10',
      updated: '2023-09-10'
    },
    {
      id: 6,
      title: '第六期 关于web woker那些事儿',
      cover: '/upload/blog-6-cover.png',
      author: {
        name: 'Lilg',
        avatar: '/upload/liguo.jpg'
      },
      desc: '分享如何使用web worker多线程,扩展页面优化的思路及可能.',
      created: '2023-09-10',
      updated: '2023-09-10'
    },
    {
      id: 5,
      title: '第五期 CSS3动画那些事',
      cover: '/upload/02b7939650822814.png',
      author: {
        name: 'Junbo',
        avatar: '/upload/junbo.jpg'
      },
      desc: '谈谈如何设计与实现CSS3动画，如何使用CSS3动画提升页面用户体验。',
      created: '2023-09-10',
      updated: '2023-09-10'
    },
    {
      id: 4,
      title: '第四期 开源插件的发布',
      cover: '/upload/blog-4-cover.png',
      author: {
        name: 'Lilg',
        avatar: '/upload/liguo.jpg'
      },
      desc: '分享 如何从零开始开发插件并发布npm。',
      created: '2023-09-10',
      updated: '2023-09-10'
    },
    {
      id: 2,
      title: '第二期 基于react+redux+ts+antd的项目框架构建',
      cover: '/upload/89f439ed7a1939e5.png',
      author: {
        name: 'Lilg',
        avatar: '/upload/liguo.jpg'
      },
      desc: '分享如何从零开始搭建基于react+redux+ts+antd的项目框架。',
      created: '2023-09-10',
      updated: '2023-09-10'
    },
    {
      id: 1,
      title: '第一期 iconfont 字体图标的生成和使用',
      cover: '/upload/blog-3-cover.png',
      author: {
        name: 'Junbo',
        avatar: '/upload/junbo.jpg'
      },
      desc: '第期分享如何自己按需生成自定义的 iconfont 图标并在项目中使用。',
      created: '2023-09-10',
      updated: '2023-09-10'
    }
  ];

  const toDetail = (id: any) => {
    router.push({ path: '/blog', query: { id } });
  };
</script>
