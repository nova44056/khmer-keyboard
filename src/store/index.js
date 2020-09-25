import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActivePage1: false,
    isActivePage2: false,
    userInfo: {userName: "", password: ""}
  },
  mutations: {
    toggleActivePage1 (state) {
      state.isActivePage1 = !state.isActivePage1
    },
    toggleActivePage2 (state) {
      state.isActivePage2 = !state.isActivePage2
    }
  },
  actions: {
    toggleActivePage1 ({ commit }) {
      commit('toggleActivePage1')
    },
    toggleActivePage2 ({ commit }) {
      commit('toggleActivePage2')
    }
  },
  modules: {
  }
})
