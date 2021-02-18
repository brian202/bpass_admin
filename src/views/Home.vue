<template>
  <div class="home">
    <div class="navigator-container">
      <Nav />
    </div>
    <div class="content-container">
      <Header />
      <div class="content-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from '@/components/layouts/Header.vue';
import Nav from '@/components/layouts/Nav.vue';

@Component({
  components: {
    Header,
    Nav,
  },
})
export default class Home extends Vue {}
</script>
