import React, { createContext } from 'react';

/** Создание объекта контекста для всего приложения */

export type ThemeValueType = 'light' | 'dark';

export interface IContextValues {
  // цветовая тема
  themeValue?: ThemeValueType
  setThemeValue?: (themeValue: ThemeValueType) => void

  // состояние модалки
  isModalOpen?: boolean
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

/** Объект контекста, включающий объект с данными */
export const AppContext = createContext<IContextValues>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
