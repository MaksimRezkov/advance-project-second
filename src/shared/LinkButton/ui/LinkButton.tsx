import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "../../utils/classNames";
import styleClasses from "./LinkButton.module.scss";

export interface ILinkButtonProps extends LinkProps {
  additionalClassNames?: string[];
};

export const LinkButton: FC<ILinkButtonProps> = (props) => {
  const { to, children, additionalClassNames = [] } = props;
  const className = classNames({
    mainClassName: styleClasses.button_link,
    additional: additionalClassNames,
  });

  return (
    <Link to={to} className={ className }>{ children }</Link>
  );
};
