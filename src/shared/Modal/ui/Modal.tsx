import React, { FC, memo, useCallback, useEffect, useMemo } from 'react';
import styleClasses from './Modal.module.scss';
import { classNames } from 'shared/utils/classNames';
import CloseBtnIcon from 'shared/assets/icons/close-btn.svg';
import { Button } from 'shared/Button/ui/Button';
import { useTimerOpen } from '../model/hooks/useTimerOpen';
import { useKeydownHandlers } from '../model/hooks/useKeydownHandlers';
import { useThemeContext } from 'app/lib/context/useThemeContext';
import { useCloseModal } from '../model/hooks/useCloseModal';

export interface IModalProps {
  title?: string
  /** Флаг для закрытия модалки с анимацией */
  isClosing?: boolean
}

const ButtonMemo = memo(Button);

export const Modal: FC<IModalProps> = ({ children, title, isClosing }) => {
  const { themeValue } = useThemeContext();
  const { isModalOpenedClass } = useTimerOpen();
  const CloseBtnIconMemo = useMemo(() => CloseBtnIcon, []);
  const { closeModal } = useCloseModal();
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
