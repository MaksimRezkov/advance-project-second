import { ProfileCard, profileActions, profileReducer } from 'entityes/Profile';
import { FC, memo, useCallback, useEffect } from 'react';
import { AddedReducerConf, useAddAsyncReducer } from 'shared/lib/hooks/useAddAsyncReducer';
import { useAppDispatch } from 'store/lib/hooks/useAppDispatch';
import { ProfileGetAsyncThunk } from '../model/services/ProfileGetAsyncThunk';
import { useAppSelector } from 'store/lib/hooks/useAppSelector';
import { getAuthUserId } from 'entityes/AuthUser';
import { getProfileStateFields } from '../model/selectors/getProfileStateFields';
import { LoaderSpinner } from 'shared/LoaderSpinner';

import styleClasses from './EditingProfileCard.module.scss';
import { classNames } from 'shared/utils/classNames';
import { Button } from 'shared/Button/ui/Button';
import { useEditProfileCardHandlres } from '../lib/hooks/useEditProfileHandlers';

interface IEditingProfileCardProps {
  userId: number
}

const addingReducers: AddedReducerConf[] = [{ reducerKey: 'profile', reducer: profileReducer }];

export const EditingProfileCard: FC<IEditingProfileCardProps> = memo(({ userId }) => {
  // Добавили store и редюсеры профиля
  useAddAsyncReducer({
    reducers: addingReducers,
    removeAfterDestroy: true,
  });

  const dispatch = useAppDispatch();
  const { data, formData, error, isLoading, isEdit } = useAppSelector(getProfileStateFields);
  const handlers = useEditProfileCardHandlres({ dispatch, formData, isEdit });
  const editBtnText = isEdit ? 'Отменить' : 'Редактировать';

  useEffect(() => {
    dispatch(ProfileGetAsyncThunk({ id: userId }));
  }, [userId]);

  if (isLoading) {
    return (
      <div className={classNames({ mainClassName: styleClasses.loaderBody, additional: ['flex-all-center'] })}>
        <LoaderSpinner/>
      </div>
    );
  }

  if (!isLoading && formData) {
    return (
      <div className={styleClasses.editingProfile}>
        <Button onClick={handlers.onEditBtnClick} bordered={true}>{editBtnText}</Button>
        {isEdit && <Button onClick={handlers.onSaveBtnClick} bordered={true}>Сохранить</Button>}

        <ProfileCard
          profileData={formData}
          onInputAge={handlers.onInputAge}
          onInputAvatar={handlers.onInputAvatar}
          onInputCity={handlers.onInputCity}
          onInputCountry={handlers.onInputCountry}
          onInputFirstname={handlers.onInputFirstname}
          onInputLastname={handlers.onInputLastname}
          onInputUsername={handlers.onInputUsername}
          readonly={!isEdit}
        ></ProfileCard>
      </div>
    );
  };

  if (!isLoading && error) {
    return (
      <h1>Ошибка загрузки данных профиля</h1>
    );
  };

  return (
    <></>
  );
});
