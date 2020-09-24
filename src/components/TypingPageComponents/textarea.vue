<template>
    <div class="text-div">
        <h2 class="text-wrapper">
            <span v-for="(rune, index) in runes" :key='index' :class="{space: rune.isSpace, current: rune.isCurrent, correct: rune.isCorrect, hidden: rune.isHidden}">
                {{rune.rune}}
            </span>
        </h2>
    </div>
</template>

<script>
export default {
  name: 'textareas',
  computed: {
    runes () {
      return this.$store.state.runes
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy&display=swap");
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
    width: 27rem;
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
