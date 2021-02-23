import { INoticeInfo } from '@/types/notice.types';
import { Action, Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators';

import store from '@/store';
import { noticeAPI } from '@/api/notice';
import { setItem } from '../utils/storage';

export interface INoticeState {
  title: string;
  contents: string;
  date: string;
  priority: number;
  updated: string;
}

// Module 데코레이터, 이 클래스 vuex 모듈로 사용가능
@Module({ dynamic: true, namespaced: true, name: 'noticeModule', store})
class Notice extends VuexModule{

  // state는 아무 지정없이 그냥 선언해준다.
  title = '';
  contents = '';
  date = '';
  priority = 0;
  updated = '';

  @Action({ rawError: true})
	async list({ title, contents, date }: INoticeInfo) {
		const response = await noticeAPI;
		return response
	}














  /*
  @Action({ rawError: true })
  async noticelist({ title, contents, date, priority, updated }: INoticeInfo) {
    const { data } = await noticeList({ title, contents, date, priority, updated });

    this.context.commit('SET_noticelist', data);
  }

  @Mutation
  SET_TITLE(title: string) {
    this.title = title;
  }

  @Mutation
  SET_CONTENTS(contents: string) {
    this.contents = contents;
  }

  @Mutation
  SET_DATE(date: string) {
    this.date = date;
  }



  // 추가 Mutation
  @Mutation
  SET_NOTICELIST(list: listArray){
    this.listArray.push(list);
  }

  @Mutation
  SET_NOTICEDETAIL(id: number) {
    
  }
  */

}
export default getModule(Notice);



/*



import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { FETCH_NOTICE_LIST, FETCH_NOTICE } from '../../types/notice.types'
import api from '@/api';

Vue.use(Vuex);

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
*/