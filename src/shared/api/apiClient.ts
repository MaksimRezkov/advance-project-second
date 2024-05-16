import axios from 'axios';
import { USER_TOKEN_KEY } from 'shared/const/LocalStorage';
import { localStorageService } from 'shared/utils/LocalStorage/LocalStorageService';

function getAuthDataLocalStorage () {
  const data = localStorageService.getItem(USER_TOKEN_KEY);
  if (data) {
    const { id } = JSON.parse(data);
    return id;
  }
  return '';
}

export const apiClient = axios.create({
  baseURL: _IS_DEV_ ? 'http://localhost:8000/' : '',
  headers: {
    authorization: getAuthDataLocalStorage(),
  },
});
