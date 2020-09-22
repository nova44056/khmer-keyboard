<template>
  <div class="center">
    <div class="page">
      <h4>សូមជ្រើសរើសប្រភេទឣក្សរសាស្រ្ត</h4>
      <texttype />
			<arrowbtn />
    </div>
  </div>
</template>

<script>
import texttype from './TXPComponent/texttype'
import arrowbtn from './TXPComponent/arrowbutton'
export default {
  name: 'textpage',
  components: {
    texttype,
    arrowbtn
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy&display=swap");
.page {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  height: 500px;
  width: 800px;
	margin-top: 5rem;
	background-color: #1b2448;
}
h4 {
  font-family: "Kantumruy", sans-serif;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 3rem;
	color: white;
}
.center {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
