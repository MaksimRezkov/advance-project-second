import { FC } from 'react';
import {
  // ModalContext,
  ThemeContext,
} from './Context';
import { contextValueCreator } from './contextValueCreator';

/** Провайдер с контекстом, обёртка для корневого компонента */
export const ContextProvider: FC = ({ children }) => {
  const {
    // ModalContextValue,
    ThemeContextValue,
  } = contextValueCreator();
  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {/* <ModalContext.Provider value={ModalContextValue}> */}
        { children }
      {/* </ModalContext.Provider> */}
    </ThemeContext.Provider>
  );
};
