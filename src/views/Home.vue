<template>
  <div class="home">
    <Header />
    <div class="contents">
      <Nav/>
      <router-view/>
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
export default class Home extends Vue {
}
</script>
<style scoped>

</style>