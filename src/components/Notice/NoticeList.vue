<template>
  <div class="app-contatiner">
    <h1>공지사항</h1>
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
        <!-- <td>내용</td> -->
        <td>등록일시</td>
      </tr>
      <tr v-for="(val, key) in pagelist.list" v-bind:key="key">
        <!-- {{ pagelist() }} -->
        <th>{{ val.id }}</th>
        <th>
          <router-link :to="{ name: 'View', params: { postId: val.id } }" style="text-decoration: none; color: inherit;">
            {{ val.title }}
          </router-link>
        </th>
        <th>{{ val.date }}</th>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Pagination from '@/components/Notice/Pagination.vue';
import { INoticeInfo } from '@/types/notice.types';
import { noticeModule } from '@/store/modules/notice.state';

@Component({
  components: {
    Pagination,
  },
})
export default class extends Vue {
  // INoticeInfo 타입으로부터 초기화를 진행
  pagelist: INoticeInfo = { 
    total: 0,
    list: { id: 0, title: '', date: '' },
  }
  
  async created() {
    await noticeModule.noticeAPI(this.pagelist).then(() => {
      this.pagelist.total = noticeModule.total;
      // console.log(this.pagelist.total);
      this.pagelist.list = noticeModule.list;
      // console.log(this.pagelist.list);
    })
  }
}
</script>
