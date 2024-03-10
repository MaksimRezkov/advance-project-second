import React, { FC, memo } from 'react';

import styleClasses from './Select.module.scss';
import { classNames } from 'shared/utils/classNames';

interface SelectPropsI {
  id: string;
  label?: string;
  options: { value: string; optionLabel: string }[];
  inlineLabel?: boolean;
  gap?: 'S' | 'M' | 'L' | 'XL';
}

export const Select: FC<SelectPropsI> = memo((props) => {
  const { id, label, options, inlineLabel = false, gap = 'L' } = props;
  const className = classNames({
    mainClassName: styleClasses.appSelectBody,
    mods: {
      [styleClasses.inlineLabel]: inlineLabel,
    },
    additional: [styleClasses[`gap${gap}`]],
  });
  return (
    <div className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} className={styleClasses.appSelect}>
        <option selected disabled value={''}>Выбрать опцию</option>
        {
          options.map(option => (<option key={option.value} value={option.value}>{option.optionLabel}</option>))
        }
      </select>
    </div>
  );
});
