<template>
    <div class="page">
        <h4>សូមជ្រើសរើសប្រភេទឣក្សរសាស្រ្ត</h4>
        <texttype/>
    </div>
</template>

<script>
import texttype from './TXPComponent/texttype'
export default {
  name: 'textpage',
  components: {
    texttype
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy&display=swap");
    .page {
        align-items: center;
        padding: 275px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h4 {
        font-family: 'Kantumruy', sans-serif;
        font-size: 40px;
        font-weight: 500;
    }
</style>
