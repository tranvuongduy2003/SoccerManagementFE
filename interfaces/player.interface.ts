import { IStatisticalPLayer, InitStatisticalPLayer } from '.';
import { v4 } from 'uuid';
export interface IPlayer {
  _id?: string;
  name: string;
  avatar: string;
  age: number;
  height: string;
  weight: string;
  national: string;
  number: number;
  dob: Date;
  position: string;
  statistical: IStatisticalPLayer;
  tags: string;
  captain?: boolean;
}

export const InitPlayer = {
  _id: '',
  name: '',
  avatar: '',
  age: 0,
  height: '',
  weight: '',
  national: 'VietNam',
  number: 0,
  dob: new Date(),
  position: 'Defender',
  statistical: InitStatisticalPLayer,
  tags: '',
  captain: false
} as IPlayer;