import Vue from 'vue'
import Vuex from 'vuex'
import { conversation, currentUser, } from '../API/data';

Vue.use(Vuex)

const types = {
  GET_CONVERSATION: 'getConversation',
  GET_CURRENT_USER: 'getCurrentUser',
}

export default new Vuex.Store({
  state: {
    conversation: [],
    currentUser: '',
    allUsers: []
  },
  mutations: {
    [types.GET_CONVERSATION]: (state, data) => {
      state.conversation = data;
    },
    [types.GET_CURRENT_USER]: (state, data) => {
      state.currentUser = data;
    },
  },
  actions: {
    async getConversation({commit}) {
      let data = await mockLoad(conversation);
      commit(types.GET_CONVERSATION, data);
    },
    async getCurrentUser({commit}) {
      let data = await mockLoad(currentUser);
      commit(types.GET_CURRENT_USER, data);
    }
  },
  getters: {
    currentUser: state => state.currentUser,
    conversation: state => state.conversation,
  }
})

function mockLoad(data, timeout = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const messages = JSON.parse(data);
        resolve(messages);
      } catch (e) {
        reject([]);
      }
    }, timeout);
  });
}
