<template>
  <div>
    <div :class="`mc-img b-solid b-case b-xs ${imgClass}`" :style="imgStyle">
      <img :src="src[srcName]" :style="`object-fit: ${fit}`" @click.stop="showPreview" />
      <div v-if="tools" class="mc-img-tools">
        <slot name="tools">
          <div class="mc-img-clean co-risk" @click="delImg"></div>
        </slot>
      </div>
    </div>
    <Layer :id="`PhotoViewer${layerId}${initialSlide}`" am="as">
      <PhotoViewer :initialSlide="initialSlide" :files="files" :srcName="srcName" :id="`PhotoViewer${layerId}${initialSlide}`"></PhotoViewer>
    </Layer>
  </div>
</template>
<script setup lang="ts">
  import { Layer, LayerById } from '../basic';
  import PhotoViewer from './PhotoViewer.vue';

  const props: any = defineProps({
    tools: { type: Boolean, default: true },
    srcName: { type: String, default: 'imgUrl' },
    theme: { type: String, default: '@a' },
    co: { type: String, default: 'note' },
    imgClass: { type: String, default: '' },
    imgStyle: { type: String, default: '' },
    src: {
      type: Object,
      default: () => ({})
    },
    files: {
      type: Array as () => any[],
      default: () => []
    },
    // 图片如何适应容器框,同原生object-fit
    fit: {
      type: String,
      default: 'contain'
    },
    // 是否开启图片预览放大
    preview: {
      type: Boolean,
      default: true
    },
    initialSlide: {
      type: Number,
      default: 0
    }
  });

  const emit = defineEmits(['delImg']);
  const layerId = Math.random().toString(36).slice(-6);

  //预览
  const showPreview = () => {
    if (!props.preview) return;
    LayerById(`PhotoViewer${layerId}${props.initialSlide}`).show();
  };
  const delImg = () => {
    emit('delImg', props.src);
  };
</script>
<style lang="scss">
  .mc-img {
    height: 8em;
    width: 8em;
    padding: 0.5em;
    border-radius: 0.25em;
    position: relative;
    overflow: hidden;
    // @include theme {
    //   border: 1px solid co(case);
    // }

    img {
      width: 100%;
      height: 100%;
      transform: translate3d(0, 0, 0);
      border-radius: 0.15em;
    }

    &-tools {
      position: absolute;
      height: 1.5em;
      opacity: 0;
      right: 0;
      top: 0;
      text-align: center;
      transition: all 0.5s;

      & > * {
        width: 1.5em;
        height: 1.5em;
        border-radius: 50%;
        text-align: center;
      }
    }
    &-clean {
      display: inline-block;

      background:
        linear-gradient(45deg, transparent 40%, #fff 45%, #fff 55%, transparent 60%) no-repeat center/38% 38%,
        linear-gradient(-45deg, transparent 40%, #fff 45%, #fff 55%, transparent 60%) no-repeat center/38% 38%,
        radial-gradient(circle at 50% 50%, currentColor 53%, transparent 58%);
    }
    &:hover {
      .mc-img-tools {
        opacity: 1;
      }
    }
  }
</style>
