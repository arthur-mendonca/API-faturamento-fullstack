export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUserContext {
  userData: IUser;

  createUser: (data: IRegisterUser) => Promise<IUser | undefined>;

  loginUser: (data: ILoginUser) => Promise<ILoginResponse | undefined>;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  updatedAt: string;
  createdAt: string;
}

export interface IRegisterUser {
  email: string;
  password: string;
  name: string;
  passwordConfirmation: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginResponse {
  status: number;
  message: string;
  user: IUser;
  token: string;
}
