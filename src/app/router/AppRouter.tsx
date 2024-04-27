import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useRouteLinksList } from 'app/lib/hooks/useRouteLinksList';

export const AppRouter: FC = () => {
  const filteredLinks = useRouteLinksList();

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
