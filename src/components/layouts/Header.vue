<template>
  <div class="header-container">
    <div class="header-wrapper">
      <img src="../../assets/images/bluelogo.svg" />
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
