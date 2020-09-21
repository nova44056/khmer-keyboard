<template>
  <div id="app">
    <typingpage/>
    <!-- <homepage/> -->
    <!-- <textpage/> -->
    <!-- <startpage/> -->
  </div>
</template>

<script>
import typingpage from './components/TypingPage'
// import homepage from './components/Homepage'
// import textpage from './components/Textpage'
// import startpage from './components/StartPage'
export default {
  components: {
    typingpage
    // homepage,
    // textpage,
    // startpage,
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
