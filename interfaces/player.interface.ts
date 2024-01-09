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
  dob: Date;
  position: string;
  statistical: IStatisticalPLayer;
  tags: string;
  captain?: string | boolean;
}

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
  statistical: InitStatisticalPLayer,
  tags: '',
  captain: false
} as IPlayer;
