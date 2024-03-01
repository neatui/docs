import McToast from '@fekit/toast';
import '@fekit/toast/theme/toast@ac.scss';

// 兜底错误文案
export const errmsg = '网络开小差了～';

// 普通提示
export const toast = new McToast({
  theme: 'ac',
  time: '1000'
});
// 异常提示
export const error = new McToast({
  theme: 'ac',
  icon: 'error',
  time: '1500'
});
