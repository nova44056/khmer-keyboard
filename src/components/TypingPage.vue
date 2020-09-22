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
}
.row1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    margin-top: 3.5rem;
}
.row2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    margin-right: 7rem;
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
