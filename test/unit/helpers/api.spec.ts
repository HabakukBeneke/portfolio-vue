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
      new ApiService('https://api.com');
      expect(apiService.axiosInstance.interceptors).toBeDefined();
    });
  });

  describe('GET', () => {
    it('should call axiosInstance.get with the correct URL and config', async () => {
      const spy = vi.spyOn(apiService, 'get');
      apiService.get('https://api.com/data');
      expect(spy).toHaveBeenCalledWith('https://api.com/data');
    });

    it('should call axiosInstance.post with the correct URL and config', async () => {
      const data = { name: 'John Doe' };
      const spy = vi.spyOn(apiService, 'post');
      apiService.post('https://api.com/data', data);
      expect(spy).toHaveBeenCalledWith('https://api.com/data', data);
    });

    it('should call axiosInstance.put with the correct URL and config', async () => {
      const data = { name: 'John Doe' };
      const spy = vi.spyOn(apiService, 'put');
      apiService.put('https://api.com/data', data);
      expect(spy).toHaveBeenCalledWith('https://api.com/data', data);
    });

    it('should call axiosInstance.post with the correct URL and config', async () => {
      const spy = vi.spyOn(apiService, 'delete');
      apiService.delete('https://api.com/data');
      expect(spy).toHaveBeenCalledWith('https://api.com/data');
    });
  });
});
