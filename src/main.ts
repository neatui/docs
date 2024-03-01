// 图标
import './assets/font/iconfont.css';
// 样式
import './assets/css/main.scss';

import { createApp } from 'vue';
import Root from './views/Root.vue';
import router from './router';
import { createPinia } from 'pinia';
import { theme } from './utils';
theme();

createApp(Root).use(createPinia()).use(router).mount('#root');
