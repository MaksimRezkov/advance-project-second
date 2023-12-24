import { FC, useCallback } from 'react';
import styleClasses from './Modal.module.scss';
import { classNames } from 'shared/utils/classNames';
import CloseBtnIcon from 'shared/assets/icons/close-btn.svg';
import { Button } from 'shared/Button/ui/Button';
import { useModalOpenContext } from 'app/lib/context/useModalOpenContext';
import { useTimerOpen } from '../model/hooks/useTimerOpen';
import { useKeydownHandlers } from '../model/hooks/useKeydownHandlers';
import { useThemeContext } from 'app/lib/context/useThemeContext';

export interface IModalProps {
  title?: string
}

export const Modal: FC<IModalProps> = ({ children, title }) => {
  const { setModalOpen } = useModalOpenContext();
  const { isAddOpened, setAddOpened, addTimer } = useTimerOpen();
  const { themeValue } = useThemeContext();

  const closeModal = useCallback(() => {
    setAddOpened(false);
    addTimer(() => {
      setModalOpen(false);
    }, 200);
  }, [setAddOpened, addTimer, setModalOpen]);

  useKeydownHandlers(closeModal);

  const onCloseModal = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return (
    <div
      className={classNames({ mainClassName: styleClasses.modalBg, additional: ['flex-all-center'] })}
      onClick={onCloseModal}
    >
      <div
        className={classNames({
          mainClassName: styleClasses.modalBody,
          mods: { [styleClasses.modalOpened]: isAddOpened },
          additional: [themeValue],
        })}
        onClick={(e) => { e.stopPropagation(); }}
      >
        <div className={styleClasses.modalHeader}>
          <h2>{ title }</h2>
          <Button
            additionalClasses={[styleClasses.closeBtn]}
            bordered={false}
            hoveredWithShadow={true}
            hovered={false}
            onClick={onCloseModal}
          >
              <CloseBtnIcon/>
          </Button>
        </div>
        <div className={styleClasses.modalContent}>
          { children }
        </div>
      </div>
    </div>
  );
};
