<template>
  <div class="pop-up" v-if="$store.state.showAbout">
    <div class="ani">
      <h1>អំពីយើង</h1>
      <h3>
        ពួកយើងទាំង​៣នាក់ជានិស្សិតឆ្នាំទី២ដែលកំពុងសិក្សាមុខជំនាញវិទ្យាសាស្ត្រកុំព្យូទ័រនៅសាកលវិទ្យាល័យអន្តរជាតិ ផារ៉ាហ្គន។ 
        វេបសាយនេះបានបង្កើតឡើងក្រោមការដឹកនាំរបស់​​ Nest Innovation ។​ 
        ជាមួយគ្នានេះផងដែរ វេបសាយនេះបានបង្កើតឡើងក្នុងគោលបំណងបង្កើនចំណេះដឹងក្នុងការវាយក្ដារចុចខ្មែរឱ្យកាន់តែស្ទាត់ជំនាញ។
      </h3>
    </div>
    <div class="card-wrapper">
      <div class="card">
        <vitou />
        <hr />
        <h1>វិទូ</h1>
      </div>
      <div class="card">
        <uyseng />
        <hr />
        <h1>សេងអុ៊យ</h1>
      </div>
      <div class="card">
        <menghang />
        <hr />
        <h1>ម៉េងហាង</h1>
      </div>
    </div>
    <button id="close" @click="$store.dispatch('showAbout')">បិទ</button>
  </div>
</template>

<script>
import vitou from "../AboutUsComponents/vitou";
import uyseng from "../AboutUsComponents/uyseng";
import menghang from "../AboutUsComponents/menghang";
export default {
  name: "aboutUs",

  components: {
    vitou,
    uyseng,
    menghang,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy&display=swap");

.pop-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40rem;
  width: 70rem;
  border: 2px solid white;
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0px 0px 30px -6px rgba(0, 0, 0, 0.75);
  font-family: "Kantumruy", sans-serif;
}

.ani {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-wrapper {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  height: 20rem;
  width: 100%;
}

.card {
  height: 13rem;
  width: 10rem;
  border: 2px solid white;
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0px 0px 30px -6px rgba(0, 0, 0, 0.75);
  font-family: "Kantumruy", sans-serif;
  padding: 2rem;
}

hr {
  margin-top: -1rem;
  padding: 0 !important;
  margin-bottom: 1rem;
}

.text {
  margin-top: 1rem;
}

#close {
  margin-top: 3rem;
  height: 3.7rem;
  width: 10rem;
  font-family: "Kantumruy", sans-serif;
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

#close:hover {
  box-shadow: 0px 0px 8px 0px rgba(0, 92, 184, 0.6);
  border: none;
}
</style>
