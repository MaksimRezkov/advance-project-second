import { useContext } from 'react';
import { ThemeContext, ThemeValueType } from './Context';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/LocalStorage';

export interface IUseThemeResult {
  themeValue: ThemeValueType | undefined
  toggleThemeValue: () => void
}

/** Хук для получения и управления состоянием данных о теме из контекста приложения */
export function useThemeContext (): IUseThemeResult {
  /** Достаём данные из контекста, прокинутые в провайдере */
  const { themeValue, setThemeValue } = useContext(ThemeContext);

  /** Ссылка на функцию, использующую обновление состояния и вызываемую где-либо в приложении */
  const toggleThemeValue = () => {
    const newThemeValue: ThemeValueType = themeValue === 'light' ? 'dark' : 'light';
    setThemeValue?.(newThemeValue);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newThemeValue);
  };

  return {
    themeValue,
    toggleThemeValue,
  };
}
