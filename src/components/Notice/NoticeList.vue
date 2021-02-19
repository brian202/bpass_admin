<template>
  <div class="app-contatiner">
    <h1>공지사항</h1>
    <Pagination :list-array="pageArray" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Pagination from '@/components/Notice/Pagination.vue';

// 1. axios 객체 추가
import api from '@/api';

@Component({
  components: {
    Pagination,
  },
})
export default class extends Vue {
  pageArray = [];

  created() {
    api.get('/t_notice').then(response => {
      this.pageArray = response.data;
    });
  }
}
</script>
