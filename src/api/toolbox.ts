import apiService from '@/helpers/api';
const RESOURCE = '/toolbox';

export function getToolbox() {
  return apiService.get(RESOURCE);
}
