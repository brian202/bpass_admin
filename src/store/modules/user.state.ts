import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';
import { getItem, removeItem, setItem } from '../utils/storage';

import { IUserInfo } from '@/types/user.types';
import store from '@/store';

export interface IUserState {
  email: string;
  duration: number;
  accessToken: string | null;
}

@Module({ dynamic: true, namespaced: true, name: 'userModule', store })
class User extends VuexModule implements IUserState {
  email = getItem('email') || '';
  accessToken = getItem('access_token') || null;
  duration = 0;

  @Action({ rawError: true })
  async login({ email, password }: IUserInfo) {
    //api와야 하는 부분
    if (email === 'test' && password === '1234') {
      setItem('access_token', '가라토큰~~');
      this.context.commit('SET_TOKEN', '가라토큰~~');
    }
  }

  @Action({ rawError: true })
  async logout() {
    if (this.accessToken === null) {
      throw Error('token is undefined');
    }

    //api호출
    removeItem('access_token');
    this.context.commit('SET_TOKEN', null);
  }

  @Mutation
  SET_EMAIL(email: string) {
    this.email = email;
  }

  @Mutation
  SET_TOKEN(accessToken: string) {
    this.accessToken = accessToken;
  }

  @Mutation
  SET_DURATION(duration: number) {
    this.duration = duration;
  }
}

export const userModule = getModule(User);
