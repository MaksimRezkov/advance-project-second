import axios from 'axios';
import { ACCESS_TOKEN } from 'shared/const/LocalStorage';
import { localStorageService } from 'shared/utils/LocalStorage/LocalStorageService';

export const apiClient = axios.create({
  baseURL: _IS_DEV_ ? 'http://localhost:8000/' : '',
  headers: {
    authorization: localStorageService.getItem(ACCESS_TOKEN) || '',
  },
});

export const apiUsersClient = axios.create({
  baseURL: 'http://localhost:4200/api',
});
