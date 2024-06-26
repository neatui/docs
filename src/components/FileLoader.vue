<template>
  <div v-if="file" class="file-loader doc" ui-scroll=":x :y" v-html="state.code"></div>
  {{ state.navs }}
</template>
<script setup lang="ts">
  import { ref, reactive, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  import { Remarkable } from 'remarkable';
  // import VueHtmlParser from 'vue-html-parser';
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github.css';

  const route: any = useRoute();
  const props: any = defineProps({
    file: {
      type: String,
      default: ''
    }
  });

  const state: any = reactive({
    code: '',
    navs: []
  });

  const md = new Remarkable('full', {
    html: true,
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
    () => props.file,
    () => {
      if (props.file) {
        axios
          .get(props.file)
          .then((response) => {
            state.code = md.render(response.data);

            // 创建DOM解析器
            const parser = new DOMParser();
            // 解析HTML字符串
            const html = parser.parseFromString(state.code, 'text/html');
            // 获取所有的<h2>标签
            const navs = html.querySelectorAll('h2');
            // 提取<h2>标签的内容
            state.navs = Array.from(navs).map((tag) => tag.textContent);
          })
          .catch(() => {
            state.code = words['base.file.error'];
          });
      } else {
        state.code = words['base.file.error'];
      }
    },
    { deep: true, immediate: true }
  );
</script>
