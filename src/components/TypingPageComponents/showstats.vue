<template>
    <div class="box">
      <button>បង្ហាញស្ថិតិ</button>
    </div>
</template>

<script>
export default {
  name: 'showstats'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy&display=swap");
  button {
  height: 100px;
  width: 300px;
  border-radius: 8px;
  font-size: 1.5rem;
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
  margin-top: -9rem;
  display: flex;
  margin-left: 95rem;
}
@media screen and (max-width: 1830px) {
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    margin-top: 3rem;
  }
}
@media screen and (max-width: 1110px)
{
  .box {
    margin-top: 5rem;
    display: flex;
    margin-left: 0rem;
    justify-content: center;
    align-items: center;
  }
}
</style>
