import React, { FC, memo, useCallback } from 'react';
import { LinkButton } from 'shared/LinkButton';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import './Header.scss';
import { Button } from 'shared/Button/ui/Button';
// import { useModalOpenContext } from 'app/lib/context/useModalOpenContext';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserId } from 'entityes/AuthUser';
import { modalActions } from 'shared/Modal';

const LinkButtonMemo = memo(LinkButton);
const ThemeSwitcherMemo = memo(ThemeSwitcher);
const ButtonMemo = memo(Button);

export const Header: FC = () => {
  // const { setModalOpen } = useModalOpenContext();
  const dispatch = useDispatch();
  const authUserId = useSelector(getAuthUserId);

  const onOpenModal = useCallback(() => {
    // setModalOpen((isOpenCurrent: boolean) => !isOpenCurrent);
    dispatch(modalActions.toggleOpenModal(true));
  }, [dispatch, modalActions]);

  const loginBtnText = authUserId ? 'Выйти' : 'Войти';

  return (
    <div className="header-app">
        <div className="header-app_content">
            <div className="header-content_left">
                <LinkButtonMemo to={'/'}>Home</LinkButtonMemo>
                <LinkButtonMemo to={'/about'}>About</LinkButtonMemo>
            </div>
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
