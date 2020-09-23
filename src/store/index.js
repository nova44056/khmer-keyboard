import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    runes: [],
    isActivePage1: false,
    isActivePage2: false,
    userInfo: {userName: "", password: ""}
  },
  mutations: {
    set_runes (state, runes) {
      state.runes = runes
    },
    toggle_current_runes (state, index) {
      state.runes[index].isCurrent = !state.runes[index].isCurrent
    },
    toggleActivePage1 (state) {
      state.isActivePage1 = !state.isActivePage1
    },
    toggleActivePage2 (state) {
      state.isActivePage2 = !state.isActivePage2
    }
  },
  actions: {
    set_runes ({ commit }, runes) {
      commit('set_runes', runes)
    },
    toggle_current_runes ({ commit }, index) {
      commit('toggle_current_runes', index)
    },
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
