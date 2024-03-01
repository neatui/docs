<template>
  <div v-if="route.query.id" class="codeview-code n-ls mob:n-ms b-solid b-back bt-xs" ui-scroll=":x :y" v-html="code"></div>
</template>
<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  import { Remarkable } from 'remarkable';
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github.css';

  const route: any = useRoute();
  const props: any = defineProps({
    file: {
      type: String,
      default: ''
    }
  });

  const code = ref('');

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

  onMounted(() => {
    if (route.query.id) {
      axios
        .get(props.file)
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
