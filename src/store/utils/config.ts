export const DEV_MODE = 'development';
export const PROD_MODE = 'production';
export const TEST_MODE = 'test';

type ConfigType = {
  [DEV_MODE]: string;
  [PROD_MODE]: string;
  [TEST_MODE]: string;
};

const mode = PROD_MODE;

const apiServerHost: ConfigType = {
  [DEV_MODE]: 'https://svc.mykeepin.com',
  [PROD_MODE]: 'https://svc.mykeepin.com',
  [TEST_MODE]: 'https://svc.mykeepin.com',
};

const login: ConfigType = {
  [DEV_MODE]: '/admin/api/v1/auth/login',
  [PROD_MODE]: '/admin/api/v1/auth/login',
  [TEST_MODE]: '/admin/api/v1/auth/login',
};

const logout: ConfigType = {
  [DEV_MODE]: '/admin/api/v1/auth/logout',
  [PROD_MODE]: '/admin/api/v1/auth/logout',
  [TEST_MODE]: '/admin/api/v1/auth/logout',
};

const refresh: ConfigType = {
  [DEV_MODE]: '/admin/api/v1/auth/refresh',
  [PROD_MODE]: '/admin/api/v1/auth/refresh',
  [TEST_MODE]: '/admin/api/v1/auth/refresh',
};

const notice: ConfigType = {
  [DEV_MODE]: '/admin/api/v1/notice',
  [PROD_MODE]: '/admin/api/v1/notice',
  [TEST_MODE]: '/admin/api/v1/notice',
};

const noticeList: ConfigType = {
  [DEV_MODE]: '/admin/api/v1/notice?pg_size=10&pg_number=1',
  [PROD_MODE]: '/admin/api/v1/notice?pg_size=10&pg_number=1',
  [TEST_MODE]: '/admin/api/v1/notice?pg_size=10&pg_number=1',
};

const push: ConfigType = {
  [DEV_MODE]: '/admin/api/v1/push',
  [PROD_MODE]: '/admin/api/v1/push',
  [TEST_MODE]: '/admin/api/v1/push',
};

export const MODE = mode;
export const API_SERVER_HOST = apiServerHost[MODE];
export const API_LOGIN_URL = login[MODE];
export const API_LOGOUT_URL = logout[MODE];
export const API_REFRESH_URL = refresh[MODE];
export const API_NOTICE_URL = notice[MODE];
export const API_NOTICE_LIST_URL = noticeList[MODE];
export const API_PUSH_URL = push[MODE];
