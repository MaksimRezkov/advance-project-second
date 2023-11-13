import { FC, PropsWithChildren } from "react";
import styleClasses from "./ApInput.module.scss";
import { classNames } from "shared/utils/classNames";

interface IApInputProps {
  placeholder?: string;
  value: string;
  additionalClasses?: string[];
  disable?: boolean;
};

const ApInput: FC<IApInputProps> = (props: PropsWithChildren<IApInputProps>) => {
  const { placeholder = '', value, additionalClasses = [], disable = false } = props;
  const className = classNames({
    mainClassName: styleClasses.ApInput,
    additional: additionalClasses,
  }); 

  return (
    <input className={className} placeholder={placeholder} value={value} disabled={disable}/>
  )
};

export { ApInput };
