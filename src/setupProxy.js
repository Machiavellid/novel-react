const proxy = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
      proxy(
          '/hot',
          {
            target: 'http://api.zhuishushenqi.com/ranking/5a39d435fc84c2b8ef884798',
            changeOrigin: true,
            pathRewrite:{
                "^/hot" : "/"
            }
          }
      )
  );
};
