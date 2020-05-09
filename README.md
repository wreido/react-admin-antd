## react-admin-ant(基于 antd 的后台管理模板)

- react + [antd](https://ant.design/docs/react/introduce-cn) + redux + react-router-dom

## 安装

```
npx create-react-app react-admin-antd
```

## create-react-app 自定义 webpack 配置

- [使用方法](https://www.cnblogs.com/zyl-Tara/p/10635033.html)

```
yarn add react-app-rewired -D
yarn add customize-cra -D
```

- 根目录添加 config-overrides.js

```
const { override, addWebpackAlias, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackPlugin } = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const path = require('path')
// 关闭sourcemap
process.env.GENERATE_SOURCEMAP = 'false'
const resolve = (dir) => path.join(__dirname, dir)

module.exports = override(
  // 按需加载组件代码和样式的 babel 插件
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { '@primary-color': '#4e72b8' }
  }),
  // 配置路径别名
  addWebpackAlias({
    '@': resolve('src')
  }),
  // 支持装饰器
  addDecoratorsLegacy(),
  // 使用 Day.js 替换 momentjs 优化打包大小
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
)
```

- 按需加载

```
yarn add babel-plugin-import -D
```

- 安装 less 和 less-loader

```
安装less和less-loader
```

- day 代替 moment

```
yarn add antd-dayjs-webpack-plugin -D
```

## 代理

```
yarn add http-proxy-middleware -D
```

- 根目录添加 setupProxy.js

```
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
```
