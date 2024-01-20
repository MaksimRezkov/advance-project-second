import { getAuthUserId } from 'entityes/AuthUser';
import { useEffect } from 'react';
import { useAppSelector } from 'store/lib/hooks/useAppSelector';

export const useCheckAuth: () => void = () => {
  const authUserId = useAppSelector(getAuthUserId);
  useEffect(() => {
    if (!authUserId) {
      console.log('redirect');
    }
  }, [authUserId]);
};
