<template>
  <div class = "NoticeList">
    <h1>공지사항</h1>
    <Pagination :list-array="pageArray" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import Pagination from '@/views/Notice/Pagination.vue';

@Component({
  components: {
    Pagination
  }
})
export default class  extends Vue {
  // Data 속성
  pageArray = []

  created () {
    axios.get('http://localhost:8000/t_notice')
    // Axios와 통신 성공 시, 응답 데이터의 contacts를 pageArray에 저장
    .then(response => {
      console.log(response);
      this.pageArray = response.data;
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

}
</script>
