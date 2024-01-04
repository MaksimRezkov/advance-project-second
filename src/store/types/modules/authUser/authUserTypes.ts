export interface IAuthUser {
  id: number
  username: string
}

export interface IAuthUserSchema {
  authData: IAuthUser
}
