<template>
  <div class="app-contatiner">
    <h1>공지사항</h1>
    <Pagination :list-array="pageArray" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Pagination from '@/components/Notice/Pagination.vue';

@Component({
  components: {
    Pagination,
  },
})
export default class extends Vue {

}
</script>
