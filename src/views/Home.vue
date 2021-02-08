<template>
  <div class="home">
    <Header />
    <Nav :menu="menu" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Menu } from '@/store/modules/menu.state';

import Header from '@/components/layouts/Header.vue'; // @ is an alias to /src
import Nav from '@/components/layouts/Nav.vue'; // @ is an alias to /src

@Component({
  components: {
    Header,
    Nav,
  },
})
export default class Home extends Vue {
  get menu() {
    return Menu;
  }
}
</script>
