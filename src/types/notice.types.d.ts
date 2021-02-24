export interface INoticeInfo {
	// 공지사항 조회
	total: number;
	list: Lists;
}

export interface Lists {
	id: number;
	title: string;
	date: string;
}

export interface INoticeCreate {
	// 공지사항 추가
	title: string;
	contents: string;
	date: number;
	priority: number;
}

export interface INoticeDetail {
	// 공지사항 상세정보
  title: string;
  contents: string;
  date: string;
	priority: number;
  updated: string;
}

export interface INoticeModify {
	title: string;
	contents: string;
	date: number;
	priority: number;
}