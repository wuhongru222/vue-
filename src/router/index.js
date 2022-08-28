import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export const constantRoutes = [
    {

        path: '/',
        component: (resolve) => require(['@/views/index'], resolve),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', noCache: true, affix: false }
    },

    {

        path: '/maps',
        component: (resolve) => require(['@/components/maps'], resolve),
        name: '百度地图',
        meta: { title: '百度地图', icon: 'dashboard', noCache: true, affix: false }
    },

    {

        path: '/add1',
        component: (resolve) => require(['@/components/vuex/add1'], resolve),
        name: 'd1',
        meta: { title: 'd1', icon: 'dashboard', noCache: true, affix: false }
    },
    {

        path: '/add2',
        component: (resolve) => require(['@/components/vuex/add2'], resolve),
        name: 'd2',
        meta: { title: 'd2', icon: 'dashboard', noCache: true, affix: false }
    },


]


export default new Router({
    mode: 'history', // 去掉url中的#
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})