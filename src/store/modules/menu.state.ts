import { Module, VuexModule, getModule } from 'vuex-module-decorators';
import { IMenu } from '@/types/menu.types';

import store from '@/store';

export interface IMenuState {
  isNavVisible: boolean;
}

@Module({
  dynamic: true,
  namespaced: true,
  name: 'menuModule',
  store,
})
class Nav extends VuexModule implements IMenuState {
  isNavVisible = true;
}
export const MenuModule = getModule(Nav);
export const Menu: IMenu[] = [
  {
    index: 0,
    key: 'dashboard',
    to: '/',
    icon: 'desktop-mac',
    label: 'Dashboard',
  },
  {
    index: 1,
    key: 'notice',
    label: '공지',
    icon: 'clipboard',
    menu: [
      {
        index: 0,
        key: 'ms-manage-title',
        to: '/ms-manage-title',
        icon: 'view-list',
        label: '공지 리스트',
      },
      {
        index: 1,
        key: 'ms-manage-quest',
        to: '/ms-manage-quest',
        icon: 'view-list',
        label: '공지 작성',
      },
    ],
  },
  {
    index: 2,
    key: 'push',
    to: '/push',
    icon: 'desktop-mac',
    label: 'Push',
  },
];
