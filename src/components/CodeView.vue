<template>
  <div class="b-solid b-line b-xs r-sm">
    <div class="n-ms r-sm" v-bind="{ ...(scroll ? { 'ui-scroll': ':x :y' } : {}) }">
      <h5 class="mb-sm">{{ title }}</h5>
      <div class="codeview-view">
        <slot></slot>
      </div>
    </div>
    <div class="codeview-tool fs-ss b-solid b-back bt-xs ny-xs" ui-flex="row cm">
      <div ui-btn="@a s none :square" @click="state.view = !state.view"><i class="icon icon-code"></i></div>
    </div>
    <div v-if="file" v-show="state.view" class="codeview-code fs-ss n-ms b-solid b-back bt-xs" ui-scroll=":x :y" v-html="code"></div>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue';
  import axios from 'axios';
  import { Remarkable } from 'remarkable';
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github.css';

  const props: any = defineProps({
    file: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    scroll: {
      type: Boolean,
      default: false
    }
  });

  const state: any = reactive({
    view: false
  });

  const code = ref('');

  const md = new Remarkable('full', {
    highlight: (str: any, lang: any) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (_err) {
          console.error(_err);
        }
      }
      try {
        return hljs.highlightAuto(str).value;
      } catch (_err) {
        console.error(_err);
      }
      return '';
    }
  });

  onMounted(() => {
    if (props.file) {
      const file = `/docs/en-US${props.file}`;
      axios
        .get(file)
        .then((response) => {
          code.value = md.render(response.data);
        })
        .catch(() => {
          code.value = '获取文件失败';
        });
    } else {
      console.log();
    }
  });
</script>
<style lang="scss">
  .codeview-view {
    background-image: linear-gradient(-45deg, var(--co-line) 12.5%, var(--co-fore) 0, var(--co-fore) 50%, var(--co-line) 0, var(--co-line) 62.5%, var(--co-fore) 0, var(--co-fore));
    background-size: 3px 3px;
  }
</style>
