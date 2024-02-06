import React, { CSSProperties, FC, memo, useMemo } from 'react';
import { classNames } from 'shared/utils/classNames';

import styleClasses from './Avatar.module.scss';
import PhotoSvg from 'shared/assets/icons/photo-svg.svg';

interface IAvatarProps {
  src?: string
  additionalClasses?: string[]
  size?: number
}

export const Avatar: FC<IAvatarProps> = memo(({ additionalClasses, size, src }) => {
  const style = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const className = useMemo(() => {
    return classNames({
      mainClassName: styleClasses.avatar,
      additional: [...(additionalClasses || [])],
    });
  }, [classNames, styleClasses, additionalClasses]);

  if (src) {
    return (
      <img
        src={src}
        style={style}
        className={className}
      />
    );
  }

  return (
    <div style={style}>
      <PhotoSvg/>
    </div>
  );
});
