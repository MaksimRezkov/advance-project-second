import { useContext } from 'react';
import { AppContext } from './Context';

export const useModalOpenContext = () => {
  const { isModalOpen, setModalOpen } = useContext(AppContext);

  return {
    isModalOpen,
    setModalOpen,
  };
};
