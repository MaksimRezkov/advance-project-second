import { createContext } from 'react';

/** Создание объекта контекста для всего приложения */

export type ThemeValueType = 'light' | 'dark';

export interface IContextValues {
  themeValue?: ThemeValueType
  setThemeValue?: (themeValue: ThemeValueType) => void
}

/** Объект контекста, включающий объект с данными */
export const AppContext = createContext<IContextValues>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
