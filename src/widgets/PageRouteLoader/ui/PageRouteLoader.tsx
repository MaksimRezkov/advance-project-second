import { FC } from 'react';
import styleClasses from './PageRouteLoader.module.scss';
import { classNames } from 'shared/utils/classNames';
import { LoaderSpinner } from 'shared/LoaderSpinner';

export const PageRouteLoader: FC = () => {
  const className = classNames({
    mainClassName: styleClasses.pageLoader,
    additional: ['flex-all-center'],
  });

  return (
    <div className={className}>
      <LoaderSpinner/>
    </div>
  );
};
