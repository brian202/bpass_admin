import { IUserInfo } from '@/types/user.types';
import * as url from '@/store/utils/constants';
import api from './index';

export const logIn = (data: IUserInfo) =>
  api({
    url: url.API_LOGIN_URL,
    method: 'post',
    data,
  });

export const refresh = () =>
  api({
    url: url.API_REFRESH_URL,
    method: 'post',
  });

export const logOut = (data: string) =>
  api({
    url: url.API_LOGOUT_URL,
    method: 'post',
    data,
  });
