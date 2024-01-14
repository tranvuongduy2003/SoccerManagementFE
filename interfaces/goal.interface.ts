import { IMatch } from '.';

export interface IGoal {
  _id?: string;
  type?: string;
  player: string;
  match: IMatch;
  time: number;
  number: number;
}
