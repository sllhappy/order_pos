<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <i class="icon iconfont icon-zuanshi"></i> -->
    <!-- 左导航栏 -->
    <!-- <div class="leftnav"> -->
      <Left></Left>
    <!-- </div> -->

    <!-- 菜单主题部分 -->
    <div class="main">
      <router-view/>
    </div>
    
    <!-- <div>
      <Pos1></Pos1>
      <router-link to="/">导航部分</router-link>
      <router-link to="/pos">进入pos页面</router-link>
      <router-link to="/poss/pos1">-pos1页面1</router-link> |
      <router-link to="/poss/pos2">-pos2页面2</router-link>
      
    </div> -->
    
    <!-- 单页面多路由区域操作，需要使用router-view -->
    <!-- <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
 <router-view name="low" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view> -->
  </div>
</template>

<script>
// 引入组件
// import Pos1 from '@/components/Pos1'
import Left from '@/components/Left'

export default {
  name: 'App',
  components:{
    Left
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:green;
  overflow:hidden;
  height:100%;
}
.main{
  float:left;
  width:94%; 
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;
}
</style>
