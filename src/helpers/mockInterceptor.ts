import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosError } from 'axios';

const mockInterceptor = axios.create();

mockInterceptor.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log('Intercepting request:', config);
    console.log('Header and url:', config.url);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default mockInterceptor;
