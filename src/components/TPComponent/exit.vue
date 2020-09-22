<template>
    <div class="box">
      <button>EXIT</button>
    </div>
</template>

<script>
export default {
  name: 'exit'
}
</script>

<style scoped>
  button {
  height: 100px;
  width: 300px;
  border-radius: 8px;
  font-size: 24px;
  font-family: "Kantumruy", sans-serif;
  background-color: white;
  cursor: pointer;
  border: 1px solid white;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  outline: none;
}
button:hover {
  transform: translate(0, -1px);
  transition: 0.6s;
  background-color: #1b2448;
  color: white;
}
.box {
  margin-top: 4rem;
  margin-left: 0.5rem;
}
</style>
