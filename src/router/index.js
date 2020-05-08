import Login from '@/views/login/index'
import Index from '@/views/index/index'

export const main = [
  { path: '/login', name: '登录', component: Login },
  { path: '/', exact: true, name: '首页', component: Index }
]

export const menus = [
  // 菜单相关路由
]

export const routerConfig = {
  main, menus
}