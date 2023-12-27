import { FC } from 'react';
import { App } from './App';
import { MainLayout } from 'layouts/MainLayout';
import { AppRouter } from './router/AppRouter';

export const WithApp: FC = () => {
  return (
    <App>
      <MainLayout>
        <AppRouter/>
      </MainLayout>
    </App>
  );
};
