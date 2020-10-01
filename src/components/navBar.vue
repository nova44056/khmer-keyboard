<template>
    <div class="navbar">
      <button @click="home()" class="homeButton">ទំព័រដើម</button>
      <button @click="$store.dispatch('showAbout')" class="aboutButton">អំពីយើង
</button>
    </div>
</template>

<script>
    export default {

    methods: {
         home () {
      this.$store.dispatch('clear')
      this.$router.push('/timeSelector')
    }, 
    }
    }
</script>

<style scoped>
.navbar {
    display: flex;
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


</style>