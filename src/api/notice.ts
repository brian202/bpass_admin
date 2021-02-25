import * as url from '@/store/utils/constants';
import api from '@/api';
import { INoticeInfo } from '@/types/notice.types';

const pgsize = 10; // 한 페이지에 보여줄 공지사항 개수
const pgnumber = 2; // 페이지 넘버

const query = '?pg_size=' + pgsize + '&pg_number=' + pgnumber;

export const noticeListAPI = (data: INoticeInfo) =>
  api({
    url: url.API_NOTICE_URL,
    method: 'get',
    data,
  });
