import { useCallback, useEffect, useRef, useState } from 'react';

type TimerId = ReturnType<typeof setTimeout>;

export interface IUseTimerOpen {
  isModalOpenedClass: boolean;
  setModalOpenedClass: React.Dispatch<React.SetStateAction<boolean>>;
  addTimer: ReturnType<typeof useCallback>;
}

export const useTimerOpen: () => IUseTimerOpen = () => {
  const timerOpenIds = useRef<ReturnType<typeof useRef<TimerId[]>> | []>([]);
  const [isModalOpenedClass, setModalOpenedClass] = useState(false);

  const addTimer = useCallback<(callback: () => void, delay?: number) => void>((callback: () => void, delay = 0) => {
    if (!timerOpenIds.current) timerOpenIds.current = [];
    (timerOpenIds.current as TimerId[]).push(setTimeout(callback, delay));
  }, []);

  useEffect(() => {
    addTimer(() => {
      setModalOpenedClass(true);
    });

    return () => {
      /** Очитска всех web api's уничтоженного компонента */
      (timerOpenIds.current as TimerId[]).forEach((timerId: TimerId) => {
        if (timerId) {
          clearTimeout(timerId);
        }
      });
    };
  }, []);

  return {
    isModalOpenedClass,
    setModalOpenedClass,
    addTimer,
  };
};
