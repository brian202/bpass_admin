import { IUserInfo } from '@/types/user.types';
import * as url from '@/store/utils/config';
import { api } from '@/api';

export const LogIn = (data: IUserInfo) =>
  api({
    url: url.API_LOGIN_URL,
    method: 'post',
    data,
  });

	export const LogOut = (data: string) =>
		api({
			url: url.API_LOGOUT_URL,
			method: 'post',
			data,
		});
	
	