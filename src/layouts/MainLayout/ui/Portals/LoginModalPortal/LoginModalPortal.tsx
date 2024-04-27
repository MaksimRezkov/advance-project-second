import { FC } from 'react';

import { Portal } from 'shared/Portal/ui/Portal';
import { LoginModal } from 'features/LoginModal';
import { useSelector } from 'react-redux';
import { getOpenLoginModal } from 'features/LoginModal/model/selectors/getOpenLoginModal/getOpenLoginModal';

export const LoginModalPortal: FC = () => {
  const isLoginModalOpen = useSelector(getOpenLoginModal);

  return (
    <>
      {
        isLoginModalOpen &&
        <Portal>
          <LoginModal/>
        </Portal>
      }
    </>
  );
};
