import { useCallback, useRef, useState } from 'react';

export function usePasswordData () {
  const [password, setPassword] = useState('');
  const passwordData = useRef('');

  const passwordInputHandler = useCallback((value: string) => {
    setPassword(value);
    passwordData.current = value;
  }, [setPassword]);

  return {
    password,
    passwordInputHandler,
    passwordData,
  };
};
