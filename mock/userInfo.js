import { Random } from 'mockjs';

export default {
  'post|/referral/admin/userInfo': () => {
    return {
      errorCode: '0000',
      errorMessage: '操作成功',
      data: {
        id: Random.id(),
        userName: Random.cname(),
        nickName: Random.cname(),
        avatar: 'https://ai.fekit.cn/gan/image?s=128&id=1',
        email: '15262437@163.com',
        personalize: {
          'staff.list.pageSize': 30,
          'staff.list.ux.s': 's'
        }
      }
    };
  }
};
