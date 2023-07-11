/*
 * @Description: 
 * @StartVersion: 2.0
 * @LastVersion: 2.0
 * @Autor: gaoyue
 * @Date: 2023-06-30 15:04:59
 * @LastEditTime: 2023-07-06 18:15:51
 */

const name= "vue2"
module.exports = {
    lintOnSave:false,//关闭eslint检测
    devServer:{
      port:8002,//这里的端口必须和父应用配置的子应用端口一致
      headers:{
        //因为qiankun内部请求都是fetch请求资源，所以子应用必须允许跨域
        'Access-Control-Allow-Origin':'*',
      }
    },
    configureWebpack:{
      output:{
        //资源打包路径
        library: `${name}-[name]`,
        libraryTarget:'umd',
        jsonpFunction: `webpackJsonp_${name}`
      }
    }
}