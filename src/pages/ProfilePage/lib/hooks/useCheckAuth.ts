import { getAuthUserId } from 'entityes/AuthUser';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from 'store/lib/hooks/useAppSelector';

export const useCheckAuth: () => { isAuth: boolean } = () => {
  const authUserId = useAppSelector(getAuthUserId);
  console.log('authUserId', authUserId);
  const [isAuth, setIsAuth] = useState(true);
  useEffect(() => {
    if (!authUserId) {
      console.log('redirect');
      setIsAuth(false);
    }
  }, [authUserId]);

  return { isAuth };
};
