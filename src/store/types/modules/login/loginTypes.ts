export interface ILoginSchema {
  error?: string | null;
  isLoading?: boolean;
}

export interface ILoginData {
  username: string;
  password: string;
}

export interface ILoginModalSchema {
  isModalOpen: boolean;
}
