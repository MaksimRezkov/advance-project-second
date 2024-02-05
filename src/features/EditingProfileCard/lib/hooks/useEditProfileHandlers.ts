import { profileActions } from 'entityes/Profile';
import { ProfilePutAsyncThunk } from 'features/EditingProfileCard/model/services/ProfilePutAsyncThunk';
import { useCallback, useMemo } from 'react';
import { AppDispatch } from 'store';
import { IProfileData } from 'store/types/modules/profile/profileStateTypes';

interface IUseEdithProfileHandlersArgs {
  dispatch: AppDispatch
  isEdit?: boolean
  formData: IProfileData | null | undefined
}

export const useEditProfileCardHandlres = (params: IUseEdithProfileHandlersArgs) => {
  const { dispatch, formData, isEdit } = params;

  const onInputAge = useCallback((value: string) => {
    dispatch(profileActions.setAge(Number(value || 0)));
  }, [dispatch, profileActions]);

  const onInputAvatar = useCallback((value: string) => {
    dispatch(profileActions.setAvatar(value));
  }, [dispatch, profileActions]);

  const onInputCity = useCallback((value: string) => {
    dispatch(profileActions.setCity(value));
  }, [dispatch, profileActions]);

  const onInputCountry = useCallback((value: string) => {
    dispatch(profileActions.setCountry(value));
  }, [dispatch, profileActions]);

  const onInputFirstname = useCallback((value: string) => {
    dispatch(profileActions.setFirstname(value));
  }, [dispatch, profileActions]);

  const onInputLastname = useCallback((value: string) => {
    dispatch(profileActions.setLastname(value));
  }, [dispatch, profileActions]);

  const onInputUsername = useCallback((value: string) => {
    dispatch(profileActions.setUsername(value));
  }, [dispatch, profileActions]);

  const onEditBtnClick = useCallback(() => {
    if (isEdit) { // если отмена редактирования
      dispatch(profileActions.cancelEditing());
    }
    dispatch(profileActions.toggleEditing());
  }, [dispatch, profileActions, isEdit]);

  const onSaveBtnClick = useCallback(() => {
    if (formData) {
      dispatch(ProfilePutAsyncThunk(formData));
    }
  }, [dispatch, profileActions, isEdit]);

  return {
    onInputAge,
    onInputAvatar,
    onInputCity,
    onInputCountry,
    onInputFirstname,
    onInputLastname,
    onInputUsername,
    onSaveBtnClick,
    onEditBtnClick,
  };
};
