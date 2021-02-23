import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';
import { LogIn } from '../../api/user';
import { IUserInfo } from '@/types/user.types';
import store from '@/store';

export interface IUserState {
  username: string;
  duration: number;
  accessToken: string | null;
}

@Module({ dynamic: true, namespaced: true, name: 'userModule', store })
class User extends VuexModule implements IUserState {
  username = '';
  accessToken = '';
  duration = 0;

  @Action({ rawError: true })
  async login({ username, password }: IUserInfo) {
    const { data } = await LogIn({ username, password });
    console.log(await LogIn({ username, password }));
    console.log(data);
    this.context.commit('SET_TOKEN', data.access_token);
  }

  @Action({ rawError: true })
  async logout() {
    if (this.accessToken === null) {
      throw Error('token is undefined');
    }
    console.log(this.accessToken);

    this.context.commit('SET_TOKEN', null);
    console.log(this.accessToken);
  }

  @Action
  async test() {
    if (this.accessToken === null) {
      return false;
    } else {
      return true;
    }
  }

  @Mutation
  SET_USERNAME(username: string) {
    this.username = username;
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
