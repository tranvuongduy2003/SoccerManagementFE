import { IUser } from '.';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  username: string;
  phone: string;
}

export interface LoginResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}
