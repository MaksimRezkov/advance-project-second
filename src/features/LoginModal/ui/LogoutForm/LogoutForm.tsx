import { authUserActions } from 'entityes/AuthUser';
import { getClassName } from '../../lib/utils/getClassName';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'shared/Button/ui/Button';
import { USER_TOKEN_KEY } from 'shared/const/LocalStorage';
import { localStorageService } from 'shared/utils/LocalStorage/LocalStorageService';

interface LogoutFormProps {
  onConfirm: () => void
  onCancel: () => void
}

export const LogoutForm: FC<LogoutFormProps> = ({ onCancel, onConfirm }) => {
  const { formBtnsClassName } = getClassName();
  const dispatch = useDispatch();

  const confirmLogout = () => {
    dispatch(authUserActions.clearAuthUser());
    localStorageService.removeItem(USER_TOKEN_KEY);
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
