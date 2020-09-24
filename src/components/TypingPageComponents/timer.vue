<template>
    <div class="lottie">
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_AMwwvI.json"  background="transparent"  speed="0.8"  style="width: 100px; height: 110px;"  loop  autoplay></lottie-player>
      <div class="text">
      <h2>៥ៈ០០</h2>
      <!-- ១ៈ០០ ៣ៈ០០  -->
      </div>
    </div>
</template>

<script>
export default {
  name: 'timer'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy&display=swap");
  .lottie {
    border: 1px solid white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    margin-top: 6rem;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
    background-color: white;
    width: 20rem;
    height: 7rem;
    margin-right: 3rem;
    margin-top: 2rem;
  }
  @media screen and (max-width: 1080px) and (min-width: 845px) {
    .lottie {
      width: 15rem;
    }
  }
  @media screen and (max-width: 845px) and (min-width: 600px){
    .lottie {
      width: 10rem;
      display: flex;
      flex-direction: column;
      height: 10rem;
      justify-content: center;
      align-items: center;
    }
    h2 {
      margin-top: -1rem;
      margin-left: -1.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    .lottie {
      width: 6rem;
      display: flex;
      flex-direction: column;
      height: 10rem;
      justify-content: center;
      align-items: center;
    }
    h2 {
      margin-top: -1rem;
      margin-left: -1.7rem;
    }
  }
  .text {
    margin-left: 2rem;
    display: flex;
    justify-content: center;
    font-family: 'Kantumruy', sans-serif;
  }
</style>
