import { useCallback, useState } from 'react';

export function useLoginData () {
  const [login, setLogin] = useState('');

  const loginInputHandler = useCallback((e: any) => {
    setLogin(e.target.value);
  }, [setLogin]);

  return {
    login,
    loginInputHandler,
  };
};
