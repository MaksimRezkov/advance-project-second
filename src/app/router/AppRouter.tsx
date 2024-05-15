import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageRouteLoader } from 'widgets/PageRouteLoader/ui/PageRouteLoader';
import { useRouteLinksList } from 'app/lib/hooks/useRouteLinksList';

export const AppRouter: FC = () => {
  const filteredLinks = useRouteLinksList();

  return (
    <>
      <Suspense fallback={<PageRouteLoader/>}>
        <Routes>
          {
            filteredLinks.map(route => <Route path={route.path} element={route.element} key={route.path}/>)
          }
        </Routes>
      </Suspense>
    </>
  );
};
