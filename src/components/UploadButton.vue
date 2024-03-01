<template>
  <label ui-flex="row cm">
    <input style="display: none" type="file" :accept="accept" @change="change" />
    <slot></slot>
  </label>
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
  // console.log(props.accept);

  const base = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  const emit = defineEmits(['change']);

  const change = async ({ target: { files: _filesList = [] } = {} }: any = {}) => {
    const _files: any = [];
    if (!_filesList.length) {
      return false;
    }

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
      // const _blob = await new Promise((resolve, reject) => {
      //   new Compressor(file, {
      //     quality: 1,
      //     checkOrientation: false,
      //     success: resolve,
      //     maxWidth: 1000,
      //     maxHeight: 1000,
      //     error: reject
      //   });
      // });
      // const _file = blobToFile(_blob);

      // 上传
      const res = (await upload({ file })) as any;
      const { url = '' } = res;
      if (url) {
        _files[i].url = url;
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
