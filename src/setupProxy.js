const proxy = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
      proxy(
          '/hot',
          {
            target: 'http://api.zhuishushenqi.com/ranking/54d42d92321052167dfb75e3',
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
          target: 'http://api.zhuishushenqi.com/ranking/57eb86f0ef9e5a8f20543d7d',
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
          target: 'http://api.zhuishushenqi.com/ranking/54d42e72d9de23382e6877fb',
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
  app.use(
    proxy(
      "/zhuishushenqi",
      {
        target:"http://api.zhuishushenqi.com",
        changeOrigin:true,
        pathRewrite:{
          "^/zhuishushenqi":"/"
        }
      }
    )
  )
};
