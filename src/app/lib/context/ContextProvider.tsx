import { FC, useMemo, useState } from 'react';
import { IContextValues, LOCAL_STORAGE_THEME_KEY, AppContext, ThemeValueType } from './Context';

/** Создаём исходное значение для одного из полей контекста */
const themeValueDefault = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeValueType || 'light';

/** Провайдер с контекстом, обёртка для корневого компонента */
export const ThemeContextProvider: FC = ({ children }) => {
  /** Исходные значения для полей контекста, относящихся к теме */
  const [themeValue, setThemeValue] = useState<ThemeValueType>(themeValueDefault);
  const [isModalOpen, setModalOpen] = useState(false);

  /** Мемоизированный объект с данными контекста, прокидывается в приложения и доступен в любом месте;
   * ссылки на состояния свойств, например themeValue, потом используются в каком-либо месте;
   * ссылки на методы изменения состояния, используются где-либо для обновления состояния, в результате чего
   * в приложение пробросится обновлённое состояние объекта ContextValue, с обновлёнными свойствами
  */
  const ContextValue = useMemo<IContextValues>(() => {
    return {
      themeValue,
      setThemeValue,
      isModalOpen,
      setModalOpen,
    };
  }, [themeValue, isModalOpen]);

  return (
    <AppContext.Provider value={ContextValue}>
      { children }
    </AppContext.Provider>
  );
};
