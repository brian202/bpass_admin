<template>
  <div class="NoticeWrite">
    <form @submit.prevent="onSubmit">
      <table>
        <tr>
          <td>제목</td>
          <th><input type="text" v-model="title"/></th>
        </tr>
        <tr>
          <td>공지날짜</td>
          <th><input type="date" v-model="date"/></th>
        </tr>
        <tr>
          <td>내용</td>
          <th><textarea -model="contents" rows="10"/></th>
        </tr>
      </table>

      <div>
        <button type="submit">등록</button>
        <button>
          <router-link to="/notice/list">취소</router-link>
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class BoardRegisterForm extends Vue {
  title = '';
  contents = '';
	date = '';

  @Emit('submit')
  onSubmit() {
    const { title, contents, date } = this;
    return { title, contents, date };
  }
}
</script>
