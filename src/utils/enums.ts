import { isArray } from '@fekit/utils';

// 通过枚举值查找枚举名
export const findEnumName = (enums: any, val: any, join: boolean | string = ' Ι ') => {
  // 转换核心
  const _core = (v: any) => {
    const { label = v }: any = enums.find(({ value = '' }: any) => value == v) || {};
    return label;
  };
  // 判断枚举字典是否可用
  if (enums && enums.find) {
    // 兼容多种入参类型
    if (isArray(val)) {
      // 数组
      const arr = val.map((i: any) => _core(i));
      return join ? arr.join(join) : arr;
    } else {
      return _core(val);
    }
  } else {
    return val;
  }
};
