/* eslint-disable @typescript-eslint/camelcase */
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { FETCH_NOTICE_LIST, FETCH_NOTICE } from '../../types/notice.types'
import api from '@/api';

Vue.use(Vuex);

export interface Notice {
  id: number;
  title: string;
  contents: string;
  date: string;
  updated_at: string;
}

interface NoticeState {
  pageArray: Notice[];
  notice: Notice;
}

const store: StoreOptions<NoticeState> = {
  state: {
    pageArray: [],
    notice: { id: 0, title: '', contents: '', date: '', updated_at: '' },
  },
  mutations: {
    [FETCH_NOTICE_LIST](state, pageArray: Notice[]) {
      state.pageArray = pageArray;
    },
    [FETCH_NOTICE](state, notice: Notice) {
      state.notice = notice;
    },
  },
  actions: {
    // fetchNoticeList 액션 함수 작성
    // api 모듈을 사용하여 api로부터 게시물을 받아오도록 요청
    // 응답으로 내려온 게시물 데이터를 FETCH_NOTICE_LIST 변이의 실행과 함께 인자로 넘겨준다.
    fetchNoticeList({ commit }) {
      return api.get('/t_notice').then(response => {
        commit(FETCH_NOTICE_LIST, response.data);
      });
    },
    fetchNotice({ commit }, postId) {
      return api.get(`/t_notice/${postId}`).then(res => {
        commit(FETCH_NOTICE, res.data);
      });
    },
  },
};

export default new Vuex.Store(store);
