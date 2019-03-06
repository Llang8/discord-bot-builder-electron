import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    discordPageNum: 1,
    botConfig: {
      botName: '',
      botDescription: '',
      token: '',
      commandIdentifier: '',
      commands: [],
      events: [],
      backup: false
    },
    showPermissionsModal: false,
    showActionCreation: false,
    manageBots: {
      showDeleteModal: false,
      currentBot: ''
    },
    runningBots: [],
    isNewAction: true,
    loggedIn: false,
    isUser: false,
    user: {
      email: '',
      uid: '',
      emailVerified: false
    }
  }
})