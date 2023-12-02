import { FC, MouseEventHandler } from 'react';
import styleClasses from './Button.module.scss';
import { classNames, IClassNamesParams } from 'shared/utils/classNames';

export interface IButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>
    additionalClasses?: string[]
    disabled?: boolean
    hovered?: boolean
    testId?: string
};

export const Button: FC<IButtonProps> = (props) => {
    const {
        children,
        additionalClasses = [],
        onClick,
        disabled = false,
        hovered = true,
        testId,
    } = props;

    const classNameParams: IClassNamesParams = {
        mainClassName: styleClasses.appButton,
        additional: [...additionalClasses, hovered ? styleClasses.btnWithHover : ''],
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
