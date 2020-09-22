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
  border: 1px solid white;
  border-radius: 8px;
  font-size: 24px;
  font-family: "Kantumruy", sans-serif;
  background-color: white;
  cursor: pointer;
  outline: none;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
}
button:hover {
  transform: translate(0, -1px);
  transition: 0.7s;
}
button:focus {
  background-color: #1b2448;
  color: white;
  border: none;
}
</style>
