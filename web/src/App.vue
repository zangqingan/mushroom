<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from  'components/content/mainTabbar/MainTabBar';
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  /* 引入定义的样式表*/
  @import "assets/css/base.css";
</style>
