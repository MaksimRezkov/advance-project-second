import { FC, memo, useEffect, useState } from 'react';
import styleClasses from './AnimationAlertWrapp.module.scss';
import { classNames } from 'shared/utils/classNames';

export interface IAnimationAlertWrappProps {
  isHidden: boolean
}

export const AnimationAlertWrapp: FC<IAnimationAlertWrappProps> = memo(({ children, isHidden }) => {
  const [isShow, setShow] = useState(false);
  const containerClassName = {
    mainClassName: styleClasses.container,
    mods: { [styleClasses.container_hidden]: !isHidden },
  };

  useEffect(() => {
    let delay = 0;
    if (!isHidden) {
      delay = 300;
    }
    setTimeout(() => {
      setShow(isHidden);
    }, delay);
  }, [isHidden]);

  return (
    <div className={styleClasses.alertWrapp}>
      <div
        className={classNames(containerClassName)}>
        {isShow && children}
      </div>
    </div>
  );
});
