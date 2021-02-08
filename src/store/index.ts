import { IMenuState } from '@/store/modules/menu.state';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface IRootState {
  menuState: IMenuState;
}

export default new Vuex.Store<IRootState>({});
