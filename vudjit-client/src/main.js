import Vue from 'vue'
import Vudjit from './Vudjit.vue'
import router from './router'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'typeface-roboto/index.css';

import '@/assets/css/variables.css'
import '@/assets/css/vudjit.less'
import '@/assets/css/sf-pro.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Vudjit)
}).$mount('#app')