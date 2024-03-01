import axios from 'axios';
import { useBaseStore } from '../store';
import { error } from './toast';

const BASE_ERROR_MSG = '数据请求异常';

export const request = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 10000
});

// 请求拦截
request.interceptors.request.use((config: any) => {
  const token = window.localStorage.getItem('Authorization') || window.sessionStorage.getItem('Authorization');
  if (token) {
    // 给请求添加统一的头信息
    config.headers['Authorization'] = token;
  }
  // 租户ID
  config.headers['tenantId'] = '1';
  return config;
});

// 响应拦截
request.interceptors.response.use(
  (res) => {
    const { status } = res;
    // 判断请求状态
    if (status === 200) {
      // 返回数据
      return res.data;
    } else {
      // 请求异常
      throw res;
    }
  },
  (err = {}) => {
    return err;
  }
);

// 请求队列
const _tasks: any = {};
export const api = async ({ type = '', toast = true, body: { method = 'post', url = '', data = {}, params = {} } = {}, then = () => {} }: any) => {
  if (_tasks[type]) {
    return { code: -1 };
  }
  const base: any = useBaseStore();
  try {
    _tasks[type] = 1;
    const res: any = await request({ url, method, data, params });

    // 未登录
    if (res.errorCode === '0009') {
      // 跳转到登录路由
      window.localStorage.removeItem('Authorization');
      window.sessionStorage.removeItem('Authorization');
      base.logged = 0;
    } else if (res.errorCode !== '0000' && toast) {
      // 统一提示异常
      error.show({
        text: res.errorMessage || BASE_ERROR_MSG
      });
    }
    then(res);
    _tasks[type] = 0;
    return res;
  } catch (err) {
    if (toast) {
      error.show({
        text: '接口请求异常'
      });
    }
    then({});
    _tasks[type] = 0;
    return {};
  }
};
