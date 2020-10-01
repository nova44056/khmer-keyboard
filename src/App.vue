<template>
  <div id="app">
    <div v-bind:class="{ transparent: $store.state.showAbout }">
    

       <vue-page-transition name="fade-in-right"> 
        <router-view />
      </vue-page-transition>
      <pgIndicator />
    </div>

    <vue-page-transition name="fade">
      <aboutUs class="aboutus" />
    </vue-page-transition>


  </div>
</template>

<script>
import pgIndicator from "./components/StaticComponent/PageIndicator";
import aboutUs from "./components/PopUpBoxComponent/AboutUs";

export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    pgIndicator,
    aboutUs,
  },
  methods: {
    toggleVisibility() {
      this.show = !this.show;
    },
    home () {
      this.$store.dispatch('clear')
      this.$router.push('/timeSelector')
    }, 

    test(){
      this.$router.push('/typeSelector')
    }
  },
};
</script>

<style scoped>

/* // @import url("https://fonts.googleapis.com/css2?family=Kantumruy:wght@700&display=swap"); */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.aboutus {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.transparent {
  filter: blur(8px);
}

.aboutButton {
  display: block;
  margin-top: 1rem;
  position: absolute;
  right: 0;
  margin-right: 1rem;
  border: none;
  background-color: transparent;
  outline: none;
  font-family: "Kantumruy", sans-serif;
  font-size: 1rem;
  cursor: pointer;
}
.aboutButton:hover {
  font-size: 1.1rem;
  transition: 0.1s;
  border-bottom: 2px solid #1b2448;
}
.homeButton {
  display: block;
  position: absolute;
  right: 0;
  margin-top: 1rem;
  margin-right: 7rem;
  border: none;
  background-color: transparent;
  outline: none;
  font-family: "Kantumruy", sans-serif;
  font-size: 1rem;
  cursor: pointer;
}
.homeButton:hover {
  font-size: 1.1rem;
  transition: 0.1s;
  border-bottom: 2px solid #1b2448;
}
.show {
  visibility: visible;
}
</style>
