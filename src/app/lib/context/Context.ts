import React, { createContext } from 'react';

/** Создание объекта контекста для всего приложения */

export type ThemeValueType = 'light' | 'dark';

/** цветовая тема */
export interface IThemeContextValues {
  themeValue?: ThemeValueType
  setThemeValue?: (themeValue: ThemeValueType) => void

}

/** состояние модалки */
export interface IModalContextValues {
  isModalOpen?: boolean
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

/** Объект контекста, включающий объект с данными */
export const ThemeContext = createContext<IThemeContextValues>({});
export const ModalContext = createContext<IModalContextValues>({});
