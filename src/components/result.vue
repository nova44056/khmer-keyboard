<template>
  
  <div class="pop-up">
    <div id="party-popper">🎉</div>

    <p class="result">Woah, you are good !</p>
    <p class="bestScore">
      Your best score so far is <span id="best">1600.</span> If you save now,
      your place on leaderboard will be <span id="rank">3</span>.
    </p>

    <div class="buttons">
        <button class="saveScore">
            Save your best score
        </button>

        <button class="tryAgain">
            Try Again !
        </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrap {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pop-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(78, 38, 143);
  width: 50vh;
  margin: auto;
  color: white;
  padding: 30px;
}

#party-popper {
  font-size: 50px;
}

.bestScore {
  line-height: 2.5rem;
  font-weight: 700;
}

.result {
  font-weight: bold;
  font-size: 2rem;
}

#best {
  color: orange;
}

#rank {
  color: orange;
}

.buttons {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 1rem;
}
.saveScore{
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: rgb(131, 233, 105);
    color: white;
    font-weight: 600;
    width: 45%;
}

.tryAgain{
    outline: none;
    width: 45%;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: rgb(221, 71, 91);
    color: white;
    font-weight: 600;
}

.tryAgain,.saveScore:hover{
    cursor: pointer;
}


</style>
