import { IMatch, InitMatch } from '.';

export interface IGoal {
  _id?: string;
  type?: string;
  player: string;
  match: IMatch;
  time: number;
  number: number;
}

export const InitGoal = {
  type: '',
  player: '',
  match: InitMatch,
  time: 0,
  number: 0
} as IGoal;
