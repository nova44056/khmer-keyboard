<template>
  <form action="">
      <div class="image">

     <img src="@/assets/typing.jpeg" alt="keyboard">
      </div>

      <div class="input">
          <p>Username or Email Address </p>
          <input class="input1" type="text"  v-model="$store.state.userInfo.userName">
           <p  id="password">Password</p>
          <input class="input1" type="password" v-model="$store.state.userInfo.password">

          <div class="checkbox">
             <input type="checkbox" >
             <p>Remeber me </p>

          </div>

        <button  @click="signUpAndSignIn()"    id="login">{{title}}</button>
        <div class=register>

            <p>{{account}}<a href="" @click="changePage()">{{signIn}}</a></p>
         </div>

        </div>
  </form>
</template>

<script>
export default {
  props: {
    title: String,
    account: String,
    signIn: String

  },

  methods: {
    changePage () {
      if (window.location.pathname === '/logIn') {
        this.$router.push('/signIn')
      } else {
        this.$router.push('/logIn')
      }
    },

    signUpAndSignIn () {
      if (window.location.pathname === '/logIn') {
        const localUser = JSON.parse(localStorage.getItem('users'))

        if (localUser.userName === this.$store.state.userInfo.userName && localUser.password === this.$store.state.userInfo.password) {
          this.$router.push('/')
        }
      } else {
        localStorage.setItem('users', JSON.stringify(this.$store.state.userInfo))
      }
    }
  }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    background-color: rgb(252, 252, 252);
    border-radius: 20px;
    width: 25rem;
    padding: 20px;

}

.image {
        display: flex;
        justify-content: center;
        align-items: center;
}
img {
    width:100px;
    border-radius: 50%;
     border: 2px solid rgb(22, 59, 140);
}

.input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;

}

.input1 {
    width: 90%;
    padding: 10px;
}

.input > p, .input > input{
    opacity: 0.5;
}

#password{
    margin-top: 20px;
}

.checkbox{
    margin-top: 20px;
    display: flex;
    justify-content:flex-start ;
    align-items: center;
    width: 100%;
    opacity: 0.5;
}

input {
    color: rgb(22, 59, 140);
    font-weight: 900;
    border: 2px solid rgb(22, 59, 140);
}

input:focus {
    border: 2px solid rgb(22, 59, 140);
}
.checkbox > input {
    margin-right: 10px;
}

#login{
    margin-top: 50px;
    text-align: center;
    width: 100%;
    height: 3.5rem;
    color: white;
    vertical-align: auto;
    background-color: rgb(22, 59, 140);
    font-size: 1.5rem;
    border: none;
}
.register {
   margin-top: 10px;
}
</style>
