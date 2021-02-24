import * as url from '@/store/utils/config';
import { api } from '@/api';
import { INoticeInfo } from '@/types/notice.types';

export const noticeListAPI = (data: INoticeInfo) =>
  api({
    url: url.API_NOTICE_LIST_URL,
    method: 'get',
    data,
  });

