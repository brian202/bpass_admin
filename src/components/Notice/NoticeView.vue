<template>
  <div class="NoticeView">
    <div>
      <h1>게시판 상세보기</h1>
      <table>
        <tr>
          <td>번호</td>
          <td><input type="text" :value="postId" readonly></td>
        </tr>
        <tr>
          <td>등록일시</td>
          <td><input type="text" readonly></td>
        </tr>
        <tr>
          <td>제목</td>
          <td><input type="text" readonly></td>
        </tr>
        <tr>	
          <td>내용</td>
          <td><textarea readonly/></td>
        </tr>
      </table>
    </div>
    <router-link :to="{ name: 'Modify'}">수정</router-link>
    <router-link :to="{ name: 'List'}">취소</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import { State, Action } from 'vuex-class'
import { Notice } from '@/store/modules/notice'
import api from '@/api'

@Component({
  // computed: {
  //   ...mapActions({
  //     fetchNotice : 'fetchNotice'
  //   })
  // }
})
export default class extends Vue {
  // fetchNoticeList 함수를 mapActions 헬퍼 함수를 컴포넌트 메소드에 매핑
  @Action readonly fetchNoticeList: any;

  @Prop({ 
    type: Object, 
    required: true,
    // validator(notice) {
    //   const isValidPostId = typeof notice.id === "number"
    //   const isValidTitle = !!notice.title && notice.title.length
    //   const isValidContents = notice.contents && notice.contents.length
    //   return isValidPostId && isValidTitle && isValidContents
    // }
    }) private postId!: string;

  created() {
    this.fetchNoticeList(`/${this.postId}`)
    .then
    .catch((err: any) => {
      alert(err.response.data.msg)
      this.$router.back()
    })
  
  }



}
</script>

<style scoped></style>
