<template>
  <main>
    <div class="col">
      <div class="col1">
          <timer/>
          <error/>
          <score/>
      </div>
      <div class="col2">
        <div class="area">
          <!-- text areas -->
          <div class="text-div">
            <h2 class="text-wrapper">
                <span v-for="(rune, index) in runes" :key='index' :class="{space: rune.isSpace, current: rune.isCurrent, correct: rune.isCorrect, hidden: rune.isHidden}">
                    {{rune.rune}}
                </span>
            </h2>
          </div>
          <div>
            <h4 id="decomposition-vk">
              <span>​</span>
              <span
                v-for="letter in letters"
                :key="letter.id"
                :class="{current: letter.isCurrent, correct: letter.isCorrect}"
                :id="letter.id"
              >{{ letter.letter }}</span>
            </h4>
          </div>
        </div>
    </div>
        <div class="key">
          <keyboard id="keyboard-vk" />
        </div>
      </div>
          <leftHand id="leftHand-vk" />
          <rightHand id="rightHand-vk" />
      <showstats/>

    <div class="row2">
      <timer />
      <error />
      <score />
      <!-- <exit /> -->
    </div>
  </main>
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
import mapping from '../keyboard-mapping'
import hands from './hands'
import leftHand from './LeftHand'
import rightHand from  './RightHand'
export default {
  name: "typingpage",
  components: {
    keyboard,
    timer,
    error,
    score,
    showstats,
    leftHand,
    rightHand
  },
  data: () => {
    return {
      text: '',
      seconds: 0,
      runes: [],
      letters: [],
      runesCounter: 0,
      totalRunes: 0,
      errors: 0,
      alertError: false,
      idsBreakBefore: null
    };
  },
    methods: {
      /**
       * Initializes the game by changing the DOM
       */
      startGame: function () {
        // Select random text from the texts list
        var random = Math.floor(Math.random() * (textsList.list.length))
        this.text = textsList.list[random]
        // Start the timer
        clearInterval(this.timer)
        var vm = this
        this.timer = setInterval(() => {
          vm.seconds++
        }, 1000)
        // Start playing
        this.play()
      },
      /**
       * Play the game
       * The user has to type a text in khmer
       */
      play: function () {
        var vm = this
        // Initialization
        // var completeText = ''

        // set runes counter to  0
        this.runesCounter = 0


        // return array of decomposited khmer words
        var listRunes = splitKhmerRunes(this.text)

        // set total Runes equal to the words in listRunes
        this.totalRunes = listRunes.length


        this.splitTextIntoSpannedRunes(this.text)
        this.splitRuneIntoSpannedLetters(listRunes[this.runesCounter])
        var listKeys = this.getAllKeys(this.text)
        var currentLetters = ''
        // console.log(currentLetters)
        // console.log(currentLetters.length)
        // Highlights
        this.runes[this.runesCounter].isCurrent = true
        this.letters[currentLetters.length].isCurrent = true
        // Display the first hints
        this.resetHints()
        this.nextHint(listKeys)

        // Game progress
        document.onkeypress = function (ev) {
          ev.preventDefault()
          console.log(ev.key)
          var isCorrect = vm.areRightKeysPressed(ev, listKeys, currentLetters)
          // Pressed key is correct
          if (isCorrect) {
            // completeText += ev.key
            currentLetters += ev.key
            // Highlight correct letter
            vm.letters[currentLetters.length - 1].isCurrent = false
            vm.letters[currentLetters.length - 1].isCorrect = true
            // Check if a grapheme has been completed
            var graphemes = splitKhmerRunes(currentLetters)
            if (graphemes[0] === listRunes[vm.runesCounter]) {
              // We show to the user that the grapheme is completed
              vm.runes[vm.runesCounter].isCurrent = false
              vm.runes[vm.runesCounter].isCorrect = true
              // console.log('DOG')
              // Current grapheme is completed, we start again to track the next one
              currentLetters = ''
              vm.letters = []
              vm.runesCounter++
              // Display decomposition of the next grapheme if exists
              if (vm.runesCounter < listRunes.length) {
                vm.splitRuneIntoSpannedLetters(listRunes[vm.runesCounter])
              }
              // If we arrive at the end of a line, hide it
              vm.scrollSync()
            }
            // Current action is done
            listKeys.shift()
            // No next action, game is won
            if (listKeys.length === 0) {
              currentLetters = ''
              vm.endGame()
            } else { // We display hints for the next action
              vm.runes[vm.runesCounter].isCurrent = true
              vm.letters[currentLetters.length].isCurrent = true
              vm.resetHints()
              vm.nextHint(listKeys)
            }
          } else { // Pressed key is wrong
            vm.alertWrongKey()
          }
        }
      },
      /**
       * Displays the modal with the scores
       * Also saves the highest score
       * In case user wants to play again, resets data
       */
      endGame: function () {
        clearInterval(this.timer)
        var minutes = Math.round((this.seconds / 60) * 100) / 100
        var newSpeed = this.runesCounter / (this.seconds / 60)
        this.seconds = 0
        // Save highest scores in terms of speed and accuracy
        var oldErrors = localStorage.getItem('visualKeyboard.acc.errors') ? localStorage.getItem('visualKeyboard.acc.errors') : Infinity
        if (this.errors < oldErrors) { // best in terms of accuracy
          localStorage.setItem('visualKeyboard.acc.time', minutes)
          localStorage.setItem('visualKeyboard.acc.errors', this.errors)
          localStorage.setItem('visualKeyboard.acc.runes', this.runesCounter)
        }
        var oldMinutes = localStorage.getItem('visualKeyboard.speed.time') ? localStorage.getItem('visualKeyboard.speed.time') : Infinity
        var oldRunes = localStorage.getItem('visualKeyboard.speed.runes') ? localStorage.getItem('visualKeyboard.speed.runes') : 0
        var oldSpeed = oldRunes / oldMinutes
        if (newSpeed > oldSpeed) { // best in terms of accuracy
          localStorage.setItem('visualKeyboard.speed.time', minutes)
          localStorage.setItem('visualKeyboard.speed.errors', this.errors)
          localStorage.setItem('visualKeyboard.speed.runes', this.runesCounter)
        }
        // Display results
        // this.$modal.show('dialog', {
        //   title: this.$i18n.t('message.finishedPlaying'),
        //   text: this.$i18n.t('message.scoreVisualKeyboard', { errors: this.errors, minutes: minutes }),
        //   buttons: [
        //     {
        //       title: this.$i18n.t('Home'),
        //       default: true, // Will be triggered by default if 'Enter' pressed.
        //       handler: () => {
        //         this.$router.push('landind-page')
        //       }
        //     },
        //     {
        //       title: this.$i18n.t('High scores'),
        //       handler: () => {
        //         this.$router.push('highScores')
        //       }
        //     },
        //     {
        //       title: this.$i18n.t('Play again'),
        //       default: true, // Will be triggered by default if 'Enter' pressed.
        //       handler: () => {
        //         this.$modal.hide('dialog')
        //         // Reset data
        //         Object.assign(this.$data, initialState())
        //         // Start new game
        //         this.startGame()
        //       }
        //     }
        //   ]
        // })
      },
      /**
       * Display the text to be typed by the user
       * with each rune encapsulated in a span and with a specific id
       * to facilitate their highlighting later
       * @param text the text to be typed by the user
       */
      splitTextIntoSpannedRunes: function (text) {
        // Split the string to an array of grapheme clusters (one string each)
        var graphemes = splitKhmerRunes(text)
        for (var i = 0; i < graphemes.length; i++) {
          this.runes.push({'id': 'rune-' + i, 'rune': graphemes[i], 'isCurrent': false, 'isCorrect': false, 'isHidden': false})
        }
      },
      /**
       * Display the rune to be typed by the user
       * with each letter encapsulated in a span and with a specific id
       * to facilitate their highlighting later
       * @param text the text to be typed by the user
       */
      splitRuneIntoSpannedLetters: function (rune) {
        // Split the graph to an array of strings
        var letters = rune.split('')
        for (var i = 0; i < letters.length; i++) {
          var letter = letters[i]
          // Add a space before this specific character, otherwise it doesn't stand out
          if (letter === '្') {
            letter = ' ្' // bug fix to make '្' visible
          }
          this.letters.push({'id': 'letter-' + i, 'letter': letter, 'isCurrent': false, 'isCorrect': false})
        }
      },
      /**
       * Computes where the overflowed text is broken to begin new lines
       */
      getRunesIdsBreakBefore: function () {
        var idBreakBefore = []
        var runes = document.getElementsByClassName('runes')
        // Loop through all the runes
        for (var i = 0; i < runes.length; i++) {
          // If a rune has minimal offsetLeft, it means it's on the left of the element, ie at the beginning of a new line
          if ((!runes[i - 1]) || (runes[i].offsetLeft < runes[i - 1].offsetLeft)) {
            idBreakBefore.push(i)
          }
        }
        return idBreakBefore
      },
      /**
       * When the user arrives at the end of a line
       * Scroll to display the next one
       * @param ids the list of ids of the runes that are at the beginnig of each line
       * @param currentId the id of the current rune, ie the one after the last rune validated
       */
      scrollSync: function (currentId) {
        // We are at a break point
        if (this.idsBreakBefore.includes(this.runesCounter)) {
          // Hide all the runes before the current one, ie hide the line
          for (var i = 0; i < this.runesCounter; i++) {
            this.runes[i].isHidden = true
          }
        }
      },
      /**
       * Get the list of ordered keys to type
       * @param text the text to be typed by the user
       * @param hands the object defining which key should be typed with which finger
       * @return an array containing the ordered list of keys to type
       */
      getAllKeys: function (text) {
        // Array of arrays
        var listKeys = []
        // Get the list of actions to be done by the user
        for (var i = 0; i < text.length; i++) {
          var letter = text.substring(i, i + 1)
          var keys = mapping[letter]
          if (keys === undefined) {
            console.log('Mapping undefined: ' + letter)
          } else {
            listKeys.push(keys)
          }
        }
        return listKeys
      },
      /**
       * Checks if the keys the user typed fit with what the action should be
       * @param event the pressedKey event generated when the user typed a new character
       * @param listKeys the current ordered list of keys to type
       * @return a boolean, true if the right keys have have been pressed, false otherwise
       */
      areRightKeysPressed: function (event, listKeys, currentLetters) {
        var keyPressed = mapping[event.key]
        var isCorrect = true
        var keyToPress = listKeys[0]

        // Careful if typing in english letters
        if (keyPressed === undefined) {
        //   this.$modal.show('dialog', {
        //     title: this.$i18n.t('Alert!'),
        //     text: this.$i18n.t('message.alertVisualKeyboard'),
        //     buttons: [
        //       {
        //         title: this.$i18n.t('Close'),
        //         default: true // Will be triggered by default if 'Enter' pressed.
        //       }
        //     ]
        //   })
          isCorrect = false
        } else if (keyToPress.length > 1) {
        // More than one key to press means the first key is ALT or SHIFT
          if (keyToPress[0].split('_')[1] === 'SHIFT') {
            isCorrect = event.shiftKey
          }
          else if (keyToPress[0] === 'ALT_GR') {
            // Browsers don't detect the pressing of the ALT_GR key
            // That's why here we check the letters typed instead of the keys pressed
            isCorrect = (event.key === this.letters[currentLetters.length].letter)
          }
          // We've checked SHIFT and ALT, we move on to checking the second key
          keyPressed = keyPressed[1]
          keyToPress = keyToPress[1]
        } else {
          keyPressed = keyPressed[0]
          keyToPress = keyToPress[0]
        }
        isCorrect = ((keyPressed === keyToPress) && (isCorrect))
        return isCorrect
      },
      /**
       * When the user makes a mistake, the text area and error counter blinks in orange
       * and the error counter is incremented
       */
      alertWrongKey: function () {
        var vm = this
        vm.alertError = true
        // Back to normal after 0.5s
        setTimeout(function () {
          vm.alertError = false
        }, 500)
        // Incrementation
        this.errors++
      },
      /**
       * Highlights the fingers and keys to use for the current action in orange
       * To help the user type the text correctly
       * @param listKeys the current ordered list of keys to type
       */
      nextHint: function (listKeys) {
        // These are arrays
        var currentKeys = listKeys[0]
        var currentFingers = []
        for (var j = 0; j < currentKeys.length; j++) {
          currentFingers.push(hands[currentKeys[j]])
        }
        var color = '#ffab40'
        for (var i = 0; i < currentFingers.length; i++) {
          var finger = currentFingers[i]
          var key = currentKeys[i]
          // Space is the only key where we can use two fingers
          if (key === 'SPACE') {
            document.getElementById('leftHand').getElementById('left-finger-1').setAttributeNS(null, 'fill', color)
            document.getElementById('rightHand').getElementById('right-finger-1').setAttributeNS(null, 'fill', color)
          } else {
            // var hand = finger.split('-')[0]
            // Highlight the correct finger on the correct hand
            // document.getElementById(hand + 'Hand').getElementById(finger).setAttributeNS(null, 'fill', color)
          }
          // Highlight the correct key on the keyboard
          // console.log(key)
          document.getElementById('keyboard').getElementById(key).setAttributeNS(null, 'fill', color)
          // var test = document.getElementById('keyboard').getElementById('C')
          // test.setAttributeNS('fill', 'red')
        }
      },
      /**
      * Resets all the fingers and keys to their default color
      */
      resetHints: function () {
        var keys = Object.keys(hands)
        var fingers = ['right-finger-1', 'left-finger-1', 'right-finger-2', 'left-finger-2', 'right-finger-3', 'left-finger-3', 'right-finger-4', 'left-finger-4', 'right-finger-5', 'left-finger-5']
        var greyKeys = ['BACKSPACE', 'MENU', 'FN', 'WINDOWS', 'path5784', 'SPACE', 'ALT_GR', 'ENTER', 'RIGHT_SHIFT', 'RIGHT_CTRL', 'ALT', 'TAB', 'CAPS_LOCK', 'LEFT_SHIFT', 'LEFT_CTRL']
        var hand
        // Loop through all the fingers
        for (var i = 0; i < fingers.length; i++) {
          hand = fingers[i].split('-')[0]
          // document.getElementById(hand + 'Hand').getElementById(fingers[i]).setAttributeNS(null, 'fill', 'none')
        }
        var svgKeyboard = document.getElementById('keyboard')
        // Loop through all the normal keys
        for (i = 0; i < keys.length; i++) {
          svgKeyboard.getElementById(keys[i]).setAttributeNS(null, 'fill', 'white')
        }
        // Loop through all the grey keys
        for (i = 0; i < greyKeys.length; i++) {
          svgKeyboard.getElementById(greyKeys[i]).setAttributeNS(null, 'fill', '#C1C0C0')
        }
      }
    },
  beforeDestroy () {
    document.onkeypress = null
    clearInterval(this.timer)
  },
  updated () {
    // The dom hass changed, update the list of breaking points in case it's needed
    this.idsBreakBefore = this.getRunesIdsBreakBefore()
  },
  created () {
    this.startGame()
  }
};
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
    align-items: center;
    /* width: 70%; */
    margin-top: 3.5rem;
}
.col1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10rem;
    /* width: 20%; */
    /* margin-right: 7rem; */
}
h2 {
  font-family: "Kantumruy", sans-serif;
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

.text-div {
    height: 15rem;
    width: 75rem;
    border: 2px solid #1b2448;
    border-radius: 10px;
    margin-top: -1rem;
    margin-left: 2rem;
    padding: 1rem;
    text-align: start;
    background-color: white;
    color: #1b2448;
    font-family: 'Kantumruy', sans-serif;
}

.text-wrapper{
  font-weight: normal;
  word-break: break-all;
  line-height: 4.6rem;
  font-size: 3em;
  max-height: 15.65rem;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
  color: black;
}

.text-wrapper > span{
    display: inline-block;
    padding-top: 4px;
    width: fit-content;
}

.space{
    font-size: 1rem;
    color: white;
}
.area {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.key {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60rem;
    height: 30rem;
    /* margin-left: 6.5rem; */
    /* margin-left: -1rem; */
    /* margin-top: 3rem; */
}

@media screen and (max-width: 1110px){
  .key {
    display: none;
  }
}

.text-div {
    height: 15rem;
    width: 75rem;
    border: 2px solid #1b2448;
    border-radius: 10px;
    margin-top: -1rem;
    /* margin-left: 2rem; */
    padding: 1rem;
    text-align: start;
    background-color: white;
    color: #1b2448;
    font-family: 'Kantumruy', sans-serif;
    display: flex;
    justify-content: center;
}
@media screen and (max-width: 1255px) and (min-width: 1175px) {
  .text-div {
    width: 70rem;
  }
}
@media screen and (max-width: 1175px) and (min-width: 1030px) {
  .text-div {
    width: 60rem;
  }
}
@media screen and (max-width: 1030px) and (min-width: 961px) {
  .text-div {
    width: 55rem;
  }
}
@media screen and (max-width: 961px) and (min-width: 860px) {
  .text-div {
    width: 50rem;
  }
}
@media screen and (max-width: 860px) and (min-width: 770px) {
  .text-div {
    width: 45rem;
  }
}
@media screen and (max-width: 770px) and (min-width: 695px){
  .text-div {
    width: 40rem;
  }
}
@media screen and (max-width: 695px) and (min-width: 610px) {
  .text-div {
    width: 35rem;
  }
}
@media screen and (max-width: 610px) and (min-width: 530px) {
  .text-div {
    width: 30rem;
  }
}
@media screen and (max-width: 530px) and (min-width: 500px) {
  .text-div {
    width: 25rem;
  }
}
@media screen and (max-width: 500px) and (min-width: 490px) {
  .text-div {
    width: 20rem;
  }
}
.text-wrapper{
  font-weight: normal;
  word-break: break-all;
  line-height: 4.6rem;
  font-size: 3em;
  max-height: 15.65rem;
  overflow: hidden;
  margin: 0 auto;
  padding: 0
}

.text-wrapper > span{
    display: inline-block;
    padding-top: 4px;
    width: fit-content;
}

.space{
    font-size: 1rem;
    color: white;
}

.hidden {
  display: none;
}

.current {
  color: #ffc10a;
}

.correct {
  color: #3f51b5;
}
</style>
