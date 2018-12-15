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
      events: []
    },
    showPermissionsModal: false,
    showActionCreation: false,
    manageBots: {
      showDeleteModal: false,
      currentBot: ''
    },
    isNewAction: true,
  }
})