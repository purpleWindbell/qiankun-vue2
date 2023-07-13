<template>
  <div id="app" class="vue2-css">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <keep-alive v-if="isMicroApp">
        <router-view />
      </keep-alive>
      <router-view v-else />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
   computed: {
    isMicroApp() {
      console.log('--->pppp',this.__POWERED_BY_QIANKUN__);
      
      return this.__POWERED_BY_QIANKUN__
    }
  }
}
</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
