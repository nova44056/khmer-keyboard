<template>
  <div id="app">
    <heading/>
    <!-- <navbar/> -->
    <!-- <homepage/> -->
    <!-- <textpage/> -->
    <!-- <startpage/> -->
    <!-- <typingpage/> -->
    <pgIndicator/>
  </div>
</template>

<script>
import heading from './components/HP2Components/heading'
import pgIndicator from './components/PageIndicator'
// import navbar from './components/Navbar'
// import homepage from './components/Homepage'
// import textpage from './components/Textpage'
// import startpage from './components/StartPage'
// import typingpage from './components/TypingPage'
export default {
  components: {
    heading,
    pgIndicator
    // navbar,
    // homepage,
    // textpage,
    // startpage,
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
