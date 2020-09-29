<template>
  <div id="app">
    <message/>
    <button @click="toggleVisibility()" class="aboutButton"> About </button>
    <!-- <timeselector/> -->
    <!-- <typeselector/> -->
    <vue-page-transition name="fade-in-right">
      <router-view/>
    </vue-page-transition>

    <aboutUs class="aboutus" />
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
  visibility: hidden;
}

.aboutButton {
  float: right;
  display: block;
  margin-top: 1rem;
  margin-right: 1rem;
}

.show{
  visibility: visible;
}

</style>
