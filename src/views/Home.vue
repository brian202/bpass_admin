<template>
  <div class="home">
    <Header />
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from '@/components/layouts/Header.vue'; // @ is an alias to /src
import Nav from '@/components/layouts/Nav.vue'; // @ is an alias to /src

@Component({
  components: {
    Header,
    Nav,
  },
})
export default class Home extends Vue {
}
</script>
