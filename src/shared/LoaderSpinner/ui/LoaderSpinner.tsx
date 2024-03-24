import React, { FC } from 'react';
import './LoaderSpinner.scss';

export const LoaderSpinner: FC = () => {
  return (
    <div className="lds-roller">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  );
};
