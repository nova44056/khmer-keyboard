<template>
  
  <div class="pop-up">
    <!-- <div id="party-popper">🎉</div> -->

    <!-- <p class="result">ល្អណាស់!</p> -->
    <!-- <p class="bestScore">
      Your best score so far is <span id="best">1600.</span> If you save now,
      your place on leaderboard will be <span id="rank">3</span>.
    </p> -->

    <!-- <div class="buttons">
        <button class="saveScore">
            Save your best score
        </button>

        <button class="tryAgain">
            Try Again !
        </button>
    </div> -->
    <div class="ani">
      <button>X</button>
      <lottie-player src="https://assets7.lottiefiles.com/datafiles/3RKIaYNZqu6RrV0/data.json" mode="bounce" background="transparent"  speed="0.7"  style="width: 300px; height: 300px;"  autoplay></lottie-player>
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
  height: 30rem;
  width: 50rem;
  border: 2px solid black;
  background-color: black;
}
.ani {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  color: white;
  margin-top: -2rem;
}
.ani > button{
  color: white;
  height: 2rem;
  width: 2rem;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 2rem;
  display: block;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: 1;
  float: right;
  position: absolute;
  right: 1rem;
  top: 1rem;
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
