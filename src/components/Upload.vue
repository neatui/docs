<template>
  <div ui-form="@a type:upload tips:hover">
    <div v-if="tips" ui-form-tips="lt">{{ tips }}</div>
    <div ui-form-files="" class="mr-sm-sub">
      <div v-for="(item, idx) in files" :key="idx">
        <img :src="item.blob || item.path" alt="" />
        <div ui-form-file-tools="">
          <i ui-form-clean="" @click="clear(idx)"></i>
        </div>
      </div>
      <div v-if="multiple === 0 || multiple > files.length" ui-form-input="">
        <input type="file" value="" name="upload" :accept="accept" :multiple="!isNaN(multiple)" @change="change" />
        <div class="co-note">
          <i class="icon icon-upload fs-ls lh-sm"></i>
          <div class="fs-ss">{{ words.clickUpload || '点击上传' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { toRefs } from 'vue';
  import { storeToRefs, useBaseStore } from '../store';
  import Compressor from 'compressorjs';
  import { upload, blobToFile, error } from '../utils';

  const props = defineProps({
    tips: { type: String, default: '' },
    files: { type: Array, default: () => [] },
    accept: { type: String, default: '' },
    multiple: { type: Number, default: 0 },
    className: { type: String, default: '' },
    photoEditor: { type: Boolean, default: false }
  });
  const { files = [] }: any = toRefs(props);
  const base = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const emit = defineEmits(['change']);

  // 删除
  const clear = (idx: any) => {
    const _files = [...props.files];
    _files.splice(idx, 1);
    emit('change', [..._files]);
  };

  const change = async ({ target: { files: _filesList = [] } = {} }: any = {}) => {
    const _files: any = [];
    console.log(50);

    // 预览
    for (let i = 0; i < _filesList.length; i++) {
      const file = _filesList[i];
      const blob = URL.createObjectURL(file);
      _files.push({ blob, file });
    }
    // 上传
    for (let i = 0; i < _files.length; i++) {
      const { file = '' } = _files[i];
      // 压缩
      const _blob = await new Promise((resolve, reject) => {
        new Compressor(file, {
          quality: 1,
          checkOrientation: false,
          success: resolve,
          maxWidth: 1000,
          maxHeight: 1000,
          error: reject
        });
      });
      const _file = blobToFile(_blob);
      // 上传
      const { path = '', url = '' } = (await upload({ file: _file })) as any;
      if (path || url) {
        _files[i].path = path || url;
      } else {
        _files.splice(i, 1);
        error.show({
          text: words.uploadFail || '上传失败'
        });
      }
    }
    await emit('change', [...props.files, ..._files]);
  };
</script>
