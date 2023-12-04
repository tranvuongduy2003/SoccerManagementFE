import { ITeam, InitTeam, InitTournament } from '@/interfaces';
import { create } from 'zustand';

type State = {
  team: ITeam;
};

type Action = {
  setTeam: (team: ITeam) => void;
};

export const useTeamStore = create<State & Action>(set => ({
  team: InitTeam,
  setTeam: team => set(() => ({ team: team }))
}));
