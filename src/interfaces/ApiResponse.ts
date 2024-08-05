import { AxiosError } from 'axios';

export interface ApiResponse<T> {
  code: number;
  data?: T;
  error?: AxiosError;
}
