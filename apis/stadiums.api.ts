import { API_ROUTE } from '@/constants';
import { IStadium } from '@/interfaces';
import httpRequest from '@/services/httpRequest';

export const getStadiums = () => {
  return httpRequest.get<IStadium[]>(API_ROUTE.stadium);
};
