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