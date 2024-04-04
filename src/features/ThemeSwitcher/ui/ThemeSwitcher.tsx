import React, { FC } from 'react';
import { Button } from 'shared/Button/ui/Button';
import { useThemeContext } from 'app/lib/context/useThemeContext';
import SvgThemeLight from 'shared/assets/icons/theme-light.svg';
import SvgThemeDark from 'shared/assets/icons/theme-dark.svg';

export const ThemeSwitcher: FC = () => {
  const { themeValue, toggleThemeValue } = useThemeContext();

  return (
    <Button
      onClick={toggleThemeValue}
      additionalClasses={['noBorder']}
      hovered={false}
    >
      { themeValue === 'light' ? <SvgThemeDark/> : <SvgThemeLight/> }
    </Button>
  );
};
