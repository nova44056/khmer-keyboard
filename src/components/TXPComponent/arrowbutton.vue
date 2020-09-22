<template>
  <div>
    <button>
      <lottie-player
        src="https://assets3.lottiefiles.com/datafiles/9P0TTCFMNh7ejB7/data.json"
        background="transparent"
        speed="0.7"
        style="width: 120px; height: 100px;"
        loop
        autoplay
      ></lottie-player>
    </button>
  </div>
</template>

<script>
export default {
  name: 'arrowbtn'
}
</script>

<style scoped>
button {
  height: 80px;
  width: 150px;
  margin-top: 3rem;
  margin-left: 2.5rem;
  border: none;
  font-size: 60px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  color: white;
}
</style>
