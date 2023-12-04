import { IMatch, IPlayer, ITeam } from '.';

export interface IStatisticalTournament {
    _id : string;
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

export const InitStatisticalTournament = {
    totalPlayer: 0,
    totalGoal: 0,
    totalOwN: 0,
    totalMatches: 0,
    totalCard: 0,
    matchMostGoal: [],
    matchMostCard: [],
    goalPerMatch: 0,
    cardPerMatch:0,
    totalDoubleKick: 0,
    totalHattrick: 0,
    totalPocker: 0,
    teamMostGoal: [],
    teamMostCard: [],
    totalYellowCard: 0,
    totalRedCard: 0,
    playerMostCard: [],
}