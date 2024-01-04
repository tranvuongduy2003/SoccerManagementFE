import cookie from 'js-cookie';
import {jwtDecode} from 'jwt-decode'
import { getCookie } from '@/utils';
import { User } from '@/models';

class AuthService {
  login = ({ accessToken, name, roles, id, email, refreshToken }: any) => {
    const {exp: accessTokenExp} = jwtDecode(accessToken);
    const {exp: refreshTokenExp} = jwtDecode(refreshToken);

    cookie.set('accessToken', `${accessToken}`, { expires: accessTokenExp });
    cookie.set('refreshToken', `${refreshToken}`, { expires: refreshTokenExp });
    const userPayload = { name, roles, id, email };
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
      return JSON.parse(jsonUser) as User
    }
    return null;
  };

  getAccessToken = () => getCookie('accessToken') || '';

  isAuthenticated = () => !!this.getAccessToken() && !!this.getUser();

  isAdmin = () => {
    const user: User | null = this.getUser();
    if (user?.role === 'ADMIN') return true;
    return false;
  };
  
  isClient = () => {
    const user: User | null = this.getUser();
    if (user?.role === 'CLIENT') return true;
    return false;
  };
  
  isOwner = () => {
    const user: User | null = this.getUser();
    if (user?.role === 'OWNER') return true;
    return false;
  };
}

const authService = new AuthService();

export default authService;
