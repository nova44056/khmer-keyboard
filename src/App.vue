<template>
  <div id="app">
    <message/>
    <button @click="$store.dispatch('showAbout')" class="aboutButton"> អំពីយើង </button>
    <!-- <timeselector/> -->
    <!-- <typeselector/> -->
    <vue-page-transition name="fade-in-right">
      <router-view/>
    </vue-page-transition>

    <aboutUs class="aboutus"/>
    <!-- <navbar/> -->
    <!-- <typingpage/> -->
    <pgIndicator/>
  </div>
</template>

<script>
import message from './components/message'
// import timeselector from './components/TimeSelectorComponents/TimeSelector'
// import typeselector from './components/TypeSelectorComponents/TypeSelector'
import pgIndicator from './components/PageIndicator'
import aboutUs from './components/AboutUs'
// import navbar from './components/Navbar'
// import typingpage from './components/TypingPage'
export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    message,
    // timeselector,
    // typeselector,
    pgIndicator,
    aboutUs
    // navbar,
    // typingpage
  },
  methods: {
    toggleVisibility () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kantumruy:wght@700&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.aboutus {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.aboutButton {
  float: right;
  display: block;
  margin-top: 1rem;
  margin-right: 1rem;
  border: none;
  background-color: transparent;
  outline: none;
  font-family: 'Kantumruy', sans-serif;
  // border-bottom: 1px solid #1b2448;
  font-size: 1rem;
  cursor: pointer;
}
.aboutButton:hover {
  font-size: 1.1rem;
  transition: 0.1s;
  border-bottom: 2px solid #1b2448;
}
.show{
  visibility: visible;
}

</style>
