import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ApiService } from '../../../src/helpers/api';

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService('https://api.com');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Constructor', () => {
    it('should be defined', () => {
      expect(apiService).toBeDefined();
    });

    it('should create an axios instance with the correct base URL and headers', () => {
      expect(apiService.axiosInstance.defaults.baseURL).toBe('https://api.com');
      expect(apiService.axiosInstance.defaults.headers['Content-Type']).toBe('application/json');
    });

    it('should create an axios instance in dev mode', () => {
      vi.stubEnv('MODE', 'development');
      const service = new ApiService('https://api.com');
      expect(service.axiosInstance.interceptors).toBeDefined();
    });
  });

  describe('API Methods', () => {
    it('should call axiosInstance.get with the correct URL and config', async () => {
      const spy = vi.spyOn(apiService.axiosInstance, 'get');
      await apiService.get('https://api.com/data');
      expect(spy).toHaveBeenCalledWith('https://api.com/data', undefined);
    });

    it('should call axiosInstance.post with the correct URL and config', async () => {
      const data = { name: 'John Doe' };
      const spy = vi.spyOn(apiService.axiosInstance, 'post');
      await apiService.post('https://api.com/data', data);
      expect(spy).toHaveBeenCalledWith('https://api.com/data', data, undefined);
    });

    it('should call axiosInstance.put with the correct URL and config', async () => {
      const data = { name: 'John Doe' };
      const spy = vi.spyOn(apiService.axiosInstance, 'put');
      await apiService.put('https://api.com/data', data);
      expect(spy).toHaveBeenCalledWith('https://api.com/data', data, undefined);
    });

    it('should call axiosInstance.delete with the correct URL and config', async () => {
      const spy = vi.spyOn(apiService.axiosInstance, 'delete');
      await apiService.delete('https://api.com/data');
      expect(spy).toHaveBeenCalledWith('https://api.com/data', undefined);
    });
  });
});
