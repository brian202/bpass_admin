<template>
  <div class="app-contatiner"> 


    <!-- <table>
      <tr v-for="value in pageArray" :key="value.id">
        <th>{{ value.id }}</th>
        <th>{{ value.title }}</th>
        <th>{{ value.date }}</th>
      </tr>
    </table> -->
    <Pagination :list-array="pageArray" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Pagination from '@/components/Notice/Pagination.vue';

// 1. axios 객체 추가
import api from '@/api';

@Component({
  components: {
    Pagination
  }
})
export default class extends Vue {

  pageArray = [];

  created() {

    api.get('/t_notice')
      .then(response => {
        this.pageArray = response.data;

      })
  }

}
</script>

<style scoped>
div {
  padding: 20px;
  width: 100%;
}
div table {
  border-top: 1px solid #444444;  
  border-collapse: collapse;
}
th, td {
  border-bottom: 1px solid #444444;
  padding: 10px;
}
</style>