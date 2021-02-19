<template>
  <div class="push-container">
    <h1>Push</h1>
    <form class="pushForm" @submit.prevent="onSubmit">
      <table>
        <tr>
          <td>제목</td>
          <td><input type="text" class="push title" v-model="pushForm.title" /></td>
        </tr>
        <tr>
          <td>날짜</td>
          <td>
            <input type="datetime-local" class="push date" v-model="pushForm.date" />
          </td>
        </tr>
        <tr>
          <td>내용</td>
          <td>
            <input class="push body" v-model="pushForm.body" />
          </td>
        </tr>
      </table>

      <div>
        <button class="btn send" type="submit" @click="addNotice">푸시보내기</button>
        <button class="btn cancle" @click="cancelbtn">취소</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IPushForm } from '@/types/push.types';

@Component
export default class extends Vue {
  pushForm: IPushForm = { title: '', body: '', date: '' };
  addNotice() {
    alert(
      `푸시제목: ${this.pushForm.title}
푸시내용: ${this.pushForm.body} 
푸시보낼날짜: ${this.pushForm.date}
로 보냈습니다`,
    );
    this.$router.push('/');
  }

  cancelbtn() {
    this.$router.push('/');
  }
}
</script>
