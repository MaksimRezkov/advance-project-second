import { useCallback } from 'react';
import { useTimerOpen } from './useTimerOpen';
import { useDispatch } from 'react-redux';

export function useCloseModal (params: {
  toggleModalOpenReducer?: (payload: boolean) => { type: string; payload: boolean };
  onClose?: () => void;
}) {
  const { toggleModalOpenReducer, onClose } = params;
  const { setModalOpenedClass, addTimer, isModalOpenedClass } = useTimerOpen();
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    setModalOpenedClass(false);
    addTimer(() => {
      onClose && onClose();
      toggleModalOpenReducer && dispatch(toggleModalOpenReducer(false));
    }, 200);
  }, [setModalOpenedClass, addTimer, dispatch, toggleModalOpenReducer]);

  return {
    closeModal,
    setModalOpenedClass,
    isModalOpenedClass,
  };
};
