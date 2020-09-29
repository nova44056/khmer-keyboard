<template>
  <div class="pop-up">
    <div class="ani">
      <h1> មុនប្រេីប្រាស់កម្មវិធី​ </h1>
      <h4> កម្មវិធីនេះតម្រូវឲ្យអ្នកមាន NiDa Unicode តម្លេីងក្នុងកំព្យូទ័រ</h4>
    </div>

    <div class="text">
      <p>សម្រាប់អ្នកដែលប្រេី Mac សូមធ្វេីការតម្លេីង NiDa Unicode តាម Link ខាងក្រោម:</p>
      <a href="https://www.rean.me/2017/06/khmer-unicode-mac-osx-apple.html">
        https://www.rean.me/2017/06/khmer-unicode-mac-osx-apple.html
      </a>
    </div>

    <div class="text">
      <p>សម្រាប់អ្នកដែលប្រេី Window សូមធ្វេីការតម្លេីង NiDa Unicode តាម Link ខាងក្រោម:</p>
      <a href="https://www.rean.me/2017/06/how-to-install-khmer-unicode-on-windows.html">
        https://www.rean.me/2017/06/how-to-install-khmer-unicode-on-windows.html
      </a>
    </div>
    <button id="close"  @click="close">បិទ</button>
  </div>
</template>

<script>
export default {
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


  margin-top: 10rem;
}

.ani {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
//   color: white;
  margin-top: -10rem;
}

.text {
  margin-top: 1rem;
}

#close {
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

#close:hover {
  box-shadow: 0px 0px 8px 0px rgba(0,92,184,0.6);
  border: none;
}
</style>
