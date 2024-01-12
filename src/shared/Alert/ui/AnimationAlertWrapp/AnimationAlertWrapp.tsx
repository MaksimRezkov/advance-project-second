import { FC, memo, useEffect, useRef, useState } from 'react';
import styleClasses from './AnimationAlertWrapp.module.scss';
import { classNames } from 'shared/utils/classNames';

export interface IAnimationAlertWrappProps {
  isHidden: boolean
}

export const AnimationAlertWrapp: FC<IAnimationAlertWrappProps> = memo(({ children, isHidden }) => {
  const [isShow, setShow] = useState(false);
  const containerClassName = {
    mainClassName: styleClasses.container,
    mods: { [styleClasses.container_hidden]: isHidden },
  };

  useEffect(() => {
    let isAlive = true;
    let delay = 0;
    if (isHidden) {
      delay = 300;
    }
    setTimeout(() => {
      if (isAlive) {
        setShow(!isHidden);
      }
    }, delay);

    return () => {
      isAlive = false;
    };
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
