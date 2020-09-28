<template>
  <div id="app">
    <!-- <message/> -->
    <!-- <timeselector/> -->
    <!-- <typeselector/> -->
    <vue-page-transition name="fade-in-right">
      <router-view/>
    </vue-page-transition>
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
// import navbar from './components/Navbar'
// import typingpage from './components/TypingPage'
export default {
  components: {
    message,
    // timeselector,
    // typeselector,
    pgIndicator
    // navbar,
    // typingpage
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
</style>
