import { IStatisticalPLayer } from '.';

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
