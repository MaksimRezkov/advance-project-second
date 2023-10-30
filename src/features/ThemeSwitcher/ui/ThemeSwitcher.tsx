import { FC } from "react";
import { Button } from "../../../shared/Button/ui/Button";
import { useThemeContext } from "../../../app/lib/context/useThemeContext";
import styleClasses from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher: FC = () => {
  const { themeValue, toggleThemeValue } = useThemeContext();

  return (
    <Button
      clickHandler={toggleThemeValue}
      additionalClasses={[styleClasses.borderNone]}
    >
      TOGGLE THEME
    </Button>
  );
};
