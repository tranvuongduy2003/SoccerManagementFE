import { ITable } from '@/interfaces';
import { API_ROUTE } from '@/constants';
import httpRequest from '@/api-client/httpRequest';

export const getTables = () => {
  return httpRequest.get<ITable[]>(API_ROUTE.table + '/');
};

export const getTableById = (id: string) => {
  return httpRequest.get<ITable>(API_ROUTE.table + `/${id}`);
};

export const getTableByTags = (tags: string | string[]) => {
  return httpRequest.get<ITable[]>(API_ROUTE.table + `/tags/${tags}`);
};

export const createTable = (Table: ITable) => {
  return httpRequest.post<ITable>(API_ROUTE.table + '/', Table);
};

export const updateTable = (Table: ITable) => {
  return httpRequest.put<ITable>(
    API_ROUTE.table + `/${Table._id}`,
    Table
  );
};

export const deleteTable = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.table + `/${id}`);
};


