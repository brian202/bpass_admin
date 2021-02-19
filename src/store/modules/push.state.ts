import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';
import { getItem } from '../utils/storage';

import { IPushForm } from '@/types/push.types';
import store from '@/store';

export interface IPushState {
  topic: string;
  apiKey: string;
  apiSecret: string;
  title: string;
  body: string;
  date: string | null;
}

@Module({ dynamic: true, namespaced: true, name: 'userModule', store })
class Push extends VuexModule implements IPushState {
  topic = ''; //뭐였더라
  apiKey = 'b8ef8f75-d64b-11ea-a18c-020c6496fbdc';
  apiSecret = '2bdc780d810fe2bb6e1ba74e28531665160a871dc50ab640e1008db8784152b3';
  title = getItem('title') || '';
  body = getItem('body') || '';
  date = getItem('date');

  @Action({ rawError: true })
  async sendPush({ title, body, date }: IPushForm) {
    //api와야 하는 부분
    console.log('push.state.ts안의', title, body, date);
  }

  @Mutation
  SET_TITLE(title: string) {
    this.title = title;
  }

  @Mutation
  SET_BODY(body: string) {
    this.body = body;
  }
}

export const pushModule = getModule(Push);
