<template>
  <main>
    <div class="col">
      <div class="col1">
        <!-- timerstats -->
        <div class="lottie">
          <lottie-player
            id="lottie"
            src="https://assets10.lottiefiles.com/packages/lf20_AMwwvI.json"
            background="transparent"
            speed="0.8"
            style="width: 100px; height: 110px;"
            loop
            autoplay
          ></lottie-player>
          <!-- <div class="text">
          </div> -->
            <countdown :time="this.time * 30000" @end="endGame" ref="countdown" :auto-start="false">
              <template slot-scope="props">{{ props.minutes }} : {{ props.seconds }} </template>
            </countdown>
            <!-- ១ៈ០០ ៣ៈ០០  -->
        </div>
        <!-- errorstats -->
        <div class="lottie" :class="{ 'error-bg': alertError }">
          <lottie-player
            id="lottie"
            src="https://assets2.lottiefiles.com/private_files/lf30_jq4i7W.json"
            background="transparent"
            speed="1"
            style="width: 100px; height: 110px"
            loop
            autoplay
          ></lottie-player>
          <span :class="{ error: alertError }">{{ errors }}</span>
          <!-- <div class="text">
          </div> -->
        </div>
        <div class="lottie">
          <lottie-player
            id="lottie"
            src="https://assets4.lottiefiles.com/packages/lf20_Ex9JsF.json"
            background="transparent"
            speed="0.5"
            style="width: 100px; height: 120px"
            loop
            autoplay
          ></lottie-player>
            <span>{{ convertToKhmerNum(runesCounter) }}
          / {{ convertToKhmerNum(totalRunes) }}</span>
        </div>
        <!-- <timer/> -->
        <!-- <error/> -->
        <!-- <score /> -->
      </div>

        <!-- Text Counter -->
      <!-- <div class="row">
        <div class="runesWrap">
          <strong>{{ convertToKhmerNum(runesCounter) }}</strong>
          / {{ convertToKhmerNum(totalRunes) }}
        </div> -->

        <!-- Errors -->
        <!-- <div class="errorsWrap">
          <strong :class="{ error: alertError }">{{ errors }}</strong> errors
        </div>
      </div> -->

      <!-- <div id="text-div" :class="{'error-bg': alertError}">
        <h2 id="text-wrapper">
            <span v-for="(rune, index) in runes" :key='index' :class="{space: rune.isSpace, current: rune.isCurrent, correct: rune.isCorrect, hidden: rune.isHidden}" class="runes" :id="rune.id">
                {{rune.rune}}
            </span>
        </h2>
      </div> -->

      <div id="text-div">
        <h2 id="text-wrapper">
          <span
            v-for="rune in runes"
            :key="rune.id"
            class="runes"
            :class="{
              current: rune.isCurrent,
              correct: rune.isCorrect,
              hidden: rune.isHidden,
              space: rune.isSpace,
            }"
            :id="rune.id"
            >{{ rune.rune }}</span
          >
        </h2>
      </div>

      <div>
        <h4 id="decomposition-vk">
          <span>​</span>
          <span
            v-for="letter in letters"
            :key="letter.id"
            :class="{ current: letter.isCurrent, correct: letter.isCorrect }"
            :id="letter.id"
            >{{ letter.letter }}</span
          >
        </h4>
      </div>

      <div id="handsAndKeyboardWrap-vk">
        <div class="row">
          <leftHand id="leftHand-vk" />
          <keyboard id="keyboard-vk" />
          <rightHand id="rightHand-vk" />
        </div>
      </div>
    </div>

    <keyboardMessage v-bind:class="{showError: !isKhmer}" />
  </main>
</template>

<script>
// import error from './TypingPageComponents/error'
// import timer from './TypingPageComponents/timer'
import score from "./TypingPageComponents/score";
import keyboard from "./TypingPageComponents/keyboard";
import splitKhmerRunes from "../split-khmer";
import { textsList } from "./texts-list";
import mapping from "../keyboard-mapping";
import hands from "./hands";
import leftHand from "./LeftHand";
import rightHand from "./RightHand";
import khmerWord from "../mapping.js"
import keyboardMessage from "../components/displayWrongKeyboard"
import threeVue from './TimeSelectorComponents/three.vue';

function initialState() {
  return {
    text: "",
    time: 1,
    test: null,
    seconds: 0,
    runes: [],
    letters: [],
    runesCounter: 0,
    totalRunes: 0,
    errors: 0,
    alertError: false,
    idsBreakBefore: null,
    isKhmer : true, 
  };
}

export default {
  name: "VisualKeyboard",
  components: {
    leftHand,
    rightHand,
    keyboard,
    // timer,
    // error,
    score,
    keyboardMessage,
  },
  data: initialState,

  mounted() {
    this.startGame();
  },

 
  methods: {
    testFunction () {
      console.log('Hello World')
    },
    convertToKhmerNum(num) {
      let numData = {
        0: "០",
        1: "១",
        2: "២",
        3: "៣",
        4: "៤",
        5: "៥",
        6: "៦",
        7: "៧",
        8: "៨",
        9: "៩",
      };

      let khmNum = "";
      for (let i = 0; i < num.toString().length; i++) {
        khmNum += numData[num.toString()[i]];
      }
      return khmNum;
    },

     isKhmerWord: function(userWord){
      if(khmerWord.includes(userWord)){
        this.isKhmer = true
        }
      else {
        this.isKhmer = false
      }
    

      
    },
    /**
     * Initializes the game by changing the DOM
     */
    startGame: function () {
      // Make the game content visible
      // document.getElementById('gameWrap-vk').style.display = 'inline'

      // Select random text from the texts list
      var random = Math.floor(Math.random() * textsList.list.length);
      this.text = textsList.list[random];
      // Start the timer
      clearInterval(this.timer);
      var vm = this;
      this.timer = setInterval(() => {
        vm.seconds++;
      }, 1000);
      // Start playing
      this.play();
    },
    /**
     * Play the game
     * The user has to type a text in khmer
     */
    play: function () {
      var vm = this;
      // Initialization
      // var completeText = ''

      // set runes counter to  0
      this.runesCounter = 0;

      // return array of decomposited khmer words
      var listRunes = splitKhmerRunes(this.text);

      // set total Runes equal to the words in listRunes
      this.totalRunes = listRunes.length;

      this.splitTextIntoSpannedRunes(this.text);
      this.splitRuneIntoSpannedLetters(listRunes[this.runesCounter]);
      var listKeys = this.getAllKeys(this.text);
      var currentLetters = "";
      // Highlights
      this.runes[this.runesCounter].isCurrent = true;
      this.letters[currentLetters.length].isCurrent = true;
      // Display the first hints
      this.resetHints();
      this.nextHint(listKeys);

      // Game progress
      document.onkeypress = function (ev) {
        ev.preventDefault();
        // console.log(ev.shiftKey)
      // if(ev.shiftKey) {
      //     if (ev.shiftLeft) {
      //       console.log('shift-left'); 
      //     }
      //     else
      //     {
      //       console.log('shift-right');
      //     }
      // }
      vm.isKhmerWord(ev.key)
      if(vm.isKhmer){  
        vm.$refs.countdown.start();
        var isCorrect = vm.areRightKeysPressed(ev, listKeys, currentLetters);
        // Pressed key is correct
        if (isCorrect) {
          // completeText += ev.key
          currentLetters += ev.key;
          // Highlight correct letter
          vm.letters[currentLetters.length - 1].isCurrent = false;
          vm.letters[currentLetters.length - 1].isCorrect = true;
          // Check if a grapheme has been completed
          var graphemes = splitKhmerRunes(currentLetters);
          if (graphemes[0] === listRunes[vm.runesCounter]) {
            // We show to the user that the grapheme is completed
            vm.runes[vm.runesCounter].isCurrent = false;
            vm.runes[vm.runesCounter].isCorrect = true;
            // Current grapheme is completed, we start again to track the next one
            currentLetters = "";
            vm.letters = [];
            vm.runesCounter++;
            // Display decomposition of the next grapheme if exists
            if (vm.runesCounter < listRunes.length) {
              vm.splitRuneIntoSpannedLetters(listRunes[vm.runesCounter]);
            }
            // If we arrive at the end of a line, hide it
            vm.scrollSync();
          }
          // Current action is done
          listKeys.shift();
          // No next action, game is won
          if (listKeys.length === 0) {
            currentLetters = "";
            vm.endGame();
          } else {
            // We display hints for the next action
            vm.runes[vm.runesCounter].isCurrent = true;
            vm.letters[currentLetters.length].isCurrent = true;
            vm.resetHints();
            vm.nextHint(listKeys);
          }
        } else {
          // Pressed key is wrong
          vm.alertWrongKey();
        }
      }
      }
    },
    /**
     * Displays the modal with the scores
     * Also saves the highest score
     * In case user wants to play again, resets data
     */
    endGame: function () {
      clearInterval(this.timer);
      var minutes = Math.round((this.seconds / 60) * 100) / 100;
      var newSpeed = this.runesCounter / (this.seconds / 60);
      this.seconds = 0;
      // Save highest scores in terms of speed and accuracy
      var oldErrors = localStorage.getItem("visualKeyboard.acc.errors")
        ? localStorage.getItem("visualKeyboard.acc.errors")
        : Infinity;
      if (this.errors < oldErrors) {
        // best in terms of accuracy
        localStorage.setItem("visualKeyboard.acc.time", minutes);
        localStorage.setItem("visualKeyboard.acc.errors", this.errors);
        localStorage.setItem("visualKeyboard.acc.runes", this.runesCounter);
      }
      var oldMinutes = localStorage.getItem("visualKeyboard.speed.time")
        ? localStorage.getItem("visualKeyboard.speed.time")
        : Infinity;
      var oldRunes = localStorage.getItem("visualKeyboard.speed.runes")
        ? localStorage.getItem("visualKeyboard.speed.runes")
        : 0;
      var oldSpeed = oldRunes / oldMinutes;
      if (newSpeed > oldSpeed) {
        // best in terms of accuracy
        localStorage.setItem("visualKeyboard.speed.time", minutes);
        localStorage.setItem("visualKeyboard.speed.errors", this.errors);
        localStorage.setItem("visualKeyboard.speed.runes", this.runesCounter);
      }
    },
    /**
     * Display the text to be typed by the user
     * with each rune encapsulated in a span and with a specific id
     * to facilitate their highlighting later
     * @param text the text to be typed by the user
     */
    splitTextIntoSpannedRunes: function (text) {
      // Split the string to an array of grapheme clusters (one string each)
      var graphemes = splitKhmerRunes(text);
      for (var i = 0; i < graphemes.length; i++) {
        var isSpace = false;
        if (graphemes[i].charCodeAt(0) === 32) {
          graphemes[i] = "⎵";
          isSpace = true;
        }
        this.runes.push({
          id: "rune-" + i,
          rune: graphemes[i],
          isCurrent: false,
          isCorrect: false,
          isHidden: false,
          isSpace: isSpace,
        });
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
      var letters = rune.split("");
      for (var i = 0; i < letters.length; i++) {
        var letter = letters[i];
        // Add a space before this specific character, otherwise it doesn't stand out
        if (letter === "្") {
          letter = " ្"; // bug fix to make '្' visible
        }
        this.letters.push({
          id: "letter-" + i,
          letter: letter,
          isCurrent: false,
          isCorrect: false,
        });
      }
    },
    /**
     * Computes where the overflowed text is broken to begin new lines
     */
    getRunesIdsBreakBefore: function () {
      var idBreakBefore = [];
      var runes = document.getElementsByClassName("runes");
      // console.log(runes);
      // Loop through all the runes
      for (var i = 0; i < runes.length; i++) {
        // If a rune has minimal offsetLeft, it means it's on the left of the element, ie at the beginning of a new line
        if (!runes[i - 1] || runes[i].offsetLeft < runes[i - 1].offsetLeft) {
          idBreakBefore.push(i);
        }
      }
      return idBreakBefore;
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
          this.runes[i].isHidden = true;
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
      var listKeys = [];
      // Get the list of actions to be done by the user
      for (var i = 0; i < text.length; i++) {
        var letter = text.substring(i, i + 1);
        var keys = mapping[letter];
        if (keys === undefined) {
          console.log("Mapping undefined: " + letter);
        } else {
          listKeys.push(keys);
        }
      }
      return listKeys;
    },
    /**
     * Checks if the keys the user typed fit with what the action should be
     * @param event the pressedKey event generated when the user typed a new character
     * @param listKeys the current ordered list of keys to type
     * @return a boolean, true if the right keys have have been pressed, false otherwise
     */
    areRightKeysPressed: function (event, listKeys, currentLetters) {
      var keyPressed = mapping[event.key];
      var isCorrect = true;
      var keyToPress = listKeys[0];

      // Careful if typing in english letters
      if (keyPressed === undefined) {
        isCorrect = false;
      } else if (keyToPress.length > 1) {
        // More than one key to press means the first key is ALT or SHIFT
        if (keyToPress[0].split("_")[1] === "SHIFT") {
          isCorrect = event.shiftKey;
        } else if (keyToPress[0] === "ALT_GR") {
          // Browsers don't detect the pressing of the ALT_GR key
          // That's why here we check the letters typed instead of the keys pressed
          isCorrect = event.key === this.letters[currentLetters.length].letter;
        }
        // We've checked SHIFT and ALT, we move on to checking the second key
        keyPressed = keyPressed[1];
        keyToPress = keyToPress[1];
      } else {
        keyPressed = keyPressed[0];
        keyToPress = keyToPress[0];
      }
      isCorrect = keyPressed === keyToPress && isCorrect;
      return isCorrect;
    },
    /**
     * When the user makes a mistake, the text area and error counter blinks in orange
     * and the error counter is incremented
     */
    alertWrongKey: function () {
      var vm = this;
      vm.alertError = true;
      // Back to normal after 0.5s
      setTimeout(function () {
        vm.alertError = false;
      }, 500);
      // Incrementation
      this.errors++;
    },
    /**
     * Highlights the fingers and keys to use for the current action in orange
     * To help the user type the text correctly
     * @param listKeys the current ordered list of keys to type
     */
    nextHint: function (listKeys) {
      // These are arrays
      var currentKeys = listKeys[0];
      var currentFingers = [];
      for (var j = 0; j < currentKeys.length; j++) {
        currentFingers.push(hands[currentKeys[j]]);
      }
      var color = "#ffab40";
      for (var i = 0; i < currentFingers.length; i++) {
        var finger = currentFingers[i];
        var key = currentKeys[i];
        // Space is the only key where we can use two fingers
        if (key === "SPACE") {
          document
            .getElementById("leftHand")
            .getElementById("left-finger-1")
            .setAttributeNS(null, "fill", color);
          document
            .getElementById("rightHand")
            .getElementById("right-finger-1")
            .setAttributeNS(null, "fill", color);
        } else {
          var hand = finger.split("-")[0];
          // Highlight the correct finger on the correct hand
          document
            .getElementById(hand + "Hand")
            .getElementById(finger)
            .setAttributeNS(null, "fill", color);
        }
        // Highlight the correct key on the keyboard
        document
          .getElementById("keyboard")
          .getElementById(key)
          .setAttributeNS(null, "fill", color);
      }
    },
    /**
     * Resets all the fingers and keys to their default color
     */
    resetHints: function () {
      var keys = Object.keys(hands);
      var fingers = [
        "right-finger-1",
        "left-finger-1",
        "right-finger-2",
        "left-finger-2",
        "right-finger-3",
        "left-finger-3",
        "right-finger-4",
        "left-finger-4",
        "right-finger-5",
        "left-finger-5",
      ];
      var greyKeys = [
        "BACKSPACE",
        "MENU",
        "FN",
        "WINDOWS",
        "path5784",
        "SPACE",
        "ALT_GR",
        "ENTER",
        "RIGHT_SHIFT",
        "RIGHT_CTRL",
        "ALT",
        "TAB",
        "CAPS_LOCK",
        "LEFT_SHIFT",
        "LEFT_CTRL",
      ];
      var hand;
      // Loop through all the fingers
      for (var i = 0; i < fingers.length; i++) {
        hand = fingers[i].split("-")[0];
        document
          .getElementById(hand + "Hand")
          .getElementById(fingers[i])
          .setAttributeNS(null, "fill", "none");
      }
      var svgKeyboard = document.getElementById("keyboard");
      // Loop through all the normal keys
      for (i = 0; i < keys.length; i++) {
        svgKeyboard
          .getElementById(keys[i])
          .setAttributeNS(null, "fill", "white");
      }
      // Loop through all the grey keys
      for (i = 0; i < greyKeys.length; i++) {
        svgKeyboard
          .getElementById(greyKeys[i])
          .setAttributeNS(null, "fill", "#C1C0C0");
      }
    },


   
  },
  beforeDestroy() {
    document.onkeypress = null;
    clearInterval(this.timer);
  },
  updated() {
    // The dom hass changed, update the list of breaking points in case it's needed
    this.idsBreakBefore = this.getRunesIdsBreakBefore();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy&display=swap");
#leftHand-vk,
#rightHand-vk {
  display: none;
}
.error-bg {
  animation: errorAnimationBackground 0.5s;
  animation: shake 0.5s;
  animation-iteration-count: 2;
  box-shadow: 1px 1px 18px 2px rgba(255,0,0,1) !important;
}

@keyframes errorAnimationBackground {
  0% {
    background-color: #ddd;
  }
  33% {
    background-color: #ffc10a;
  }
  100% {
    background-color: #ddd;
  }
}

.error {
  animation: errorAnimation 0.5s;
}

@keyframes errorAnimation {
  0% {
    color: #ffc10a;
  }
  33% {
    color: black;
  }
  100% {
    color: #ffc10a;
  }
}

.transparent {
  
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

}

.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* visibility: hidden; */
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
  /* width: 100rem; */
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  /* width: 20%; */
  /* margin-right: 7rem; */
}
.row {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
h2 {
  font-family: "Kantumruy", sans-serif;
  color: black;
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

#text-div {
  height: 15rem;
  width: 75rem;
  border: 2px solid #1b2448;
  border-radius: 10px;
  margin-top: -2rem;
  /* margin-left: -3rem; */
  padding: 1rem;
  text-align: start;
  background-color: white;
  color: #1b2448;
  font-family: "Kantumruy", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-width: 500px; */
}

#text-wrapper {
  font-weight: normal;
  word-break: break-all;
  line-height: 4.8rem;
  font-size: 3em;
  max-height: 15.65rem;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
  color: black;
}

.text-wrapper > span {
  display: inline-block;
  padding-top: 4px;
  width: fit-content;
}

.space {
  font-size: 1rem;
  color: white !important;
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

.showError{
  visibility: visible;
}

@media screen and (max-width: 1110px) {
  .key {
    display: none;
  }
}

#text-div {
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
  font-family: "Kantumruy", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -2rem;
}

#keyboard-vk svg {
  width: 100px;
}
@media screen and (max-width: 1620px) and (min-width: 1255px) {
  .col1 {
    width: 70rem;
  }

  #text-wrapper {
    font-size: 2.8em;
  }
}
@media screen and (max-width: 1255px) and (min-width: 1175px) {
  #text-div {
    width: 70rem;
    margin-left: auto;
    margin-right: auto;
  }
  #text-wrapper {
    font-size: 2em;
  }
  .col1 {
    width: 60rem;
  }
}
@media screen and (max-width: 1175px) and (min-width: 1030px) {
  #text-div {
    width: 60rem;
    margin-left: auto;
    margin-right: auto;
  }
  #text-wrapper {
    font-size: 2.6em;
  }
  .col1 {
    width: 50rem;
  }
  #handsAndKeyboardWrap-vk {
    display: none;
  }
}
@media screen and (max-width: 1030px) and (min-width: 961px) {
  #text-div {
    width: 55rem;
    margin-left: auto;
    margin-right: auto;
  }
  #text-wrapper {
    font-size: 2.4em;
  }
  .col1 {
    width: 40rem;
  }
  #handsAndKeyboardWrap-vk {
    display: none;
  }
}
@media screen and (max-width: 961px) and (min-width: 860px) {
  #text-div {
    width: 50rem;
    margin-left: auto;
    margin-right: auto;
  }
  #text-wrapper {
    font-size: 2.2em;
  }
  .col1 {
    /* width: 30rem; */
  }
  #handsAndKeyboardWrap-vk {
    display: none;
  }
}
@media screen and (max-width: 860px) and (min-width: 770px) {
  #text-div {
    width: 45rem;
    margin-left: auto;
    margin-right: auto;
  }
  #text-wrapper {
    font-size: 2em;
  }
  .col1 {
    /* width: 20rem; */
  }
  #handsAndKeyboardWrap-vk {
    display: none;
  }
}
@media screen and (max-width: 770px) and (min-width: 695px) {
  #text-div {
    width: 40rem;
    margin-left: auto;
    margin-right: auto;
  }
  #text-wrapper {
    font-size: 1.8em;
  }
  .col1 {
    /* width: 15rem; */
  }
  #handsAndKeyboardWrap-vk {
    display: none;
  }
}
@media screen and (max-width: 695px) and (min-width: 610px) {
  #text-div {
    width: 35rem;
    margin-left: auto;
    margin-right: auto;
  }
  #text-wrapper {
    font-size: 1.6em;
  }
  .col1 {
    /* width: 15rem; */
  }
  #handsAndKeyboardWrap-vk {
    display: none;
  }
}
@media screen and (max-width: 610px) and (min-width: 530px) {
  #text-div {
    width: 30rem;
    margin-left: auto;
    margin-right: auto;
  }
  #text-wrapper {
    font-size: 1.4em;
  }
  .col1 {
    /* width: 15rem; */
  }
  #handsAndKeyboardWrap-vk {
    display: none;
  }
}
@media screen and (max-width: 530px) and (min-width: 492px) {
  #text-div {
    width: 27rem;
    margin-left: auto;
    margin-right: auto;
  }
  #text-wrapper {
    font-size: 1.4em;
  }
  .col1 {
    /* width: 10rem; */
  }
  #handsAndKeyboardWrap-vk {
    display: none;
  }
}
.text-wrapper {
  font-weight: normal;
  word-break: break-all;
  line-height: 4.6rem;
  font-size: 3em;
  max-height: 15.65rem;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
}

.text-wrapper > span {
  display: inline-block;
  padding-top: 4px;
  width: fit-content;
}

.space {
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

#decomposition-vk,
#text-vk {
  font-weight: normal;
  word-break: break-all;
}

#text-vk {
  line-height: 1.5em;
  font-size: 3em;
  max-height: 3em;
  overflow: hidden;
  margin: 0 auto;
}

#decomposition-vk {
  font-size: 2em;
  margin: 1% auto 3% auto;
}

#textWrap-vk {
  background-color: #ddd;
  border-radius: 5px;
}
.lottie {
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  margin-top: 6rem;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  background-color: white;
  width: 15rem;
  height: 7rem;
  margin-right: 3rem;
  margin-top: 2rem;
  margin: 1rem;
}

/* .lottie > lottie-player {
  display: flex;
  justify-content: flex-start;
} */
@media screen and (max-width: 1080px) and (min-width: 845px) {
  /* .lottie {
    width: 15rem;
  } */
}
@media screen and (max-width: 845px) and (min-width: 600px) {
  .lottie {
    width: 10rem;
    display: flex;
    flex-direction: column;
    height: 10rem;
    justify-content: center;
    align-items: center;
    /* border-radius: 50%; */
  }
  .text > h3 {
    margin-top: -1rem;
    margin-left: -1.5rem;
  }
  #lottie{
    /* visibility: hidden; */
    /* display: none; */
  }
}
@media screen and (max-width: 600px) {
  .lottie {
    width: 6rem;
    display: flex;
    flex-direction: row;
    height: 6rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .text > h3 {
    margin-top: -1rem;
    margin-left: -1.7rem;
  }

  #lottie{
    /* visibility:hidden; */
    display: none;
  }
}
.text {
  margin-left: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Kantumruy", sans-serif;
  font-size: 1.2rem;
}
.text > h3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
#shaking{
  animation: shake 0.5s;
  animation-iteration-count: 1;
  box-shadow: 1px 1px 18px 2px rgba(255,0,0,1);
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
#popup {
  position: absolute;
  visibility: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  overflow: hidden;
}
</style>
