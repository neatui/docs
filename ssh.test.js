const os = require('os');
const path = require('path');
const { NodeSSH } = require('node-ssh');
const readline = require('readline');
const ssh = new NodeSSH();

// 发布配置
const config = {
  localPath: './dist',
  remotePath: '/home/neatui.fekit.cn'
};

// 输入内容验证确认
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const _folder = config.remotePath.replace(/\/home/, '');
console.log(`你将上传并替换服务器上的文件，为了防止失误的发布请您输入将要替换的远程目录路径。\x1B[36m${_folder}\x1B[37m\n`);
rl.question('请输入: ', (name) => {
  if (name === _folder) {
    // 发布文件到服务器
    ssh
      .connect({
        host: '101.37.76.22',
        username: 'root',
        privateKeyPath: os.homedir() + '/.ssh/id_rsa'
      })
      .then(function () {
        const failed = [];
        const successful = [];
        ssh
          .putDirectory(config.localPath, config.remotePath, {
            recursive: true,
            concurrency: 10,
            validate: function (itemPath) {
              const baseName = path.basename(itemPath);
              return baseName.slice(0, 1) !== '.' && baseName !== 'node_modules';
            },
            tick: function (localPath, _remotePath, error) {
              if (error) {
                failed.push(localPath);
              } else {
                successful.push(localPath);
              }
            }
          })
          .then(function (status) {
            console.log(status ? '\x1B[32m  代码发布成功\n' : '\x1B[31m  代码发布失败\n');
            if (failed.length) {
              console.log('\x1B[31m× ' + failed.join('\n× '));
            }
            if (successful.length) {
              console.log('\x1B[32m√ ' + successful.join('\n√ '));
            }
            ssh.dispose();
          });
      });
  } else {
    console.log('\x1B[31m× 代码发布失败，请您核对并输入正确的上传目录！\n');
  }

  rl.close();
});
