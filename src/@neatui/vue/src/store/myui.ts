import { defineStore } from 'pinia';

// 基础数据
export const useMyuiStore = defineStore('myui', {
  state: () => {
    return {
      full: 0,
      // 字号
      fontSize: localStorage.getItem('fontSize') || 'm',
      // 主题
      theme: localStorage.getItem('theme') || 'auto',
      // 所有主题
      themes: [],
      // 侧边
      side: 1
    };
  },
  getters: {},
  actions: {
    // 设置全屏显示
    async setFull(then = (res: any) => {}) {
      const full = this.full ? 0 : 1;
      localStorage.setItem('neatui_full', `${full}`);
      this.full = full;
      then(full);
    },
    // 设置系统主题
    async setTheme() {
      return document.documentElement.setAttribute('theme', this.theme);
    },
    // 设置系统字号
    async setFontSize() {
      document.documentElement.setAttribute('size', this.fontSize);
    }
  }
});
