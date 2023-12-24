import React, { FC, useCallback } from 'react';
import { LinkButton } from 'shared/LinkButton';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import './Header.scss';
import { Button } from 'shared/Button/ui/Button';
import { useModalOpenContext } from 'app/lib/context/useModalOpenContext';

export const Header: FC = () => {
  const { setModalOpen } = useModalOpenContext();

  const onOpenModal = useCallback(() => {
    setModalOpen((isOpenCurrent: boolean) => !isOpenCurrent);
  }, [setModalOpen]);

  return (
    <div className="header-app">
        <div className="header-app_content">
            <div className="header-content_left">
                <LinkButton to={'/'}>Home</LinkButton>
                <LinkButton to={'/about'}>About</LinkButton>
            </div>
            <div className="header-content_right">
                <ThemeSwitcher/>
                <Button
                  onClick={onOpenModal}
                >
                  Войти
                </Button>
            </div>
        </div>
    </div>
  );
};
