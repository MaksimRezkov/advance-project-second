import { useCallback } from 'react';
import { useTimerOpen } from './useTimerOpen';

export function useCloseModal (params: { onClose?: () => void }) {
  const { onClose } = params;
  const { setModalOpenedClass, addTimer, isModalOpenedClass } = useTimerOpen();

  const closeModal = useCallback(() => {
    setModalOpenedClass(false);
    addTimer(() => {
      onClose && onClose();
    }, 200);
  }, [setModalOpenedClass, addTimer]);

  return {
    closeModal,
    isModalOpenedClass,
  };
};
