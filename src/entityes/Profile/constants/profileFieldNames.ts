export interface IProfileData {
  id: number;
  username: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  country?: string;
  city?: string;
  avatar?: string;
  currency?: string;
}

export enum ProfileFieldNames {
  age = 'age',
  avatar = 'avatar',
  city = 'city',
  country = 'country',
  firstname = 'firstname',
  lastname = 'lastname',
  username = 'username',
}

export const ProfileFieldsTranslate: Record<string, string> = {
  [ProfileFieldNames.age]: 'Возраст',
  [ProfileFieldNames.avatar]: 'Аватар',
  [ProfileFieldNames.city]: 'Город',
  [ProfileFieldNames.country]: 'Страна',
  [ProfileFieldNames.firstname]: 'Имя',
  [ProfileFieldNames.lastname]: 'Фамилия',
  [ProfileFieldNames.username]: 'Логин',
};
