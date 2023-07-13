/*
 * @Description: 
 * @StartVersion: 2.0
 * @LastVersion: 2.0
 * @Autor: gaoyue
 * @Date: 2023-06-30 15:13:56
 * @LastEditTime: 2023-07-11 18:40:16
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: '/vue2-page'
    },
    {
        path: '/vue2-page',
        name: 'Vue2',
        component: Home
    },
    // {
    //     path: '/main/vue/about',
    //     name: 'About',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]
const router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? '/vue2-admin' : '/',//基础路径
    routes
})
 
export default router