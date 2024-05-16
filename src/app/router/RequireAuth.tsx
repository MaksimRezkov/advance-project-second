import { useCheckAuthUserStore } from 'entityes/AuthUser/lib/hooks/useCheckAuthUserStore';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { RoutePaths } from './RouterConfig';

export const RequireAuth: FC = ({ children }) => {
  const { isAuth } = useCheckAuthUserStore();

  if (!isAuth) {
    return <Navigate to={RoutePaths.main} state={{ from: location }} />;
  }

  return <>{children}</>;
};
