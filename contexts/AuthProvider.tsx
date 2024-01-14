/* eslint-disable no-unused-expressions */
import Cookies from 'js-cookie';
import Router from 'next/router';
import React, { ReactNode, useState } from 'react';
import { signIn, signUp } from '@/apis';
import { IUser, LoginPayload, SignUpPayload } from '@/interfaces';
import { checkNullish } from '@/utils';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  loggedIn: boolean;
  logOut: () => void;
  login: (params: LoginPayload) => Promise<void>;
  register: (data: SignUpPayload) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  getUser: () => IUser | null;
  getAccessToken: () => string;
  getRefreshToken: () => string;
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

export const AuthContext = React.createContext<AuthContextProps | null>(null);

const isValidToken = () => {
  const token = Cookies.get('accessToken');
  // JWT decode & check token hợp lệ và expire chưa
  if (token) return true;
  return false;
};

const AuthProvider = (props: AuthProviderProps) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(isValidToken());
  const [user, setUser] = useState<IUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  const login = async (params: LoginPayload) => {
    const id = toast.loading('Loading...');
    try {
      const { accessToken, refreshToken, user } = await signIn(params);

      setUser(user);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      const { exp: accessTokenExp } = jwtDecode(accessToken);
      const { exp: refreshTokenExp } = jwtDecode(refreshToken);

      Cookies.set('accessToken', `${accessToken}`, { expires: accessTokenExp });
      Cookies.set('refreshToken', `${refreshToken}`, {
        expires: refreshTokenExp
      });

      const userStringify = JSON.stringify(user);
      Cookies.set('user', userStringify);

      setLoggedIn(true);
      toast({
        title: 'Login successfully!',
        description: 'You will be redirected to Home page',
        status: 'success',
        duration: 500,
        onCloseComplete: () => Router.push('/'),
        position: 'top-right'
      });
    } catch (error: any) {
      console.log(error);
      toast({
        title: 'Login failed!',
        description: error.message ? error.message : 'Some thing wrong',
        status: 'error',
        duration: 1500,
        position: 'top-right'
      });
    }
  };
  const register = async (data: SignUpPayload) => {
    const id = toast.loading('Loading...');
    try {
      const { user, accessToken, refreshToken } = await signUp(data);

      setUser(user);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      const { exp: accessTokenExp } = jwtDecode(accessToken);
      const { exp: refreshTokenExp } = jwtDecode(refreshToken);

      Cookies.set('accessToken', `${accessToken}`, { expires: accessTokenExp });
      Cookies.set('refreshToken', `${refreshToken}`, {
        expires: refreshTokenExp
      });

      const userStringify = JSON.stringify(user);
      Cookies.set('user', userStringify);

      setLoggedIn(true);
      toast({
        title: 'Create new account successfully!',
        description: 'You will be redirected to Home page',
        status: 'success',
        duration: 500,
        onCloseComplete: () => Router.push('/'),
        position: 'top-right'
      });
    } catch (error: any) {
      console.log(error);
      toast({
        title: 'Create new account failed!',
        description: error,
        status: 'error',
        duration: 1500,
        position: 'top-right'
      });
    }
  };

  const logOut = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    // Comment 2 dòng này khi làm production
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    Cookies.remove('user');
    setLoggedIn(false);
    toast({
      title: 'Logout successfully!',
      status: 'success',
      duration: 500,
      onCloseComplete: () => Router.push('/'),
      position: 'top-right'
    });
  };

  const getUser = () => {
    const userCookie: string = checkNullish(Cookies.get('user')) || '';
    const userInfo = userCookie ? JSON.parse(userCookie) : null;
    return userInfo;
  };
  const getAccessToken = () => {
    const tokenCookie: string = checkNullish(Cookies.get('accessToken')) || '';
    const accessToken = tokenCookie ? JSON.parse(tokenCookie) : '';
    return accessToken;
  };
  const getRefreshToken = () => {
    const tokenCookie: string = checkNullish(Cookies.get('refreshToken')) || '';
    const accessToken = tokenCookie ? JSON.parse(tokenCookie) : '';
    return accessToken;
  };

  const { children } = props;
  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        login,
        register,
        setUser,
        setLoggedIn,
        getUser,
        getAccessToken,
        getRefreshToken,
        user,
        accessToken,
        refreshToken
      }}
    >
      <>{children}</>
    </AuthContext.Provider>
  );
};
export default AuthProvider;
