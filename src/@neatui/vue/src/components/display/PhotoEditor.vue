<template>
  <div class="photo-editor bg-fore n-mm">
    <div class="mt-mm" ui-note="@b risk">抠图和压缩处理需要较长时间，期间请耐心等待不要关闭本窗口或进行操作，本功能需要付费，请尽量珍惜每一次处理避免不必要的浪费～</div>
    <div v-if="state.img" class="photo-editor-viewer bg-weak my-mm" ui-flex="row">
      <div class="mr-mm" style="flex: 1">
        <vue-cropper ref="cropperRef" :img="state.img" :autoCrop="state.autoCrop" @realTime="realTime"></vue-cropper>
      </div>
      <div style="flex: 1" class="photo-editor-transparent">
        <img :src="state.previews || ''" />
      </div>
    </div>
    <div v-else class="photo-editor-viewer bg-weak my-mm" ui-flex="row cm">
      <input type="file" class="input pa" @change="change" />
      <div class="ac input-icon">
        <i class="icon icon-upload fs-ml"></i>
        <div class="fs-sl">请先上传图片</div>
      </div>
    </div>
    <div ui-flex="row cm" class="mr-ls-sub">
      <button ui-btn="@a s none :square" class="nx-mm" @click="reset">还原</button>
      <button ui-btn="@a s none :square" class="nx-mm" @click="crop">
        <i v-if="state.cropLoad" className="icon icon-loading am-r360"></i>
        抠图
      </button>
      <button ui-btn="@a s none :square" class="nx-mm" @click="use">使用</button>
    </div>
    <div class="fekit-layer-close" @click="LayerById(layerId).hide()"></div>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { VueCropper } from 'vue-cropper/next';
  import Compressor from 'compressorjs';
  import { LayerById } from '../basic';
  import axios from 'axios';
  import 'vue-cropper/next/dist/index.css';

  const props: any = defineProps({
    layerId: {
      type: String,
      default: 'PhotoEditor'
    }
  });

  const state = reactive({
    img: null as any, //blob格式
    // outputType: 'jepg', // 裁剪生成图片格式
    autoCrop: true,
    previews: null, //base格式
    cropLoad: 0
  });

  const emit = defineEmits(['fileChange']);

  const cropperRef = ref<any>(null);

  const change = async ({ target: { files = [] } = {} }: any = {}) => {
    const file = files[0];
    const blob: any = await new Promise((resolve, reject) => {
      new Compressor(file, {
        quality: 1,
        checkOrientation: false,
        success: resolve,
        maxWidth: 1000,
        maxHeight: 700,
        error: reject
      });
    });
    const _file = blobToFile(blob);
    const _blob: any = URL.createObjectURL(_file);
    state.img = _blob;
  };

  // 实时响应预览图片
  const realTime = (data: any) => {
    cropperRef.value.getCropBlob((data: any) => {
      blobToDataURI(data, (res: any) => {
        state.previews = res;
      });
    });
  };

  //还原
  const reset = () => {
    cropperRef.value.clearCrop(); // 清除截图信息
    cropperRef.value.goAutoCrop(); // 自动生成截图框函数
  };

  //抠图
  const crop = async () => {
    if (!state.cropLoad) {
      state.cropLoad = 1;

      const formData = {
        image_file_b64: state.previews,
        image_url: '',
        size: 'preview',
        type: 'auto',
        type_level: '1',
        format: 'auto',
        roi: '0% 0% 100% 100%',
        crop: false,
        crop_margin: '0',
        scale: 'original',
        position: 'original',
        channels: 'rgba',
        add_shadow: false,
        semitransparency: true,
        bg_color: '',
        bg_image_url: ''
      };
      const res: any = await axios.post(
        'https://api.remove.bg/v1.0/removebg',
        { ...formData },
        { responseType: 'arraybuffer', headers: { 'X-Api-Key': 'kg4jrcKZd6Gjdx5CmBYmksuN' } }
      );
      if (res.status === 200) {
        const blob = new Blob([res.data], { type: 'image/png' });
        blobToDataURI(blob, (data: any) => {
          state.previews = data;
          state.cropLoad = 0;
        });
      }
    }
  };

  //使用
  const use = () => {
    const file = base64ToFile(state.previews);
    LayerById(props.layerId).hide();
    emit('fileChange', file);
  };

  //blob 转 base64
  const blobToDataURI = (blob: any, callback: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = function (e: any) {
      callback(e.target.result);
    };
  };
  //base64 转 file
  const base64ToFile = (data: any) => {
    const arr = data.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const blob = new Blob([u8arr], { type: mime });
    const type = mime.replace(/image\//, '');
    const file = new File([blob], new Date().getTime() + `.${type}`);
    return file;
  };
  //blob转file
  const blobToFile = (blob: any) => {
    const { name = '' } = blob || {};
    const file = new File([blob], name);
    return file;
  };
</script>
<style lang="scss">
  .photo-editor {
    &-viewer {
      height: 27rem;
    }
    .input {
      opacity: 0;
      height: 100%;
      width: 100%;
    }
    .input-icon {
      line-height: 1.5;
    }
    &-transparent {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAIElEQVQoU2NkQAOXLl36jyzESAcF6Hbq6emhWMtIewUAeQ8d3cWD32MAAAAASUVORK5CYII=);
    }
  }
</style>
