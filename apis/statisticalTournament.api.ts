import { IStatisticalTournament } from '@/interfaces';
import { API_ROUTE } from '@/constants';
import httpRequest from '@/services/httpRequest';

export const getStatisticalTournaments = () => {
  return httpRequest.get<IStatisticalTournament[]>(
    API_ROUTE.statisticalTournament + '/'
  );
};

export const getStatisticalTournamentById = (id: string) => {
  return httpRequest.get<IStatisticalTournament>(
    API_ROUTE.statisticalTournament + `/${id}`
  );
};

export const createStatisticalTournament = (
  statisticalTournament: IStatisticalTournament
) => {
  return httpRequest.post<IStatisticalTournament>(
    API_ROUTE.statisticalTournament + '/',
    statisticalTournament
  );
};

export const updateStatisticalTournament = (
  statisticalTournament: IStatisticalTournament
) => {
  return httpRequest.put<IStatisticalTournament>(
    API_ROUTE.statisticalTournament + `/${statisticalTournament._id}`,
    statisticalTournament
  );
};

export const deleteStatisticalTournament = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.statisticalTournament + `/${id}`);
};
