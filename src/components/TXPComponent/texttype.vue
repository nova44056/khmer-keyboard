<template>
  <div>
    <div class="row">
      <button>ពាក្យ</button>
      <button>ឣត្ថបទ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'texttype'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy&display=swap");
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Kantumruy", sans-serif;
  margin-top: -30px;
}
button {
  height: 80px;
  width: 150px;
  margin: 5px;
  border-radius: 8px;
  font-size: 24px;
  font-family: "Kantumruy", sans-serif;
  background-color: white;
  cursor: pointer;
}
button:hover {
  transform: translate(0, -1px);
  transition: 0.5s;
}
</style>
