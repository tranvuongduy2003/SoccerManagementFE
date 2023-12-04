import { ITournament, InitTournament } from '@/interfaces';
import { create } from 'zustand';

type State = {
  tournament: ITournament;
};

type Action = {
  setTournament: (tournament: ITournament) => void;
};

export const useTournamentStore = create<State & Action>(set => ({
  tournament: InitTournament,
  setTournament: tournament => set(() => ({ tournament: tournament }))
}));
