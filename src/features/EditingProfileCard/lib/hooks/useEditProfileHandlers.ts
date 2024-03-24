import {
  profileActions,
  validateAge,
  validateCountry,
  validateFirstname,
  validateLastname,
  validateUsername,
  ProfileFieldNames,
  IProfileData,
} from 'entityes/Profile';
import { ProfilePutAsyncThunk } from 'features/EditingProfileCard/model/services/ProfilePutAsyncThunk';
import React, { useCallback, useMemo } from 'react';
import { AppDispatch } from 'store';

interface IUseEdithProfileHandlersArgs {
  dispatch: AppDispatch;
  isEdit?: boolean;
  isValidChange?: boolean;
  formData: IProfileData | null | undefined;
  setValidateErorrsMap: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

interface IValidateFnParams<V> {
  value: V;
  validateFn: (value: V) => string | undefined;
  fieldName: string;
  setValidateErorrsMap: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

const isValidCheck: <V>(params: IValidateFnParams<V>) => boolean = <V>(params: IValidateFnParams<V>) => {
  const validateErrMsg = params.validateFn(params.value);
  params.setValidateErorrsMap((oldRecords) => {
    return {
      ...oldRecords,
      [params.fieldName]: validateErrMsg || '',
    };
  });

  return !validateErrMsg;
};

export const useEditProfileCardHandlres = (params: IUseEdithProfileHandlersArgs) => {
  const { dispatch, formData, isEdit, setValidateErorrsMap, isValidChange } = params;

  const onInputAge = useCallback((value: string) => {
    const isValid = isValidCheck<number>({ value: +value, validateFn: validateAge, fieldName: ProfileFieldNames.age, setValidateErorrsMap });
    dispatch(profileActions.setValidMap({ [ProfileFieldNames.age]: isValid }));
    dispatch(profileActions.setAge(+value));
  }, [dispatch, profileActions]);

  const onInputAvatar = useCallback((value: string) => {
    dispatch(profileActions.setAvatar(value));
  }, [dispatch, profileActions]);

  const onInputCity = useCallback((value: string) => {
    dispatch(profileActions.setCity(value));
  }, [dispatch, profileActions]);

  const onInputCountry = useCallback((value: string) => {
    const isValid = isValidCheck<string>({ value, validateFn: validateCountry, fieldName: ProfileFieldNames.country, setValidateErorrsMap });
    dispatch(profileActions.setValidMap({ [ProfileFieldNames.country]: isValid }));
    dispatch(profileActions.setCountry(value));
  }, [dispatch, profileActions]);

  const onInputFirstname = useCallback((value: string) => {
    const isValid = isValidCheck<string>({ value, validateFn: validateFirstname, fieldName: ProfileFieldNames.firstname, setValidateErorrsMap });
    dispatch(profileActions.setValidMap({ [ProfileFieldNames.firstname]: isValid }));
    dispatch(profileActions.setFirstname(value));
  }, [dispatch, profileActions]);

  const onInputLastname = useCallback((value: string) => {
    const isValid = isValidCheck<string>({ value, validateFn: validateLastname, fieldName: ProfileFieldNames.lastname, setValidateErorrsMap });
    dispatch(profileActions.setValidMap({ [ProfileFieldNames.lastname]: isValid }));
    dispatch(profileActions.setLastname(value));
  }, [dispatch, profileActions]);

  const onInputUsername = useCallback((value: string) => {
    const isValid = isValidCheck<string>({ value, validateFn: validateUsername, fieldName: ProfileFieldNames.username, setValidateErorrsMap });
    dispatch(profileActions.setValidMap({ [ProfileFieldNames.username]: isValid }));
    dispatch(profileActions.setUsername(value));
  }, [dispatch, profileActions]);

  const onInputCurrency = useCallback((value: string) => {
    dispatch(profileActions.setCurrency(value));
  }, [dispatch, profileActions]);

  const onEditBtnClick = useCallback(() => {
    if (isEdit) { // если отмена редактирования
      dispatch(profileActions.cancelEditing());
      setValidateErorrsMap({});
    }
    dispatch(profileActions.toggleEditing());
  }, [dispatch, profileActions, isEdit]);

  const onSaveBtnClick = useCallback(() => {
    if (formData && isValidChange) {
      dispatch(ProfilePutAsyncThunk(formData));
    }
  }, [dispatch, formData, isValidChange]);

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
    onInputCurrency,
  };
};
