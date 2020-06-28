import Vue from 'vue'
import App from './App.vue'

// 引入路由并挂载到vue实例上
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
