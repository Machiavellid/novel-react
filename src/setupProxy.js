const proxy = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
      proxy(
          '/hot',
          {
            target: 'http://api.zhuishushenqi.com/ranking/54d43437d47d13ff21cad58b',
            changeOrigin: true
          }
      )
  );
};
