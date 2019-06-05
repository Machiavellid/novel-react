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
  app.use(
    proxy(
      '/Vip',
        {
          target: 'http://api.zhuishushenqi.com/ranking/5a683b68fc84c2b8efa68fc2',
          changeOrigin: true,
          pathRewrite:{
              "^/Vip" : "/"
          }
        }
    )
  );
  app.use(
    proxy(
      '/new',
        {
          target: 'http://api.zhuishushenqi.com/ranking/5a39d453fc84c2b8ef885812',
          changeOrigin: true,
          pathRewrite:{
              "^/new" : "/"
          }
        }
    )
  )
  app.use(
    proxy(
      "/cata",
      {
        target:"http://api.zhuishushenqi.com/cats/lv2/statistics",
        changeOrigin:true,
        pathRewrite:{
          "^/cata":"/"
        }
      }
    )
  )
};
