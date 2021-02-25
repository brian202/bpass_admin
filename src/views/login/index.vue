<template>
  <div class="login-container">
    <form class="loginForm" @submit.prevent="onSubmit()">
      <img class="login-logo" src="../../assets/images/logo.png" />
      <div class="field">
        <input
          type="text"
          class="username"
          v-model="loginForm.username"
          placeholder="username"
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
  loginForm: IUserInfo = { username: '', password: '' };

  // methods 속성
  async onSubmit() {
    try {
      await userModule.login(this.loginForm);
      if (userModule.isAuthorize) this.$router.push('/');
    } catch {
      alert('로그인 실패');
    }
  }
}
</script>

<style scoped></style>
