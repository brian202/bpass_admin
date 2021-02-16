<template>
  <div class="pagination">
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount() }} 페이지</span>
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
@Component
export default class extends Vue {
  @Prop()
  counts!: number;

  // Data속성
  pageNum = this.counts;

  // Methods 속성
  nextPage() {
    this.pageNum += 1;
  }
  prevPage() {
    this.pageNum -= 1;
  }

  // Computed 속성
  pageCount() {
    console.log(this.counts, 'counts');
    return this.counts;
  }

  // paginatedData() {
  //   const start = this.pageNum * this.pageSize;
  //   const end = start + this.pageSize;
  //   return this.listArray.slice(start, end);
  // }
}
</script>
