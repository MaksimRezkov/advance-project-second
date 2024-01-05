import { useCallback } from 'react';
import { useTimerOpen } from './useTimerOpen';
import { useDispatch } from 'react-redux';
import { modalActions } from 'shared/Modal/model/slice/modalSlice';
// import { useModalOpenContext } from 'app/lib/context/useModalOpenContext';

export function useCloseModal () {
  const { setModalOpenedClass, addTimer, isModalOpenedClass } = useTimerOpen();
  // const { setModalOpen } = useModalOpenContext();
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    setModalOpenedClass(false);
    addTimer(() => {
      // setModalOpen(false);
      dispatch(modalActions.toggleOpenModal(false));
    }, 200);
  }, [setModalOpenedClass, addTimer, dispatch, modalActions]);

  return {
    closeModal,
    setModalOpenedClass,
    isModalOpenedClass,
  };
};
