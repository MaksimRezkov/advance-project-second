import { FC } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../utils/classNames";
import styleClasses from "./LinkButton.module.scss";

export interface ILinkButtonProps {
  to: string;
};

export const LinkButton: FC<ILinkButtonProps> = ({ children, to }) => {
  const className = classNames({
    mainClassName: styleClasses.button_link,
  });

  return (
    <Link to={to} className={ className }>{ children }</Link>
  );
};
