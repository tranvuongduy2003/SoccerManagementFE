import cookie from 'js-cookie';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import {
  clearCookiesAndLocalStorage,
  setCredentialsToCookies,
  checkNullish
} from '@/utils';
import { refreshToken } from '@/apis';
import Cookies from 'js-cookie';

export type IConfig = AxiosRequestConfig;

function getAccessToken() {
  const accessToken = cookie.get('accessToken') || '';
  return accessToken;
}

const requestConfig = {
  baseURL: process.env.API_URL
};

export const axiosInstance = axios.create(requestConfig);

async function middlewareRefresh(error: AxiosError) {
  try {
    if (checkNullish(Cookies.get('refreshToken'))) {
      const { data } = await refreshToken();
      setCredentialsToCookies({
        accessToken: data.access.token,
        refreshToken: data.refresh.token
      });
      if (error?.config?.headers)
        error.config.headers.Authorization = `Bearer ${data.access.token}`;
    }
  } catch (error) {
    clearCookiesAndLocalStorage();
    window.location.replace('/login');
    return;
  }

  error?.config && axios(error.config);
}

export default function initRequest() {
  axiosInstance.interceptors.request.use(
    config => {
      const accessToken = getAccessToken();
      if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    res => {
      return res.data.data;
    },
    error => {
      switch (error.response?.status) {
        case 401: {
          middlewareRefresh(error);
          break;
        }
        case 400: {
          break;
        }
        case 403: {
          alert('Bạn không có quyền truy cập vào trang này');
          break;
        }
        case 500: {
          break;
        }
        default:
          break;
      }
      return Promise.reject(error);
    }
  );
}

initRequest();
