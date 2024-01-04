import { IRound } from '@/interfaces';
import { API_ROUTE } from '@/constants';
import httpRequest from '@/services/httpRequest';

export const getRounds = () => {
  return httpRequest.get<IRound[]>(API_ROUTE.round + '/');
};

export const getRoundById = (id: string) => {
  return httpRequest.get<IRound>(API_ROUTE.round + `/${id}`);
};

export const getRoundByTags = (tags: string | string[]) => {
  return httpRequest.get<IRound[]>(API_ROUTE.round + `/tags/${tags}`);
};

export const createRound = (Round: IRound) => {
  return httpRequest.post<IRound>(API_ROUTE.round + '/', Round);
};

export const updateRound = (Round: IRound) => {
  return httpRequest.put<IRound>(API_ROUTE.round + `/${Round._id}`, Round);
};

export const deleteRound = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.round + `/${id}`);
};
