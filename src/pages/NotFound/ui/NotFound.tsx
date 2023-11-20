import { FC } from 'react';
import styleClasses from './NotFound.module.scss';
import { classNames } from 'shared/utils/classNames';

export const NotFound: FC = () => {
  const className = classNames({
    mainClassName: styleClasses.notFoundPage,
    additional: ['flex-all-center', 'flex-column'],
  });

  return (
    <div className={className}>
      <h2>Ohh shit, your page not found</h2>
      <h1>404</h1>
    </div>
  );
};
