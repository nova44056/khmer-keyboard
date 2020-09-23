<template>
   <div class="login-bg">
        <div class="blue-bg"></div>
        <div class="white-bg"></div>
        <div class="blue-small-bg"></div>
        <div class="form">
        <logInform class="form-input" title="Sign In" account="Already have an account ? " signIn = "Log in now ! " />
        </div>
    </div>
</template>

<script>
import logInform from '@/components/logInform.vue'

export default {
  components: {
    logInform
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.login-bg {
    display: flex;
    height: 100vh;
    flex-direction: column;
    position: relative;
    z-index: 1;

}

.blue-bg {
    background-color: rgb(22, 59, 140);
    flex-grow: 4;
}

.white-bg {
    background-color: rgb(204, 203, 203);
    flex-grow: 4;
}

.blue-small-bg {
    background-color: rgb(22, 59, 140);
    flex-grow: 1;
}

.form {
    position: absolute;
    top: 10%;
    left: 35%;
    z-index: 1;

}

.form-input{
    position: relative;
    z-index: 2;
}

</style>
