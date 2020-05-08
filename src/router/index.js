import Index from '@/components/layout/index'
import Login from '@/views/login/index'
import Home from '@/views/home/index'
import Test from '@/views/test/index'

export const main = [
  { path: '/', exact: true, name: '', component: Index },
  { path: '/login', name: '登录', component: Login },
  { path: '/home', exact: true, name: '首页', component: Home },
  { path: '/test', exact: true, name: 'test', component: Test }
]

export const menus = [
  // 菜单相关路由
]

export const routerConfig = {
  main, menus
}