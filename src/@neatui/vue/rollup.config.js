const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const vue = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const scss = require('postcss-scss');

module.exports = {
  input: 'src/components/loader/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [
    resolve({
      extensions: ['.js', '.ts', '.vue']
    }),
    commonjs(),
    vue({
      css: false,
      compileTemplate: true
    }),
    postcss({
      extensions: ['.css', '.scss'],
      extract: true,
      minimize: true,
      syntax: scss
    }),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    terser()
  ]
};
