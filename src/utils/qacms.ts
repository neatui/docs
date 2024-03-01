import { isFunction, isArray, isObject, isString } from '@fekit/utils';
import ScrollTo from '@fekit/scrollto';

let _select_timer: any = null;
let _update_timer: any = null;
// 数据探测
export const arrToObj = (data: any) => {
  const form: any = {};
  const _prepare = (res: any) => {
    if (isArray(res)) {
      return res.map((item: any) => {
        if (item.items) {
          item.items = _prepare(item.items);
          return item;
        } else {
          return _prepare(item);
        }
      });
    } else if (isObject(res)) {
      // 创建表单
      if (res.field && res.model) {
        form[res.field] = res;
      }
      return res;
    } else {
      return res;
    }
  };
  _prepare(data);
  // 创建表单
  return form;
};

// 清洗数据
const clean = (obj: any = {}) => {
  const _clean = (res: any) => {
    if (isArray(res)) {
      return res.map((item: any) => {
        return _clean(item);
      });
    } else if (isObject(res)) {
      for (const key in res) {
        if (key.indexOf('__') === 0) {
          delete res[key];
        } else {
          res[key] = _clean(res[key]);
        }
      }
      return res;
    } else {
      return res;
    }
  };

  return _clean(obj);
};

class QACMS {
  select(iframe: any, field: any) {
    clearTimeout(_select_timer);
    _select_timer = setTimeout(() => {
      if (iframe) {
        iframe?.contentWindow.postMessage({ fun: 'QACMS_SCROLL', res: field }, '*');
      }
    }, 100);
  }
  update(iframe: any, data: any = {}) {
    clearTimeout(_update_timer);
    _update_timer = setTimeout(() => {
      if (iframe) {
        iframe?.contentWindow.postMessage({ fun: 'QACMS_UPDATE', res: JSON.stringify(data) }, '*');
      }
    }, 100);
  }
  reload() {
    window.parent.postMessage({ fun: 'QACMS_RELOAD', res: {} }, '*');
  }
  listen({ update = () => {}, repath }: any = {}) {
    const _EVS: any = {
      QACMS_SCROLL(res: any) {
        if (isFunction(repath)) {
          repath(res);
        } else {
          if (document.querySelector(`#${res}`)) {
            ScrollTo({
              to: {
                y: `#${res}`
              },
              offset: {
                y: -5
              }
            });
          }
        }
      },
      QACMS_UPDATE(res: any) {
        let _data = {};
        try {
          _data = JSON.parse(res);
        } catch (err) {
          _data = {};
        }
        if (isFunction(update)) {
          const { data, form } = qacms.prepare(_data);
          update(data, form);
        }
      }
    };
    window.addEventListener('message', (e) => {
      const { data: { fun, res } = {} } = e;
      if (_EVS[fun] && typeof _EVS[fun] === 'function') {
        _EVS[fun](res);
      }
    });
  }
  // 数据探测
  prepare(data: any) {
    const form: any = {};
    const _prepare = (res: any) => {
      if (isArray(res)) {
        return res.map((item: any) => {
          if (item.items) {
            item.items = _prepare(item.items);

            // 添加序号
            let sn = 1;
            item.items = item.items.map((sub: any) => {
              if (sub.model && sub.model !== 'title') {
                sub.__sn = sn;
                sn++;
              }
              return sub;
            });
            return item;
          } else {
            return _prepare(item);
          }
        });
      } else if (isObject(res)) {
        const { field = '', rules = [], model = '', value = '' }: any = res;

        // 规则校验
        rules.forEach((item: any) => {
          const { type = '', rule = '' }: any = item;
          if (type === 'preset') {
            // 是否必填
            if (rule === 'required') {
              res.__required = 1;
            }
          }

          if (type === 'regexp') {
            // 是否必填
            if (rule === '^.{1,}$') {
              res.__required = 1;
            }
          }
        });

        // 选项处理
        if (isArray(value)) {
          res.value = value.map((rows: any) => {
            if (isArray(rows)) {
              rows = rows.map((opts: any) => {
                // 键值相同补齐
                if (opts.value === '') {
                  opts.value = opts.label;
                }
                return opts;
              });
            } else {
              if (rows.value === '') {
                rows.value = rows.label;
              }
            }
            return rows;
          });
        }

        // 创建表单
        if (field && model && model !== 'title') {
          form[res.field] = {};
        }
        return res;
      } else {
        return res;
      }
    };
    data.pages = _prepare(data.pages);
    // 创建表单
    return { data, form };
  }
  // 创建表单
  // initForm(data: any = []) {
  //   const _form: any = {};
  //   const createForm = (res: any) => {
  //     if (isArray(res)) {
  //       res.forEach((item: any) => {
  //         createForm(item.items || item);
  //       });
  //     } else {
  //       if (res.field && res.model !== 'title') {
  //         _form[res.field] = {};
  //       }
  //     }
  //   };
  //   createForm(data);
  //   return _form;
  // }
  // 逻辑运算
  effect(_data: any = [], form: any = {}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = arrToObj(_data);
    const _effect = (node: any = [], form: any = {}) => {
      if (Object.keys(form).length) {
        if (isArray(node)) {
          node.forEach((item: any) => {
            _effect(item.items || item, form);
          });
        } else {
          const { field = '', logic = [] } = node;
          logic.forEach((item: any) => {
            if (item.type === 'custom') {
              try {
                const _eval = (str = '') => {
                  if (isString(str)) {
                    return (str || '').replace(/@(\w*)\(([^()]*)\)/g, (_res: any, fun: any = '', code: any) => {
                      if (fun) {
                        console.log(fun);
                      } else {
                        // eslint-disable-next-line no-eval
                        return eval(code);
                      }
                    });
                  } else {
                    return str;
                  }
                };

                // 内嵌公式
                const _when = _eval(item.when);
                const _then = _eval(item.then);
                const _else = _eval(item.else);
                console.log(188, _when);
                console.log(189, _then);
                console.log(190, _else);
                // eslint-disable-next-line no-eval
                // if (eval(_when)) {
                //   // eslint-disable-next-line no-eval
                //   eval(_then);
                // } else {
                //   // eslint-disable-next-line no-eval
                //   eval(_else);
                // }
              } catch (err) {
                // alert('有个逻辑设置错误');
                console.error(field, err);
                node.__verify = '逻辑执行错误' + err;
              }
            } else {
              // const maxText = (str: any, end: any) => {
              //   if (isString(str)) {
              //     return str.slice(0, end);
              //   } else {
              //     return str;
              //   }
              // };
              console.log('预设');
            }

            const { maxOptional } = item;
            // 最小字数
            // 最大字数
            // 最大可选
            if (maxOptional) {
              let len = 0;
              Object.keys(form[field]).forEach((item: any) => {
                if (item.indexOf('__') !== 0) {
                  len = len + 1;
                }
              });
              if (len > maxOptional) {
                let first: any = {};
                for (const key in form[field]) {
                  const { __time } = form[field][key] || {};
                  if (!first.time || __time < first.time) {
                    first = { key, time: __time };
                  }
                }
                delete form[field][first.key];
              }
            }
            // 最小可选
          });
        }
      }
      return { data: node, form };
    };
    return _effect(_data, form);
  }
  // 格式处理
  format(form: any) {
    const formatFormData: any = {};
    for (const key in form) {
      const val = form[key];
      if (key.indexOf('__') !== 0) {
        if (val.value) {
          for (const key in val) {
            if (key.indexOf('__') === 0) {
              delete val[key];
            }
          }
          formatFormData[key] = JSON.stringify(val);
        } else {
          const arr = Object.values(val).map((sub: any) => {
            for (const key in sub) {
              if (key.indexOf('__') === 0) {
                delete sub[key];
              }
            }
            return sub;
          });
          if (arr.length) {
            formatFormData[key] = JSON.stringify(arr);
          }
        }
      }
    }
    return formatFormData;
  }
  // 检查规则
  verify(data: any, form: any) {
    const error: any = [];
    const _verify = (res: any) => {
      if (isArray(res)) {
        res.forEach((item: any) => {
          _verify(item.items || item);
        });
      } else {
        const { field = '', model = '', rules = [] }: any = res;
        if (form[field]) {
          // 多值
          if (model === 'checkbox') {
            let validated = '';
            rules.some((item: any) => {
              const { type = '', rule = '', tips = '' } = item;
              const len = Object.keys(clean({ ...(form[field] || {}) }))?.length;
              if (type === 'preset') {
                // 必填
                if (rule === 'required') {
                  if (!len) {
                    validated = tips;
                    error.push({ field, tips });
                  }
                }
              }
              if (type === 'regexp') {
                // 必填
                if (rule === '^.{1,}$') {
                  if (!len) {
                    validated = tips;
                    error.push({ field, tips });
                  }
                }
              }
              return false;
            });
            if (validated) {
              form[field].__verify = validated;
            } else {
              delete form[field].__verify;
            }
          }
          // 单值
          else {
            let validated = '';
            rules.some((item: any) => {
              const { type = '', rule = '', tips = '' } = item;
              const { value = '' } = form[field] || {};
              if (type === 'preset') {
                // 必填
                if (rule === 'required') {
                  if (!value) {
                    validated = tips;
                    error.push({ field, tips });
                  }
                }
              }
              if (type === 'regexp') {
                const reg = new RegExp(rule);

                if (!reg.test(value)) {
                  validated = tips;
                  error.push({ field, tips });
                  return tips;
                }
              }
              return false;
            });

            if (validated) {
              form[field].__verify = validated;
            } else {
              delete form[field].__verify;
            }
          }
        }
      }
    };
    _verify(data);
    return { data, form, error };
  }
}

const qacms = new QACMS();
export default qacms;
