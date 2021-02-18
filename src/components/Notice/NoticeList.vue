<template>
  <div class="app-contatiner">
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
        <!-- <td>내용</td> -->
        <td>등록일시</td>
      </tr>

      <tr v-for="value in pageArray" :key="value.id">
        <th>{{ value.id }}</th>
        <th>
          <router-link :to="{ name: 'View' , params: { postId: value.id.toString()}}">
            {{ value.title }}
          </router-link>
        </th>
        <!-- <th>{{ value.contents }}</th> -->
        <th>{{ value.date }}</th>
      </tr>
    </table>
    <Pagination :counts="pageArray.length" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Pagination from '@/components/Notice/Pagination.vue';

// 1. axios 객체 추가
import api from '@/api';

// 4. store 추가
import store from 'src/store';

// 5. mapActions 핼퍼 함수 추가
import { mapActions, mapState } from 'vuex';



import { State, Action } from 'vuex-class'
import { Notice } from '@/store/modules/notice'

@Component({
  components: {
    Pagination,
  }
  ,
  // // 6. mapActions 헬퍼 함수를 컴포넌트에 fetchNoticeList 함수를 매핑
  computed: {
    // ...mapActions({
    //   fetchNoticeList: 'fetchNoticeList'
    // })
    // ,
    // ...mapState({
    //   pageArray : 'pageArray'
    // })
  }
})
export default class extends Vue {

  // 2. Data 생성
  pageArray = [];

  created() {
    // 3. created 훅에서 API 호출 및, 컴포넌트 내의 데이터에 해당 결과값 대입
    api.get('/t_notice')
      .then(response => {
        this.pageArray = response.data;

      })
  }

  // 7. 매핑된 함수를 실행
  fetchNoticeList!: () => any;

  // @State readonly pageArray!: Notice[]
  // @Action readonly fetchNoticeList: any
  // created() {
  //   this.pageArray = this.fetchNoticeList()
  // }


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