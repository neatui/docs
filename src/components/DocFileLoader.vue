<template>
  <div class="bg-fore r-ms nx-lm ny-mm" ui-flex="row xy">
    <div class="flex-block nr-ls">
      <div v-if="file" class="file-loader doc fs-sl" ui-scroll=":x :y" v-html="state.code"></div>
    </div>
    <div class="flex-fixed w-lm nl-ls" ui-hide="<dpc">
      <ul class="n-ss-sub">
        <li v-for="(nav, idx) in state.navs" :key="idx" class="ux-hover r-sm">
          <a :href="`#${nav}`">{{ nav }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { reactive, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  import { Remarkable } from 'remarkable';

  import hljs from 'highlight.js';
  import 'highlight.js/styles/github.css';
  import { useBaseStore } from '@/store';

  const base: any = useBaseStore();

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
    [() => props.file, () => base.lang],
    () => {
      if (props.file) {
        const file = `/docs/${base.lang}${props.file}`;
        axios
          .get(file)
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
            state.code = base.words['base.file.error'];
            state.navs = [];
          });
      } else {
        state.code = base.words['base.file.error'];
        state.navs = [];
      }
    },
    { deep: true, immediate: true }
  );
</script>
