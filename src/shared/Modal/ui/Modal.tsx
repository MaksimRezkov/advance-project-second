import React, { FC, memo, useEffect, useMemo } from 'react';
import styleClasses from './Modal.module.scss';
import { classNames } from 'shared/utils/classNames';
import CloseBtnIcon from 'shared/assets/icons/close-btn.svg';
import { Button } from 'shared/Button/ui/Button';
import { useKeydownHandlers } from '../lib/hooks/useKeydownHandlers';
import { useThemeContext } from 'app/lib/context/useThemeContext';
import { useCloseModal } from '../lib/hooks/useCloseModal';

export interface IModalProps {
  title?: string
  /** Флаг для закрытия модалки с анимацией */
  isClosing?: boolean
  onClose?: () => void
}

const ButtonMemo = memo(Button);

export const Modal: FC<IModalProps> = ({ children, title, isClosing, onClose }) => {
  const { themeValue } = useThemeContext();
  const CloseBtnIconMemo = useMemo(() => CloseBtnIcon, []);
  const { closeModal, isModalOpenedClass } = useCloseModal(onClose);
  useKeydownHandlers(closeModal);

  useEffect(() => {
    if (isClosing) {
      closeModal();
    }
  }, [isClosing]);

  return (
    <div
      className={classNames({ mainClassName: styleClasses.modalBg, additional: ['flex-all-center'] })}
      onClick={closeModal}
    >
      <div
        className={classNames({
          mainClassName: styleClasses.modalBody,
          mods: { [styleClasses.modalOpened]: isModalOpenedClass },
          additional: [themeValue],
        })}
        onClick={(e) => { e.stopPropagation(); }}
      >
        <div className={styleClasses.modalHeader}>
          <h2>{ title }</h2>
          <ButtonMemo
            additionalClasses={[styleClasses.closeBtn]}
            bordered={false}
            hovered={false}
            onClick={closeModal}
          >
              <CloseBtnIconMemo/>
          </ButtonMemo>
        </div>
        <div className={styleClasses.modalContent}>
          { children }
        </div>
      </div>
    </div>
  );
};
