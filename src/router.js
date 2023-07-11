/*
 * @Description: 
 * @StartVersion: 2.0
 * @LastVersion: 2.0
 * @Autor: gaoyue
 * @Date: 2023-06-30 15:13:56
 * @LastEditTime: 2023-07-06 17:53:14
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: '/main/vue1/'
    },
    {
        path: '/main/vue1/',
        name: 'Vue1',
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
    base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",//基础路径
    routes
})
 
export default router