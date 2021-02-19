<template>
  <div class="NoticeModify">
    <h1>공지사항 수정 폼</h1>
    <form class="ModifyForm" @submit.prevent="onSubmit">
      <table>
        <tr>
          <td>제목</td>
          <th><input type="text" class="push title" v-model="title" /></th>
        </tr>
        <tr>
          <td>날짜</td>
          <th><input type="datetime-local" class="push date" :value="dateslice()"/></th>
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
  dateslice() {
    const str = this.date;
    const a = str.substr(0, 10);
    const b = str.substr(11, 5);
    const sum = a + "T"+ b;
    return sum;
  }

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
    alert(
      `제목: ${this.title}
날짜: ${this.date}
내용: ${this.contents}
으로 수정되었습니다.`,
    );
    this.$router.push({ name: 'List' });
  }
  cancelBtn() {
    this.$router.push({ name: 'List' });
  }
}
</script>
