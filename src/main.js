import Vue from 'vue'
import App from './App.vue'
import VuePageTransition from 'vue-page-transition'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VuePageTransition)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
