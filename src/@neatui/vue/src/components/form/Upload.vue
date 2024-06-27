<template>
  <ul ui-flex="row lm :wrap" class="mb-ss-sub mr-ss-sub" v-bind="{ ...attrs }">
    <li v-for="(file, idx) in state.files" :key="idx" ui-flex="col cm" class="flex-fixed bg-fore n-sl w-ms h-ms b-solid bk-line b-xs">
      <img v-if="file.type === 'image'" :src="file.path" alt="" />
      <template v-else-if="file.type === 'pdf'">
        <svg t="1705645350800" class="w-ss h-ss" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1913">
          <path
            d="M205.5 64H665l232 232v639c0 13.807-11.193 25-25 25H205.5c-13.807 0-25-11.193-25-25V89c0-13.807 11.193-25 25-25z m449.145 25H205.5v846H872V306.355L654.645 89z"
            fill="#B7B7BD"
            p-id="1914"
          ></path>
          <path d="M665 64l-11 23.5v197c0 13.807 11.193 25 25 25h194.5L897 296 665 64z m14 49.355L850.145 284.5H679V113.355z" fill="#B7B7BD" p-id="1915"></path>
          <path d="M255 571m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="1916"></path>
          <path d="M255 707m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="1917"></path>
          <path d="M255 639m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="1918"></path>
          <path d="M255 774m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="1919"></path>
          <path d="M255 842m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="1920"></path>
          <path d="M67 193m16 0l287 0q16 0 16 16l0 287q0 16-16 16l-287 0q-16 0-16-16l0-287q0-16 16-16Z" fill="#FF4867" p-id="1921"></path>
          <path
            d="M314.229 459.289c-21.407 0-40.606-36.765-50.708-60.673-16.991-7.098-35.722-13.728-53.918-18.014-15.92 10.514-43.014 26.251-63.818 26.251-12.911 0-22.21-6.496-25.622-17.813-2.609-9.309-0.4-15.738 2.409-19.22 5.485-7.5 16.79-11.317 33.715-11.317 13.714 0 31.107 2.41 50.507 7.098 12.51-8.907 25.22-19.22 36.525-30.135-5.017-23.84-10.503-62.48 3.412-80.294 6.89-8.505 17.393-11.318 30.103-7.5 13.914 4.017 19.199 12.522 20.804 19.22 5.887 23.237-20.804 54.578-38.8 72.994 4.015 15.938 9.3 32.747 15.721 48.15 25.822 11.518 56.527 28.728 60.006 47.48 1.405 6.495-0.602 12.522-5.887 17.813-4.549 3.75-9.365 5.96-14.45 5.96z m-31.647-52.419c12.785 26.402 24.975 38.862 31.4 38.862 0.995 0 2.386-0.404 4.373-2.02 2.385-2.425 2.385-4.041 1.988-5.523-1.325-6.937-12.124-18.32-37.761-31.319z m-126.377-35.247c-16.73 0-21.33 4.093-22.73 6.003-0.399 0.614-1.599 2.455-0.399 7.23 1 4.092 3.8 8.458 12.464 8.458 10.865 0 26.595-6.207 44.857-17.325-13.063-2.933-24.594-4.366-34.192-4.366z m67.632-1.765c10.845 2.983 22.09 6.827 32.535 10.803-3.792-9.809-6.853-20.015-9.448-29.824-7.651 6.561-15.436 12.99-23.087 19.021zM265.9 259.556c-3.827 0-6.513 1.409-8.93 4.024-7.118 8.917-7.924 31.38-2.418 60.144 20.884-22.26 32.232-42.711 29.411-53.64-0.402-1.61-1.611-6.504-11.348-9.32-2.686-0.805-4.7-1.208-6.715-1.208z"
            fill="#FFFFFF"
            p-id="1922"
          ></path>
        </svg>
      </template>
      <template v-else-if="file.type === 'xlsx'">
        <svg t="1705645380770" class="w-ss h-ss" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2060">
          <path
            d="M205.799024 64.936585H664.850732l231.773658 231.773659v638.376585c0 13.79353-11.18208 24.97561-24.97561 24.97561H205.799024c-13.79353 0-24.97561-11.18208-24.975609-24.97561V89.912195c0-13.79353 11.18208-24.97561 24.975609-24.97561z m448.70681 24.97561H205.799024v845.174634H871.64878V307.055141L654.505834 89.912195z"
            fill="#B7B7BD"
            p-id="2061"
          ></path>
          <path
            d="M664.850732 64.936585l-10.989269 23.477074v196.807804c0 13.79353 11.18208 24.97561 24.97561 24.97561h194.310244L896.62439 296.710244 664.850732 64.936585z m13.986341 49.306849L849.815102 285.221463H678.837073V114.243434z"
            fill="#B7B7BD"
            p-id="2062"
          ></path>
          <path
            d="M255.250732 571.441951m9.990244 0l555.457561 0q9.990244 0 9.990243 9.990244l0 0q0 9.990244-9.990243 9.990244l-555.457561 0q-9.990244 0-9.990244-9.990244l0 0q0-9.990244 9.990244-9.990244Z"
            fill="#B7B7BD"
            p-id="2063"
          ></path>
          <path
            d="M255.250732 707.309268m9.990244 0l555.457561 0q9.990244 0 9.990243 9.990244l0 0q0 9.990244-9.990243 9.990244l-555.457561 0q-9.990244 0-9.990244-9.990244l0 0q0-9.990244 9.990244-9.990244Z"
            fill="#B7B7BD"
            p-id="2064"
          ></path>
          <path
            d="M255.250732 639.37561m9.990244 0l555.457561 0q9.990244 0 9.990243 9.990244l0 0q0 9.990244-9.990243 9.990244l-555.457561 0q-9.990244 0-9.990244-9.990244l0 0q0-9.990244 9.990244-9.990244Z"
            fill="#B7B7BD"
            p-id="2065"
          ></path>
          <path
            d="M255.250732 774.243902m9.990244 0l555.457561 0q9.990244 0 9.990243 9.990244l0 0q0 9.990244-9.990243 9.990244l-555.457561 0q-9.990244 0-9.990244-9.990244l0 0q0-9.990244 9.990244-9.990244Z"
            fill="#B7B7BD"
            p-id="2066"
          ></path>
          <path
            d="M255.250732 842.177561m9.990244 0l555.457561 0q9.990244 0 9.990243 9.990244l0 0q0 9.990244-9.990243 9.990244l-555.457561 0q-9.990244 0-9.990244-9.990244l0 0q0-9.990244 9.990244-9.990244Z"
            fill="#B7B7BD"
            p-id="2067"
          ></path>
          <path
            d="M67.434146 193.810732m15.984391 0l286.72 0q15.98439 0 15.98439 15.98439l0 286.72q0 15.98439-15.98439 15.98439l-286.72 0q-15.98439 0-15.984391-15.98439l0-286.72q0-15.98439 15.984391-15.98439Z"
            fill="#00C090"
            p-id="2068"
          ></path>
          <path
            d="M242.569116 353.23904l89.224866 84.502478c4.337764 4.107988 4.523582 10.954302 0.415595 15.291067-4.107988 4.337764-10.954302 4.523582-15.291068 0.415595l-89.224866-84.502479-84.502478 89.224867c-4.107988 4.337764-10.954302 4.523582-15.291067 0.415594-4.337764-4.107988-4.523582-10.954302-0.415595-15.291067l84.502478-89.224867-89.224866-84.502478c-4.337764-4.107988-4.523582-10.954302-0.415594-15.291067 4.107988-4.337764 10.954302-4.523582 15.291067-0.415594l89.224867 84.502478 84.502478-89.224867c4.107988-4.337764 10.954302-4.523582 15.291067-0.415594 4.337764 4.107988 4.523582 10.954302 0.415594 15.291068l-84.502478 89.224866z"
            fill="#FFFFFF"
            p-id="2069"
          ></path>
        </svg>
      </template>
      <template v-else-if="file.type === 'docx'">
        <svg t="1705645401993" class="w-ss h-ss" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2207">
          <path
            d="M205.5 64H665l232 232v639c0 13.807-11.193 25-25 25H205.5c-13.807 0-25-11.193-25-25V89c0-13.807 11.193-25 25-25z m449.145 25H205.5v846H872V306.355L654.645 89z"
            fill="#B7B7BD"
            p-id="2208"
          ></path>
          <path d="M665 64l-11 23.5v197c0 13.807 11.193 25 25 25h194.5L897 296 665 64z m14 49.355L850.145 284.5H679V113.355z" fill="#B7B7BD" p-id="2209"></path>
          <path d="M67 193m16 0l287 0q16 0 16 16l0 287q0 16-16 16l-287 0q-16 0-16-16l0-287q0-16 16-16Z" fill="#4297FC" p-id="2210"></path>
          <path d="M255 571m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2211"></path>
          <path d="M255 707m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2212"></path>
          <path d="M255 639m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2213"></path>
          <path d="M255 774m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2214"></path>
          <path d="M255 842m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2215"></path>
          <path
            d="M315.269 451.314c7.015 7.61 19.731 2.651 19.731-7.693V271h-22.737v143.524l-76.9-83.418c-4.503-4.885-12.223-4.885-16.726 0l-76.9 83.418V271H119v172.62c0 10.345 12.716 15.303 19.731 7.694L227 355.564l88.269 95.75z"
            fill="#FFFFFF"
            p-id="2216"
          ></path>
        </svg>
      </template>
      <template v-else-if="file.type === 'pptx'">
        <svg t="1705645414803" class="w-ss h-ss" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2354">
          <path
            d="M205.5 64H665l232 232v639c0 13.807-11.193 25-25 25H205.5c-13.807 0-25-11.193-25-25V89c0-13.807 11.193-25 25-25z m449.145 25H205.5v846H872V306.355L654.645 89z"
            fill="#B7B7BD"
            p-id="2355"
          ></path>
          <path d="M665 64l-11 23.5v197c0 13.807 11.193 25 25 25h194.5L897 296 665 64z m14 49.355L850.145 284.5H679V113.355z" fill="#B7B7BD" p-id="2356"></path>
          <path d="M255 571m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2357"></path>
          <path d="M255 707m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2358"></path>
          <path d="M255 639m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2359"></path>
          <path d="M255 774m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2360"></path>
          <path d="M255 842m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2361"></path>
          <path d="M67 193m16 0l287 0q16 0 16 16l0 287q0 16-16 16l-287 0q-16 0-16-16l0-287q0-16 16-16Z" fill="#FF7A64" p-id="2362"></path>
          <path
            d="M314 312.055c0 16.701-8.014 25.218-26.96 27.787H129c-5.523 0-10 4.477-10 10V451.5c0 5.523 4.477 10 10 10s10-4.477 10-10v-91.658h148.694a10 10 0 0 0 1.264-0.08C317.98 356.065 334 339.393 334 312.055c0-26.83-15.298-44.972-43.677-52.703a10 10 0 0 0-2.629-0.352H129c-5.523 0-10 4.477-10 10s4.477 10 10 10h157.317C305.466 284.553 314 295.032 314 312.055z"
            fill="#FFFFFF"
            p-id="2363"
          ></path>
        </svg>
      </template>
      <template v-else>
        <svg t="1705645436666" class="w-ss h-ss" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2501">
          <path
            d="M205.5 64H665l232 232v639c0 13.807-11.193 25-25 25H205.5c-13.807 0-25-11.193-25-25V89c0-13.807 11.193-25 25-25z m449.145 25H205.5v846H872V306.355L654.645 89z"
            fill="#B7B7BD"
            p-id="2502"
          ></path>
          <path d="M665 64l-11 23.5v197c0 13.807 11.193 25 25 25h194.5L897 296 665 64z m14 49.355L850.145 284.5H679V113.355z" fill="#B7B7BD" p-id="2503"></path>
          <path d="M255 571m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2504"></path>
          <path d="M255 707m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2505"></path>
          <path d="M255 639m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2506"></path>
          <path d="M255 774m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2507"></path>
          <path d="M255 842m10 0l556 0q10 0 10 10l0 0q0 10-10 10l-556 0q-10 0-10-10l0 0q0-10 10-10Z" fill="#B7B7BD" p-id="2508"></path>
          <path d="M67 193m16 0l287 0q16 0 16 16l0 287q0 16-16 16l-287 0q-16 0-16-16l0-287q0-16 16-16Z" fill="#CCCCCC" p-id="2509"></path>
          <path
            d="M226.274 240c14.845 0 29.79 4.862 41.18 13.738C280.444 263.86 288 278.458 288 295.57c0 22.53-15.93 43.423-46.252 63.48l-0.31 0.203V387c0 6.525-5.208 11.834-11.695 11.996l-0.305 0.004c-6.627 0-12-5.373-12-12v-34.314a12 12 0 0 1 5.673-10.196C250.988 325.189 264 309.227 264 295.57c0-9.498-3.99-17.207-11.298-22.902-7.059-5.5-16.796-8.668-26.428-8.668-9.598 0-19.202 3.147-26.147 8.625-7.064 5.571-10.985 13.116-11.123 22.435l-0.004 0.51c0 6.628-5.373 12-12 12s-12-5.372-12-12c0-33.201 28.361-55.57 61.274-55.57zM230 453c9.389 0 17-7.611 17-17s-7.611-17-17-17-17 7.611-17 17 7.611 17 17 17z"
            fill="#FFFFFF"
            p-id="2510"
          ></path>
        </svg>
      </template>
      <p ui-omit="1" class="fs-ss ac">{{ file.name }}</p>
    </li>
    <li v-if="(!multiple && state.files && state.files.length === 0) || (multiple && (!limit || (limit && state.files && state.files.length < limit)))">
      <slot>
        <label ui-flex="row cm" ui-form="@a type:upload tips:hover" :class="`upload w-ms h-ms n-sl bg-fore b-solid bk-line b-xs ${uploadClass}`" :style="uploadStyle">
          <div v-if="tips" ui-form-tips>
            {{ tips }}
          </div>
          <input style="display: none" type="file" class="pa input" :multiple="multiple" @change="change" />
          <div class="co-note ac input-icon">
            <svg t="1705642180833" style="width: 1em; height: 1em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4215">
              <path
                d="M906.212134 565.732986 565.732986 565.732986 565.732986 906.212134C565.732986 926.013685 541.666486 959.972 511.97312 959.972 482.297674 959.972 458.213254 926.013685 458.213254 906.212134L458.213254 565.732986 117.734106 565.732986C97.950475 565.732986 63.97424 541.666486 63.97424 511.97312 63.97424 482.279754 97.950475 458.213254 117.734106 458.213254L458.213254 458.213254 458.213254 117.734106C458.213254 97.950475 482.297674 63.97424 511.97312 63.97424 541.666486 63.97424 565.732986 97.950475 565.732986 117.734106L565.732986 458.213254 906.212134 458.213254C925.995765 458.213254 959.972 482.279754 959.972 511.97312 959.972 541.666486 925.995765 565.732986 906.212134 565.732986Z"
                p-id="4216"
              ></path>
            </svg>
          </div>
        </label>
      </slot>
    </li>
  </ul>
  <Layer :id="layerId" am="as"></Layer>
</template>
<script setup lang="ts">
  import { reactive, ref, watch } from 'vue';
  import { Image } from '../display';
  import draggable from 'vuedraggable';
  import Compressor from 'compressorjs';
  import { Layer, LayerById } from '../basic';
  import { isArray, isFunction } from '@fekit/utils';

  const layerId = Math.random().toString(36).slice(-6);

  interface Props {
    modelValue?: string | any[];
    // 文件限制数量
    limit?: number;
    attrs?: object;
    uploadClass?: string;
    uploadStyle?: string;
    id?: string;
    tips?: string; // 提示文案
    // 文件类型
    accept?: string;
    // 是否可以上传多个文件
    multiple?: boolean;
    // 是否需要抠图处理
    crop?: boolean;
    // 上传路径
    action?: string;
    // 请求上传接口
    upload?: (formData: FormData) => Promise<any>;
  }

  const props = withDefaults(defineProps<Props>(), {
    uploadClass: '',
    uploadStyle: '',
    id: '',
    attrs: () => ({}),
    tips: '',
    modelValue: '',
    accept: 'image/*',
    multiple: false,
    crop: false,
    action: '/common/updateFile',
    upload: async () => null
  });

  const state: any = reactive({
    files: []
  });

  const emit = defineEmits(['update:modelValue', 'change']);

  // const files = ref<any>(isArray(props.modelValue) ? props.modelValue : props.modelValue ? [{ imgUrl: props.modelValue }] : []);

  // 删除图片
  // const delImg = (src: any) => {
  //   files.value = files.value.filter((item: any) => {
  //     return item.imgUrl !== src.imgUrl;
  //   });
  // };

  // const uploadClick = () => {
  //   LayerById(layerId).show();
  // };

  // const update = () => {
  //   emit('update:modelValue', isArray(props.modelValue) ? files.value : files.value.length > 0 ? files.value[0].imgUrl : '');
  // };

  const change = async (e: any = {}) => {
    const files = e?.target?.files || [];
    for (let i = 0; i < files.length; i++) {
      const _file: any = files[i];

      // 文件类型
      let type = '';
      if (_file.type === 'application/msword' || _file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        type = 'docx';
      } else if (_file.type === 'application/vnd.ms-excel' || _file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        type = 'xlsx';
      } else if (_file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
        type = 'pptx';
      } else if (_file.type === 'application/pdf') {
        type = 'pdf';
      } else if (_file.type === 'text/html') {
        type = 'html';
      } else if (_file.type.startsWith('image/') && _file.type !== 'image/vnd.adobe.photoshop') {
        type = 'image';
      }
      const file: any = { name: _file.name, type, path: URL.createObjectURL(_file), url: await props.upload(_file) };
      // 上传文件
      state.files.push(file);

      // if (isFunction(props.upload)) {
      //   const src: any = await props.upload(_file);
      //   if (src) {
      //     file.src = src;
      //   }
      // }
    }

    // const _files = [];
    // for (let i = 0; i < files.length; i++) {
    //   const file = files[i];
    //   const blob = URL.createObjectURL(file);
    //   _files.push({ blob, file });
    // }
    // console.log(98, _files);
    // for (let i = 0; i < _files.length; i++) {
    //   let { file = '' } = _files[i];
    //   // 若为图片,则进行压缩处理
    //   if (/image/.test(file.type)) {
    //     const _blob: any = await new Promise((resolve, reject) => {
    //       new Compressor(file, {
    //         quality: 1,
    //         checkOrientation: false,
    //         success: resolve,
    //         maxWidth: 1000,
    //         maxHeight: 700,
    //         error: reject
    //       });
    //     });
    //     const { name = '' }: any = _blob || {};
    //     file = new File([_blob], name);
    //   }
    //   const formData = new FormData();
    //   formData.append('file', file);
    //   if (isFunction(props.upload)) {
    //     const url: any = await props.upload(formData);
    //     console.log(126, url);
    //     if (url) {
    //       files.value = [...files.value, { url }];
    //     }
    //   }
    // }
  };

  // watch(
  //   () => [props.modelValue, state.files],
  //   (n: any, o: any) => {
  //     if (n[0] !== o[0]) {
  //       files.value = isArray(props.modelValue) ? props.modelValue : props.modelValue ? [{ imgUrl: props.modelValue }] : [];
  //     }
  //     if (n[1] !== o[1]) {
  //       emit('update:modelValue', isArray(props.modelValue) ? files.value : files.value.length > 0 ? files.value[0].imgUrl : '');
  //     }
  //   },
  //   { deep: true }
  // );

  // defineExpose({ change, uploadClick });
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
