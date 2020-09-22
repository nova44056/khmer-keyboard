<template>
  <div class="big">
    <div class="column">
      <h4>សូមជ្រើសរើសនាទី</h4>
      <div class="row">
        <button>១ នាទី</button>
        <button>៣ នាទី</button>
        <button>៥ នាទី</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hpbtn'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kantumruy:wght@700&display=swap");
.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  font-size: 40px;
  font-family: "Kantumruy", sans-serif;
  font-weight: 500;
  margin-bottom: 3rem;
  color: white;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -30px;
}
button {
  height: 80px;
  width: 150px;
  margin: 5px;
  border: 1px solid white;
  border-radius: 8px;
  font-size: 24px;
  font-family: "Kantumruy", sans-serif;
  background-color: white;
  cursor: pointer;
  outline: none;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
}
button:hover {
  transform: translate(0, -1px);
  transition: 0.7s;
}
button:focus {
  background-color: #1b2448;
  color: white;
  border: none;
}
.big {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
