const proxy = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
      proxy(
          '/hot',
          {
            target: 'http://api.zhuishushenqi.com/ranking/5a322ef4fc84c2b8efaa8335',
            changeOrigin: true,
            pathRewrite:{
                "^/hot" : "/"
            }
          }
      )
  );
};
