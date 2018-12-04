import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue';
import Discord from '../components/discord/Discord.vue';
import ManageBots from '../components/managebots/ManageBots.vue'; 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/discord',
      component: Discord
    },
    {
      path: '/managebots',
      component: ManageBots
    },
  ]
})
