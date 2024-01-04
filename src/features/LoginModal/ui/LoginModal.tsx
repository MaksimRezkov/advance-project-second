import { FC, useState } from 'react';
import { Modal } from 'shared/Modal';
import { LoginForm } from './LoginForm/LoginForm';
import styleClasses from './LoginModal.module.scss';
import { LoaderSpinner } from 'shared/LoaderSpinner';
import { classNames } from 'shared/utils/classNames';

export const LoginModal: FC = () => {
  const [isLoadingForm, setLoadingForm] = useState(false);
  const [isClosingModal, setClosingModal] = useState(false);

  const confirmForm = () => {
    setLoadingForm(true);
    setTimeout(() => {
      setClosingModal(true);
    }, 1000);
  };

  const cancelForm = () => {
    setClosingModal(true);
  };

  return (
    <Modal title='Введите логин и пароль' isClosing={isClosingModal}>
        <LoginForm onConfirm={confirmForm} onCancel={cancelForm}/>
        {
          isLoadingForm &&
          <div className={classNames({ mainClassName: styleClasses.loaderWrapp, additional: ['flex-all-center'] })}>
            <LoaderSpinner/>
          </div>
        }
      </Modal>
  );
};
