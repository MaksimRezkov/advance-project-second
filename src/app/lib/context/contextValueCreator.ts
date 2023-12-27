import { useMemo, useState } from 'react';
import { IModalContextValues, IThemeContextValues, LOCAL_STORAGE_THEME_KEY, ThemeValueType } from './Context';

/** Создаём исходное значение для одного из полей контекста */
const themeValueDefault = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeValueType || 'light';

export interface IContextValues {
  ThemeContextValue: IThemeContextValues
  ModalContextValue: IModalContextValues
}

export function contextValueCreator (): IContextValues {
  /** Исходные значения для полей контекста, относящихся к теме */
  const [themeValue, setThemeValue] = useState<ThemeValueType>(themeValueDefault);
  const [isModalOpen, setModalOpen] = useState(false);

  /** Мемоизированный объект с данными контекста, прокидывается в приложения и доступен в любом месте;
   * ссылки на состояния свойств, например themeValue, потом используются в каком-либо месте;
   * ссылки на методы изменения состояния, используются где-либо для обновления состояния, в результате чего
   * в приложение пробросится обновлённое состояние объекта ContextValue, с обновлёнными свойствами
  */
  const ThemeContextValue = useMemo<IThemeContextValues>(() => {
    return {
      themeValue,
      setThemeValue,
    };
  }, [themeValue]);

  const ModalContextValue = useMemo<IModalContextValues>(() => {
    return {
      isModalOpen,
      setModalOpen,
    };
  }, [isModalOpen]);

  return {
    ThemeContextValue,
    ModalContextValue,
  };
};
