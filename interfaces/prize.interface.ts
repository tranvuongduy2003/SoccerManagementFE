export interface IPrize {
  _id?: string;
  category: string;
  status: ETypeStatusPrize;
  completion: number;
  bonus: string;
  image: string;
  checked?: boolean;
}

export const InitPrize = {
  category: '',
  status: 'COMING',
  completion: 0,
  bonus: '',
  image: ''
};

export enum ETypeStatusPrize {
  COMING = 'COMING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED'
}
