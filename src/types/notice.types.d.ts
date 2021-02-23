export interface INoticeInfo {
	// 공지사항 CRUD
	id?: string; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값을 의미
  title: string;
  contents: string;
  date: string;
	priority: number;
  updated: string;

	// 공지사항 목록 조회
	list?: INoticeInfo[];
	total?: number;

	// 공지사항 목록 조회
	pg_size?: number;
	pg_number?: number;
}