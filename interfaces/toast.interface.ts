export interface IToast {
  content: string;
  type?: 'info' | 'success' | 'warning' | 'error' | 'default';
}

export interface IToastUpdate extends IToast {
  id: any;
}
