<template>
  <div class="login-container">
    <form class="loginForm" @submit.prevent="onSubmit()">
      <img class="login-logo" src="../../assets/images/logo.png" />
      <div class="field">
        <input
          type="text"
          class="email"
          v-model="loginForm.email"
          placeholder="Email"
        />
      </div>
      <div class="field">
        <input
          type="password"
          class="password"
          v-model="loginForm.password"
          placeholder="Password"
        />
      </div>
      <input type="submit" class="button" value="Login" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { userModule } from '@/store/modules/user.state';
import { IUserInfo } from '@/types/user.types';

@Component
export default class extends Vue {
  // Data 속성
  loginForm: IUserInfo = { email: '', password: '' };

  // methods 속성
  async onSubmit() {
    await userModule.login(this.loginForm).then(async () => {
      this.accessToken ? this.$router.push('/') : alert('로그인 실패');
    });
  }

  get accessToken() {
    return userModule.accessToken;
  }
}
</script>

<style scoped></style>
