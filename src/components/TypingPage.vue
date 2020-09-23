<template>
    <div class="row">
        {{startGame()}}
        <div class="row1">
        <textareas/>
        <div class="key">
        <keyboard/>
        </div>
        </div>
        <div class="row2">
        <timer/>
        <error/>
        <score/>
        <exit/>
        </div>
    </div>
</template>

<script>
import textareas from './TPComponent/textarea'
import keyboard from './TPComponent/keyboard'
import timer from './TPComponent/timer'
import error from './TPComponent/error'
import score from './TPComponent/score'
import exit from './TPComponent/exit'
import splitKhmerRunes from '../split-khmer'
import { textsList } from './texts-list'
export default {
  name: 'typingpage',
  components: {
    keyboard,
    textareas,
    timer,
    error,
    score,
    exit
  },
  data: () => {
    return {
      text: '',
      runesCounter: 0,
      totalRunes: 0
    }
  },
  methods: {
    startGame () {
      const random = Math.floor(Math.random() * (textsList.list.length)) // this works
      this.text = textsList.list[random] // this works
      this.play()
    },
    play () {
      this.runesCounter = 0
      const runesList = splitKhmerRunes(this.text)
      this.totalRunes = runesList.length
      this.splitTextintoRunesArray(this.text) // this works
    },
    splitTextintoRunesArray (text) {
      const runesList = splitKhmerRunes(this.text)
      console.log(runesList)
      //   for(let i = 0; i < runesList.length; i++){
      //       console.log(i + ':' +runesList[i].charCodeAt(0))
      //   }
      const _runes = []
      for (let i = 0; i < runesList.length; i++) {
        let isSpace = false
        if (runesList[i].charCodeAt(0) === 32) { runesList[i] = '⎵'; isSpace = true }
        _runes.push({ id: 'rune-' + i, rune: runesList[i], isCurrent: false, isCorrect: false, isHidden: false, isSpace: isSpace })
      }
      this.$store.dispatch('set_runes', _runes) // this works
      // console.log(this.$store.state.runes)
    }
  }
}
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.row1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    margin-top: 3.5rem;
    position: relative;
}
.row2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    margin-right: 7rem;
}
h2 {
    font-family: 'Kantumruy', sans-serif;
    color: white;
    margin-top: 1rem;
    margin-bottom: -5rem;
}
.key {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 300px;
    margin-left: 6.5rem;
    margin-top: -3rem;
}

</style>
