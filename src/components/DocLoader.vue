<template>
  <div v-if="file" class="file-loader doc" ui-scroll=":x :y">
    <template v-for="(dom, idx) in state.doms" :key="idx">
      <component v-if="dom.type === 'vue'" :is="dom.code" />
      <div v-else v-html="dom.code"></div>
    </template>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, onMounted, watch, defineAsyncComponent, markRaw, defineComponent } from 'vue';
  import { compileToFunctions, parseComponent } from 'vue-template-compiler';
  import { useRoute } from 'vue-router';
  import { useBaseStore } from '@/store';
  import axios from 'axios';
  import { Remarkable } from 'remarkable';
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github.css';

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
    doms: []
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
        axios
          .get(props.file)
          .then((res) => {
            let code: any = res?.data || '';
            console.log(57, code);
            const _vues: any = [];
            code = code?.replace(/```vue([\s\S]*?)```/g, (_match: any, p1: any) => {
              const idx = _vues.length;
              _vues.push(p1);
              return `{VUE${idx}}`;
            });
            const doms: any = (code?.split('\n\n') || [])?.map((item: any) => {
              console.log(60, item);
              if (item) {
                if (/\{VUE\d*\}/.test(item)) {
                  const code = _vues.shift();
                  console.log(64, code);
                  // const component: any = defineAsyncComponent(() => {
                  //   return new Promise((resolve) => {
                  //     resolve({ template: code });
                  //   });
                  // });

                  // const parsedComponent: any = parseComponent(code.trim());
                  // console.log(69, parsedComponent);
                  // const compiledTemplate = compileToFunctions(parsedComponent.template.content.trim());
                  // console.log(70, compiledTemplate);
                  // console.log(84, parsedComponent.scriptSetup.content.trim());
                  // console.log(85, eval(parsedComponent.scriptSetup.content.trim()));
                  // const componentOptions = {
                  //   ...eval(parsedComponent.scriptSetup.content.trim()),
                  //   render: compiledTemplate.render,
                  //   staticRenderFns: compiledTemplate.staticRenderFns
                  // };
                  // console.log(90, componentOptions);
                  // const component = defineAsyncComponent(() => Promise.resolve(componentOptions));
                  // console.log(90, component);

                  const parsedComponent: any = parseComponent(code);
                  const compiledTemplate = compileToFunctions(parsedComponent.template.content);

                  let componentOptions = {};
                  if (parsedComponent.scriptSetup) {
                    const scriptContent = parsedComponent.scriptSetup.content.trim();
                    console.log(84, scriptContent);

                    const setupFunction = new Function('return function setup() {' + scriptContent + '}')();
                    componentOptions = { setup: setupFunction };
                  } else if (parsedComponent.script) {
                    const scriptContent = parsedComponent.script.content.trim();
                    console.log(84, scriptContent);
                    componentOptions = new Function('return ' + scriptContent)();
                  }

                  const component = defineAsyncComponent(() =>
                    Promise.resolve(
                      defineComponent({
                        ...componentOptions,
                        render: compiledTemplate.render,
                        staticRenderFns: compiledTemplate.staticRenderFns
                      })
                    )
                  );

                  console.log(90, component);

                  return { type: 'htm', code: 'vue...' };
                } else {
                  return { type: 'htm', code: md.render(item) };
                }
              } else {
                return { type: 'htm', code: '' };
              }
            });
            console.log(61, doms);
            state.doms = doms;
          })
          .catch(() => {
            // state.code = words['base.file.error'];
          });
      } else {
        // state.code = words['base.file.error'];
      }
    },
    { deep: true, immediate: true }
  );
</script>
