import httpRequest from '@/api-client/httpRequest';
import { User } from '@/models';
import { LoginPayload, LoginResponse, SignUpPayload } from '@/types';

export const getUserProfile = () => {
  return httpRequest.get<User>('/profile');
};

export const signIn = (data: LoginPayload) => {
  return httpRequest.post<LoginResponse, LoginPayload>('/login', data);
};

export const signUp = (data: SignUpPayload) => {
  return httpRequest.post<any, SignUpPayload>('/auth/sign-up', data);
};

export const signOut = () => {
  return httpRequest.post('/logout', null);
};

export const refreshToken = () => {
  return httpRequest.post('/refresh-token', null);
};
