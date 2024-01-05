import { FC, memo, useCallback, useState } from 'react';
import { Modal } from 'shared/Modal';
import { LoginForm } from './LoginForm/LoginForm';
import styleClasses from './LoginModal.module.scss';
import { LoaderSpinner } from 'shared/LoaderSpinner';
import { classNames } from 'shared/utils/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginLoading, loginActions } from 'features/AuthByUsername';
import { LogoutForm } from './LogoutForm/LogoutForm';
import { getAuthUserId } from 'entityes/AuthUser';

const LoginFormMemo = memo(LoginForm);

export const LoginModal: FC = () => {
  /** local state */
  const [isClosingModal, setClosingModal] = useState(false);

  /** global state */
  const isLoading = useSelector(getLoginLoading);
  const authUserId = useSelector(getAuthUserId);
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    setClosingModal(true);
    dispatch(loginActions.clearLoginStore());
  }, [setClosingModal]);

  const modalTitle = authUserId ? 'Вы действительно хотите выйти?' : 'Введите логин и пароль';

  let resultForm = <>
    <LoginFormMemo onConfirm={closeModal} onCancel={closeModal}/>
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
    <Modal title={modalTitle} isClosing={isClosingModal}>
      {resultForm}
    </Modal>
  );
};
