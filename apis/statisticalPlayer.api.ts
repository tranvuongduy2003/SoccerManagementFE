import { IStatisticalPLayer } from '@/interfaces';
import { API_ROUTE } from '@/constants';
import httpRequest from '@/services/httpRequest';

export const getStatisticalPlayers = () => {
  return httpRequest.get<IStatisticalPLayer[]>(
    API_ROUTE.statisticalPlayer + '/'
  );
};

export const getStatisticalPlayerById = (id: string) => {
  return httpRequest.get<IStatisticalPLayer>(
    API_ROUTE.statisticalPlayer + `/${id}`
  );
};

export const getStatisticalPlayersByTags = (tags: string | string[]) => {
  return httpRequest.get<IStatisticalPLayer[]>(
    API_ROUTE.statisticalPlayer + `/tags/${tags}`
  );
};

export const createStatisticalPlayer = (StatisticalPlayer: any) => {
  return httpRequest.post<IStatisticalPLayer[]>(
    API_ROUTE.statisticalPlayer + '/',
    StatisticalPlayer
  );
};

export const updateStatisticalPlayer = (
  StatisticalTeam: IStatisticalPLayer
) => {
  return httpRequest.put<IStatisticalPLayer>(
    API_ROUTE.statisticalTeam + `/${StatisticalTeam._id}`,
    StatisticalTeam
  );
};

export const deleteStatisticalPlayer = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.statisticalTeam + `/${id}`);
};
