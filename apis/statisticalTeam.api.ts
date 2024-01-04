// import { IStatisticalTeam } from '@/interfaces';
// import axios from 'axios';

// const StatisticalStatisIStatisticalTeamsApi = axios.create({
//   baseURL: 'http://localhost:8080/api/statisticalStatisIStatisticalTeam'
// });

// export const getStatisticalStatisIStatisticalTeams = async () => {
//   const res = await StatisticalStatisIStatisticalTeamsApi.get('/');
//   return res.data;
// };

// export const getStatisticalStatisIStatisticalTeamById = (id: string) => StatisticalStatisIStatisticalTeamsApi.get(`/${id}`);
// // export const getStatisIStatisticalTeamByTags = async (tags: any) => StatisticalStatisIStatisticalTeamsApi.get(`/tags/${tags}`);

// export const getStatisticalStatisIStatisticalTeamsByTags = async (tags: string | string[]) => {
//   const res = await StatisticalStatisIStatisticalTeamsApi.get(`/tags/${tags}`);
//   return res.data;
// };

// export const createStatisticalStatisIStatisticalTeam = (StatisIStatisticalTeam: IStatisticalTeam) => StatisticalStatisIStatisticalTeamsApi.post('/', StatisIStatisticalTeam);

// export const updateStatisticalStatisIStatisticalTeam = (StatisIStatisticalTeam: IStatisticalTeam) => StatisticalStatisIStatisticalTeamsApi.put(`/${StatisIStatisticalTeam._id}`, StatisIStatisticalTeam);

// export const deleteStatisticalStatisIStatisticalTeam = (id: string) => StatisticalStatisIStatisticalTeamsApi.delete(`/${id}`);

// export default StatisticalStatisIStatisticalTeamsApi;

import { IStatisticalTeam } from '@/interfaces';
import { API_ROUTE } from '@/constants';
import httpRequest from '@/services/httpRequest';

export const getStatisticalTeams = () => {
  return httpRequest.get<IStatisticalTeam[]>(API_ROUTE.statisticalTeam + '/');
};

export const getStatisticalTeamById = (id: string) => {
  return httpRequest.get<IStatisticalTeam>(
    API_ROUTE.statisticalTeam + `/${id}`
  );
};

export const getStatisticalTeamsByTags = (tags: string | string[]) => {
  return httpRequest.get<IStatisticalTeam[]>(
    API_ROUTE.statisticalTeam + `/tags/${tags}`
  );
};

export const createStatisticalTeam = (
  StatisIStatisticalTeam: IStatisticalTeam
) => {
  return httpRequest.post<IStatisticalTeam>(
    API_ROUTE.statisticalTeam + '/',
    StatisIStatisticalTeam
  );
};

export const updateStatisticalTeam = (
  StatisIStatisticalTeam: IStatisticalTeam
) => {
  return httpRequest.put<IStatisticalTeam>(
    API_ROUTE.statisticalTeam + `/${StatisIStatisticalTeam._id}`,
    StatisIStatisticalTeam
  );
};

export const deleteStatisIStatisticalTeam = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.statisticalTeam + `/${id}`);
};
