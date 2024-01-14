import { IMatch, IPlayer, ITeam } from '.';

export interface IStatisticalTournament {
  _id: string;
  totalPlayer: number;
  totalGoal: number;
  totalOwN: number;
  totalMatches: number;
  totalCard: number;
  matchMostGoal: IMatch[];
  matchMostCard: IMatch[];
  goalPerMatch: number;
  cardPerMatch: number;
  totalDoubleKick: number;
  totalHattrick: number;
  totalPocker: number;
  teamMostGoal: ITeam[];
  teamMostCard: ITeam[];
  totalYellowCard: number;
  totalRedCard: number;
  playerMostCard: IPlayer[];
}
