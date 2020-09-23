<template>
  <div class="big">
    <div class="header">
      <h1>Select Timer</h1>
    </div>
    <div class="timer-wrapper">
      <div class="cards-wrapper">
        <button class="card">
          <svg
            class="check"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.855 10.303c.086.554.145 1.118.145 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.348 0 4.518.741 6.304 1.993l-1.421 1.457c-1.408-.913-3.083-1.45-4.883-1.45-4.963 0-9 4.038-9 9s4.037 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.865-1.902zm-.951-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"
            />
          </svg>
          <one />
        </button>
        <button class="card"><three /></button>
        <button class="card">5</button>
      </div>
    </div>
    <div class="text-wrapper">
      <div class="card-text">
        <h3>1 Minute</h3>
        <h3>2 Minutes</h3>
        <h3>3 Minutes</h3>
      </div>
    </div>
  </div>
</template>

<script>
import one from "./one.vue";
import three from "./three.vue";
export default {
  name: "heading",
  components: {
    one,
    three,
  },
};
</script>

<style scoped>
.big {
  display: flex;
  flex-direction: column;
  width: 100vw;
  border: 1px solid black;
  overflow: hidden;
}
.header {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10rem;
}
.timer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cards-wrapper {
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
  margin: 1rem;
  width: 60%;
}
.text-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -3rem;
}
.card-text {
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
  margin: 1rem;
  width: 60%;
}
.card-text h3 {
  margin: 2rem;
  height: 15rem;
  width: 15rem;
  align-items: center;
}
.card {
  margin: 2rem;
  background-color: white;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  border-radius: 50%;
  height: 15rem;
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  outline: none;
  cursor: pointer;
}
.card:focus {
  border: 3px solid #1b2448;
  fill: red;
  transition: ease 0.2s;
}
.check {
    position: relative;
    float: right;
    top: -60px;
    left: 140px;
    fill: blue;
    background-color: red;
}
/* .card:after {
    content: ' ';
    display: block;
    position: relative;
} */
</style>
