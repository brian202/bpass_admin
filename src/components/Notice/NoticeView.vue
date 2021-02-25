<template>
  <div class="NoticeView">
    <div>
      <h1>게시판 상세보기</h1>
      <table>
        <tr>
          <td>번호</td>
          <td><input type="text" class="push title" :value="postId" readonly /></td>
        </tr>
        <tr>
          <td>등록일시</td>
          <td><input type="text" class="push date" :value="date" readonly /></td>
        </tr>
        <tr>
          <td>제목</td>
          <td><input type="text" class="push title" :value="title" readonly /></td>
        </tr>
        <tr>
          <td>내용</td>
          <td>
            <textarea class="push body" rows="10" :value="contents" readonly />
          </td>
        </tr>
      </table>
    </div>
    <button class="btn send" @click="Modifybtn">수정</button>
    <button class="btn cancle" @click="cancelbtn">취소</button>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class extends Vue {
  // fetchNoticeList 함수를 mapActions 헬퍼 함수를 컴포넌트 메소드에 매핑
  @Action readonly fetchNoticeList: any;

  @Prop({
    type: String,
    required: true,
  })
  private postId!: string;

  @Prop({
    type: String,
    required: true,
  })
  private date!: string;

  @Prop({
    type: String,
    required: true,
  })
  private title!: string;

  @Prop({
    type: String,
    required: true,
  })
  private contents!: string;

  created() {
    this.fetchNoticeList(`/${this.postId}`).catch((err: any) => {
      alert(err.response.data.msg);
      this.$router.back();
    });
  }

  Modifybtn() {
    this.$router.push({
      name: 'Modify',
      params: {
        title: this.title,
        date: this.date,
        contents: this.contents,
      },
    });
  }

  cancelbtn() {
    this.$router.back();
  }
}
</script>

<style scoped></style>
