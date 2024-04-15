export interface ILoginSchema {
  error?: string | null;
  isLoading?: boolean;
}

export interface ILoginData {
  email: string;
  password: string;
}
