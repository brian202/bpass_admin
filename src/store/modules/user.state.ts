import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';
import * as UserApi from '../../api/user';

import { IUserInfo } from '@/types/user.types';
import store from '@/store';

export interface IUserState {
  username: string;
  accessToken: string;
  isAuthorize: boolean;
}

/**
 * @description 유저의 상태 관리를 하는 모듈
 */
@Module({ dynamic: true, namespaced: true, name: 'userModule', store })
class User extends VuexModule implements IUserState {
  username = '';
  accessToken = '';
  isAuthorize = false;

  /**
   * @description 로그인 액션
   * @param {string} username
   * @param {string} password
   */
  @Action({ rawError: true })
  async login({ username, password }: IUserInfo) {
    const { data } = await UserApi.logIn({ username, password });
    if (data) {
      window.localStorage.setItem('username', username);
      this.context.commit('SET_USERNAME', username);
      this.context.commit('SET_TOKEN', data.access_token);
      this.context.commit('SET_IS_AUTHORIZE', true);
    }
  }

  /**
   * @description 초기화하는 액션
   */
  @Action
  init() {
    this.context.commit('SET_TOKEN', '');
    this.context.commit('SET_IS_AUTHORIZE', false);
  }

  /**
   * @description 로그인 연장하는 액션
   */
  @Action({ rawError: true })
  async refreshToken() {
    this.init();
    const { data } = await UserApi.refresh();
    if (data) {
      this.context.commit('SET_TOKEN', data.access_token);
      this.context.commit('SET_IS_AUTHORIZE', true);
    }
  }

  /**
   * @description 로그아웃 액션
   */
  @Action({ rawError: true })
  async logout() {
    const username = window.localStorage.getItem('username');

    if (username) {
      await UserApi.logOut(username)
        .then(() => {
          window.localStorage.clear();
          this.context.commit('SET_TOKEN', '');
          this.context.commit('SET_IS_AUTHORIZE', false);
        })
        .catch((e: unknown) => {
          console.log('오마갓 로그아웃에러', e);
        });
    }
  }

  /**
   * @description username을 업데이트하는 뮤테이션
   * @param {string} username
   */
  @Mutation
  SET_USERNAME(username: string) {
    this.username = username;
  }

  /**
   * @description access token 업데이트하는 뮤테이션
   * @param {string} accessToken
   */
  @Mutation
  SET_TOKEN(accessToken: string) {
    this.accessToken = accessToken;
  }

  /**
   * @description isAuthorize를 업데이트하는 뮤테이션
   * @param {boolean} authorize
   */
  @Mutation
  SET_IS_AUTHORIZE(authorize: boolean) {
    this.isAuthorize = authorize;
  }
}

export const userModule = getModule(User);
