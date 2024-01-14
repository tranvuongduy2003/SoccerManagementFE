import { IMatch } from '.';

export interface ICard {
  _id?: string;
  type: ETypeCard;
  player: string;
  match: IMatch;
  time: number;
  number: number;
}

export enum ETypeCard {
  YELLOW = 'YELLOW',
  RED = 'RED'
}
