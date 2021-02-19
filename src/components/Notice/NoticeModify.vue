<template>
  <div class="NoticeModify">
    <h1>공지사항 수정 폼</h1>
    <form>
      <table>
        <tr>
          <td>제목</td>
          <th><input type="text" class="push title" v-model="title" /></th>
        </tr>
        <tr>
          <td>날짜</td>
          <th><input type="datetime-local" class="push date" v-model="date" /></th>
        </tr>
        <tr>
          <td>내용</td>
          <th><textarea class="push body" v-model="contents" rows="10" /></th>
        </tr>
      </table>

      <button type="submit" class="btn send" @click="editBtn">수정완료</button>
      <input type="button" class="btn cancle" value="취소" @click="cancelBtn" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  private postId!: string;

  @Prop({
    type: Object,
    required: true,
  })
  private date!: string;

  @Prop({
    type: Object,
    required: true,
  })
  private title!: string;

  @Prop({
    type: Object,
    required: true,
  })
  private contents!: string;

  editBtn() {
    alert('수정되었습니다.');
    this.$router.push({ name: 'List' });
  }
  cancelBtn() {
    this.$router.push({ name: 'List' });
  }
}
</script>
