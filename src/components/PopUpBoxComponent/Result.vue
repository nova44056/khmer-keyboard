<template>
  <div class="pop-up">
    <div class="ani">
      <lottie-player src="https://assets7.lottiefiles.com/datafiles/3RKIaYNZqu6RrV0/data.json" mode="bounce" background="transparent"  speed="0.3"  style="width: 300px; height: 300px;"  autoplay></lottie-player>
    </div>
    <div class="text">
      <h1>ក្នុងរយះពេល​ {{convertToKhmerNum(this.$store.state.timerMinute)}} នាទីអ្នកវាយបាន {{convertToKhmerNum(this.$store.state.totalWordsTyped)}} ពាក្យ</h1>
    </div>
    <button id="home"  @click="$router.push({name: 'SelectionPage1'})">ទៅទំព័រដើម</button>
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
  justify-content: center;
  align-items: center;
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
  margin-top: -10rem;
}

.text {
  margin-top: -2rem;
}

#home {
  margin-top: 3rem;
  height: 3.7rem;
  width: 10rem;
  font-family: 'Kantumruy', sans-serif;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  outline: none;
  background-color: #1b2448;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

#home:hover {
  box-shadow: 0px 0px 8px 0px rgba(0,92,184,0.6);
  border: none;
}
</style>
