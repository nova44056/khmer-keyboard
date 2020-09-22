<template>
    <div class="lottie">
      <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_jq4i7W.json"  background="transparent"  speed="0.7"  style="width: 100px; height: 120px;"  loop  autoplay></lottie-player>
      <div class="text">
      <h2>0</h2>
      </div>
    </div>
</template>

<script>
export default {
  name: 'error'
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
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
    margin-top: 2rem;
  }

  .text {
    margin-left: 2rem;
    display: flex;
    justify-content: center;
  }
</style>
