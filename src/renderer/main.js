import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import {store} from './store/index'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.component('discord-server', require('./components/managebots/DiscordServer'))
//Vue.component('manageBots', require('./components/managebots/ManageBots'))