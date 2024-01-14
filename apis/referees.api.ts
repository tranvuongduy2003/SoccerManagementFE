import { API_ROUTE } from '@/constants';
import { IReferee } from '@/interfaces';
import httpRequest from '@/services/httpRequest';

export const getReferees = () => {
  return httpRequest.get<IReferee[]>(API_ROUTE.referee);
};
