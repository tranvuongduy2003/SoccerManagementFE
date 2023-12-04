import { ITeam } from ".";


export interface IAwardTeam {
    _id?: string;
    name: ENameAwardTeam;
    team: ITeam;
}

export enum ENameAwardTeam {
    CHAMPION = 'CHAMPION',
    FAIRPLAY = 'FAIRPLAY',
}
