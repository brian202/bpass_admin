<template>
  <div class="pagination">
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
        <!-- <td>내용</td> -->
        <td>등록일시</td>
      </tr>
      <tr v-for="(val, key) in pagelist()" v-bind:key="key">
      <!-- {{ pagelist() }} -->
        <th>{{val.id}}</th>
        <th>{{val.title}}</th>
        <th>{{val.date}}</th>
      </tr>
    </table>

    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount() }} 페이지</span>
      <button
        :disabled="pageNum >= pageCount() - 1" @click="nextPage" class="page-btn">
        다음
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import api from '@/api';

@Component
export default class extends Vue {
  @Prop({
      type: Array,
      required: true
    }) listArray!: string[];
  @Prop({
      type: Number,
      required: false,
      default: 10
    })

  // Data속성
  pageNum = 0;
  pageSize = 10;
  p = this.pagelist();


  // Methods 속성
  nextPage() {
    this.pageNum += 1;
  }
  prevPage() {
    this.pageNum -= 1;
  }

  // Computed 속성
  pageCount() {
    const listLeng = this.listArray.length;
    const listSize = this.pageSize;
    let page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;

      return page;
  }

  pagelist() {
    const start = this.pageNum * this.pageSize;
    const end = start + this.pageSize;
    return this.listArray.slice(start, end);
  } 
 

}
</script>
