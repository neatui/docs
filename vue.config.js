const path = require('path');
const { defineConfig } = require('@vue/cli-service');
// 图片无损压缩插件
const TinypngWebpackPlugin = require('tinypng-webpack-plugin');

// 图片无锅压缩KEY
const tinypngKey = [
  'nEkBOCe0lyFyd7v3bF6k2MjwLK4UvVX6',
  'WBr3Vm6ZqmrsRZaBBm9IXcluqF4CHY3i',
  'GvVhRewCjKFNUxpZ34AhSvFJwHHqKfah',
  'tm3CLBwcIJ9YJP8F3UE1RJWyD3GxOW2b',
  '8825ugKrWMSqjwNnos7p94xdJTUWP6hq'
];
// 获取打包命令
const [env = 'serve', action = ''] = (process.env.npm_lifecycle_event || '').split(':');
// 打包开发环境
const serve = env === 'serve';
// 打包上线代码，压缩图片和生成zip压缩包等
const babel = env === 'babel';
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: serve ? '' : './',
  productionSourceMap: false,
  css: {
    sourceMap: true
  },
  configureWebpack: (config) => {
    // 添加别名
    config.resolve.alias['@neatui'] = path.resolve(__dirname, 'src/@neatui');

    if (env === 'build') {
      config.entry.app.unshift('./vconsole.js');
    }

    // 如果命令带有:mock则导入MOCK数据
    if (action === 'mock') {
      config.entry.app.unshift('./mock/index.js');
    }

    // ES6语法加强编译
    config.entry.app.unshift('regenerator-runtime/runtime');
    config.entry.app.unshift('core-js/stable');

    // 自定义打包插件
    let plugins = [];

    if (serve) {
      // 开发环境
    } else {
      // 生产环境

      // 如果JS不大就只打包成一个文件减少请求，不要生成chunk-vendors和chunk-common
      config.optimization.splitChunks = {};
      config.optimization.runtimeChunk = false;

      // 打包上线时使用，无损压缩图片等
      if (babel) {
        // 清理日志
        const compress = config['optimization']['minimizer'][0].options.minimizer.options.compress;
        compress.drop_console = true;
        compress.drop_debugger = true;

        // 添加一些自定义插件
        plugins = [
          // 压缩图片
          new TinypngWebpackPlugin({
            key: tinypngKey
          })
        ];
      }
    }

    return {
      plugins: [...plugins]
    };
  },
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      definitions[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = false;
      return definitions;
    });
  },
  devServer: {
    // 需要时设置代理
    proxy: {
      '/base': {
        target: 'https://api.ydcare.net/base',
        pathRewrite: { '^/base': '' },
        changeOrigin: true, // target是域名的话，需要这个参数
        secure: false // 设置支持https协议的代理
      },
      '/distribution': {
        target: 'https://api.ydcare.net/distribution',
        pathRewrite: { '^/distribution': '' },
        changeOrigin: true,
        secure: false
      }
    },
    historyApiFallback: true,
    allowedHosts: 'all'
  }
});
