import { FC } from 'react';
import { IClassNamesParams, classNames } from 'shared/utils/classNames';
import { useThemeContext } from './lib/context/useThemeContext';
import './styles/index.scss';
import { useCheckAuthUser } from 'features/LoginModal/lib/hooks/useCheckAuthUser';

export const App: FC = ({ children }) => {
  const { themeValue } = useThemeContext();
  const appClassNames: IClassNamesParams = {
    mainClassName: 'app',
    additional: [themeValue],
  };
  useCheckAuthUser();

  return (
    <div className={classNames(appClassNames)}>
      { children }
    </div>
  );
};
