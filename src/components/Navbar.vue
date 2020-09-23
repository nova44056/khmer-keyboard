<template>
  <div class="nav">
		<div class="part1">
    <i class="far fa-user"></i>
    <h2>USERNAME</h2>
		</div>
		<div class="part2">
			<h2>Login</h2>
			<h3>|</h3>
			<h2>Sign Up</h2>
		</div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
.nav {
  height: 4rem;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: #1b2448;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.fa-user {
	font-size: 2rem;
	margin-top: -0.2rem;
	margin-left: 2rem;
}
.part1 {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.part1 h2 {
	margin-left: 1rem;
	margin-right: 2rem;
}
.part2 {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
}
.part2 h2 {
	margin-right: 0.5rem;
	margin-left: 0.5rem;
}
</style>
