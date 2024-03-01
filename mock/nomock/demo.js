import { Random } from 'mockjs';

export default {
  'post|/api/demo': () => {
    return {
      code: 200,
      message: '操作成功',
      data: {
        hi: Random.boolean()
      }
    };
  }
};
