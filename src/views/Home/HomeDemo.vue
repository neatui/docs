<template>
  <Swiper
    class="full"
    :effect="'fade'"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
      reverseDirection: true
    }"
    :modules="[Autoplay, EffectFade]"
  >
    <SwiperSlide>
      <div class="full bg-fore" ui-flex="col cm">
        <DateView class="bg-fore co-read r-sm w-mm b-xs b-solid b-line"></DateView>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="full bg-fore" ui-flex="col cm">
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
  import { Autoplay, EffectFade } from 'swiper/modules';
  import 'swiper/css/effect-fade';

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
