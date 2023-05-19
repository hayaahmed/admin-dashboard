import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/app.css'

Vue.config.productionTip = false
//create bus 
export const bus = new Vue();
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
