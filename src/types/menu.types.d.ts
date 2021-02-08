export interface IMenu {
  index?: number;
  key: string;
  label: string;
  to?: string;
  icon: string;
  exact?: boolean;
  menu?: IMenu[];
  updateMark?: boolean;
}
