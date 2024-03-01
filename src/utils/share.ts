// 需先引入微信SDK //res.wx.qq.com/open/js/jweixin-1.6.0.js

import { api, error } from '@/utils';

const wx: any = (window as any).wx;

// 如果没有引入微信官方JS则动态引入
// if (!wx) {
//   const head = document.getElementsByTagName('head')[0];
//   const dom = document.createElement('script');
//   dom.type = 'text/javascript';
//   dom.src = '//res.wx.qq.com/open/js/jweixin-1.6.0.js';
//   head.appendChild(dom);
//   dom.onload = () => {
//     console.warn('成功加载微信分享JS');
//     console.warn('↓');
//     wx = (window as any).wx;
//     share.load();
//   };
// }

class IShare {
  title: any;
  content: any;
  image: any;
  link: any;
  constructor() {
    (async () => {
      const res: any = await api({ type: 'IShareLoad', body: { url: '/frontend/wechat/official/grantAuth/getShareConfig', data: { url: window.location.href } } });
      const { appid: appId = '', nonceStr = '', signature = '', timestamp = '' } = res.data || {};
      if (wx) {
        wx.config({ appId, timestamp, nonceStr, signature, jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] });
        wx.error((_err: any) => {
          error.show({
            text: '分享初始化失败'
          });
        });
      } else {
        console.warn('没有引入微信分享JS');
      }
    })();
  }
  // 配置内容
  async conf(opts: any = {}) {
    this.title = opts.title;
    this.content = opts.content;
    this.image = opts.image;
    this.link = opts.link || window.location.href;
  }
  // 系统分享
  async init(opts: any = {}) {
    await wx.ready(() => {
      wx.updateAppMessageShareData({
        title: `${opts.title || this.title}`, // 分享标题
        desc: `${opts.content || this.content}`, // 分享描述
        link: `${opts.link || this.link}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
        imgUrl: `${opts.image || this.image}`, // 分享图标
        success: function () {
          // 设置成功
        }
      });
    });
  }
}
export default IShare;

export const share = new IShare();
