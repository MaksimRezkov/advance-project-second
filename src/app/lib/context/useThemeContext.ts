import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeValueType } from './Context';

export interface IUseThemeResult {
  themeValue: ThemeValueType
  toggleThemeValue: () => void
}

/** Хук для получения и управления состоянием данных о теме из контекста приложения */
export function useThemeContext (): IUseThemeResult {
  /** Достаём данные из контекста, прокинутые в провайдере */
  const { themeValue, setThemeValue } = useContext(ThemeContext);

  /** Ссылка на функцию, использующую обновление состояния и вызываемую где-либо в приложении */
  const toggleThemeValue = () => {
    const newThemeValue: ThemeValueType = themeValue === 'light' ? 'dark' : 'light';
    setThemeValue(newThemeValue);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newThemeValue);
  };

  return {
    themeValue,
    toggleThemeValue,
  };
}
