'use client';

import cookie from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { getCookie } from '@/utils';
import { ERole, IUser } from '@/interfaces';

class AuthService {
  login = ({
    accessToken,
    username,
    roles,
    _id,
    email,
    phone,
    refreshToken
  }: any) => {
    const { exp: accessTokenExp } = jwtDecode(accessToken);
    const { exp: refreshTokenExp } = jwtDecode(refreshToken);

    cookie.set('accessToken', `${accessToken}`, { expires: accessTokenExp });
    cookie.set('refreshToken', `${refreshToken}`, { expires: refreshTokenExp });
    const userPayload = { username, roles, _id, email, phone };
    const userStringify = JSON.stringify(userPayload);
    localStorage.setItem('user', userStringify);
  };

  logOut = () => {
    cookie.remove('accessToken');
    cookie.remove('refreshToken');
    localStorage.clear();
  };

  getUser = () => {
    const jsonUser = localStorage.getItem('user') || '';
    if (jsonUser) {
      return JSON.parse(jsonUser) as IUser;
    }
    return null;
  };

  getAccessToken = () => getCookie('accessToken') || '';

  isAuthenticated = () => !!this.getAccessToken() && !!this.getUser();

  isAdmin = () => {
    const user: IUser | null = this.getUser();
    if (user?.role === ERole.ADMIN) return true;
    return false;
  };

  isOwner = () => {
    const user: IUser | null = this.getUser();
    if (user?.role === ERole.OWNER) return true;
    return false;
  };

  isViewer = () => {
    const user: IUser | null = this.getUser();
    if (user?.role === ERole.VIEWER) return true;
    return false;
  };
}

const authService = new AuthService();

export default authService;
