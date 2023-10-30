import { FC } from "react";
import { LinkButton } from "../../../shared/LinkButton";
import { ThemeSwitcher } from "../../../features/ThemeSwitcher";
import "./Header.scss";

export const Header: FC = () => {
  return (
    <div className="header-app">
        <div className="header-app_content">
            <div className="header-content_left">
                <LinkButton to={"/"}>Home</LinkButton>
                <LinkButton to={"/about"}>About</LinkButton>
            </div>
            <div className="header-content_right">
                <ThemeSwitcher/>
            </div>
        </div>
    </div>
  );
};