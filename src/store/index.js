import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isActivePage1: false,
    isActivePage2: false,
    timer: null,
    timerMinute: 0,
    isKhmer: true,
    typeOfWord: null,
    wordType: 0,
    totalWordsTyped: 0,
    onemin: false,
    threemin: false,
    fivemin: false,
    isWord: false,
    isArticle: false,
    showAbout: false,
    show: true,
  },
  mutations: {
    set_defaultTimer(state) {
      state.timerMinute = 1;
    },
    set_totalWordsTyped(state, totalWordsTyped) {
      state.totalWordsTyped = totalWordsTyped;
    },
    toggleActivePage1(state) {
      state.isActivePage1 = !state.isActivePage1;
    },
    toggleActivePage2(state) {
      state.isActivePage2 = !state.isActivePage2;
    },
    setTimer(state) {
      state.timer = true;
    },

    setTypeOfWord(state) {
      state.typeOfWord = true;
    },

    unSetTime(state) {
      state.timer = false;
    },

    unSetType(state) {
      state.typeOfWord = false;
    },

    setKhmer(state) {
      state.isKhmer = true;
    },
    unSetKhmer(state) {
      state.isKhmer = false;
    },

    wordType1(state) {
      state.wordType = 1;
    },

    wordType2(state) {
      state.wordType = 2;
    },

    timer1(state) {
      state.timerMinute = 1;
    },
    timer3(state) {
      state.timerMinute = 3;
    },
    timer5(state) {
      state.timerMinute = 5;
    },

    timerChosen1(state) {
      state.fivemin = false;
      state.threemin = false;
      state.onemin = true;
    },
    timerChosen3(state) {
      state.fivemin = false;
      state.onemin = false;
      state.threemin = true;
    },

    timerChosen5(state) {
      state.threemin = false;
      state.onemin = false;
      state.fivemin = true;
    },

    choseWord(state) {
      state.isWord = true;
      state.isArticle = false;
    },

    choseArticle(state) {
      state.isWord = false;
      state.isArticle = true;
    },
    close(state) {
      state.show = false;
    },

    showAboutUs(state) {
      state.showAbout = !state.showAbout;
    },

    resetTimer(state) {
      state.onemin = false;
      state.fivemin = false;
      state.threemin = false;
    },
    clear(state) {
      state.onemin = false;
      state.threemin = false;
      state.fivemin = false;
      state.isWord = false;
      state.isArticle = false;
    },
  },
  actions: {
    set_totalWordsTyped({ commit }, totalWordsTyped) {
      commit("set_totalWordsTyped", totalWordsTyped);
    },
    toggleActivePage1({ commit }) {
      commit("toggleActivePage1");
    },
    toggleActivePage2({ commit }) {
      commit("toggleActivePage2");
    },
    setTime({ commit }) {
      commit("setTimer");
    },
    unSetTime({ commit }) {
      commit("unSetTime");
    },
    setType({ commit }) {
      commit("setTypeOfWord");
    },
    unSetType({ commit }) {
      commit("unSetType");
    },

    setKhmer({ commit }) {
      commit("setKhmer");
    },
    unSetKhmer({ commit }) {
      commit("unSetKhmer");
    },

    wordType1({ commit }) {
      commit("wordType1");
    },
    wordType2({ commit }) {
      commit("wordType2");
    },
    timer1({ commit }) {
      commit("timer1");
    },
    timer3({ commit }) {
      commit("timer3");
    },
    timer5({ commit }) {
      commit("timer5");
    },

    timerChosen1({ commit, state }) {
      commit("timerChosen1");
      console.log(state.onemin);
      // console.log(state.timerChosen)
    },
    timerChosen3({ commit, state }) {
      commit("timerChosen3");
      console.log(state.threemin);
    },
    timerChosen5({ commit, state }) {
      commit("timerChosen5");
      console.log(state.fivemin);
    },

    choseWord({ commit }) {
      commit("choseWord");
    },

    choseArticle({ commit }) {
      commit("choseArticle");
    },

    close({ commit }) {
      commit("close");
    },

    showAbout({ commit }) {
      commit("showAboutUs");
    },

    resetTimer({ commit }) {
      commit("resetTimer");
    },
    clear({ commit }) {
      commit("clear");
    },
  },
  modules: {},
});
