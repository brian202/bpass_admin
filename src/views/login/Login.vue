<template>
  <div>
    <form class="loginForm" @submit.prevent="onSubmit(email,password)">
      <h2>Log in</h2>
      <div class = "emailForm">
        <input type = "text" class="email" v-model= "email" placeholder="Email"/>
      </div>
      <div class = "passwordForm">
        <input type = "password" class= "password" v-model= "password" placeholder="Password"/>
      </div>
      <input type = "submit" class = "btn" value= "Login"/>
    </form>
    <p><i>{{msg}}</i></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';

@Component
export default class  extends Vue {
  // Data 속성
  email = ''
  password = ''
  msg = ''

  // methods 속성
  onSubmit(email: any, password: any) {
    // Login Action 실행
    this.$store
      .dispatch("LOGIN", { email, password })
      .then(() => this.redirect())
      .catch(({ message }) => (this.msg = message))

    store.dispatch("LOGOUT").then(() => this.$router.push("/"))
  }

  redirect() {
    const { search } = window.location
    const tokens = search.replace(/^\?/, "").split("&")
    const { returnPath } = tokens.reduce((qs: any, tkn) => {
      const pair = tkn.split("=")
      qs[pair[0]] = decodeURIComponent(pair[1])
        return qs
    }, {})

    // redirect 처리
    this.$router.push(returnPath)
  }
}
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  font-family:sans-serif;
}
h2 {
  color: #000000;
}

.loginForm {
  position:absolute;
  width:300px;
  height:400px;
  padding: 30px, 20px;
  background-color:#FFFFFF;
  text-align:center;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border-radius: 15px;
}
.loginForm h2{
  text-align: center;
  margin: 30px;
}
.emailForm{
  border-bottom: 2px solid #adadad;
  margin: 30px;
  padding: 10px 10px;
}
.passwordForm{
  border-bottom: 2px solid #adadad;
  margin: 30px;
  padding: 10px 10px;
}
.email {
  width: 100%;
  border:none;
  outline:none;
  color: #636e72;
  font-size:16px;
  height:25px;
  background: none;
}
.password {
  width: 100%;
  border:none;
  outline:none;
  color: #636e72;
  font-size:16px;
  height:25px;
  background: none;
}
.btn {
  position:relative;
  left:40%;
  transform: translateX(-50%);
  margin-bottom: 40px;
  width:80%;
  height:40px;
  background: linear-gradient(125deg,#81ecec,#6c5ce7,#81ecec);
  background-position: left;
  background-size: 200%;
  color:white;
  font-weight: bold;
  border:none;
  cursor:pointer;
  transition: 0.4s;
  display:inline;
}
.btn:hover {
  background-position: right;
}

</style>
