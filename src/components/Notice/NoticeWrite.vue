<template>
  <form @submit.prevent="onSubmit">
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
    <div>
      <button type="submit" @click= "addNotice">등록</button>
      <button @click = "cancelbtn">취소</button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  addNotice () {
    alert('등록되었습니다');
    this.$router.push({ name: 'List' });
  }

  cancelbtn() {
    this.$router.back();
  }
}
</script>

<style scoped></style>
