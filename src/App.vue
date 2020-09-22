<template>
  <div id="app">
    <homepage/>
    <textpage/>
    <startpage/>
    <typingpage/>
  </div>
</template>

<script>
import homepage from './components/Homepage'
import textpage from './components/Textpage'
import startpage from './components/StartPage'
import typingpage from './components/TypingPage'
export default {
  components: {
    homepage,
    textpage,
    startpage,
    typingpage
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
