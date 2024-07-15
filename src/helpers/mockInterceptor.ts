import axios from 'axios';

const mockInterceptor = axios.create();

mockInterceptor.interceptors.request.use(
  (config) => {
    console.log('Intercepting request:', config);
    console.log('Header and url:', config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default mockInterceptor;
