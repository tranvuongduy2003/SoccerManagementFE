import { ITeam, IUser, InitTeam } from '.';

export interface IStatisticalTeam {
  _id?: string;
  team: ITeam | string;
  rank: number;
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  WDL: string;
  point: number;
  goals: number;
  losts: number;
  owns: number;
  yellowCards: number;
  redCards: number;
  voteChampions: IUser[];
  voteFairPlays: IUser[];
  history: ETypeHistory[];
  tags: string;
}

export const InitStatisticalTeam = {
  team: '',
  rank: 0,
  wins: 0,
  draws: 0,
  losses: 0,
  matches: 0,
  WDL: '',
  point: 0,
  goals: 0,
  losts: 0,
  owns: 0,
  yellowCards: 0,
  redCards: 0,
  voteChampions: [],
  voteFairPlays: [],
  history: [],
  tags: ''
} as IStatisticalTeam;


export enum ETypeHistory {
  WIN = 'WIN',
  DRAW = 'DRAW',
  LOSSES = 'LOSSES',
}