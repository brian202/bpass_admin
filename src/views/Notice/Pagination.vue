<template>
  <div class="pagination">
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

    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="page-btn"
      >
        다음
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
@Component
export default class extends Vue {
  // Data속성
  pageNum = 0;
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

  // Methods 속성
  nextPage() {
    this.pageNum += 1;
  }
  prevPage() {
    this.pageNum -= 1;
  }

  @Prop({ required: true }) private listArray!: Array<any>;
  @Prop({ required: false, default: 10 }) private pageSize!: number;

  // Computed 속성
  pageCount(pageNum: number) {
    const listLeng = this.listArray.length;
    const listSize = this.pageSize;
    const page = Math.floor((listLeng - 1) / listSize) + 1;
    return page;
  }

  paginatedData() {
    const start = this.pageNum * this.pageSize;
    const end = start + this.pageSize;
    return this.listArray.slice(start, end);
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
