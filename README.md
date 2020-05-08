## react-admin-ant(基于 antd 的后台管理模板)

- react + [antd](https://ant.design/docs/react/introduce-cn) + redux + react-router-dom

## 安装

```
npx create-react-app react-admin-ant
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

# 目录结构

<pre>
    ├── config       // 项目构建配置、编译
    │
    ├── dist                 // 构建包
    │
    ├── src                  // 开发目录
    │
    │   ├── api              //接口（拦截器）
    │   │
    │   ├── bus              //消息机
    │   │
    │   ├── assets           // 静态目录
    │      ├── styles         // 样式资源
    │      ├── images         // 图片资源
    │ 
    │   ├── components       // 组件
    │       │ 
    │       ├── modal        // 模态框组件
    │ 
    │   ├── pages            // 视图
    │   │
    │   ├── pubbliPage       // 分包视图
    │   │
    │   ├── store            // mobx状态管理
    │   │
    │   ├── utile            // 工具库
    │      ├── enumList.js    // 字典枚举
    │      │ 
    │      ├── index.js       // 公共方法
    │      │ 
    │      ├── ossProcess.js  // oss图片处理
    │      │ 
    │      ├── qqmap-wx-jssdk.min.js  // 腾讯地图 
    │
    ├── package.json         // 项目配置文件
    │
    ├── .eslintrc.js         // Eslint代码规范配置
    │
    ├── .gitignore           // 项目忽略文件配置
    │
    ├── README.md            // 仓库说明
    
</pre>
