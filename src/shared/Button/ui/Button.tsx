import { FC, MouseEventHandler } from "react";
import styleClasses from "./Button.module.scss";
import { classNames, IClassNamesParams } from "shared/utils/classNames";

export interface IButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    additionalClasses?: string[];
    disabled?: boolean;
    hovered?: boolean;
};

export const Button: FC<IButtonProps> = (props) => {

    const { children, additionalClasses = [], onClick, disabled = false, hovered = true } = props;
    const classNameParams: IClassNamesParams = {
        mainClassName: styleClasses.appButton,
        additional: [...additionalClasses, hovered ? styleClasses.btnWithHover : ''],
    };

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={classNames(classNameParams)}
        >
            { children }
        </button>
    );
}