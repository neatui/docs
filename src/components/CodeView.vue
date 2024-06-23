<template>
  <div class="b-solid b-line b-xs r-sm">
    <div class="n-sl r-sm" v-bind="{ ...(scroll ? { 'ui-scroll': ':x :y' } : {}) }">
      <div class="h-xs mb-sm" ui-flex="row xm">
        <h4>{{ title || state.title }}</h4>
      </div>
      <div class="codeview-view n-ms">
        <slot></slot>
      </div>
    </div>
    <div class="codeview-tool fs-ss ny-xs b-solid b-back bt-xs" ui-flex="row cm">
      <div ui-btn="@a s none :square" @click="state.view = !state.view"><i class="icon icon-code"></i></div>
    </div>
    <div v-if="file" v-show="state.view" class="codeview-code fs-ss n-ms b-solid b-back bt-xs" ui-scroll=":x :y" v-html="code"></div>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, watch, onMounted } from 'vue';
  import axios from 'axios';
  import { Remarkable } from 'remarkable';
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github.css';
  import { useBaseStore } from '@/store';

  const base: any = useBaseStore();

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
    view: false,
    title: ''
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

  watch(
    [() => props.file, () => base.lang],
    () => {
      if (props.file) {
        const file = `/docs/${base.lang}${props.file}`;
        axios
          .get(file)
          .then((response) => {
            const _code = md.render(response.data);
            if (!props.title) {
              // 创建DOM解析器
              const parser = new DOMParser();
              // 解析HTML字符串
              const html = parser.parseFromString(_code, 'text/html');
              console.log(81, html);
              // 获取所有的<h2>标签
              state.title = html.querySelector('h1')?.textContent || '';
              console.log(state.title);
            }
            code.value = md.render(response.data.replace(/^# .*\n/, ''));
          })
          .catch(() => {
            code.value = base.words['base.file.error'];
          });
      } else {
        state.code = base.words['base.file.error'];
      }
    },
    { deep: true, immediate: true }
  );
</script>
<style lang="scss">
  .codeview-view {
    background-image: linear-gradient(-45deg, var(--co-line) 12.5%, var(--co-fore) 0, var(--co-fore) 50%, var(--co-line) 0, var(--co-line) 62.5%, var(--co-fore) 0, var(--co-fore));
    background-size: 3px 3px;
  }
  .codeview-code {
    pre {
      margin: 0;
    }
  }
</style>
