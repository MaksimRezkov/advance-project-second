import React, { ButtonHTMLAttributes, FC, MouseEventHandler } from 'react';
import styleClasses from './Button.module.scss';
import { classNames, IClassNamesParams } from 'shared/utils/classNames';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: MouseEventHandler<HTMLButtonElement>
    additionalClasses?: string[]
    disabled?: boolean
    hovered?: boolean
    testId?: string
    bordered?: boolean
    size?: ButtonSizes
};

export enum ButtonSizes {
    M = 'btn_m',
    L = 'btn_l',
    XL = 'btn_xl',
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        children,
        additionalClasses = [],
        onClick,
        disabled = false,
        hovered = true,
        testId,
        bordered,
        size = ButtonSizes.L,
    } = props;

    const classNameParams: IClassNamesParams = {
        mainClassName: styleClasses.appButton,
        additional: [...additionalClasses, styleClasses[size]],
        mods: {
            [styleClasses.btnWithHover]: hovered,
            [styleClasses.btnBordered]: bordered,
        },
    };

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={classNames(classNameParams)}
            data-testid={testId}
        >
            { children }
        </button>
    );
};
