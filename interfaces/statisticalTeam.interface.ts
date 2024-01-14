import { ITeam, IUser } from '.';

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

export enum ETypeHistory {
  WIN = 'WIN',
  DRAW = 'DRAW',
  LOSSES = 'LOSSES'
}
