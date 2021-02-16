<template>
  <div class="NoticeList">
    <h1>공지사항</h1>
    <br />
    <!-- NoticeList라는 컴포넌트에 pageArray를 넘기기 -->
    <Pagination :list-array="pageArray" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import Pagination from '@/views/Notice/Pagination.vue';

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
        console.log(response);
        this.pageArray = response.data.contacts;
        console.log(this.pageArray);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
</script>

<style scoped>
h1 {
  color: #ffffff;
  text-align: center;
}
</style>
