import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import {store} from './store/index'
import config from '../../config.json'
import firebase from 'firebase'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios

// Disable Vue production tip
Vue.config.productionTip = false

// Create Vue instance
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.log(firebase);
firebase.initializeApp(config.firebase);