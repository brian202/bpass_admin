import * as url from '@/store/utils/config';
import { api } from '@/api';
import { INoticeInfo } from '@/types/notice.types';

export const noticeAPI = (data: INoticeInfo) =>
  api({
    url: url.API_NOTICE_URL,
    method: 'post',
    data,
  });

