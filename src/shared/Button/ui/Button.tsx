import { FC, MouseEventHandler } from "react";
import styleClasses from "./Button.module.scss";
import { classNames, IClassNamesParams } from "../../utils/classNames";

export interface IButtonProps {
    clickHandler?: MouseEventHandler<HTMLButtonElement>;
    additionalClasses?: string[];
    disabled?: boolean;
    hovered?: boolean;
};

export const Button: FC<IButtonProps> = (props) => {

    const { children, additionalClasses = [], clickHandler, disabled = false, hovered = true } = props;
    const classNameParams: IClassNamesParams = {
        mainClassName: styleClasses.appButton,
        additional: [...additionalClasses, hovered ? styleClasses.btnWithHover : ''],
    };

    return (
        <button
            disabled={disabled}
            onClick={clickHandler}
            className={classNames(classNameParams)}
        >
            { children }
        </button>
    );
}