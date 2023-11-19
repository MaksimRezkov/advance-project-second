import { FC } from 'react';
import { IClassNamesParams, classNames } from 'shared/utils/classNames';
import { useThemeContext } from './lib/context/useThemeContext';
import { MainLayout } from 'layouts/MainLayout';
import './styles/index.scss';
import { AppRouter } from './router/AppRouter';

export const App: FC = () => {
  const { themeValue } = useThemeContext();
  const appClassNames: IClassNamesParams = {
    mainClassName: 'app',
    additional: [themeValue],
  };

  return (
    <div className={classNames(appClassNames)}>
      <MainLayout>
        <AppRouter/>
      </MainLayout>
    </div>
  );
};
