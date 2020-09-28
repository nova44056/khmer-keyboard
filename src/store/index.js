import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActivePage1: false,
    isActivePage2: false,
    userInfo: { userName: "", password: "" },
    timer: null,
    isKhmer: true, 
    typeOfWord: null,
  },
  mutations: {
    toggleActivePage1(state) {
      state.isActivePage1 = !state.isActivePage1
    },
    toggleActivePage2(state) {
      state.isActivePage2 = !state.isActivePage2
    },
    setTimer(state) {
      state.timer = true
    },

    setTypeOfWord(state) {
      state.typeOfWord = true
    },

    unSetTime(state) {
      state.timer = null
    },

    unSetType(state) {
      state.typeOfWord = null
    }, 
    
    setKhmer(state){
      state.isKhmer = true
    }, 
    unSetKhmer(state){
      state.isKhmer = false
    }

  },
  actions: {
    toggleActivePage1({ commit }) {
      commit('toggleActivePage1')
    },
    toggleActivePage2({ commit }) {
      commit('toggleActivePage2')
    },
    setTime({ commit }) {
      commit('setTimer')
    },
    unSetTime({ commit }) {
      commit('unSetTime')
    },
    setType({ commit }) {
      commit('setTypeOfWord')
    },
    unSetType({ commit }) {
      commit('unSetType')
    }, 

    setKhmer({commit}){
      commit('setKhmer')
    }, 
    unSetKhmer({commit}){
      commit('unSetKhmer')
    }

  },
  modules: {
  }
})
