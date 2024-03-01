<template>
  <div class="guide r-sm bg-fore n-mm pr mob:n-sl pad:n-mm">
    <Swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :keyboard="{
        enabled: true
      }"
      :pagination="{
        clickable: true
      }"
      :navigation="true"
      :modules="[Keyboard, Pagination, Navigation]"
      class="mySwiper"
    >
      <SwiperSlide v-for="item in customSetting" :key="item.id" ui-flex="row cm">
        <div class="swiper-item mb-mm ac">
          <i :class="`fs-xl icon ${item.icon} co-main`"></i>
          <h3 class="mb-ms">{{ words[item.words] || item.defaultWords }}</h3>
          <ul v-if="item.mode == 'align'" ui-btns="@a s :group">
            <li
              v-for="(i, idx) in item.data"
              :ui-btn="`@a ${state[item.type] === i.sign ? 'main :broder' : 'read :border'}`"
              :class="`${state[item.type] === i.sign ? 'z-sm' : ''}`"
              :key="idx"
              @click="item.setState(i.sign)"
            >
              <span ui-hide="<pad"> {{ getName(i, '< pad'.replace(' ', '')) }} </span>
              <span ui-hide=">mob"> {{ getName(i, '>mob') }} </span>
            </li>
          </ul>
          <ul v-else class="nx-sl-sub dib lh-ls al">
            <li v-for="(i, idx) in item.data" :key="idx" :class="`ux-hover r-sm ${state.lang === i.sign ? 'co-main' : ''}`" @click="item.setState(i.sign)">
              <img :src="getImgUrl(i)" class="swiper-item-img" />
              <span ui-hide="<pad" class="nl-ss"> {{ getName(i, '< pad'.replace(' ', '')) }} </span>
              <span ui-hide=">mob" class="nl-ss"> {{ getName(i, '>mob') }} </span>
            </li>
          </ul>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="fekit-layer-close" @click="LayerById('Personalize').hide()"></div>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { useBaseStore, storeToRefs } from '@/store';
  import { Keyboard, Pagination, Navigation } from 'swiper/modules';
  import { LayerById } from './Layer.vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);
  const state: any = reactive({
    lang: ref(window.localStorage.getItem('lang')),
    fontSize: ref(window.localStorage.getItem('fontSize')),
    theme: ref(window.localStorage.getItem('theme'))
  });
  const customSetting = [
    {
      id: '01',
      mode: 'vertical',
      type: 'lang',
      icon: 'icon-lang-big',
      words: 'config.choose_language',
      defaultWords: '选择您的默认语言',
      data: [
        {
          imgUrl: './static/zh-CN.png',
          sign: 'zh-CN',
          name: '简体中文'
        },
        {
          imgUrl: './static/en-US.png',
          sign: 'en-US',
          name: 'English'
        }
      ],
      setState(val: any) {
        state.lang = val;
        setLanguage(val);
      }
    },
    {
      id: '02',
      mode: 'align',
      type: 'fontSize',
      icon: 'icon-size-big',
      words: 'config.choose_fontsize',
      defaultWords: '选择您喜欢的字号',
      isMoreSet: 'true',
      data: [
        {
          name: 'config.fontsize_extrasmall',
          sign: 'xs'
        },
        {
          name: 'config.fontsize_small',
          sign: 's'
        },
        {
          name: 'config.fontsize_Medium',
          sign: 'm'
        },
        {
          name: 'config.fontsize_large',
          sign: 'l'
        },
        {
          name: 'config.fontsize_extralarge',
          sign: 'xl'
        }
      ],
      setState(val: any) {
        state.fontSize = val;
        setFontSize(val);
      }
    },
    {
      id: '03',
      mode: 'align',
      type: 'theme',
      icon: 'icon-theme-big',
      words: 'config.choose_theme',
      defaultWords: '选择您喜欢的主题',
      data: [
        {
          name: 'config.theme_auto',
          sign: 'auto'
        },
        {
          name: 'config.theme_light',
          sign: 'light'
        },
        {
          name: 'config.theme_grass',
          sign: 'grass'
        },
        {
          name: 'config.theme_sea',
          sign: 'sea'
        },
        {
          name: 'config.theme_danshu',
          sign: 'danshu'
        },
        {
          name: 'config.theme_dark',
          sign: 'dark'
        }
      ],
      setState(val: any) {
        state.theme = val;
        setTheme(val);
      }
    }
  ];

  const getImgUrl = (ele: any) => {
    return ele.imgUrl ? ele.imgUrl : '';
  };
  const getName = (ele: any, type: string) => {
    const name = ele.imgUrl ? ele.name : base.words[ele.name];
    return name.indexOf('+') == -1 ? name : type === '<pad' ? name.split('+')[0] : name.split('+')[1];
  };

  const setLanguage = (lang: any) => {
    window.localStorage.setItem('lang', lang);
    base.lang = lang;
    base.getWordsData();
  };
  const setFontSize = (fontsize: any) => {
    window.localStorage.setItem('fontSize', fontsize);
    base.fontSize = fontsize;
    base.setFontSize();
  };
  const setTheme = (theme: any) => {
    console.log(theme);
    window.localStorage.setItem('theme', theme);
    base.theme = theme;
    base.setTheme();
  };
</script>
<style>
  .guide {
    width: 48rem;
    height: 32rem;
    margin-bottom: 2rem;
    max-width: 94%;
  }
</style>
