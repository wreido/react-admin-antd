import Login from '@/views/login/index';
import Home from '@/views/home/index';
import Test from '@/views/test/index';

export const main = [
  {
    path: '/login', name: '登录', requiresAuth: false, component: Login,
  },
  {
    path: '/', exact: true, name: '首页', requiresAuth: true, component: Home,
  },
  {
    path: '/test', exact: true, name: 'test', requiresAuth: true, component: Test,
  },
];

export const menus = [
  // 菜单相关路由
];

export const routerConfig = {
  main, menus,
};
