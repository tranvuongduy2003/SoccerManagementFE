import { API_ROUTE } from '@/constants';
import { ISponsor } from '@/interfaces';
import httpRequest from '@/services/httpRequest';

export const getSponsors = () => {
  return httpRequest.get<ISponsor[]>(API_ROUTE.sponsor);
};

export const getSponsorById = (id: string) => {
  return httpRequest.get<ISponsor>(API_ROUTE.sponsor + `/${id}`);
};
