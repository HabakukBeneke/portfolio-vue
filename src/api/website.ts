import apiService from '@/helpers/api';
const RESOURCE = '/website';

export function getWebsite() {
  return apiService.get(RESOURCE);
}
