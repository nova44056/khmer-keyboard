<template>
    <div class="indicator-wrapper">
        <div class="indicator" :class="{isActive: isActivePage1}"></div>
        <div class="indicator" :class="{isActive: isActivePage2}"></div>
    </div>
</template>
<script>
export default {
  name: 'page-indicator',
  computed: {
    isActivePage1 () {
      return this.$store.state.isActivePage1
    },
    isActivePage2 () {
      return this.$store.state.isActivePage2
    }
  }
}
</script>

<style scoped>
.isActive{
    height: 2rem !important;
    width: 2rem !important;
    transition: 1s;
}
.indicator-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}

.indicator{
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  background-color: #005bb8;
  margin: 1rem;
}
</style>
