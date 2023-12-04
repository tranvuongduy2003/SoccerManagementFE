import {
  IAwardPlayer,
  IAwardTeam,
  IPrize,
  IReferee,
  IRound,
  ISponsor,
  IStadium,
  ITeam,
  InitSponsor
} from '.';

export interface ITournament {
  _id?: string;
  formula: ETypeFormulaTour;
  name: string;
  image: string;
  logo: string;
  prizes: IPrize[];
  awardTeams: IAwardTeam[];
  awardPlayers: IAwardPlayer[];
  vision: ETypeVisionTour;
  teams: ITeam[];
  rounds: IRound[];
  stadiums: IStadium[];
  referees: IReferee[];
  sponsor: ISponsor;
  season: string;
  status: ETypeStatusTour;
  description: string;
  statistical: string;
  tags: string;
  maxTeam: number;
}

export const InitTournament = {
  formula: 'KNOCKOUT',
  name: '',
  image: '',
  logo: '',
  prizes: [],
  awardTeams: [],
  awardPlayers: [],
  vision: 'DOMESTIC',
  teams: [],
  rounds: [],
  stadiums: [],
  referees: [],
  sponsor: InitSponsor,
  season: '',
  status: 'REGISTERING',
  description: '',
  statistical: '',
  tags: '',
  maxTeam: 0
} as ITournament;

export enum ETypeFormulaTour {
  STAGE = 'KNOCKOUT',
  ROUND_FIGHT = 'ROUND FIGHT',
  TABLE = 'GROUP STAGE'
}

export enum ETypeVisionTour {
  DOMESTIC = 'DOMESTIC',
  INTERNATIONAL = 'INTERNATIONAL'
}

export enum ETypeStatusTour {
  REGISTERING = 'REGISTERING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED'
}
