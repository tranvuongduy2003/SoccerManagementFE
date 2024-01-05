import {
  ICoach,
  IMatch,
  IPlayer,
  IStatisticalTeam,
  InitCoach,
  InitMatch,
  InitPlayer,
  InitStatisticalTeam
} from '.';

export interface ITeam {
  _id?: string;
  name: string;
  representative: string;
  level: string;
  area: string;
  isPublic: string;
  uniform: string[];
  flag: string;
  rank?: number;
  coach: ICoach;
  players: IPlayer[];
  matches: IMatch[];
  statistical: IStatisticalTeam;
  tags: string;
}

export const InitTeam = {
  name: '',
  flag: '',
  representative: '',
  level: 'FUN',
  area: '',
  isPublic: 'PUBLIC',
  uniform: [],
  coach: InitCoach,
  players: [],
  matches: [],
  statistical: InitStatisticalTeam,
  tags: ''
} as ITeam;
