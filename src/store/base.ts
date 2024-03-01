import { defineStore } from 'pinia';
import { hash } from '@fekit/url';
import { api, error } from '@/utils';
import words from '@/locales';

// 基础数据
export const useBaseStore = defineStore('base', {
  state: () => {
    return {
      ready: 1,
      full: 0,
      // 致命错误
      error: { code: '', msg: '' },
      // 语言词库
      words: {},
      lang: (hash.get('lang') || window.localStorage.getItem('lang') || navigator.language || 'zn-CN').replace(/-\w*/, (res: any) => res.toUpperCase()),
      // 系统字号
      fontSize: window.localStorage.getItem('fontSize') || 'm',
      // 系统主题
      theme: window.localStorage.getItem('theme') || 'auto',
      side: 1,
      // 菜单是否显示文字
      sideText: Number(window.localStorage.getItem('sideText')) || 0,
      // 是否登录
      // logged: sessionStorage.getItem('token') || window.localStorage.getItem('token') ? 1 : 0,
      logged: 1,
      // 用户信息
      userInfo: {},
      // 编辑用户信息
      editUserInfo: {},
      menus: [
        // { path: '/docs/design', name: 'Design', word: 'menu.design' },
        { path: '/docs/development', name: 'Development', word: 'menu.development' },
        {
          path: '/docs/components',
          name: 'Components',
          word: 'menu.components',
          chlid: [
            {
              word: words['components.basic'] || 'Basic',
              name: 'Basic',
              chlid: [
                { path: '/docs/components/Layer', name: 'Layer', word: 'Layer', image: '/upload/layer.gif' },
                { path: '/docs/components/IRouterView', name: 'IRouterView', word: 'IRouterView' },
                { path: '/docs/components/IFollowView', name: 'IFollowView', word: 'IFollowView' },
                { path: '/docs/components/IPickerView', name: 'IPickerView', word: 'IPickerView' },
                { path: '/docs/components/IScrollView', name: 'IScrollView', word: 'IScrollView' }
              ]
            },
            // {
            //   word: words['components.general'] || 'General',
            //   name: 'General',
            //   chlid: [
            //     { path: '/docs/components/button', word: words['components.button'] || 'Button' },
            //     { path: '/docs/components/floatButton', word: words['components.floatButton'] || 'floatButton' },
            //     { path: '/docs/components/icon', word: words['components.icon'] || 'Icon' },
            //     { path: '/docs/components/typography', word: words['components.typography'] || 'Typography' }
            //   ]
            // },
            // {
            //   word: words['components.layout'] || 'Layout',
            //   name: 'Layout',
            //   chlid: [
            //     { path: '/docs/components/divider', word: words['components.divider'] || 'Divider' },
            //     { path: '/docs/components/grid', word: words['components.grid'] || 'Grid' },
            //     { path: '/docs/components/layout', word: words['components.layout'] || 'Layout' },
            //     { path: '/docs/components/space', word: words['components.space'] || 'Space' }
            //   ]
            // },
            {
              word: words['components.tools'] || 'Tools',
              name: 'Tools',
              chlid: [
                //     { path: '/docs/components/anchor', word: words['components.anchor'] || 'Anchor' },
                //     { path: '/docs/components/breadcrumb', word: words['components.breadcrumb'] || 'Breadcrumb' },
                //     { path: '/docs/components/dropDown', word: words['components.dropDown'] || 'Dropdown' },
                //     { path: '/docs/components/menu', word: words['components.menu'] || 'Menu' },
                { path: '/docs/components/pagination', word: words['components.pagination'] || 'Pagination' }
                //     { path: '/docs/components/steps', word: words['components.steps'] || 'Steps' }
              ]
            },
            {
              word: words['components.dataShow'] || 'Display',
              name: 'Display',
              chlid: [
                // { path: '/docs/components/avatar', word: words['components.avatar'] || 'Avatar' },
                // { path: '/docs/components/badge', word: words['components.badge'] || 'Badge' },
                { path: '/docs/components/Calendar', word: words['components.calendar'] || 'Calendar' },
                // { path: '/docs/components/card', word: words['components.card'] || 'Card' },
                // { path: '/docs/components/carousel', word: words['components.carousel'] || 'Carousel' },
                // { path: '/docs/components/collapse', word: words['components.collapse'] || 'Collapse' },
                // { path: '/docs/components/descriptions', word: words['components.descriptions'] || 'Descriptions' },
                // { path: '/docs/components/empty', word: words['components.empty'] || 'Empty' },
                // { path: '/docs/components/image', word: words['components.image'] || 'Image' },
                // { path: '/docs/components/list', word: words['components.list'] || 'List' },
                // { path: '/docs/components/popover', word: words['components.popover'] || 'Popover' },
                // { path: '/docs/components/qrcode', word: words['components.qrcode'] || 'QRCode' },
                // { path: '/docs/components/segmented', word: words['components.segmented'] || 'Segmented' },
                // { path: '/docs/components/statistic', word: words['components.statistic'] || 'Statistic' },
                // { path: '/docs/components/table', word: words['components.table'] || 'Table' },
                // { path: '/docs/components/tabs', word: words['components.tabs'] || 'Tabs' },
                // { path: '/docs/components/tag', word: words['components.tag'] || 'Tag' },
                // { path: '/docs/components/timeline', word: words['components.timeline'] || 'Timeline' },
                // { path: '/docs/components/tooltip', word: words['components.tooltip'] || 'Tooltip' },
                // { path: '/docs/components/tour', word: words['components.tour'] || 'Tour' },
                // { path: '/docs/components/photoViewer', word: words['components.photoViewer'] || 'PhotoViewer' },
                { path: '/docs/components/Tree', word: words['components.tree'] || 'Tree' }
              ]
            },
            {
              word: words['components.formComp'] || 'From',
              name: 'Form',
              chlid: [
                { path: '/docs/components/Input', name: 'Input', word: words['components.input'] || 'Input' },
                // { path: '/docs/components/InputNumber', word: words['components.inputNumber'] || 'InputNumber' },
                // { path: '/docs/components/InputNumber', word: words['components.inputRange'] || 'InputRange' },
                { path: '/docs/components/TextArea', name: 'TextArea', word: words['components.textarea'] || 'TextArea' },
                { path: '/docs/components/Select', name: 'Select', word: words['components.select'] || 'Select' },
                // { path: '/docs/components/autoComplete', word: words['components.autoComplete'] || 'AutoComplete' },
                // { path: '/docs/components/checkbox', word: words['components.checkbox'] || 'Checkbox' },
                // { path: '/docs/components/colorPicker', word: words['components.colorPicker'] || 'ColorPicker' },
                { path: '/docs/components/Cascader', word: words['components.Cascader'] || 'Cascader' },
                { path: '/docs/components/DatePicker', word: words['components.datePicker'] || 'DatePicker' }
                // { path: '/docs/components/mentions', word: words['components.mentions'] || 'Mentions' },
                // { path: '/docs/components/rate', word: words['components.rate'] || 'Rate' },
                // { path: '/docs/components/slider', word: words['components.slider'] || 'Slider' },
                // { path: '/docs/components/switch', word: words['components.switch'] || 'Switch' },
                // { path: '/docs/components/TimePicker', word: words['components.timePicker'] || 'TimePicker' },
                // { path: '/docs/components/transfer', word: words['components.transfer'] || 'Transfer' },
                // { path: '/docs/components/treeSelect', word: words['components.treeSelect'] || 'TreeSelect' },
                // { path: '/docs/components/upload', word: words['components.upload'] || 'Upload' }
                // { path: '/docs/components/photoEditor', word: words['components.photoEditor'] || 'PhotoEditor' }
              ]
            },
            // {
            //   word: words['components.feedback'] || 'Feedback',
            //   name: 'Feedback',
            //   chlid: [
            //     { path: '/docs/components/alert', word: words['components.alert'] || 'Alert' },
            //     { path: '/docs/components/drawer', word: words['components.drawer'] || 'Drawer' },
            //     { path: '/docs/components/message', word: words['components.message'] || 'Message' },
            //     { path: '/docs/components/modal', word: words['components.modal'] || 'Modal' },
            //     { path: '/docs/components/notification', word: words['components.notification'] || 'Notification' },
            //     { path: '/docs/components/popconfirm', word: words['components.popconfirm'] || 'popconfirm' },
            //     { path: '/docs/components/progress', word: words['components.progress'] || 'Progress' },
            //     { path: '/docs/components/result', word: words['components.result'] || 'Result' },
            //     { path: '/docs/components/skeleton', word: words['components.skeleton'] || 'Skeleton' },
            //     { path: '/docs/components/spin', word: words['components.spin'] || 'Spin' },
            //     { path: '/docs/components/watermark', word: words['components.watermark'] || 'Watermark' }
            //   ]
            // },
            {
              word: words['components.solutions'] || 'Solutions',
              name: 'Solutions',
              chlid: [
                { path: '/docs/components/LimitLoader', word: words['components.solutions.limitloader'], name: 'LimitLoader' },
                { path: '/docs/components/FormLoader', word: words['components.solutions.iformloader'], name: 'FormLoader' },
                { path: '/docs/components/TableLoader', word: words['components.solutions.tlableloader'], name: 'TableLoader' }
              ]
            }
          ]
        },
        { path: '/docs/plugins', name: 'Plugins', word: 'menu.plugins' },
        { path: '/docs/resources', name: 'Resources', word: 'menu.resources' },
        { path: '/blog', name: 'Blog', word: 'menu.blog' },
        { link: 'http://npm.yhjcare.com/', name: 'npm', word: 'NPM' }
      ],
      // 首次登录显示主题弹窗
      themeModule: Number(window.localStorage.getItem('themeModule')) || 0
    };
  },
  getters: {},
  actions: {
    // 设置全屏显示
    setFullScreen() {
      const full = this.full ? 0 : 1;
      localStorage.setItem('YHJERP_BASE_FULL', `${full}`);
      this.full = full;
    },
    // 获取语言词库
    async getWordsData() {
      // 获取当前语言词库
      this.words = words[this.lang] || words['zh-CN'];
    },
    // 设置系统主题
    async setTheme() {
      return document.documentElement.setAttribute('theme', this.theme);
    },
    // 设置系统字号
    async setFontSize() {
      document.documentElement.setAttribute('size', this.fontSize);
    },
    // 设置侧栏文字
    async setSideText() {
      this.sideText = Number(this.sideText) ? 0 : 1;
      window.localStorage.setItem('sideText', `${this.sideText}`);
    }
  }
});
