/*
 * @Description: 
 * @StartVersion: 2.0
 * @LastVersion: 2.0
 * @Autor: gaoyue
 * @Date: 2023-06-30 14:35:45
 * @LastEditTime: 2023-07-12 15:08:52
 */
import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import './assets/style/index.scss'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false

let router
let instance = null
let routesArr = []
// 路由懒加载
function loadView(view) {
  return (resolve) => require([`@/views/${view}`], resolve)
}

function AddloadView(asyncRouterMap) {
  return asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {
        delete route.component
      } else {
        const component = route.component
        route.component = loadView(component)
      }
      if (route.children != null && route.children && route.children.length) {
        route.children = AddloadView(route.children)
      }
      return true
    }
  })
}

function renderMicroApp(props) {
  console.log('window.__POWERED_BY_QIANKUN__=======', window.__POWERED_BY_QIANKUN__, props)
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue2-admin' : '/',
    mode: 'history',
    routes:  [...routesArr]
  })
  router.beforeEach((to, from, next) => {
    next()
  })
 
  instance = new Vue({
    el: `#${props.appId} #app`,
    router,
    render: h => h(App)
  })
}


function render(){
  const router = require('./router').default
  new Vue({
    el: `#app`,
    router,
    render:h => h(App)
  })
}


//子组件的协议就ok了
export async function bootstrap(props){
  routesArr = AddloadView(props.routes)
}

 
// 子系统是否由基座载入
if(window.__POWERED_BY_QIANKUN__){//动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  Vue.prototype.__POWERED_BY_QIANKUN__ = window.__POWERED_BY_QIANKUN__
  // renderMicroApp()
}
if(!window.__POWERED_BY_QIANKUN__){//默认独立运行
  render();
}

export async function mount(props){
  //加了true之后，会自动调取前面这个回调方法，这样可以拿到主应用（基座）修改的值
  // props.onGlobalStateChange((state,prev) => {
  //   console.log(state,prev);
  // },true);
  // Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange;
  // Vue.prototype.$setGlobalState = props.setGlobalState;
  // console.log('是啥类型',Object.prototype.toString.call(props.onGlobalStateChange))
  renderMicroApp(props)
}

export async function unmount(props){
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}

// 微前端生命周期：更新
export async function update(props) {
  console.log('window.__POWERED_BY_QIANKUN__==', window.__POWERED_BY_QIANKUN__)
  console.log('vue2更新了', )
}