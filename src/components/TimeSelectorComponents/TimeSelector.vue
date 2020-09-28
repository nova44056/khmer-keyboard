<template>
  <div class="page-wrapper">
    <div class="header">
      <h1>ជ្រើសរើសនាទី</h1>
    </div>
    <div class="timer-wrapper">
      <div class="cards-wrapper">
        <button class="card spin circle">
          <svg
            class="check"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 620.86 620.83"
          >
            <path
              class="cls-1"
              d="M960.55,230.08c171.42,0,310.42,139.09,310.38,310.47S1131.84,851,960.45,850.92,650,711.83,650.07,540.45,789.16,230,960.55,230.08Z"
              transform="translate(-650.07 -230.08)"
            />
            <path
              class="cls-2"
              d="M927.54,624.69c2.07-1.4,3-3.64,4.21-5.56q63.06-96.27,126-192.59c7.47-11.41,19-16.21,30.82-13,18.13,4.95,25.76,25.4,15.3,41.59-14.72,22.79-29.68,45.43-44.53,68.13q-51.95,79.38-103.86,158.77c-7.54,11.55-26.64,16.76-39,5.93-19.57-17.08-38.39-35-57.49-52.63-10.41-9.6-20.9-19.12-31.1-28.94a26.7,26.7,0,0,1-5.75-30.8A27.14,27.14,0,0,1,848.91,560c7.34.48,13.16,4.07,18.44,9q28.71,26.75,57.56,53.32C925.76,623.12,926.64,623.89,927.54,624.69Z"
              transform="translate(-650.07 -230.08)"
            />
          </svg>
          <one />
        </button>
        <button class="card">
          <three />
          <svg
            class="check"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 620.86 620.83"
          >
            <path
              class="cls-1"
              d="M960.55,230.08c171.42,0,310.42,139.09,310.38,310.47S1131.84,851,960.45,850.92,650,711.83,650.07,540.45,789.16,230,960.55,230.08Z"
              transform="translate(-650.07 -230.08)"
            />
            <path
              class="cls-2"
              d="M927.54,624.69c2.07-1.4,3-3.64,4.21-5.56q63.06-96.27,126-192.59c7.47-11.41,19-16.21,30.82-13,18.13,4.95,25.76,25.4,15.3,41.59-14.72,22.79-29.68,45.43-44.53,68.13q-51.95,79.38-103.86,158.77c-7.54,11.55-26.64,16.76-39,5.93-19.57-17.08-38.39-35-57.49-52.63-10.41-9.6-20.9-19.12-31.1-28.94a26.7,26.7,0,0,1-5.75-30.8A27.14,27.14,0,0,1,848.91,560c7.34.48,13.16,4.07,18.44,9q28.71,26.75,57.56,53.32C925.76,623.12,926.64,623.89,927.54,624.69Z"
              transform="translate(-650.07 -230.08)"
            />
          </svg>
        </button>
        <button class="card">
          <svg
            class="check"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 620.86 620.83"
          >
            <path
              class="cls-1"
              d="M960.55,230.08c171.42,0,310.42,139.09,310.38,310.47S1131.84,851,960.45,850.92,650,711.83,650.07,540.45,789.16,230,960.55,230.08Z"
              transform="translate(-650.07 -230.08)"
            />
            <path
              class="cls-2"
              d="M927.54,624.69c2.07-1.4,3-3.64,4.21-5.56q63.06-96.27,126-192.59c7.47-11.41,19-16.21,30.82-13,18.13,4.95,25.76,25.4,15.3,41.59-14.72,22.79-29.68,45.43-44.53,68.13q-51.95,79.38-103.86,158.77c-7.54,11.55-26.64,16.76-39,5.93-19.57-17.08-38.39-35-57.49-52.63-10.41-9.6-20.9-19.12-31.1-28.94a26.7,26.7,0,0,1-5.75-30.8A27.14,27.14,0,0,1,848.91,560c7.34.48,13.16,4.07,18.44,9q28.71,26.75,57.56,53.32C925.76,623.12,926.64,623.89,927.54,624.69Z"
              transform="translate(-650.07 -230.08)"
            />
          </svg>
          <five/>
        </button>
      </div>
    </div>

    <div class="button-wrapper">
        <button :disabled="!isTimerChosen" @click="$router.push({name: 'SelectionPage2'})">បន្ត</button>
    </div>
    <div>
      <!-- <div class="circle-wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
      </div> -->
    </div>
  </div>
</template>

<script>
import one from './one.vue'
import three from './three.vue'
import five from './five.vue'
export default {
  name: 'timeselector',
  components: {
    one,
    three,
    five
  },
  data(){
    return{
    isTimerChosen: false,
    }
  },
  created () {
    this.$store.dispatch('toggleActivePage1')
    this.checkFocus()
  },
  destroyed () {
    this.$store.dispatch('toggleActivePage1')
  },

  methods:{
  // chooseTimer(){
  //   this.isTimerChosen = true
  // },

  // // changeFalse(){
  // //   this.isTimerChosen = false 
  // // },

  checkFocus () {
		setInterval(() => {
      if ($(".card").is(":focus")) {
        this.isTimerChosen = true
        this.$store.dispatch('setTime')
      }else {
        this.isTimerChosen = false
        this.$store.dispatch('unSetTime')

      }
		},100)
	}

 
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kantumruy:wght@700&display=swap');
.button-wrapper{
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-wrapper button{
  height: 4rem;
  width: 12rem;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  outline: none;
  font-family: 'Kantumruy', sans-serif;
  font-size: 1.5rem;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
}
h1 {
    font-family: 'Kantumruy', sans-serif;
    font-size: 3rem;
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
  flex-direction: column;
  margin-top: 3rem;
  height: 20rem;
}
.cards-wrapper {
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
  margin: 1rem;
  width: 60%;
  position: relative;
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
  position: sticky;
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
  transition: 1s;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  border-radius: 50%;
  height: 15rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  outline: none;
  cursor: pointer;
  position: relative;
}
.card:focus {
  border: 6px solid #005bb8;
  /* box-shadow: 0 0px 0px #005bb8,
    0 10px 100px #005bb8; */
  /* fill: red; */
  height: 20rem;
  width: 20rem;
  transition: 1s;
}

.check {
  position: absolute;
  float: right;
  top: 4rem;
  left: 13.5rem;
  height: 2rem;
  visibility: hidden;
}

.card:focus .check {
  visibility: visible;
  left: 17.5rem;
  transition: ease 1s;
}

* {
  overflow: visible !important;
}

/* .card:after {
    content: ' ';
    display: block;
    position: relative;
} */

.cls-1 {
  fill: #005bb8;
}
.cls-2 {
  fill: #f6f6f6;
}
@media screen and (max-width: 920px) and (min-width: 720px) {
  .card {
    height: 12rem;
    width: 12rem;
  }
  .card:focus {
    height: 15rem;
    width: 15rem;
  }
  .check {
    top: 3rem;
    left: 11.2rem;
  }
  .card:focus .check {
    left: 12.8rem;
  }
  .button-wrapper {
    margin-top: -3rem;
  }
}
@media screen and (max-width: 720px) and (min-width: 660px) {
  .card {
    height: 10rem;
    width: 10rem;
    margin-top: -1rem;
  }
  .card:focus {
    height: 12rem;
    width: 12rem;
  }
  .check {
    top: 2.5rem;
    left: 9.2rem;
  }
  .card:focus .check {
    left: 10.2rem;
  }
  .button-wrapper {
    margin-top: -3rem;
  }
}
@media screen and (max-width: 660px) and (min-width: 610px) {
  .card {
    height: 9rem;
    width: 9rem;
    margin-top: -1rem;
  }
  .card:focus {
    height: 11rem;
    width: 11rem;
  }
  .check {
    top: 1.8rem;
    left: 7.2rem;
  }
  .card:focus .check {
    left: 9rem;
  }
  .button-wrapper {
    margin-top: -5rem;
  }
}
@media screen and (max-width: 610px) and (min-width: 555px) {
  .card {
    height: 8.5rem;
    width: 8.5rem;
    margin-top: -2rem;
  }
  .card:focus {
    height: 9rem;
    width: 9rem;
  }
  .check {
    height: 1.7rem;
    top: 2rem;
    left: 7.2rem;
  }
  .card:focus .check {
    left: 7.2rem;
  }
  .button-wrapper {
    margin-top: -4rem;
  }
}
@media screen and (max-width: 555px) and (min-width: 492px) {
  .card {
    height: 7rem;
    width: 7rem;
    margin-top: -2rem;
  }
  .card:focus {
    height: 9rem;
    width: 9rem;
  }
  .check {
    height: 1.7rem;
    top: 1.5rem;
    left: 6.2rem;
  }
  .card:focus .check {
    left: 7.2rem;
  }
  .button-wrapper {
    margin-top: -5rem;
  }
}
</style>
