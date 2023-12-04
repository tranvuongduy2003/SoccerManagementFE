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
  flag: string;
  rank?: number;
  coach: ICoach;
  players: IPlayer[];
  matches: IMatch;
  statistical: IStatisticalTeam;
  tags: string;
}

export const InitTeam = {
  name: '',
  flag: '',
  coach: InitCoach,
  players: [InitPlayer],
  matches: InitMatch,
  statistical: InitStatisticalTeam,
  tags: ''
} as ITeam;
