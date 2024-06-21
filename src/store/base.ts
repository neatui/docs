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
          path: '/components',
          name: 'Components',
          word: 'menu.components',
          chlid: [
            {
              word: words['components.basic'] || 'Basic',
              name: 'Basic',
              chlid: [
                { path: '/components/Layer', name: 'Layer', word: 'Layer', image: '/upload/layer.gif' },
                { path: '/components/IRouterView', name: 'IRouterView', word: 'IRouterView' },
                { path: '/components/IFollowView', name: 'IFollowView', word: 'IFollowView', image: '/upload/components/comboboxes.png' },
                { path: '/components/IPickerView', name: 'IPickerView', word: 'IPickerView' },
                { path: '/components/IScrollView', name: 'IScrollView', word: 'IScrollView' }
              ]
            },
            {
              word: words['components.general'] || 'General',
              name: 'General',
              chlid: [
                { path: '/components/button', word: words['components.button'] || 'Button' }
                // { path: '/components/floatButton', word: words['components.floatButton'] || 'floatButton' },
                // { path: '/components/icon', word: words['components.icon'] || 'Icon' },
                // { path: '/components/typography', word: words['components.typography'] || 'Typography' }
              ]
            },
            // {
            //   word: words['components.layout'] || 'Layout',
            //   name: 'Layout',
            //   chlid: [
            //     { path: '/components/divider', word: words['components.divider'] || 'Divider' },
            //     { path: '/components/grid', word: words['components.grid'] || 'Grid' },
            //     { path: '/components/layout', word: words['components.layout'] || 'Layout' },
            //     { path: '/components/space', word: words['components.space'] || 'Space' }
            //   ]
            // },
            {
              word: words['components.tools'] || 'Tools',
              name: 'Tools',
              chlid: [
                //     { path: '/components/anchor', word: words['components.anchor'] || 'Anchor' },
                //     { path: '/components/breadcrumb', word: words['components.breadcrumb'] || 'Breadcrumb' },
                //     { path: '/components/dropDown', word: words['components.dropDown'] || 'Dropdown' },
                //     { path: '/components/menu', word: words['components.menu'] || 'Menu' },
                { path: '/components/pagination', word: words['components.pagination'] || 'Pagination' }
                //     { path: '/components/steps', word: words['components.steps'] || 'Steps' }
              ]
            },
            {
              word: words['components.dataShow'] || 'Display',
              name: 'Display',
              chlid: [
                // { path: '/components/avatar', word: words['components.avatar'] || 'Avatar' },
                // { path: '/components/badge', word: words['components.badge'] || 'Badge' },
                { path: '/components/Calendar', word: words['components.calendar'] || 'Calendar', image: '/upload/components/calendars.png' },
                // { path: '/components/card', word: words['components.card'] || 'Card' },
                // { path: '/components/carousel', word: words['components.carousel'] || 'Carousel' },
                // { path: '/components/collapse', word: words['components.collapse'] || 'Collapse' },
                // { path: '/components/descriptions', word: words['components.descriptions'] || 'Descriptions' },
                // { path: '/components/empty', word: words['components.empty'] || 'Empty' },
                // { path: '/components/image', word: words['components.image'] || 'Image' },
                // { path: '/components/list', word: words['components.list'] || 'List' },
                // { path: '/components/popover', word: words['components.popover'] || 'Popover' },
                // { path: '/components/qrcode', word: words['components.qrcode'] || 'QRCode' },
                // { path: '/components/segmented', word: words['components.segmented'] || 'Segmented' },
                // { path: '/components/statistic', word: words['components.statistic'] || 'Statistic' },
                // { path: '/components/table', word: words['components.table'] || 'Table' },
                // { path: '/components/tabs', word: words['components.tabs'] || 'Tabs' },
                // { path: '/components/tag', word: words['components.tag'] || 'Tag' },
                // { path: '/components/timeline', word: words['components.timeline'] || 'Timeline' },
                // { path: '/components/tooltip', word: words['components.tooltip'] || 'Tooltip' },
                // { path: '/components/tour', word: words['components.tour'] || 'Tour' },
                // { path: '/components/photoViewer', word: words['components.photoViewer'] || 'PhotoViewer' },
                { path: '/components/Tree', word: words['components.tree'] || 'Tree' }
              ]
            },
            {
              word: words['components.formComp'] || 'From',
              name: 'Form',
              chlid: [
                { path: '/components/Input', name: 'Input', word: words['components.input'] || 'Input', image: '/upload/components/input.png' },
                // { path: '/components/InputNumber', word: words['components.inputNumber'] || 'InputNumber' },
                // { path: '/components/InputNumber', word: words['components.inputRange'] || 'InputRange' },
                { path: '/components/TextArea', name: 'TextArea', word: words['components.textarea'] || 'TextArea' },
                { path: '/components/Select', name: 'Select', word: words['components.select'] || 'Select', image: '/upload/components/comboboxes.png' },
                // { path: '/components/autoComplete', word: words['components.autoComplete'] || 'AutoComplete' },
                // { path: '/components/checkbox', word: words['components.checkbox'] || 'Checkbox' },
                // { path: '/components/colorPicker', word: words['components.colorPicker'] || 'ColorPicker' },
                { path: '/components/Cascader', word: words['components.Cascader'] || 'Cascader' },
                { path: '/components/DatePicker', word: words['components.datePicker'] || 'DatePicker' }
                // { path: '/components/mentions', word: words['components.mentions'] || 'Mentions' },
                // { path: '/components/rate', word: words['components.rate'] || 'Rate' },
                // { path: '/components/slider', word: words['components.slider'] || 'Slider' },
                // { path: '/components/switch', word: words['components.switch'] || 'Switch' },
                // { path: '/components/TimePicker', word: words['components.timePicker'] || 'TimePicker' },
                // { path: '/components/transfer', word: words['components.transfer'] || 'Transfer' },
                // { path: '/components/treeSelect', word: words['components.treeSelect'] || 'TreeSelect' },
                // { path: '/components/upload', word: words['components.upload'] || 'Upload' }
                // { path: '/components/photoEditor', word: words['components.photoEditor'] || 'PhotoEditor' }
              ]
            },
            // {
            //   word: words['components.feedback'] || 'Feedback',
            //   name: 'Feedback',
            //   chlid: [
            //     { path: '/components/alert', word: words['components.alert'] || 'Alert' },
            //     { path: '/components/drawer', word: words['components.drawer'] || 'Drawer' },
            //     { path: '/components/message', word: words['components.message'] || 'Message' },
            //     { path: '/components/modal', word: words['components.modal'] || 'Modal' },
            //     { path: '/components/notification', word: words['components.notification'] || 'Notification' },
            //     { path: '/components/popconfirm', word: words['components.popconfirm'] || 'popconfirm' },
            //     { path: '/components/progress', word: words['components.progress'] || 'Progress' },
            //     { path: '/components/result', word: words['components.result'] || 'Result' },
            //     { path: '/components/skeleton', word: words['components.skeleton'] || 'Skeleton' },
            //     { path: '/components/spin', word: words['components.spin'] || 'Spin' },
            //     { path: '/components/watermark', word: words['components.watermark'] || 'Watermark' }
            //   ]
            // },
            {
              word: words['components.solutions'] || 'Solutions',
              name: 'Solutions',
              chlid: [
                { path: '/components/LimitLoader', word: words['components.solutions.limitloader'], name: 'LimitLoader' },
                { path: '/components/FormLoader', word: words['components.solutions.iformloader'], name: 'FormLoader' },
                { path: '/components/TableLoader', word: words['components.solutions.tlableloader'], name: 'TableLoader', image: '/upload/components/tables.png' }
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
