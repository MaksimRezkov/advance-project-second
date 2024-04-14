export interface ILoginSchema {
  error?: string | null;
  isLoading?: boolean;
  isRegister?: boolean;
}

export interface ILoginData {
  username: string;
  password: string;
}
