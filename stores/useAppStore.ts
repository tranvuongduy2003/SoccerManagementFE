import {
  ETypeFormulaTour,
  ETypeStatusTour,
  ETypeVisionTour,
  ITournament
} from '@/interfaces';
import { create } from 'zustand';

type State = {
  isLoading: boolean;
  tournament: ITournament;
};

type Action = {
  setIsLoading: (loading: boolean) => void;
  setTournament: (tournament: ITournament) => void;
};

export const useAppStore = create<State & Action>(set => ({
  isLoading: false,
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
  setIsLoading: loading => set(() => ({ isLoading: loading })),
  setTournament: tournament => set(() => ({ tournament: tournament }))
}));
