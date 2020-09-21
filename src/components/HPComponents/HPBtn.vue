<template>
    <div class="column">
        <h4>សូមជ្រើសរើសនាទី</h4>
        <div class="row">
            <button>១ នាទី</button>
            <button>៣ នាទី</button>
            <button>៥ នាទី</button>
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
}
h4 {
  font-size: 40px;
  font-family: "Kantumruy", sans-serif;
  font-weight: 500;
  margin-top: 70px;
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
  border-radius: 8px;
  font-size: 24px;
  font-family: "Kantumruy", sans-serif;
  background-color: white;
  cursor: pointer;
}
button:hover {
  transform: translate(0, -1px);
  transition: 0.5s;
}
</style>
