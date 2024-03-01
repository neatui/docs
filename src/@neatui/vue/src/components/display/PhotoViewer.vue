<template>
  <div class="full nx-mm">
    <Swiper
      :slidesPerView="1"
      :initialSlide="initialSlide"
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
      <SwiperSlide v-for="item in files" :key="item.id" class="ac" ui-flex="col cm">
        <img :src="item[srcName]" class="vc" />
      </SwiperSlide>
    </Swiper>
    <div class="fekit-layer-close close-img m-mm" @click="LayerById(id).hide()"></div>
  </div>
</template>
<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Keyboard, Pagination, Navigation } from 'swiper/modules';
  import { LayerById } from '../basic';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  const props: any = defineProps({
    srcName: {
      type: String,
      default: 'imgUrl'
    },
    id: {
      type: String,
      default: 'PhotoViewer'
    },
    initialSlide: {
      type: Number,
      default: 0
    },
    files: {
      type: Array as () => any[],
      default: () => []
    }
  });
</script>
