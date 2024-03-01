// 首先引入Mock
const Mock = require('mockjs');

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-1000'
});

let configArray = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', false, /\.js$/);
files.keys().forEach((key) => {
  if (key === './index.js') return;
  configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item = '') => {
  for (const [path, target] of Object.entries(item)) {
    const protocol = path.split('|');
    Mock.mock(new RegExp('^' + (process.env.VUE_APP_URL || '') + protocol[1] + '\\b$'), protocol[0], target);
  }
});
