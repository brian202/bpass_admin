<template>
  <div>
    <h3>공지사항 수정 폼</h3>
    <form>
      <table>
        <tr>
          <td>제목</td>
          <th><input type="text" v-model="title"></th>
        </tr>
        <tr>
          <td>내용</td>
          <th><textarea v-model="contents" rows="10"></textarea></th>
        </tr>
        <tr>
          <td>날짜</td>
          <th><input type="datetime-col" v-model="date"></th>
        </tr>
      </table>
      <button type="submit" @click= "editBtn">수정</button>
      <input type="button" value="취소" @click= "cancelBtn"/>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  editBtn() {
    alert("수정되었습니다.")
    this.$router.push({ name : 'List'})
  }
  cancelBtn() {
    this.$router.back()
  }
}
</script>
