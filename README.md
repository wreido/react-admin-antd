## react-admin-antd(基于 antd 的后台管理模板)

-   [react](https://react.docschina.org/docs/getting-started.html) + [antd](https://ant.design/docs/react/introduce-cn) + [redux](https://www.redux.org.cn) + [react-router-dom](https://blog.csdn.net/debbyDeng/article/details/84555817)([react-router](http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html))

## 安装

```
npx create-react-app react-admin-antd
```

## create-react-app 自定义 webpack 配置

-   [使用方法](https://www.cnblogs.com/zyl-Tara/p/10635033.html)

```
yarn add react-app-rewired -D
yarn add customize-cra -D
```

-   根目录添加 config-overrides.js

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

-   按需加载

```
yarn add babel-plugin-import -D
```

-   安装 less 和 less-loader

```
安装less和less-loader
```

-   day 代替 moment

```
yarn add antd-dayjs-webpack-plugin -D
```

## 代理

```
yarn add http-proxy-middleware -D
```

-   src 目录添加 setupProxy.js

```
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
```

## [鉴权](https://juejin.im/post/5d6352116fb9a06ae8361932)

-   高阶函数

```
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

export const RenderRoutes = (routes, authed, authPath = '/login', extraProps = {}, switchProps = {}) => routes ? (
  <Switch {...switchProps}>
    {routes.map((route, i) => (
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
          if (!route.requiresAuth || authed || route.path === authPath) {
            return <route.component {...props} {...extraProps} route={route} />
          }
          return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
        }}
      />
    ))}
  </Switch>
) : null
```

## Eslint 配置

-   依赖安装

```
npm --save-dev install eslint
npm install --save-dev babel-eslint
npm install --save-dev eslint-plugin-react
npm i --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y
```

-   创建配置文件

```
eslint --init
```

-   修改配置文件(.eslintrc.js)

```
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  "parser": "babel-eslint",
  rules: {
    "arrow-body-style": [0],
    "consistent-return": [0],
    "generator-star-spacing": [0],
    "global-require": [1],
    "import/extensions": [0],
    "import/no-extraneous-dependencies": [0],
    "import/no-unresolved": [0],
    "import/prefer-default-export": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "no-bitwise": [0],
    "no-cond-assign": [0],
    "no-else-return": [0],
    "no-nested-ternary": [0],
    "no-restricted-syntax": [0],
    "no-use-before-define": [0],
    "react/forbid-prop-types": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "react/jsx-no-bind": [0],
    "react/prefer-stateless-function": [0],
    "react/prop-types": [0],   // 这些react开头的都是针对react独有的
    "require-yield": [1],
    "no-console": "off",
    "max-len": ["error", { code: 300 }]
  },
  "globals": {
    "document": true,
    "localStorage": true,
    "window": true,
    "test": true,
    "expect": true
  }
};
```

-   检查 Git 提交的代码 npm install --save-dev pre-commit

```
package.json中添加

{
  "scripts": {
    "lint": "eslint --ext .js --ext .jsx src"
  },
  "pre-commit": [
    "lint"
  ]
}
```
