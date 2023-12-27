import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from './RouterConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRouter: FC = () => {
  return (
    <>
      <Suspense fallback={<PageLoader/>}>
        <Routes>
          {
            RouteConfig.map(route => <Route path={route.path} element={route.element} key={route.path}/>)
          }
        </Routes>
      </Suspense>
    </>
  );
};
