// 菜单配置
// const homeIcon = require('@/assets/image/menu/home.png');

const menuList = [
  { title: '工作台', icon: '', path: '/' },
  { title: '商品管理', icon: '', path: '/goods' },
  { title: '运费模板', icon: '', path: '/freightSetting' },
  { title: '仓库管理', icon: '', path: '/warehouse' },
  { title: '订单管理', icon: '', path: '/order' },
  { title: '销售管理', icon: '', path: '/sale' },
  { title: '结算管理', icon: '', path: '/settlement' },
  { title: '售后工单', icon: '', path: '/afterSales' },
  {
    title: '赔付管理',
    icon: '',
    path: '/compensation',
    children: [
      { title: '赔付列表', icon: '', path: '/compensationList' },
      { title: '赔付单申诉', icon: '', path: '/compensationAppeal' },
    ],
  },
  { title: '用户管理', icon: '', path: '/userSetting' },
  { title: '帮助中心', icon: '', path: '/help' },
  {
    title: '测试',
    icon: 'home',
    path: '',
    children: [
      {
        title: 'test01',
        icon: '',
        path: '/test',
      },
    ],
  },
];
export default menuList;
