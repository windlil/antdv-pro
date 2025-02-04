import type { RouteRecordRaw } from 'vue-router'
import { basicRouteMap } from './router-modules'
import { AccessEnum } from '~@/utils/constant'
export const ROOT_ROUTE_REDIRECT_PATH = '/dashboard'
const Layout = () => import('~/layouts/index.vue')

export const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'rootPath',
  redirect: ROOT_ROUTE_REDIRECT_PATH,
  component: Layout,
  children: [],
}

export default [
  {
    path: '/dashboard',
    redirect: '/dashboard/analysis',
    name: 'Dashboard',
    meta: {
      title: '仪表盘',
      icon: 'DashboardOutlined',
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: '/dashboard/analysis',
        name: 'DashboardAnalysis',
        component: () => import('~/pages/dashboard/analysis.vue'),
        meta: {
          title: '分析页',
        },
      },
    ],
  },
  {
    path: '/form',
    redirect: '/form/basic',
    name: 'Form',
    meta: {
      title: '表单页',
      icon: 'FormOutlined',
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: '/form/basic',
        name: 'FormBasic',
        component: () => import('~/pages/form/basic.vue'),
        meta: {
          title: '基础表单',
        },
      },
    ],
  },
  {
    path: '/link',
    redirect: '/link/iframe',
    name: 'Link',
    meta: {
      title: '链接',
      icon: 'LinkOutlined',
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: '/link/iframe',
        name: 'LinkIframe',
        component: basicRouteMap.Iframe,
        meta: {
          title: 'AntDesign',
          url: 'https://ant.design/',
        },
      }, {
        path: '/link/antdv',
        name: 'LinkAntdv',
        component: basicRouteMap.Iframe,
        meta: {
          title: 'AntDesignVue',
          url: 'https://antdv.com/',
        },
      },
      {
        path: 'https://www.baidu.com',
        name: 'LinkExternal',
        meta: {
          title: '跳转百度',
          // target: '_self',
        },
      },
    ],
  },
  {
    path: '/menu',
    redirect: '/menu/menu1',
    name: 'Menu',
    meta: {
      title: '菜单',
      icon: 'BarsOutlined',
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: '/menu/menu1',
        name: 'MenuMenu11',
        component: () => import('~/pages/menu/menu1.vue'),
        meta: {
          title: '菜单1',
        },
      },
      {
        path: '/menu/menu2',
        name: 'MenuMenu12',
        component: () => import('~/pages/menu/menu2.vue'),
        meta: {
          title: '菜单2',
        },
      },
      {
        path: '/menu/menu3',
        redirect: '/menu/menu3/menu1',
        name: 'MenuMenu1-1',
        meta: {
          title: '菜单1-1',
        },
        children: [
          {
            path: '/menu/menu3/menu1',
            name: 'MenuMenu111',
            component: () => import('~/pages/menu/menu-1-1/menu1.vue'),
            meta: {
              title: '菜单1-1-1',
            },
          },
          {
            path: '/menu/menu3/menu2',
            name: 'MenuMenu112',
            component: () => import('~/pages/menu/menu-1-1/menu2.vue'),
            meta: {
              title: '菜单1-1-2',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/profile',
    name: 'profile',
    redirect: '/profile/basic',
    meta: {
      title: 'menu.profile',
      icon: 'profile',
      locale: 'menu.profile',
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: '/profile/basic',
        name: 'ProfileBasic',
        component: () => import('~/pages/profile/basic/index.vue'),
        meta: {
          title: 'menu.profile.basic',
          locale: 'menu.profile.basic',
        },
      },
    ],
  },
  {
    path: '/access',
    redirect: '/access/common',
    name: 'Access',
    meta: {
      title: '权限模块',
      icon: 'ClusterOutlined',
    },
    children: [
      {
        path: '/access/common',
        name: 'AccessCommon',
        component: () => import('~/pages/access/common.vue'),
        meta: {
          title: '通用权限',
        },
      },
      {
        path: '/access/user',
        name: 'AccessUser',
        component: () => import('~/pages/access/user.vue'),
        meta: {
          title: '普通用户',
          access: [AccessEnum.USER, AccessEnum.ADMIN],
        },
      },
      {
        path: '/access/admin',
        name: 'AccessAdmin',
        component: () => import('~/pages/access/admin.vue'),
        meta: {
          title: '管理员',
          access: [AccessEnum.ADMIN],
        },
      },
    ],
  },
  {
    path: '/exception',
    redirect: '/exception/403',
    name: 'Exception',
    meta: {
      title: '异常页',
      icon: 'WarningOutlined',
      locale: 'menu.exception',
    },
    children: [
      {
        path: '/exception/403',
        name: 'Exception403',
        component: () => import('~/pages/exception/403.vue'),
        meta: {
          title: '403',
          locale: 'menu.exception.not-permission',
        },
      },
      {
        path: '/exception/404',
        name: 'Exception404',
        component: () => import('~/pages/exception/404.vue'),
        meta: {
          title: '404',
          locale: 'menu.exception.not-find',
        },
      },
      {
        path: '/exception/500',
        name: 'Exception500',
        component: () => import('~/pages/exception/500.vue'),
        meta: {
          title: '500',
          locale: 'menu.exception.server-error',
        },
      },
    ],
  },
  // 结果页
  {
    path: '/result',
    redirect: '/result/success',
    name: 'Result',
    meta: {
      title: '结果页',
      icon: 'CheckCircleOutlined',
      locale: 'menu.result',
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: '/result/success',
        name: 'ResultSuccess',
        component: () => import('~/pages/result/success.vue'),
        meta: {
          title: '成功页',
          locale: 'menu.result.success',
        },
      },
      {
        path: '/result/fail',
        name: 'ResultFail',
        component: () => import('~/pages/result/fail.vue'),
        meta: {
          title: '失败页',
          locale: 'menu.result.fail',
        },
      },
    ],
  },
  {
    path: '/list',
    redirect: '/list/card-list',
    name: 'List',
    meta: {
      title: '列表页',
      icon: 'TableOutlined',
      locale: 'menu.list',
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: '/list/card-list',
        name: 'CardList',
        component: () => import('~/pages/list/card-list.vue'),
        meta: {
          title: '卡片列表',
          locale: 'menu.list.card-list',
        },
      },
      {
        path: '/list/basic-list',
        name: 'BasicList',
        component: () => import('~/pages/list/basic-list.vue'),
        meta: {
          title: '标准列表',
          locale: 'menu.list.basic-list',
        },
      },
    ],
  },
] as RouteRecordRaw[]
