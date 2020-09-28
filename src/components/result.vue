<template>
  <div class="pop-up">
    <div class="ani">
      <button @click="$router.push({name: 'SelectionPage1'})">X</button>
      <lottie-player src="https://assets7.lottiefiles.com/datafiles/3RKIaYNZqu6RrV0/data.json" mode="bounce" background="transparent"  speed="0.3"  style="width: 300px; height: 300px;"  autoplay></lottie-player>
    </div>
    <div class="text">
      <h1>ក្នុងរយះពេល​ {{convertToKhmerNum(this.$store.state.timerMinute)}} នាទីអ្នកវាយបាន {{convertToKhmerNum(this.$store.state.totalWordsTyped)}} ពាក្យ</h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    convertToKhmerNum(num) {
      let numData = {
        0: "០",
        1: "១",
        2: "២",
        3: "៣",
        4: "៤",
        5: "៥",
        6: "៦",
        7: "៧",
        8: "៨",
        9: "៩",
      };
      let khmNum = "";
      for (let i = 0; i < num.toString().length; i++) {
        khmNum += numData[num.toString()[i]];
      }
      return khmNum;
    },
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy&display=swap");
.pop-up {
  display: flex;
  flex-direction: column;
  height: 30rem;
  width: 50rem;
  border: 2px solid white;
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0px 0px 30px -6px rgba(0,0,0,0.75);
  font-family: 'Kantumruy', sans-serif;
}

.ani {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: -2rem;
}

.ani > button{
  color: black;
  height: 2rem;
  width: 2rem;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 2rem;
  display: block;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: 1;
  float: right;
  position: absolute;
  right: 1rem;
  top: 1rem;
}

</style>
