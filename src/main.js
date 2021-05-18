import Vue from 'vue'
import Vuelidate from 'vuelidate'
import router from './router'
import App from './App.vue'
import store from './store'



Vue.config.productionTip = false
Vue.use(Vuelidate)





new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


