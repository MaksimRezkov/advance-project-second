import { useCallback, useEffect, useRef, useState } from 'react';

type TimerId = ReturnType<typeof setTimeout>;

export interface IUseTimerOpen {
  isModalOpenedClass: boolean
  setModalOpenedClass: ReturnType<typeof useState<boolean>>[1]
  addTimer: ReturnType<typeof useCallback>
}

export const useTimerOpen: () => IUseTimerOpen = () => {
  const timerOpenIds: ReturnType<typeof useRef<TimerId[]>> = useRef([]);
  const [isModalOpenedClass, setModalOpenedClass] = useState(false);

  const addTimer = useCallback<(callback: () => void, delay?: number) => void>((callback: () => void, delay = 0) => {
    timerOpenIds.current.push(setTimeout(callback, delay));
  }, []);

  useEffect(() => {
    addTimer(() => {
      setModalOpenedClass(true);
    });

    return () => {
      /** Очитска всех web api's уничтоженного компонента */
      timerOpenIds.current.forEach(timerId => {
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
