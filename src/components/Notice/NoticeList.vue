<template>
  <div class="NoticeList">
    <h1>공지사항</h1>
    <br />
    <table>
      <tr>
        <th>NO</th>
        <th>TEL</th>
        <th>ADDRESS</th>
        <th>NAME</th>
      </tr>
      <tr v-for="p in pageArray" :key="p.no">
        <td>{{ p.no }}</td>
        <td>{{ p.tel }}</td>
        <td>{{ p.address }}</td>
        <td>{{ p.name }}</td>
      </tr>
    </table>

    <Pagination :counts="pageArray.length" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import Pagination from '@/components/Notice/Pagination.vue';

@Component({
  components: {
    Pagination,
  },
})
export default class extends Vue {
  // Data 속성
  pageArray = [];

  created() {
    axios
      .get('http://sample.bmaster.kro.kr/contacts')
      // Axios와 통신 성공 시, 응답 데이터의 contacts를 pageArray에 저장
      .then(response => {
        this.pageArray = response.data.contacts;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
table th {
  font-size: 1.2rem;
}
table tr {
  height: 2rem;
  text-align: center;
  border-bottom: 1px solid #505050;
}
table tr:first-of-type {
  border-top: 2px solid #404040;
}
table tr td {
  padding: 1rem 0;
  font-size: 1.1rem;
}
.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}
.btn-cover .page-count {
  padding: 0 1rem;
}
</style>
