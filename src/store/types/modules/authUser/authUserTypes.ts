export interface IAuthUser {
  email: string;
  id: number;
  name: number;
  role: string;
}

export interface IAuthResponseData {
  accessToken: string;
  user: IAuthUser;
}

export interface IAuthUserSchema {
  authData: IAuthUser | null;
}
