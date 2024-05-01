import { FC, Suspense, useCallback, useState } from 'react';
import { Modal } from 'shared/Modal';
import LoginFormLazy from './LoginForm/LoginForm.lazy';
import styleClasses from './LoginModal.module.scss';
import { LoaderSpinner } from 'shared/LoaderSpinner';
import { classNames } from 'shared/utils/classNames';
import { useSelector } from 'react-redux';
import { getLoginLoading } from '../model/selectors/getLoginLoading/getLoginLoading';
import { LogoutForm } from './LogoutForm/LogoutForm';
import { getAuthUserId } from 'entityes/AuthUser';
import { loginModalActions } from '../model/slice/loginModalSlice';
import { useAppDispatch } from 'store/lib/hooks/useAppDispatch';

export const LoginModal: FC = () => {
  /** local state */
  const [isClosingModal, setClosingModal] = useState(false);
  const dispatch = useAppDispatch();

  /** global state */
  const isLoading = useSelector(getLoginLoading);
  const authUserId = useSelector(getAuthUserId);

  const closeModal = useCallback(() => {
    setClosingModal(true);
  }, [setClosingModal]);

  const closeModalHandler = () => {
    dispatch(loginModalActions.toggleModalOpen(false));
  };

  const modalTitle = authUserId ? 'Вы действительно хотите выйти?' : 'Введите логин и пароль';

  let resultForm = <>
    <Suspense fallback={<LoaderSpinner/>}>
      <LoginFormLazy onConfirm={closeModal} onCancel={closeModal}/>
    </Suspense>
    {
      isLoading &&
      <div className={classNames({ mainClassName: styleClasses.loaderWrapp, additional: ['flex-all-center'] })}>
        <LoaderSpinner/>
      </div>
    }
  </>;
  if (authUserId) {
    resultForm = <LogoutForm onCancel={closeModal} onConfirm={closeModal}/>;
  }

  return (
    <Modal title={modalTitle} isClosing={isClosingModal} onClose={closeModalHandler} >
      {resultForm}
    </Modal>
  );
};
