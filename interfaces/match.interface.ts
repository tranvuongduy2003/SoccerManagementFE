import { ICard, IGoal, IReferee, IStadium, ITeam } from '.';

export interface IMatch {
  _id?: string;
  teamOne: ITeam;
  teamTwo: ITeam;
  pointOfTeamOne: number;
  pointOfTeamTwo: number;
  scoreTeamOne: number;
  scoreTeamTwo: number;
  penaltyTeamOne?: number;
  penaltyTeamTwo?: number;
  mainReferee: IReferee;
  subReferee: IReferee[];
  round: string;
  time: Date;
  stadium: IStadium;
  status: ETypeStatusMatch;
  tags: string;
  cardsTeamOne: ICard[];
  cardsTeamTwo: ICard[];
  goalsTeamOne: IGoal[];
  goalsTeamTwo: IGoal[];
}

export enum ETypeStatusMatch {
  COMING = 'COMING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED'
}
