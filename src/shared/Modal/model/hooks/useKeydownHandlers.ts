import { useEffect } from 'react';

export const useKeydownHandlers = (callback: () => void) => {
  useEffect(() => {
    const keydownHandler = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        callback();
      }
    };
    window.addEventListener('keydown', keydownHandler);
    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, []);
};
