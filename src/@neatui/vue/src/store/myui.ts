import { defineStore } from 'pinia';

// 基础数据
export const useMyuiStore = defineStore('myui', {
  state: () => {
    return {
      full: localStorage.getItem('neatui_full') || 0,
      // 字号
      size: localStorage.getItem('neatui_size') || document?.documentElement?.getAttribute('size') || 'm',
      // 主题
      theme: localStorage.getItem('neatui_theme') || document?.documentElement?.getAttribute('theme') || 'auto',
      // 侧边
      side: 1
    };
  },
  getters: {},
  actions: {
    // 设置全屏显示
    async setfull(then = (res: any) => {}) {
      const full = this.full ? 0 : 1;
      this.full = full;
      localStorage.setItem('neatui_full', `${full}`);
      then(full);
    },
    // 设置系统主题
    async settheme(theme: any = '', then = (res: any) => {}) {
      if (theme) {
        localStorage.setItem('neatui_theme', theme);
        this.theme = theme;
        document.documentElement.setAttribute('theme', theme);
        then(theme);
      }
    },
    // 设置系统字号
    async setsize(size: any = '', then = (res: any) => {}) {
      if (size) {
        localStorage.setItem('neatui_size', size);
        this.theme = size;
        document.documentElement.setAttribute('size', this.size);
        then(size);
      }
    }
  }
});
