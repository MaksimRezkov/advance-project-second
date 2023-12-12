import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/utils/classNames';
import styleClasses from './LinkButton.module.scss';

export interface ILinkButtonProps extends LinkProps {
  additionalClassNames?: string[]
  outline?: boolean
};

export const LinkButton: FC<ILinkButtonProps> = (props) => {
  const { to, children, additionalClassNames = [], outline = true } = props;
  const className = classNames({
    mainClassName: styleClasses.button_link,
    additional: additionalClassNames,
    mods: {
      [styleClasses.outline]: outline,
    },
  });

  return (
    <Link to={to} className={ className }>{ children }</Link>
  );
};
