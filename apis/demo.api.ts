import httpRequest from '@/api-client/httpRequest';
import { Demo } from '@/types';

export const getDemo = () => {
  return httpRequest.get('api/v1/get-demo');
};

export const getDemoById = (id: string) => {
  return httpRequest.get(`api/v1/get-demo/${id}`);
};

export const postDemo = (data: Demo) => {
  return httpRequest.post('api/v1/post-demo', data);
};

export const putDemo = (id: string, data: Demo) => {
  return httpRequest.put(`api/v1/put-demo/${id}`, data);
};

export const deleteDemo = (id: string) => {
  return httpRequest.delete(`api/v1/patch-demo/${id}`);
};

export const patchDemo = (id: string, data: Demo) => {
  return httpRequest.patch(`api/v1/patch-demo/${id}`, data);
};
