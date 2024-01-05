import { jwtDecode } from 'jwt-decode';
import { checkNullish } from '.';
import cookie from 'js-cookie';

export const clearCookiesAndLocalStorage = () => {
  cookie.remove('accessToken');
  cookie.remove('refreshToken');
  localStorage.clear();
};

export const logout = () => {
  clearCookiesAndLocalStorage();
  window.location.href = '/login';
};

export const setCredentialsToCookies = (data: {
  accessToken: string;
  refreshToken: string;
}) => {
  const {exp: accessTokenExp} = jwtDecode(data.accessToken);
    const {exp: refreshTokenExp} = jwtDecode(data.refreshToken);

  cookie.set('accessToken', data.accessToken, {
    expires: accessTokenExp
  });
  cookie.set('refreshToken', data.refreshToken, {
    expires: refreshTokenExp
  });
};

export const checkAuthStatus = (): boolean => {
  return !!cookie.get('accessToken');
};

export function getAccessToken(): string {
  return checkNullish(cookie.get('accessToken')) as string;
}
