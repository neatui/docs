export default {
  'post|/api/cases/list/get': (e) => {
    const { username = '', password = '' } = JSON.parse(e.body) || {};
    const logged = 1 || (username === 'admin' && password === '123456');
    return {
      errorCode: logged ? '0000' : '0009',
      errorMessage: logged ? '登录成功' : '登录失败',
      data: logged
        ? {
            token: 'ASDFGHJKLQWERTYUIOPZXCVBNMLKJHGFDSAPOIUYTREWQMNBVCXZ'
          }
        : null
    };
  }
};
