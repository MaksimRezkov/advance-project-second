import React, { FC, memo, useCallback } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import './Header.scss';
import { Button } from 'shared/Button/ui/Button';
import { useDispatch } from 'react-redux';
import { getAuthUserId } from 'entityes/AuthUser';
import { useAppSelector } from 'store/lib/hooks/useAppSelector';
import { HeaderItems } from './header_items/HeaderItems';
import { loginModalActions } from 'features/LoginModal/model/slice/loginModalSlice';

const ThemeSwitcherMemo = memo(ThemeSwitcher);
const ButtonMemo = memo(Button);

export const Header: FC = () => {
  const dispatch = useDispatch();
  const authUserId = useAppSelector(getAuthUserId);

  const onOpenModal = useCallback(() => {
    dispatch(loginModalActions.toggleModalOpen(true));
  }, [dispatch, loginModalActions]);

  const loginBtnText = authUserId ? 'Выйти' : 'Войти';

  return (
    <div className="header-app">
        <div className="header-app_content">
          <HeaderItems authUserId={authUserId}/>
          <div className="header-content_right">
              <ThemeSwitcherMemo/>
              <ButtonMemo
                onClick={onOpenModal}
              >
                {loginBtnText}
              </ButtonMemo>
          </div>
        </div>
    </div>
  );
};
