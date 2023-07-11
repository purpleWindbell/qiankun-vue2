<!--
 * @Description: 
 * @StartVersion: 2.0
 * @LastVersion: 2.0
 * @Autor: gaoyue
 * @Date: 2023-06-30 14:40:10
 * @LastEditTime: 2023-07-06 16:02:55
-->
<template>
  <div class="hello">
    <h1 class="test">vue2</h1>
     <el-link type="primary">主要链接</el-link>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    window.a = 1
    console.log('window1==========',window.a, window.b) 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
