import Vue from 'vue';
import Vuex from 'vuex';

import { IMenuState } from '@/store/modules/menu.state';
import { IUserState } from '@/store/modules/user.state';
import { INoticeState } from './modules/notice.state';

Vue.use(Vuex);

interface IRootState {
  menuState: IMenuState;
  userState: IUserState;
  noticeState: INoticeState;
}

export default new Vuex.Store<IRootState>({});
