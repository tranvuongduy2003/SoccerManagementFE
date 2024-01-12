import { IPlayer } from '@/interfaces';
import { API_ROUTE } from '@/constants';
import httpRequest from '@/services/httpRequest';

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

export const createPlayer = (data: any) => {
  return httpRequest.post<IPlayer[]>(API_ROUTE.player + '/', data);
};

export const updatePlayer = (player: IPlayer) => {
  return httpRequest.put<IPlayer>(API_ROUTE.player + `/${player._id}`, player);
};

export const deletePlayer = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.player + `/${id}/`);
};

export const deletePlayerByOwner = (data: { id: string; idTeam: string }) => {
  return httpRequest.delete<void>(
    API_ROUTE.player + `/${data.id}/team/${data.idTeam}/`
  );
};
