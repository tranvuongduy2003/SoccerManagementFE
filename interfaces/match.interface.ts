import {
  ICard,
  IGoal,
  IReferee,
  IStadium,
  ITeam,
  InitReferee,
  InitStadium,
  InitTeam
} from '.';

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

export const InitMatch = {
  teamOne: InitTeam,
  teamTwo: InitTeam,
  pointOfTeamOne: 0,
  pointOfTeamTwo: 0,
  scoreTeamOne: 0,
  scoreTeamTwo: 0,
  penaltyTeamOne: 0,
  penaltyTeamTwo: 0,
  mainReferee: InitReferee,
  subReferee: [],
  round: '',
  time: new Date(),
  stadium: InitStadium,
  status: 'COMING',
  tags: '',
  cardsTeamOne: [],
  cardsTeamTwo: [],
  goalsTeamOne: [],
  goalsTeamTwo: [],
} as IMatch;

export enum ETypeStatusMatch {
  COMING = 'COMING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED'
}
