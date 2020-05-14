// 菜单配置
const homeIcon = require('@/assets/image/menu/home.png');
const goods = require('@/assets/image/menu/goods.png');
const freightSetting = require('@/assets/image/menu/freightSetting.png');
const warehouse = require('@/assets/image/menu/warehouse.png');
const afterSales = require('@/assets/image/menu/afterSales.png');
const compensation = require('@/assets/image/menu/compensation.png');
const settlement = require('@/assets/image/menu/settlement.png');
const order = require('@/assets/image/menu/order.png');
const userSetting = require('@/assets/image/menu/userSetting.png');
const help = require('@/assets/image/menu/help.png');
const sale = require('@/assets/image/menu/sale.png');

const menuList = [
  { title: '工作台', icon: homeIcon, path: '/' },
  { title: '商品管理', icon: goods, path: '/goods' },
  { title: '运费模板', icon: freightSetting, path: '/freightSetting' },
  { title: '仓库管理', icon: warehouse, path: '/warehouse' },
  { title: '订单管理', icon: order, path: '/order' },
  { title: '销售管理', icon: sale, path: '/sale' },
  { title: '结算管理', icon: settlement, path: '/settlement' },
  { title: '售后工单', icon: afterSales, path: '/afterSales' },
  {
    title: '赔付管理',
    icon: compensation,
    path: '/compensation',
    children: [
      { title: '赔付列表', icon: '', path: '/compensationList' },
      { title: '赔付单申诉', icon: '', path: '/compensationAppeal' },
    ],
  },
  { title: '用户管理', icon: userSetting, path: '/userSetting' },
  { title: '帮助中心', icon: help, path: '/help' },
];
export default menuList;
