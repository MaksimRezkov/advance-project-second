import React, { FC, memo, useEffect, useState } from 'react';
import { ProfileCard, profileReducer } from 'entityes/Profile';
import { AddedReducerConf, useAddAsyncReducer } from 'shared/lib/hooks/useAddAsyncReducer';
import { useAppDispatch } from 'store/lib/hooks/useAppDispatch';
import { ProfileGetAsyncThunk } from '../model/services/ProfileGetAsyncThunk';
import { useAppSelector } from 'store/lib/hooks/useAppSelector';
import { getProfileStateFields } from '../model/selectors/getProfileStateFields';
import { LoaderSpinner } from 'shared/LoaderSpinner';

import styleClasses from './EditingProfileCard.module.scss';
import { classNames } from 'shared/utils/classNames';
import { Button } from 'shared/Button/ui/Button';
import { useEditProfileCardHandlres } from '../lib/hooks/useEditProfileHandlers';
import { countriesRedicer } from 'entityes/Country/model/slice/CountriesSlice';
import { CountryGetAllAsyncThunk } from 'entityes/Country';
import { getCountriesStateFields } from 'entityes/Country/model/selectors/getCountriesStateFields';
import { CurrencyGetAllAsyncThunk, currencyReducers } from 'entityes/Currency';
import { getCurrencyStateFields } from 'entityes/Currency/model/selectors/getCurrencyStateFields';

interface IEditingProfileCardProps {
  userId: number;
}

const addingReducers: AddedReducerConf[] = [
  { reducerKey: 'profile', reducer: profileReducer },
  { reducerKey: 'countries', reducer: countriesRedicer },
  { reducerKey: 'currency', reducer: currencyReducers },
];

export const EditingProfileCard: FC<IEditingProfileCardProps> = memo(({ userId }) => {
  // Добавили store и асинхронные редюсеры
  useAddAsyncReducer({
    reducers: addingReducers,
    removeAfterDestroy: true,
  });

  const dispatch = useAppDispatch();
  const { data, formData, error, isLoading, isEdit, isValidChange } = useAppSelector(getProfileStateFields);
  const { countriesFetchErr, countriesList, isLoadingCountries } = useAppSelector(getCountriesStateFields);
  const { currencyFetchErr, currencyList, isLoadingCurrency } = useAppSelector(getCurrencyStateFields);

  const [validateErorrsMap, setValidateErorrsMap] = useState<Record<string, string>>({});
  const handlers = useEditProfileCardHandlres({ dispatch, formData, isEdit, setValidateErorrsMap, isValidChange: !!isValidChange });
  const editBtnText = isEdit ? 'Отменить' : 'Редактировать';

  useEffect(() => {
    if (_PROJECT_ !== 'frontend') return;
    dispatch(ProfileGetAsyncThunk({ id: userId }));
    dispatch(CountryGetAllAsyncThunk());
    dispatch(CurrencyGetAllAsyncThunk());
  }, [userId]);

  if (isLoading) {
    return (
      <div className={classNames({ mainClassName: styleClasses.loaderBody, additional: ['flex-all-center'] })}>
        <LoaderSpinner/>
      </div>
    );
  }

  if (!isLoading && !isLoadingCountries && !isLoadingCurrency && formData) {
    return (
      <div className={styleClasses.editingProfile}>
        <Button onClick={handlers.onEditBtnClick} bordered={true}>{editBtnText}</Button>
        {isEdit && <Button onClick={handlers.onSaveBtnClick} bordered={true} disabled={!isValidChange}>Сохранить</Button>}

        <ProfileCard
          profileData={formData}
          countries={countriesList}
          currencyList={currencyList}
          onInputAge={handlers.onInputAge}
          onInputAvatar={handlers.onInputAvatar}
          onInputCity={handlers.onInputCity}
          onInputCountry={handlers.onInputCountry}
          onInputFirstname={handlers.onInputFirstname}
          onInputLastname={handlers.onInputLastname}
          onInputUsername={handlers.onInputUsername}
          onInputCurrency={handlers.onInputCurrency}
          readonly={!isEdit}
          validateErorrsMap={validateErorrsMap}
        ></ProfileCard>
      </div>
    );
  };

  if (!isLoading && error) {
    return (
      <h1>Ошибка загрузки данных профиля</h1>
    );
  };
  if (!isLoadingCountries && countriesFetchErr) {
    return (
      <h1>Ошибка загрузки данных списка государств</h1>
    );
  };
  if (!isLoadingCurrency && currencyFetchErr) {
    return (
      <h1>Ошибка загрузки данных списка государств</h1>
    );
  };

  return (
    <></>
  );
});
