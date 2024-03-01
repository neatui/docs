import Mock, { Random } from 'mockjs';

export default {
  'post|/referral/admin/owner/list': (e) => {
    // const { username = '', password = '' } = JSON.parse(e.body) || {};
    // const logged = 1 || (username === 'admin' && password === '123456');

    // return {
    //   errorCode: logged ? '0000' : '0009',
    //   errorMessage: logged ? '登录成功' : '登录失败',
    //   data: [
    //     {
    //       id: 1,
    //       name: '张三',
    //       phone: '1498181818',
    //       cnid: '360777888877778',
    //       birthday: '1987-07-09',
    //       age: 20,
    //       zodiac: 0,
    //       constellation: 0,
    //       hometown: 0,
    //       role: 0,
    //       recommender: 0,
    //       owner: 0,
    //       status: 0
    //     },
    //     {
    //       id: 2,
    //       name: '李四',
    //       phone: '1908181818',
    //       cnid: '360777888877778',
    //       birthday: '1987-07-09',
    //       age: 20,
    //       zodiac: 0,
    //       constellation: 0,
    //       hometown: 0,
    //       recommender: 0,
    //       owner: 0,
    //       status: 0
    //     }
    //   ]
    // };

    /**
     * id         Number  id
     * phone      String  联系电话
     * deptName   String  部门名称
     * leader     string  负责人
     * email      String  邮箱
     * status     string  状态 1 开 2 关
     */

    console.log(e.body);
    const { pageNum = 1, pageSize = 10 } = JSON.parse(e.body || '{}') || {};

    // 记录总数
    const total = 100;
    // 记录列表
    const lists = [];
    for (let i = 0; i < pageSize; i++) {
      lists.push({
        id: Random.increment(),
        avatar: Random.image('200x200', '#894FC4', '#FFF', 'png', '!'),
        cnid: Random.id(),
        name: Random.cname(),
        phone: Mock.mock(/^1[34578]\d{9}$/),
        birthday: '1987-07-09',
        age: Random.natural(18, 60),
        zodiac: 0,
        constellation: 0,
        hometown: 0,
        role: 0,
        recommender: 0,
        owner: 0,
        status: Random.integer(1, 2).toString()
      });
    }

    return {
      errorCode: '0000',
      errorMessage: '操作成功',
      data: {
        lists,
        total,
        pages: Math.round(total / pageSize),
        pageNum
      }
    };
  }
};
