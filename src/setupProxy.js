const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/yxrweb', {
      // 目标代理服务器地址
      target: 'http://mall-test.yrymall.cn/yxrweb/',
      // 是否允许跨域
      changeOrigin: true,
      // 重写接口
      pathRewrite: {
        '^/yxrweb': '/'
      }
    })
  )
}