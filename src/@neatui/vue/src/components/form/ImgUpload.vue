<template>
  <div ui-flex="row" class="mc-upload">
    <template v-if="files && files.length > 0">
      <draggable :list="files" @update="update" :force-fallback="false" item-key="name" chosen-class="chosen" animation="200" class="mc-upload-img">
        <template #item="{ element, index }">
          <div class="mc-upload-img-item">
            <Image :src="element" :files="files" :initialSlide="index" v-bind="$attrs" @delImg="delImg" />
          </div>
        </template>
      </draggable>
    </template>
    <template v-if="(!multiple && files && files.length === 0) || (multiple && (!limit || (limit && files && files.length < limit)))">
      <slot>
        <div ui-flex="row cm" ui-form="@a type:upload tips:hover" :class="`upload bg-fore b-solid bk-case b-xs mb-sl ${uploadClass}`" :style="uploadStyle">
          <div v-if="tips" ui-form-tips>
            {{ tips }}
          </div>
          <input v-if="!crop" type="file" class="pa input" :multiple="multiple" @change="change" />
          <div v-else class="input pa" @click="uploadClick"></div>
          <div class="co-note ac input-icon">
            <i class="icon icon-upload fs-mm"></i>
            <div class="fs-ss">上传图片</div>
          </div>
        </div>
      </slot>
    </template>

    <Layer :id="layerId" am="as">
      <PhotoEditor :layerId="layerId" :action="action" @fileChange="uploadImg"></PhotoEditor>
    </Layer>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { Image, PhotoEditor } from '../display';
  import draggable from 'vuedraggable';
  import Compressor from 'compressorjs';
  import { Layer, LayerById } from '../basic';
  import { isArray } from '@fekit/utils';

  const layerId = Math.random().toString(36).slice(-6);

  interface Props {
    limit: number; // 文件限制数量
    uploadFn: (action: string, formData: FormData) => Promise<string>; // 上传图片接口
    uploadClass?: string;
    uploadStyle?: string;
    id?: string;
    tips?: string; // 提示文案
    modelValue?: string | any[];
    accept?: string; // 文件类型
    multiple?: boolean; // 是否可以上传多个文件
    crop?: boolean; // 是否需要抠图处理
    action?: string; // 上传路径
  }

  const props = withDefaults(defineProps<Props>(), {
    uploadClass: '',
    uploadStyle: '',
    id: '',
    tips: '',
    modelValue: '',
    accept: 'image/*',
    multiple: false,
    crop: false,
    action: '/common/updateFile'
  });

  const emit = defineEmits(['update:modelValue', 'change']);

  const files = ref<any>(isArray(props.modelValue) ? props.modelValue : props.modelValue ? [{ imgUrl: props.modelValue }] : []);

  // 删除图片
  const delImg = (src: any) => {
    files.value = files.value.filter((item: any) => {
      return item.imgUrl !== src.imgUrl;
    });
  };

  const uploadClick = () => {
    LayerById(layerId).show();
  };

  const update = () => {
    emit('update:modelValue', isArray(props.modelValue) ? files.value : files.value.length > 0 ? files.value[0].imgUrl : '');
  };

  const change = async ({ target: { files: _filesList = [] } = {} }: any = {}) => {
    const _files = [];
    for (let i = 0; i < _filesList.length; i++) {
      const file = _filesList[i];
      const blob = URL.createObjectURL(file);
      _files.push({ blob, file });
    }

    for (let i = 0; i < _files.length; i++) {
      let { file = '' } = _files[i];
      // 若为图片,则进行压缩处理
      if (/image/.test(file.type)) {
        const _blob: any = await new Promise((resolve, reject) => {
          new Compressor(file, {
            quality: 1,
            checkOrientation: false,
            success: resolve,
            maxWidth: 1000,
            maxHeight: 700,
            error: reject
          });
        });
        const { name = '' }: any = _blob || {};
        file = new File([_blob], name);
      }
      uploadImg(file);
    }
  };

  // 上传图片
  const uploadImg = async (file: any) => {
    const formData = new FormData();
    formData.append('file', file);
    const imgUrl = await props.uploadFn(props.action, formData);
    if (imgUrl) files.value = [...files.value, { imgUrl }];
  };

  watch(
    () => [props.modelValue, files.value],
    (n: any, o: any) => {
      if (n[0] !== o[0]) {
        files.value = isArray(props.modelValue) ? props.modelValue : props.modelValue ? [{ imgUrl: props.modelValue }] : [];
      }
      if (n[1] !== o[1]) {
        emit('update:modelValue', isArray(props.modelValue) ? files.value : files.value.length > 0 ? files.value[0].imgUrl : '');
      }
    },
    { deep: true }
  );

  defineExpose({ change, uploadClick });
</script>
<style lang="scss">
  .mc-upload {
    flex-wrap: wrap;

    .upload {
      width: 8em;
      height: 8em;
      border-radius: 0.25em;
      transition:
        all 0.35s,
        background-color 0s;
      // background-color: #ffffff;
      position: relative;

      .input {
        opacity: 0;
        height: 100%;
        width: 100%;
      }
      .input-icon {
        line-height: 1.3;
      }
    }

    &-img {
      display: flex;
      flex-direction: row;

      &-item {
        margin-right: 0.75rem;
        margin-bottom: 0.75rem;
      }
    }
  }
</style>
