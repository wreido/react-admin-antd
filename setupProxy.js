const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/baseApis', {
      // 目标代理服务器地址
      target: 'http://xx.xx.xx.xx:8000/',
      // 是否允许跨域
      changeOrigin: true,
      // 重写接口
      pathRewrite: {
        '^/baseApis': 'baseApis'
      }
    })
  )
}