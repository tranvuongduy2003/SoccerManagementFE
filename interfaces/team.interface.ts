import { ICoach, IMatch, IPlayer, IStatisticalTeam } from '.';

export interface ITeam {
  _id?: string;
  name: string;
  representative: any;
  level: string;
  area: string;
  isPublic: string;
  uniform: string[];
  flag: string;
  rank?: number;
  coach: ICoach | undefined;
  players: IPlayer[];
  matches: IMatch[];
  statistical: IStatisticalTeam | undefined;
  tags: string;
  checked?: boolean;
}

export const InitTeam = {
  name: '',
  flag: '',
  representative: '',
  level: 'FUN',
  area: '',
  isPublic: 'PUBLIC',
  uniform: [],
  coach: undefined,
  players: [],
  matches: [],
  statistical: undefined,
  tags: ''
} as ITeam;
