import { ITournament, InitTournament } from '@/interfaces';
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
  tournament: InitTournament,
  setIsLoading: loading => set(() => ({ isLoading: loading })),
  setTournament: tournament => set(() => ({ tournament: tournament }))
}));
