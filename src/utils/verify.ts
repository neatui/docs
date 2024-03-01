import { deepcopy, isArray, isObject, isFunction } from '@fekit/utils';

export const verify = (form: any = [], edit: any = {}) => {
  console.log(4, form, edit);
  const error: any = [];
  // 核心
  const core = (form: any = {}, data: any = {}, path = '') => {
    // Object.keys(data).forEach((item: any) => {
    //   // 是否有表单结构
    //   if (form[item]) {
    //     // 是否末端
    //     if (form[item]?.child && (isArray(data[item]) || isObject(data[item]))) {
    //       if (isArray(data[item])) {
    //         data[item].forEach((sub: any, idx: number) => {
    //           core(sub, form[item].child, path + '-' + form[item].field + '-' + idx);
    //         });
    //       } else {
    //         (Object.values(data[item]) || []).forEach((sub: any, idx: number) => {
    //           core(sub, form[item].child, path + '-' + form[item].field + '-' + idx);
    //         });
    //       }
    //     } else {
    //       const value = data[item];
    //       const { label = '', field = '', rules = [] } = form[item] || {};
    //       const _path = path + '-' + field;
    //       rules?.forEach((rule: any = {}) => {
    //         const { type = '', msg = '', required = null, validator = null } = rule;
    //         if (required) {
    //           if (isArray(value)) {
    //             if (!value.length) {
    //               error.push({ field, label, type, msg, path: _path });
    //             }
    //           } else {
    //             if (!value) {
    //               error.push({ field, label, type, msg, path: _path });
    //             }
    //           }
    //         }
    //         const _validator = isFunction(validator) ? validator(deepcopy(data)) : null;
    //         if (value && _validator && !_validator(value)) {
    //           error.push({ field, label, type, msg, path: _path });
    //         }
    //       });
    //     }
    //   }
    // });

    console.log(48, form, edit, path);
  };
  core(form, edit, '');
  console.log(error);
  return error;
};
