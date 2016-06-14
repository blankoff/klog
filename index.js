let koa = require('koa');
let app = koa();

let conf = require('./config')(__dirname);

app.listen(conf.port, function() {
  console.log('klog服务启动，请访问端口：' + conf.port);
});
