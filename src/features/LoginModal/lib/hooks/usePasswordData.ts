import { useCallback, useState } from 'react';

export function usePasswordData () {
  const [password, setPassword] = useState('');

  const passwordInputHandler = useCallback((value: string) => {
    setPassword(value);
  }, [setPassword]);

  return {
    password,
    passwordInputHandler,
  };
};
