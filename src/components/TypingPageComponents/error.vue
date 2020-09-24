<template>
    <div class="lottie">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<circle style="fill:#D75A4A;" cx="25" cy="25" r="25"/>
<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16 
	"/>
<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34 
	"/>
<g>
</g>
      </svg>
      <div class="text">
      <h2>០</h2>
      </div>
    </div>
</template>

<script>
export default {
  name: 'error'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy&display=swap");
  .lottie {
    border: 1px solid white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
    margin-top: 2rem;
    background-color: white;
    width: 20rem;
    height: 7rem;
    margin-right: 3rem;
  }
  @media screen and (max-width: 1080px) and (min-width: 845px) {
    .lottie {
      width: 15rem;
    }
  }
  @media screen and (max-width: 845px) and (min-width: 600px) {
    .lottie {
      width: 10rem;
      display: flex;
      flex-direction: column;
      height: 10rem;
      justify-content: center;
      align-items: center;
    }
    svg {
      margin-bottom: 1rem;
    }
    h2 {
      margin-left: -1.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    .lottie {
      width: 6rem;
      display: flex;
      flex-direction: column;
      height: 10rem;
      justify-content: center;
      align-items: center;
    }
    svg {
      margin-top: 1.3rem;
      display: flex;
      justify-content: center;
      padding-right: 0.6rem;
    }
    h2 {
      margin-top: 0.8rem;
      margin-left: -2rem;
    }
  }
  .text {
    margin-left: 2rem;
    display: flex;
    justify-content: center;
    font-family: 'Kantumruy', sans-serif;
  }
  svg {
  height: 4rem;
  width: 5rem;
  margin-left: 0.7rem;
  /* margin-top: 0.1rem; */
  align-items: center;
}
</style>
