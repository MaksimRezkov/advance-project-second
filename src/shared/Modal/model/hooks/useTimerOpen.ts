import { useCallback, useEffect, useRef, useState } from 'react';

type TimerId = ReturnType<typeof setTimeout>;

export interface IUseTimerOpen {
  isAddOpened: boolean
  setAddOpened: ReturnType<typeof useState<boolean>>[1]
  addTimer: ReturnType<typeof useCallback>
}

export const useTimerOpen: () => IUseTimerOpen = () => {
  const timerOpenIds: ReturnType<typeof useRef<TimerId[]>> = useRef([]);
  const [isAddOpened, setAddOpened] = useState(false);

  const addTimer = useCallback<(callback: () => void, delay?: number) => void>((callback: () => void, delay = 0) => {
    timerOpenIds.current.push(setTimeout(callback, delay));
  }, []);

  useEffect(() => {
    addTimer(() => {
      setAddOpened(true);
    });

    return () => {
      timerOpenIds.current.forEach(timerId => {
        if (timerId) {
          clearTimeout(timerId);
        }
      });
    };
  }, []);

  return {
    isAddOpened,
    setAddOpened,
    addTimer,
  };
};
