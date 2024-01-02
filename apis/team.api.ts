import { ITeam } from '@/interfaces';
import { API_ROUTE } from '@/constants';
import httpRequest from '@/api-client/httpRequest';

export const getTeams = () => {
  return httpRequest.get<ITeam[]>(API_ROUTE.team + '/');
};

export const getTeamById = (id: string) => {
  return httpRequest.get<ITeam>(API_ROUTE.team + `/${id}`);
};

export const getTeamByTags = (tags: string | string[]) => {
  return httpRequest.get<ITeam[]>(API_ROUTE.team + `/tags/${tags}`);
};

export const createTeam = (team: ITeam) => {
  return httpRequest.post<ITeam>(API_ROUTE.team + '/', team);
};

export const updateTeam = (team: ITeam) => {
  return httpRequest.put<ITeam>(
    API_ROUTE.team + `/${team._id}`,
    team
  );
};

export const deleteTeam = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.team + `/${id}`);
};


