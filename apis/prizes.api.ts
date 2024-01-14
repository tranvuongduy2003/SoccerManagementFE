import { API_ROUTE } from '@/constants';
import { IPrize } from '@/interfaces';
import httpRequest from '@/services/httpRequest';

export const getPrizes = () => {
  return httpRequest.get<IPrize[]>(API_ROUTE.prize);
};
