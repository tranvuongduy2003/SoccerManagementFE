import { IMatch, InitMatch } from '.';

export interface ICard {
  _id?: string;
  type: ETypeCard;
  player: string;
  match: IMatch;
  time: number;
  number: number;
}

export const InitCard = {
  type: 'YELLOW',
  player: '',
  match: InitMatch,
  time: 0,
  number: 0
} as ICard;

export enum ETypeCard {
  YELLOW = 'YELLOW',
  RED = 'RED'
}
