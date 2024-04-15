import { authUserActions } from 'entityes/AuthUser';
import { getClassName } from '../../lib/utils/getClassName';
import { FC } from 'react';
import { Button } from 'shared/Button/ui/Button';
import { ACCESS_TOKEN, USER_DATA_KEY, USER_ID } from 'shared/const/LocalStorage';
import { localStorageService } from 'shared/utils/LocalStorage/LocalStorageService';
import { logoutAsyncThunk } from 'features/LoginModal/model/service/LogoutAsyncThunk/LogoutAsyncThunk';
import { useAppDispatch } from 'store/lib/hooks/useAppDispatch';

interface LogoutFormProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const LogoutForm: FC<LogoutFormProps> = ({ onCancel, onConfirm }) => {
  const { formBtnsClassName } = getClassName();
  const dispatch = useAppDispatch();

  const confirmLogout = async () => {
    const result = await dispatch(logoutAsyncThunk());
    dispatch(authUserActions.clearAuthUser());
    localStorageService.removeItem(USER_DATA_KEY);
    localStorageService.removeItem(USER_ID);
    localStorageService.removeItem(ACCESS_TOKEN);
    onConfirm();
  };

  return (
    <div className={formBtnsClassName}>
      <Button onClick={confirmLogout}>
        Выйти
      </Button>
      <Button bordered={true} onClick={onCancel}>
        Отмена
      </Button>
    </div>
  );
};
