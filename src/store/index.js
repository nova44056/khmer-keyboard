import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActivePage1: false,
    isActivePage2: false,
    userInfo: { userName: "", password: "" },
    timer: null,
    timerMinute: 0, 
    isKhmer: true, 
    typeOfWord: null,
    wordType: 0, 
    totalWordsTyped: null
  },
  mutations: {
    set_totalWordsTyped(state, totalWordsTyped) {
      state.totalWordsTyped = totalWordsTyped
    },
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
    },

    wordType1(state){
      state.wordType = 1
    }, 

    wordType2(state){
      state.wordType = 2
    }, 

    timer1(state){
      state.timerMinute = 1
      console.log(state.timerMinute)
    }, 
    timer3(state){
      state.timerMinute = 3
      console.log(state.timerMinute)
    }, 
    timer5(state){
      state.timerMinute = 5
      console.log(state.timerMinute)
    }, 

  },
  actions: {
    set_totalWordsTyped({ commit }, totalWordsTyped) {
      commit('totalWordsTyped', totalWordsTyped)
    },
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
    }, 

    wordType1({commit}){
      commit('wordType1')
    },
    wordType2({commit}){
      commit('wordType2')
    }, 
    timer1({commit}){
      commit('timer1')
    }, 
    timer3({commit}){
      commit('timer3')
    }, 
    timer5({commit}){
      commit('timer5')
    }, 

  },
  modules: {
  }
})
