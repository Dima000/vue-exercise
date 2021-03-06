import Vue from 'vue'
import Vuex from 'vuex'
import { conversation, currentUser, } from './data';

Vue.use(Vuex)

const types = {
  SET_CONVERSATION: 'setConversation',
  SET_CURRENT_USER: 'setCurrentUser',
  SEND_MESSAGE: 'sendMessage',
}

export default new Vuex.Store({
  state: {
    conversation: [],
    currentUser: '',
    allUsers: []
  },
  mutations: {
    [types.SET_CONVERSATION]: (state, data) => {
      state.conversation = data;
    },
    [types.SET_CURRENT_USER]: (state, data) => {
      state.currentUser = data;
    },
    [types.SEND_MESSAGE]: (state, data) => {
      state.conversation.push(data);
    },
  },
  actions: {
    async getConversation({ commit }) {
      let data = await mockLoad(conversation);
      commit(types.SET_CONVERSATION, data);
    },
    async getCurrentUser({ commit }) {
      let data = await mockLoad(currentUser);
      commit(types.SET_CURRENT_USER, data);
    },
    async sendMessage({ commit, getters }, message) {
      let oldConversation = [...getters.conversation];
      commit(types.SEND_MESSAGE, message);

      try {
        let successRate = getRandomInt(100);
        await mockLoad(JSON.stringify(message), 500, successRate);
      } catch (e) {
        Vue.notify({
          title: 'Send error',
          type: 'error',
          text: 'Some error happened. Your message was not sent!'
        });

        commit(types.SET_CONVERSATION, oldConversation);
      }
    }
  },
  getters: {
    currentUser: state => state.currentUser,
    conversation: state => state.conversation,
  }
})

function mockLoad(data, timeout = 0, successRate = 100) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const messages = JSON.parse(data);
        if (successRate > 10) {
          resolve(messages);
        } else {
          reject([]);
        }
      } catch (e) {
        reject([]);
      }
    }, timeout);
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
