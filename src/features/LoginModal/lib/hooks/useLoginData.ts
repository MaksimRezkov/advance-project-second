import { useCallback, useState } from 'react';

export function useLoginData () {
  const [login, setLogin] = useState('');

  const loginInputHandler = useCallback((value: string) => {
    setLogin(value);
  }, [setLogin]);

  return {
    login,
    loginInputHandler,
  };
};
