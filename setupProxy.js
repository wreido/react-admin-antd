const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/yxrweb', {
      target: 'http://mall-test.yrymall.cn',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/yxrweb": "/yxrweb"
      },
    }))
}