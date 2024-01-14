import { IPlayer, ITeam } from '.';

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
