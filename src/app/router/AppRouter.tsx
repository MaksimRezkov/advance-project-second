import { FC, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from './RouterConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useAppSelector } from 'store/lib/hooks/useAppSelector';
import { getAuthUserId } from 'entityes/AuthUser';

export const AppRouter: FC = () => {
  const authUserId = useAppSelector(getAuthUserId);
  const filteredLinks = useMemo(() => {
    return RouteConfig.filter(route => authUserId || !route.authOnly);
  }, [authUserId, RouteConfig]);

  return (
    <>
      <Suspense fallback={<PageLoader/>}>
        <Routes>
          {
            filteredLinks.map(route => <Route path={route.path} element={route.element} key={route.path}/>)
          }
        </Routes>
      </Suspense>
    </>
  );
};
