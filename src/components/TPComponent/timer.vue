<template>
    <div class="lottie">
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_AMwwvI.json"  background="transparent"  speed="0.8"  style="width: 100px; height: 110px;"  loop  autoplay></lottie-player>
      <div class="text">
      <h2>5:00:00</h2>
      </div>
    </div>
</template>

<script>
export default {
  name: 'timer'
}
</script>

<style scoped>
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
  }
  .text {
    margin-left: 2rem;
    display: flex;
    justify-content: center;
  }
</style>
