// 菜单配置
const menuList = [
  {
    title: '首页',
    icon: 'home',
    path: '/'
  },
  {
    title: '测试',
    icon: 'home',
    path: '',
    children: [
      {
        title: 'test01',
        icon: '',
        path: '/test'
      }
    ]
  }
]
export default menuList
