<template>
  <div id = "header">
    <div class="header-container">
      <div class="header-logo">
        <img src="../../assets/images/logo.png"/>
      </div>
      <!-- 나중에 경로 입력할 부분 ( ex) 공지사항 > 공지사항 등록 ) -->
      <!-- ///// 임시로 경로 입력함 (나중에 삭제 요망) //////// -->
      <a v-if="isAuthenticated" @click.prevent="onClickLogout"><i class="fa fa-user"> Logout</i></a> 
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
  width: 30%;
}
.header-logo {
  margin: 30px;
}
.header-container {
  float: right;
  padding: 30px;
  width: 100%;
}
.header-container a {
  float: right;
  cursor:pointer;
}
</style>
