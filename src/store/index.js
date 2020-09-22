import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    runes: [],
  },
  mutations: {
    set_runes(state, runes) {
      state.runes = runes
    }
  },
  actions: {
    set_runes({ commit }, runes) {
      commit('set_runes', runes)
    }
  },
  modules: {
  }
})
