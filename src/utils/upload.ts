import axios from 'axios';

// 上传
const _upload: any = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 30000,
  headers: { 'Content-Type': 'multipart/form-data' }
});
// 设置请求拦截
_upload.interceptors.request.use(
  (config: any) => {
    const token = window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = token;
    }
    // 租户ID
    config.headers['tenantId'] = '1';
    config.headers['Content-Type'] = 'multipart/form-data';
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);
// 设置返回拦截
_upload.interceptors.response.use((res: any) => {
  const { data = {} } = res;
  // 返回数据
  return data;
});
// 请求
export const upload = async ({ url = '/investigation/backend/file/upload', file, then = (_url: string) => {}, progress = (_progress: any) => {} }: any = {}) => {
  // 上传图片
  const param = new FormData();
  param.append('file', file);
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  };
  try {
    const res: any = await _upload.post(url, param, config);
    const { data = {} } = res;
    then(data);
    return data;
  } catch (err) {
    then({});
    return {};
  }
};
