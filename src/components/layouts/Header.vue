<template>
  <div id="header">
    <div class="header-container">
      <div class="header-logo">
        <img src="../../assets/images/logo.png" />
      </div>
      <a @click.prevent="onClickLogout"><i class="fa fa-user"> Logout</i></a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { userModule } from '@/store/modules/user.state';

@Component
export default class Header extends Vue {
  async onClickLogout() {
    await userModule.logout();
    this.$router.push('/login');
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
  cursor: pointer;
}
</style>
