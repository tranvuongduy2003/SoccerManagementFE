export interface IPrize {
  _id?: string;
  category: string;
  status: ETypeStatusPrize;
  completion: number;
  bonus: string;
  image: string;
  checked?: boolean;
}

export enum ETypeStatusPrize {
  COMING = 'COMING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED'
}
