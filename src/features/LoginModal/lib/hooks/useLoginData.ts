import { useCallback, useRef, useState } from 'react';

export function useLoginData () {
  const [login, setLogin] = useState('');
  const loginRef = useRef('');

  const loginInputHandler = useCallback((value: string) => {
    setLogin(value);
    loginRef.current = value;
  }, [setLogin]);

  return {
    login,
    loginInputHandler,
    loginRef,
  };
};
