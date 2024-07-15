import apiService from '@/helpers/api';
const RESOURCE = '/resume';

export function getResume() {
  return apiService.get(RESOURCE);
}
