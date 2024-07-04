import { AxiosError } from 'axios';

export interface ApiResponse {
  data?: object;
  error?: AxiosError;
}
