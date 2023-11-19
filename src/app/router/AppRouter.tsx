import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from './RouterConfig';

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={'Загрузка'}>
      <Routes>
        {
          RouteConfig.map(route => <Route path={route.path} element={route.element} key={route.path}/>)
        }
      </Routes>
    </Suspense>
  );
};
