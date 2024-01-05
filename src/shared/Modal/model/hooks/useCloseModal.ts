import { useCallback } from 'react';
import { useTimerOpen } from './useTimerOpen';
import { useModalOpenContext } from 'app/lib/context/useModalOpenContext';

export function useCloseModal () {
  const { setModalOpenedClass, addTimer, isModalOpenedClass } = useTimerOpen();
  const { setModalOpen } = useModalOpenContext();

  const closeModal = useCallback(() => {
    setModalOpenedClass(false);
    addTimer(() => {
      setModalOpen(false);
    }, 200);
  }, [setModalOpenedClass, addTimer, setModalOpen]);

  return {
    closeModal,
    setModalOpenedClass,
    isModalOpenedClass,
  };
};
