import { IMatch, ITable } from '.';

export interface IRound {
  _id?: string;
  name: string;
  type: string;
  numberOfTeam: number;
  tables?: ITable[];
  tags: string;
  matches?: IMatch[];
}

export const InitRound = {
  name: '',
  type: '',
  numberOfTeam: 0,
  tables: [],
  tags: '',
  matches: []
} as IRound;
