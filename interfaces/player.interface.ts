import { IStatisticalPLayer, InitStatisticalPLayer } from '.';

export interface IPlayer {
  _id?: string;
  name: string;
  avatar: string;
  age: number;
  height: string;
  weight: string;
  national: string;
  number: number | undefined;
  dob: Date | string;
  position: string;
  statistical: IStatisticalPLayer | string;
  tags: string;
  captain?: string | boolean;
}

// const date = Date().toString().split('T')[0];

export const InitPlayer = {
  _id: '',
  name: '',
  avatar: '',
  age: 0,
  height: '',
  weight: '',
  national: 'VietNam',
  number: undefined,
  dob: new Date(),
  position: 'Defender',
  statistical: '',
  tags: '',
  captain: 'No Captain'
} as IPlayer;
