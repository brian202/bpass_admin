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
        <th>{{ val.id }}</th>
        <th>
          <router-link
            style="text-decoration: none; color: inherit;"
            :to="{
              name: 'View',
              params: {
                postId: val.id,
                title: val.title,
                date: val.date,
                contents: val.contents,
              },
            }"
          >
            {{ val.title }}
          </router-link>
        </th>
        <th>{{(val.date.slice(0,16)).replace('T',' ')}}</th>
      </tr>
    </table>
<!--    
    <div class="page">
      <a href="#">&laquo;</a>
      <span v-for="(val, key) in (listArray.length)" v-bind:key="key">
        <a href="#">{{ key }}</a>
      </span>
      <a href="#">&raquo;</a>
    </div>
-->
    <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
      이전
    </button>
    <span class="page-count">{{ pageNum + 1 }} / {{ pageCount() }} 페이지</span>
    <button
      :disabled="pageNum >= pageCount() - 1"
      class="page-btn"
      @click="nextPage"
    >
      다음
    </button>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop({
    type: Array,
    required: true,
  })
  listArray!:Array<string>;

  // Data속성

  pageSize = 10; // 페이지에 표시할 공지사항 수
  pageNum = 0
/*
  totalCount = this.listArray.length; // 전체 건수
  totalPage = Math.ceil(this.totalCount/this.pageSize);
*/
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
