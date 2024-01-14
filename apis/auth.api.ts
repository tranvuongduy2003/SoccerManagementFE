import httpRequest from '@/services/httpRequest';
import { API_ROUTE } from '@/constants';
import {
  IUser,
  LoginPayload,
  LoginResponse,
  SignUpPayload
} from '@/interfaces';

export const getUserProfile = () => {
  return httpRequest.get<IUser>('/profile');
};

export const signIn = (data: LoginPayload) => {
  return httpRequest.post<LoginResponse, LoginPayload>(
    API_ROUTE.auth + '/login',
    data
  );
};

export const signUp = (data: SignUpPayload) => {
  return httpRequest.post<LoginResponse, SignUpPayload>(
    API_ROUTE.auth + '/sign-up',
    data
  );
};

export const signOut = () => {
  return httpRequest.post(API_ROUTE.auth + '/logout', null);
};

export const refreshToken = () => {
  return httpRequest.post(API_ROUTE.auth + '/refresh-token', null);
};
