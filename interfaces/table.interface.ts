import { IMatch, IStatisticalTeam, ITeam } from ".";

export interface ITable {
    _id?: string;
    name: string;
    teams: ITeam[];
    leaderBoard?: IStatisticalTeam[];
    matches: IMatch[];
}
