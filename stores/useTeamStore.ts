import { ITeam } from '@/interfaces';
import { create } from 'zustand';

type State = {
  team: ITeam;
};

type Action = {
  setTeam: (team: ITeam) => void;
};

export const useTeamStore = create<State & Action>(set => ({
  team: {
    name: '',
    flag: '',
    representative: '',
    level: 'FUN',
    area: '',
    isPublic: 'PUBLIC',
    uniform: [],
    coach: undefined,
    players: [],
    matches: [],
    statistical: undefined,
    tags: ''
  },
  setTeam: team => set(() => ({ team: team }))
}));
