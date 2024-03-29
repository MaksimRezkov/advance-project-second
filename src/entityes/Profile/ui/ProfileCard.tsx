import React, { FC, memo, useCallback, useMemo } from 'react';
import { ApInput } from 'shared/input';

import styleClasses from './ProfileCard.module.scss';
import { Avatar } from 'shared/Avatar/ui/Avatar';
import { classNames } from 'shared/utils/classNames';
import { ProfileFieldsTranslate, IProfileData } from '../constants/profileFieldNames';
import { ICountry } from 'store/types/modules/countries/countryTypes';
import { Select } from 'shared/Select';
import { ICurrency } from 'store/types/modules/currency/currencyTypes';

type ProfileInputHandler = (value: string) => void;

export interface IProfileCardProps {
  profileData: IProfileData;
  currencyOptions?: string[];
  countries?: ICountry[];
  currencyList?: ICurrency[];
  readonly?: boolean;
  validateErorrsMap?: Record<string, string>;

  onInputAge?: ProfileInputHandler;
  onInputAvatar?: ProfileInputHandler;
  onInputCity?: ProfileInputHandler;
  onInputCountry?: ProfileInputHandler;
  onInputFirstname?: ProfileInputHandler;
  onInputLastname?: ProfileInputHandler;
  onInputUsername?: ProfileInputHandler;
  onInputCurrency?: ProfileInputHandler;
}

type ProfileInputsHandlersMap = Record<string, ProfileInputHandler | undefined>;

export const ProfileCard: FC<IProfileCardProps> = memo((props) => {
  console.log('card render');
  const {
    profileData,
    readonly = true,
    validateErorrsMap,
    countries = [],
    currencyList = [],
    onInputAge,
    onInputAvatar,
    onInputCity,
    onInputCountry,
    onInputFirstname,
    onInputLastname,
    onInputUsername,
    onInputCurrency,
  } = props;

  const filedsList = useMemo(() => Object.keys(profileData).filter((field) => {
    const filedsFiltersConfig = new Set(['id', 'password', 'avatar', 'country', 'currency']);
    return !filedsFiltersConfig.has(field);
  }), [profileData]);

  const countryList = useMemo(() => (
    countries.map(country => ({ value: country.code, optionLabel: country.name }))
  ),
  [countries]);

  const currencyes = useMemo(() => (
    currencyList.map(currency => ({ value: currency.code, optionLabel: currency.label }))
  ),
  [currencyList]);
  console.log('currencyes', currencyes);

  const onInputsMap = useMemo<ProfileInputsHandlersMap>(() => ({
    age: onInputAge,
    avatar: onInputAvatar,
    city: onInputCity,
    country: onInputCountry,
    firstname: onInputFirstname,
    lastname: onInputLastname,
    username: onInputUsername,
  }), [
    onInputAge,
    onInputAvatar,
    onInputCity,
    onInputCountry,
    onInputFirstname,
    onInputLastname,
    onInputUsername,
  ]);

  return (
    <div className={styleClasses.profileCardBody}>
      <div className={styleClasses.profileFields}>
        {
          (filedsList).map((fieldName) => (
            <div key={fieldName}>
              <ApInput
                label={fieldName}
                value={profileData[fieldName as keyof IProfileData]}
                placeholder={ProfileFieldsTranslate[fieldName]}
                disable={readonly}
                isShowLabel={true}
                onInput={onInputsMap[fieldName]}
              />
              {validateErorrsMap?.[fieldName] && <span className={styleClasses.errFieldMsg}>{validateErorrsMap[fieldName]}</span>}
            </div>
          ))
        }

        <div>
          <Select
            id={'profileCountry'}
            options={countryList}
            label='Страна'
            selectedValue={profileData.country}
            inlineLabel
            disabled={readonly}
            onChange={onInputCountry}
          />
        </div>
        <div>
          <Select
            id={'profileCurrency'}
            options={currencyes}
            label='Валюта'
            selectedValue={profileData.currency}
            inlineLabel
            disabled={readonly}
            onChange={onInputCurrency}
          />
        </div>
      </div>
      <div className={classNames({ mainClassName: styleClasses.profileImgWrap, additional: ['flex-all-center'] })}>
        <Avatar
          src={profileData.avatar}
          size={250}
        />
      </div>
    </div>
  );
});
