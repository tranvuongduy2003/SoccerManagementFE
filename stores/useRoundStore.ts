import { IRound } from '@/interfaces';
import { create } from 'zustand';

type State = {
  rounds: IRound[];
};

type Action = {
  setRounds: (rounds: IRound[]) => void;
};

export const useRoundStore = create<State & Action>(set => ({
  rounds: [],
  setRounds: rounds => set(() => ({ rounds: rounds }))
}));
