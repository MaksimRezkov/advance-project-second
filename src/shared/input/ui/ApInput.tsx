import { FC, PropsWithChildren } from "react";
import styleClasses from "./ApInput.module.scss";

interface IApInputProps {
  placeholder: string;
  value: string;
};

const ApInput: FC<IApInputProps> = (prop: PropsWithChildren<IApInputProps>) => {
  const { placeholder, value } = prop;
  return (
    <input className={styleClasses.ApInput} placeholder={placeholder} value={value}/>
  )
};

export { ApInput };
