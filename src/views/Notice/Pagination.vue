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
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
        다음
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class  extends Vue {
  // Data속성
  pageNum = 0;
  pageArray = [];

  // Methods 속성
  nextPage () {
    this.pageNum += 1;
  }
  prevPage () {
    this.pageNum -= 1;
  }

  @Prop({ required: true }) private listArray!: Array<any>;
  @Prop({ required: false, default: 10 }) private pageSize!: number;

// Computed 속성
  pageCount () {
    const listLeng = this.listArray.length;
    const listSize = this.pageSize;
    const page = Math.floor((listLeng - 1) / listSize) + 1;
    return page;
  }

  paginatedData () {
    const start = this.pageNum * this.pageSize;
    const end = start + this.pageSize;
      return this.listArray.slice(start, end);
  }
}
</script>
