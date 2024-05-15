import { FC } from 'react';
import { LoaderSpinner } from 'shared/LoaderSpinner';
import stylesClasses from './CoverLoader.module.scss';
import { classNames } from 'shared/utils/classNames';
import { useAppSelector } from 'store/lib/hooks/useAppSelector';
import { getCoverLoaderStatus } from '../model/selectors/getCoverLoaderStatus';

export const CoverLoader: FC = () => {
  const className = classNames({
    mainClassName: stylesClasses.loaderWrapp,
    additional: ['flex-all-center'],
  });
  const isLoading = useAppSelector(getCoverLoaderStatus);

  if (!isLoading) return <></>;

  return (
    <div className={className}>
      <LoaderSpinner/>
    </div>
  );
};
