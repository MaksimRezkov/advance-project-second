export interface IAuthUser {
  accessToken: string;
  username: string;
  id?: number;
}

export interface IAuthData {
  accessToken: string;
}

export interface IAuthUserSchema {
  authData: IAuthUser | null;
}
