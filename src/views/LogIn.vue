<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="onSubmit(email, password)">
      <input type="text" v-model="email" placeholder="Email Address" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="submit" value="Login"/>
    </form>
    <p><i>{{msg}}</i></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '../store';

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

</style>
