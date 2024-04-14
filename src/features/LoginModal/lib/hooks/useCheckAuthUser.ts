import { authUserActions } from 'entityes/AuthUser';
import { useDispatch } from 'react-redux';
import { USER_DATA_KEY } from 'shared/const/LocalStorage';
import { localStorageService } from 'shared/utils/LocalStorage/LocalStorageService';

export function useCheckAuthUser (): void {
  const authUserString = localStorageService.getItem(USER_DATA_KEY);
  const authUser = authUserString && JSON.parse(authUserString);
  if (authUser?.id) {
    const dispatch = useDispatch();
    dispatch(authUserActions.setAuthUser(authUser));
  }
};
