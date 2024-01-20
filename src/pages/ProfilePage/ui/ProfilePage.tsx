import { FC } from 'react';
import { classNames } from 'shared/utils/classNames';
import styleClasses from './ProfilePage.module.scss';
import { useCheckAuth } from '../lib/hooks/useCheckAuth';
import { AddedReducerConf, useAddAsyncReducer } from 'shared/lib/hooks/useAddAsyncReducer';
import { profileReducer } from 'entityes/Profile';

const addingReducers: AddedReducerConf[] = [{ reducer: profileReducer, reducerKey: 'profile' }];

const ProfilePage: FC = () => {
  useCheckAuth();

  useAddAsyncReducer({
    removeAfterDestroy: true,
    reducers: addingReducers,
  });

  const classNamePage = classNames({
    mainClassName: styleClasses.page,
  });

  return (
    <div className={classNamePage}>
      <h1>Account page</h1>
    </div>
  );
};

export default ProfilePage;
