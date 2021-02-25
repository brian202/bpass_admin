/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import * as url from '@/store/utils/constants';
import { userModule } from '@/store/modules/user.state';

const api = axios.create({
  baseURL: url.API_SERVER_HOST,
});

api.interceptors.request.use(
  config => {
    if (userModule.accessToken) {
      config.headers['Authorization'] = userModule.accessToken;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

api.interceptors.response.use(
  (res: any) => {
    if (res.status !== 200) {
      console.log('고조선 고조선 에러');
    } else {
      return res;
    }
  },
  error => {
    if (error.status === 401) {
      userModule.logout();
    }
    return Promise.reject(error.data);
  },
);

export default api;
