const menuData = [
  {
    id: 1,
    parentId: null,
    title: '仪表盘',
    icon: 'DashboardOutlined',
    component: 'RouteView',
    redirect: '/dashboard/analysis',
    path: '/dashboard',
    name: 'Dashboard',
    locale: 'menu.dashboard',
  },
  {
    id: 2,
    parentId: 1,
    title: '分析页',
    component: '/dashboard/analysis',
    path: '/dashboard/analysis',
    name: 'DashboardAnalysis',
    keepAlive: true,
    locale: 'menu.dashboard.analysis',
  },
  {
    id: 3,
    parentId: null,
    title: '表单页',
    icon: 'FormOutlined',
    component: 'RouteView',
    redirect: '/form/basic',
    path: '/form',
    name: 'Form',
    locale: 'menu.form',
  },
  {
    id: 4,
    parentId: 3,
    title: '基础表单',
    component: '/form/basic',
    path: '/form/basic',
    name: 'FormBasic',
    keepAlive: false,
    locale: 'menu.form.basic-form',

  },
  {
    id: 5,
    parentId: null,
    title: '链接',
    icon: 'LinkOutlined',
    component: 'RouteView',
    redirect: '/link/iframe',
    path: '/link',
    name: 'Link',
    locale: 'menu.link',

  },
  {
    id: 6,
    parentId: 5,
    title: 'AntDesign',
    url: 'https://ant.design/',
    component: 'Iframe',
    path: '/link/iframe',
    name: 'LinkIframe',
    keepAlive: true,
    locale: 'menu.link.iframe',
  },
  {
    id: 7,
    parentId: 5,
    title: 'AntDesignVue',
    url: 'https://antdv.com/',
    component: 'Iframe',
    path: '/link/antdv',
    name: 'LinkAntdv',
    keepAlive: true,
    locale: 'menu.link.antdv',
  },
  {
    id: 8,
    parentId: 5,
    path: 'https://www.baidu.com',
    name: 'LinkExternal',
    title: '跳转百度',
    locale: 'menu.link.external',
  },
  {
    id: 9,
    parentId: null,
    title: '菜单',
    icon: 'BarsOutlined',
    component: 'RouteView',
    path: '/menu',
    redirect: '/menu/menu1',
    name: 'Menu',
    locale: 'menu.menu',
  },
  {
    id: 10,
    parentId: 9,
    title: '菜单1',
    component: '/menu/menu1',
    path: '/menu/menu1',
    name: 'MenuMenu11',
    keepAlive: true,
    locale: 'menu.menu.menu1',
  },
  {
    id: 11,
    parentId: 9,
    title: '菜单2',
    component: '/menu/menu2',
    path: '/menu/menu2',
    keepAlive: true,
    locale: 'menu.menu.menu2',
  },
  {
    id: 12,
    parentId: 9,
    path: '/menu/menu3',
    redirect: '/menu/menu3/menu1',
    title: '菜单1-1',
    component: 'RouteView',
    locale: 'menu.menu.menu3',
  },
  {
    id: 13,
    parentId: 12,
    path: '/menu/menu3/menu1',
    component: '/menu/menu-1-1/menu1',
    title: '菜单1-1-1',
    keepAlive: true,
    locale: 'menu.menu3.menu1',
  },
  {
    id: 14,
    parentId: 12,
    path: '/menu/menu3/menu2',
    component: '/menu/menu-1-1/menu2',
    title: '菜单1-1-2',
    keepAlive: true,
    locale: 'menu.menu3.menu2',
  },
  {
    id: 15,
    path: '/access',
    component: 'RouteView',
    redirect: '/access/common',
    title: '权限模块',
    name: 'Access',
    parentId: null,
    icon: 'ClusterOutlined',
    locale: 'menu.access',
  },
  {
    id: 16,
    parentId: 15,
    path: '/access/common',
    title: '通用权限',
    name: 'AccessCommon',
    component: '/access/common',
    locale: 'menu.access.common',
  },
  {
    id: 17,
    parentId: 15,
    path: '/access/user',
    title: '普通用户',
    name: 'AccessUser',
    component: '/access/user',
    locale: 'menu.access.user',
  },
  {
    id: 19,
    parentId: null,
    title: '异常页',
    icon: 'WarningOutlined',
    component: 'RouteView',
    redirect: '/exception/403',
    path: '/exception',
    name: 'Exception',
    locale: 'menu.exception',
  },
  {
    id: 20,
    parentId: 19,
    path: '/exception/403',
    title: '403',
    name: '403',
    component: '/exception/403',
    locale: 'menu.exception.not-permission',
  },
  {
    id: 21,
    parentId: 19,
    path: '/exception/404',
    title: '404',
    name: '404',
    component: '/exception/404',
    locale: 'menu.exception.not-find',
  },
  {
    id: 22,
    parentId: 19,
    path: '/exception/500',
    title: '500',
    name: '500',
    component: '/exception/500',
    locale: 'menu.exception.server-error',
  },
  {
    id: 23,
    parentId: null,
    title: '结果页',
    icon: 'CheckCircleOutlined',
    component: 'RouteView',
    redirect: '/result/success',
    path: '/result',
    name: 'Result',
    locale: 'menu.result',
  },
  {
    id: 24,
    parentId: 23,
    path: '/result/success',
    title: '成功页',
    name: 'ResultSuccess',
    component: '/result/success',
    locale: 'menu.result.success',
  },
  {
    id: 25,
    parentId: 23,
    path: '/result/fail',
    title: '失败页',
    name: 'ResultFail',
    component: '/result/fail',
    locale: 'menu.result.fail',
  },
  {
    id: 26,
    parentId: null,
    title: '列表页',
    icon: 'TableOutlined',
    component: 'RouteView',
    redirect: '/list/card-list',
    path: '/list',
    name: 'List',
    locale: 'menu.list',
  },
  {
    id: 27,
    parentId: 26,
    path: '/list/card-list',
    title: '卡片列表',
    name: 'ListCard',
    component: '/list/card-list',
    locale: 'menu.list.card-list',
  },
  {
    id: 28,
    parentId: null,
    title: '详情页',
    icon: 'ProfileOutlined',
    component: 'RouteView',
    redirect: '/profile/basic',
    path: '/profile',
    name: 'Profile',
    locale: 'menu.profile',
  },
  {
    id: 29,
    parentId: 28,
    path: '/profile/basic',
    title: '基础详情页',
    name: 'ProfileBasic',
    component: '/profile/basic/index',
    locale: 'menu.profile.basic',
  },
  {
    id: 30,
    parentId: 26,
    path: '/list/search-list',
    title: '搜索列表',
    name: 'SearchList',
    component: '/list/search-list',
    locale: 'menu.list.search-list',
  },
  {
    id: 31,
    parentId: 30,
    path: '/list/search-list/articles',
    title: '搜索列表（文章）',
    name: 'SearchListArticles',
    component: '/list/search-list/articles',
    locale: 'menu.list.search-list.articles',
  },
  {
    id: 32,
    parentId: 30,
    path: '/list/search-list/projects',
    title: '搜索列表（项目）',
    name: 'SearchListProjects',
    component: '/list/search-list/projects',
    locale: 'menu.list.search-list.projects',
  },
  {
    id: 33,
    parentId: 30,
    path: '/list/search-list/applications',
    title: '搜索列表（应用）',
    name: 'SearchListApplications',
    component: '/list/search-list/applications',
    locale: 'menu.list.search-list.applications',
  },
  {
    id: 34,
    parentId: 26,
    path: '/list/basic-list',
    title: '标准列表',
    name: 'BasicCard',
    component: '/list/basic-list',
    locale: 'menu.list.basic-list',
  },
]

export const accessMenuData = [
  {
    id: 18,
    parentId: 15,
    path: '/access/admin',
    title: '管理员',
    name: 'AccessAdmin',
    component: '/access/admin',
    locale: 'menu.access.admin',
  },

]

export default eventHandler((event) => {
  const token = getHeader(event, 'Authorization')
  const username = Buffer.from(token, 'base64').toString('utf-8')
  return {
    code: 200,
    msg: '获取成功',
    data: [...menuData, ...(username === 'admin' ? accessMenuData : [])],
  }
})
