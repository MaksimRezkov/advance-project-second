import axios from 'axios';
import { USER_TOKEN_KEY } from 'shared/const/LocalStorage';
import { localStorageService } from 'shared/utils/LocalStorage/LocalStorageService';

export const apiClient = axios.create({
  baseURL: _IS_DEV_ ? 'http://localhost:8000/' : '',
  headers: {
    authorization: localStorageService.getItem(USER_TOKEN_KEY),
  },
});
