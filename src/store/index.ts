import { IMenuState } from '@/store/modules/menu.state';
import { IUserState } from '@/store/modules/user.state';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface IRootState {
  menuState: IMenuState;
  userState: IUserState;
}

export default new Vuex.Store<IRootState>({});
