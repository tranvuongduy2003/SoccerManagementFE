import {
  ETypeFormulaTour,
  ETypeStatusTour,
  ETypeVisionTour,
  ITournament
} from '@/interfaces';
import { create } from 'zustand';

type State = {
  tournament: ITournament;
};

type Action = {
  setTournament: (tournament: ITournament) => void;
};

export const useTournamentStore = create<State & Action>(set => ({
  tournament: {
    formula: ETypeFormulaTour.STAGE,
    name: '',
    image: '',
    logo: '',
    prizes: [],
    awardTeams: [],
    awardPlayers: [],
    vision: ETypeVisionTour.DOMESTIC,
    teams: [],
    rounds: [],
    stadiums: [],
    referees: [],
    sponsor: {
      name: '',
      image: '',
      logo: '',
      email: ''
    },
    season: '',
    status: ETypeStatusTour.REGISTERING,
    description: '',
    statistical: '',
    tags: '',
    maxTeam: 0
  },
  setTournament: tournament => set(() => ({ tournament: tournament }))
}));
