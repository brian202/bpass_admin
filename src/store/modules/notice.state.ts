import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { noticeListAPI } from '@/api/notice';
import { INoticeInfo, Lists } from '@/types/notice.types';

// 전달받을 변수 Type
export interface INoticeState {
  list: { id: number, title: string, date: string };
  total: number;
}

// Module 데코레이터, 이 클래스 vuex 모듈로 사용가능
@Module({ dynamic: true, namespaced: true, name: 'noticeModule', store })
class NoticeInfo extends VuexModule implements INoticeState {
  // state는 아무 지정없이 그냥 선언해준다.
  total = 0
  list = { id: 0, title: '', date: '' }

  @Action({ rawError: true })
  async noticeAPI({ list, total }: INoticeInfo) {
    const { data } = await noticeListAPI({ list, total });
    // console.log(data);
    this.context.commit('SET_LIST', data.list);
    // console.log(data.list);
    this.context.commit('SET_TOTAL', data.total);
    // console.log(data.total);
  }

  @Mutation
  SET_TOTAL(total: number) {
    this.total = total;
    // console.log(this.total);
    return total;
  }

  @Mutation
  SET_LIST(list: any) {
    this.list = list;
    // console.log(this.list);
    return list; 
  }
  
 // @Mutation
 // SET_LIST(list: Lists[]) {
 //   this.list = list;
    // console.log(this.list);
 //   return list; 
 // }

}
export const noticeModule = getModule(NoticeInfo);
