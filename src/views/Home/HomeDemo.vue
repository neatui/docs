<template>
  <Swiper
    class="full"
    :effect="'creative'"
    :loop="true"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false
    }"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [180, 0, 0]
      },
      next: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [-180, 0, 0]
      }
    }"
    :modules="[Autoplay, EffectCreative]"
  >
    <SwiperSlide>
      <div class="full bg-fore r-ms" ui-flex="col cm">
        <DateView class="bg-fore co-read r-sm w-mm b-xs b-solid bk-line"></DateView>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="full bg-fore r-ms" ui-flex="col cm">
        <Select v-model="value1" :options="enums" :search="true"></Select>
      </div>
    </SwiperSlide>
    <!-- <SwiperSlide>Slide 3</SwiperSlide> -->
    <!-- <SwiperSlide>Slide 4</SwiperSlide> -->
    <!-- <SwiperSlide>Slide 5</SwiperSlide> -->
    <!-- <SwiperSlide>Slide 6</SwiperSlide> -->
    <!-- <SwiperSlide>Slide 7</SwiperSlide> -->
    <!-- <SwiperSlide>Slide 8</SwiperSlide> -->
    <!-- <SwiperSlide>Slide 9</SwiperSlide> -->
  </Swiper>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, EffectCreative } from 'swiper/modules';
  // import 'swiper/css/effect-fade';
  import 'swiper/css/effect-creative';

  import { DateView, Select } from '@neatui/vue';

  // 枚举
  const enums: any = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2',
      disabled: true
    },
    {
      label: '选项3',
      value: '3'
    }
  ];

  const value1: any = ref('');
</script>
