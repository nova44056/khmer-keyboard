<template>
  <div class="page">
    <button>ចាប់ផ្តើម</button>
    <lottie-player src="https://assets5.lottiefiles.com/datafiles/WIRy7Ny0KV28BJg/data.json" mode="bounce" background="transparent"  speed="5"  style="width: 300px; height: 200px;"  loop  autoplay></lottie-player>
  </div>
</template>

<script>
export default {
  name: 'startpage'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy&display=swap");
.page {
  align-items: center;
  padding: 375px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
button {
  height: 160px;
  width: 300px;
  margin: 5px;
  border-radius: 8px;
  font-size: 40px;
  font-family: "Kantumruy", sans-serif;
  background-color: white;
  cursor: pointer;
}
button:hover {
  transform: translate(0, -1px);
  transition: 0.5s;
}
</style>
