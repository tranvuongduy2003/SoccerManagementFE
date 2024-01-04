import { FormatLeague } from '@/pages/league';
import { ITournament } from '@/interfaces';
import { API_ROUTE } from '@/constants';
import httpRequest from '@/services/httpRequest';

export const getTournaments = () => {
  return httpRequest.get<ITournament[]>(API_ROUTE.tournament + '/');
};

export const getTournamentByFormat = (format: FormatLeague) => {
  return httpRequest.post<ITournament[]>(
    API_ROUTE.tournament + '/format',
    format
  );
};

export const getTournamentById = (id: string) => {
  return httpRequest.get<ITournament>(API_ROUTE.tournament + `/${id}`);
};

export const createTournament = (tournament: ITournament) => {
  return httpRequest.post<ITournament>(API_ROUTE.tournament + '/', tournament);
};

export const updateTournament = (tournament: ITournament) => {
  return httpRequest.put<ITournament>(
    API_ROUTE.tournament + `/${tournament._id}`,
    tournament
  );
};

export const deleteTournament = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.tournament + `/${id}`);
};
