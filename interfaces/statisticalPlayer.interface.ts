import { IPlayer, ITeam, InitPlayer, InitTeam } from '.';

export interface IStatisticalPLayer {
  _id?: string;
  player: IPlayer | string;
  team: ITeam;
  goals: number;
  owner: number;
  yellowCards: number;
  redCards: number;
  voteBestPlayer: number;
  voteBestPosition: number;
  tags: string;
}

export const InitStatisticalPLayer = {
  player: '',
  team: InitTeam,
  goals: 0,
  owner: 0,
  yellowCards: 0,
  redCards: 0,
  voteBestPlayer: 0,
  voteBestPosition: 0,
  tags: ''
} as IStatisticalPLayer;
