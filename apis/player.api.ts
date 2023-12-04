import { IPlayer } from '@/interfaces';
import { API_ROUTE } from '@/constants';
import httpRequest from '@/api-client/httpRequest';

export const getPlayers = () => {
  return httpRequest.get<IPlayer[]>(API_ROUTE.player + '/');
};

export const getPlayerById = (id: string) => {
  return httpRequest.get<IPlayer>(API_ROUTE.player + `/${id}`);
};

export const getPlayerByTags = (tags: string | string[]) => {
  return httpRequest.get<IPlayer[]>(API_ROUTE.player + `/tags/${tags}`);
};

export const getPlayerByTagsAndPosition = (
  tags: string | string[],
  position: string
) => {
  return httpRequest.get<IPlayer[]>(
    API_ROUTE.player + `/tags/${tags}/position/${position}`
  );
};

export const createPlayer = (Player: IPlayer) => {
  return httpRequest.post<IPlayer>(API_ROUTE.player + '/', Player);
};

export const updatePlayer = (Player: IPlayer) => {
  return httpRequest.put<IPlayer>(API_ROUTE.player + `/${Player._id}`, Player);
};

export const deletePlayer = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.player + `/${id}`);
};
