import { FC } from 'react';
import { createPortal } from 'react-dom';

export const Portal: FC = ({ children }) => {
  const targetNode = document.querySelector('.app') || document.body;

  return (
    <>
      {createPortal(
        children,
        targetNode,
      )}
    </>
  );
};
