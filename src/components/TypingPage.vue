<template>
    <div class="row">
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
export default {
  name: 'typingpage',
  components: {
    keyboard,
    textareas,
    timer,
    error,
    score,
    exit
  }
}
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid black;
}
.row1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
}
.row2 {
    display: flex;
    flex-direction: column;
}
.key {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 300px;
}
</style>
