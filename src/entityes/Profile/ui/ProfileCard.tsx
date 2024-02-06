import { FC, memo, useCallback, useMemo } from 'react';
import { ApInput } from 'shared/input';
import { IProfileData } from 'store/types/modules/profile/profileStateTypes';

import styleClasses from './ProfileCard.module.scss';
import { Avatar } from 'shared/Avatar/ui/Avatar';
import { classNames } from 'shared/utils/classNames';

type ProfileInputHandler = (value: string) => void;

export interface IProfileCardProps {
  profileData: IProfileData
  readonly?: boolean

  onInputAge?: ProfileInputHandler
  onInputAvatar?: ProfileInputHandler
  onInputCity?: ProfileInputHandler
  onInputCountry?: ProfileInputHandler
  onInputFirstname?: ProfileInputHandler
  onInputLastname?: ProfileInputHandler
  onInputUsername?: ProfileInputHandler
}

type ProfilePlaceholderMap = Record<string, string>;
type ProfileInputsHandlersMap = Record<string, ProfileInputHandler | undefined>;

export const ProfileCard: FC<IProfileCardProps> = memo((props) => {
  console.log('card render');
  const {
    profileData,
    readonly = true,
    onInputAge,
    onInputAvatar,
    onInputCity,
    onInputCountry,
    onInputFirstname,
    onInputLastname,
    onInputUsername,
  } = props;

  const filedsList = useMemo(() => Object.keys(profileData).filter((field) => {
    const filedsFiltersConfig = new Set(['id', 'password', 'avatar']);
    return !filedsFiltersConfig.has(field);
  }), [profileData]);

  const placeholdersMap = useMemo<ProfilePlaceholderMap>(() => ({
    age: 'Возраст',
    avatar: 'Аватар',
    city: 'Город',
    country: 'Страна',
    firstname: 'Имя',
    lastname: 'Фамилия',
    username: 'Логин',
  }), [profileData]);

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
          <ApInput
            key={fieldName}
            label={fieldName}
            value={profileData[fieldName as keyof IProfileData]}
            placeholder={placeholdersMap[fieldName]}
            disable={readonly}
            isShowLabel={true}
            onInput={onInputsMap[fieldName]}
          />))
        }
      </div>
      <div className={classNames({ mainClassName: styleClasses.profileImgWrap, additional: ['flex-all-center'] })}>
        <Avatar
          src={profileData.avatar}
          size={250}
        />
        {/* <img className={styleClasses.profileImg} src={profileData.avatar} alt='No photo'></img> */}
      </div>
    </div>
  );
});
