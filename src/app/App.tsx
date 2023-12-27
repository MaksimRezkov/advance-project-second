import { FC } from 'react';
import { IClassNamesParams, classNames } from 'shared/utils/classNames';
import { useThemeContext } from './lib/context/useThemeContext';
import './styles/index.scss';

export const App: FC = ({ children }) => {
  const { themeValue } = useThemeContext();
  const appClassNames: IClassNamesParams = {
    mainClassName: 'app',
    additional: [themeValue],
  };

  return (
    <div className={classNames(appClassNames)}>
      { children }
    </div>
  );
};
