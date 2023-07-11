/*
 * @Description: 
 * @StartVersion: 2.0
 * @LastVersion: 2.0
 * @Autor: gaoyue
 * @Date: 2023-06-30 14:40:10
 * @LastEditTime: 2023-07-11 14:05:04
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/index.scss'
Vue.use(ElementUI)
Vue.config.productionTip = false
 
let instance = null
function render(props){
  instance = new Vue({
    router,
    render:h => h(App)
  }).$mount('#qkApp2');//这里是挂载到自己的html中，基座会拿到这个挂载后的html，将其插入进去
//注意：这里#qkApp1在index.html和app.vue的挂载点的id名要同步修改
}
if(window._POWERED_BY_QIANKUN_){//动态添加publicPath
  _webpack_public_path_ = window._INJECTED_PUBLIC_PATH_BY_QIANKUN_;
}
if(!window._POWERED_BY_QIANKUN_){//默认独立运行
  render();
}
//父应用加载子应用，子应用必须暴露三个接口：bootstrap,mount,unmount
//子组件的协议就ok了
export async function bootstrap(props){}
export async function mount(props){
  //加了true之后，会自动调取前面这个回调方法，这样可以拿到主应用（基座）修改的值
  props.onGlobalStateChange((state,prev) => {
    console.log(state,prev);
  },true);
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange;
  Vue.prototype.$setGlobalState = props.setGlobalState;
  console.log('是啥类型',Object.prototype.toString.call(props.onGlobalStateChange))
  render(props);
}
export async function unmount(props){
  instance.$destroy();
}


// 微前端生命周期：更新
export async function update(props) {
  console.log('gengxin1========,更新了', )
}