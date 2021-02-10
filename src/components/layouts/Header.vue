<template>
  <div id = "header">
    <div class="header-logo">
      <img alt="Bpass logo" src="../../assets/images/logo.png" />
    </div>
    <div class="header-container">
      <!-- 나중에 경로 입력할 부분 ( ex) 공지사항 > 공지사항 등록 ) -->
      <!-- ///// 임시로 경로 입력함 (나중에 삭제 요망) //////// -->
      <a href = "/">Dashboard | </a>
      <a href = "/notice">Notice | </a>
      <a href = "/push">Push | </a>
      <a href="" v-if="isAuthenticated" @click.prevent="onClickLogout">Logout</a> 
      <router-link to="/login" v-else>Login</router-link> 
      <!-- ///////////////////////////////// -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from "@/store"

@Component({
	computed: {
    isAuthenticated() {
      return store.getters.isAuthenticated
    }
	}
})
export default class Header extends Vue {
  onClickLogout() {
    // LOGOUT 변이 실행 후 리다이렉트
    store.dispatch("LOGOUT").then(() => this.$router.push("/login"))
  }
}
</script>
<style scoped>
.header {
  width: 100%;
}
.header-logo {
  padding: 30px;
  width: 20%;
  float: left;
}
.header-container {
  padding: 30px;
  width: 80%;
}
</style>
