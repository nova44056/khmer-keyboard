<template>
    <div class="col">
        {{startGame()}}
        <div class="col1">
        <timer/>
        <error/>
        <score/>
        </div>
        <div class="col2">
        <textareas/>
        <div class="key">
        <keyboard/>
        </div>
        </div>
        <showstats/>
    </div>
</template>

<script>
import textareas from './TypingPageComponents/textarea'
import keyboard from './TypingPageComponents/keyboard'
import timer from './TypingPageComponents/timer'
import error from './TypingPageComponents/error'
import score from './TypingPageComponents/score'
import showstats from './TypingPageComponents/showstats'
import splitKhmerRunes from '../split-khmer'
import { textsList } from './texts-list'
import keyboardMap from '../keyboard-mapping'
export default {
  name: 'typingpage',
  components: {
    keyboard,
    textareas,
    timer,
    error,
    score,
    showstats
  },
  data: () => {
    return {
      text: '',
      runesCounter: 0,
      totalRunes: 0,
      letters: []
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
      let keysList = this.getKeysMap(this.text) // this kinda works xD
      let currentLetters = ''
      this.$store.dispatch('toggle_current_runes', this.runesCounter) // this works
      console.log(this.$store.state.runes[this.runesCounter].isCurrent)
      //   this.runes[this.runesCounter].isCurrent = true
    //   this.letters[currentLetters.length].isCurrent = true
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
    },
    getKeysMap (text) {
      const keysList = []
      for (let i = 0; i < text.length; i++) {
        const letter = text.substring(i, i + 1)
        const keys = keyboardMap[letter]
        if (keys === undefined) {
          console.log('Mapping undefined' + letter)
        } else {
          keysList.push(keys)
        }
      }
      return keysList
    }
  }
}
</script>

<style scoped>
.col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.col2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 70%; */
    margin-top: 3.5rem;
}
.col1 {
    display: flex;
    flex-direction: col;
    justify-content: center;
    align-items: center;
    /* width: 20%; */
    /* margin-right: 7rem; */
}
h2 {
    font-family: 'Kantumruy', sans-serif;
    color: white;
    margin-top: 1rem;
    margin-bottom: -5rem;
}
.key {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;
    /* margin-left: 6.5rem; */
    margin-left: -1rem;
    margin-top: -3rem;
}
</style>
