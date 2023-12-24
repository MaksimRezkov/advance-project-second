import { FC } from 'react';
import { createPortal } from 'react-dom';

export const Portal: FC = ({ children }) => {
  const targetNode = document.querySelector('.app');
  return (
    <>
      {createPortal(
        children,
        targetNode,
      )}
    </>
  );
};
