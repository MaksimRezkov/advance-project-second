import { useCallback, useState } from 'react';

export function useEmailData () {
  const [email, setEmail] = useState('');

  const emailInputHandler = useCallback((value: string) => {
    setEmail(value);
  }, [setEmail]);

  return {
    email,
    emailInputHandler,
  };
};
