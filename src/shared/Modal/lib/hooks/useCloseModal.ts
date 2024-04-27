import { useCallback } from 'react';
import { useTimerOpen } from './useTimerOpen';
import { useDispatch } from 'react-redux';

export function useCloseModal (stateActions: any, onClose?: () => void) {
  const { setModalOpenedClass, addTimer, isModalOpenedClass } = useTimerOpen();
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    setModalOpenedClass(false);
    addTimer(() => {
      onClose && onClose();
      dispatch(stateActions.toggleModalOpen(false));
    }, 200);
  }, [setModalOpenedClass, addTimer, dispatch, stateActions]);

  return {
    closeModal,
    setModalOpenedClass,
    isModalOpenedClass,
  };
};
