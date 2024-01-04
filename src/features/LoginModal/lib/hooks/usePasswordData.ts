import { useCallback, useState } from 'react';

export function usePasswordData () {
  const [password, setPassword] = useState('');

  const passwordInputHandler = useCallback((e: any) => {
    setPassword(e.target.value);
  }, [setPassword]);

  return {
    password,
    passwordInputHandler,
  };
};
