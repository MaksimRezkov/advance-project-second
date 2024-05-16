import { FC } from 'react';
import { IClassNamesParams, classNames } from 'shared/utils/classNames';
import { useThemeContext } from './lib/context/useThemeContext';
import './styles/index.scss';
import { useCheckAuthUserLocalStorage } from 'entityes/AuthUser';

export const App: FC = ({ children }) => {
  const { themeValue } = useThemeContext();
  const appClassNames: IClassNamesParams = {
    mainClassName: 'app',
    additional: [themeValue || ''],
  };
  useCheckAuthUserLocalStorage();

  return (
    <div className={classNames(appClassNames)}>
      { children }
    </div>
  );
};
