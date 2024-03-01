// 主题
export const theme = () => {
  // 监听系统主题设置主题
  const autoSetTheme = (scheme: any) => {
    if (scheme.matches) {
      // 系统切换到了暗色(dark)主题
      document.documentElement.setAttribute('theme', 'dark');
    } else {
      document.documentElement.setAttribute('theme', window.localStorage.getItem('theme') || '');
    }
  };
  // 监听系统主题
  const scheme: any = window.matchMedia('(prefers-color-scheme: dark)');
  autoSetTheme(scheme);
  document.addEventListener('DOMContentLoaded', () => {
    autoSetTheme(scheme);
  });

  // 添加主题变动监控事件
  scheme.addListener(autoSetTheme);
};

// BASE64转BLOB
export const b64toBlob = (data: any) => {
  const arr = data.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
export const base64ToFile = (data: any) => {
  const arr = data.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  const blob = new Blob([u8arr], { type: mime });
  const type = mime.replace(/image\//, '');
  const file = new File([blob], new Date().getTime() + `.${type}`);
  return file;
};
export const blobToFile = (blob: any) => {
  const { name = '' } = blob || {};
  const file = new File([blob], name);
  return file;
};
export const blobToBase64 = async (blob: any) => {
  return await new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => '';
  });
};

/*
 * 生成一个用不重复的ID
 * @param { Number } len
 */
export const uuid = (len: any = 16) => {
  return Number(Math.random()?.toString()?.substr(2, len) + Date.now())?.toString(36);
};

// ID自定义加密算法
export const encodePid = (id: any = '') => {
  const _m = ['o', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j'];
  const _id = id.replace(/(\d)\1*/g, (res: any = {}, s: any = '') => {
    return _m[s] + (res.length > 1 ? res.length : '');
  });
  console.log(_id);
  return _id;
};

export const decodePid = (str: any = '') => {
  const _m = ['o', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j'];
  const _id = str.replace(/([a-z])(\d?)/g, (res: any = {}, s: any = '') => {
    return '';
  });
  console.log(_id);
  return _id;
};
