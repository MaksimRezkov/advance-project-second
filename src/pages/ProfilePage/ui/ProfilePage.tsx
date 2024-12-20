import { FC } from 'react';
import { classNames } from 'shared/utils/classNames';
import { EditingProfileCard } from 'features/EditingProfileCard';
import { useAppSelector } from 'store/lib/hooks/useAppSelector';
import { getProfileData } from 'features/EditingProfileCard/model/selectors/getProfileData';

import styleClasses from './ProfilePage.module.scss';
import { getAuthUserId } from 'entityes/AuthUser';

const ProfilePage: FC = () => {
  const profileData = useAppSelector(getProfileData);
  const authUserId = useAppSelector(getAuthUserId);

  const title = profileData ? `${profileData?.firstname} ${profileData?.lastname}` : '';

  const classNamePage = classNames({
    mainClassName: styleClasses.page,
  });

  return (
    <div className={classNamePage}>
      <h1 className={styleClasses.titlePage}>{ title }</h1>
      {authUserId && <EditingProfileCard userId={authUserId}/>}
    </div>
  );
};

export default ProfilePage;
