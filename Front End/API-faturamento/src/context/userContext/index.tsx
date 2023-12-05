import { createContext, useState } from "react";
import {
  IDefaultProviderProps,
  ILoginResponse,
  ILoginUser,
  IRegisterUser,
  IUser,
  IUserContext,
} from "./types";
import { api } from "../../service/api";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [userData, setUserData] = useState<IUser>({} as IUser);

  const createUser = async (
    data: IRegisterUser
  ): Promise<IUser | undefined> => {
    try {
      const response = await api.post("/users", data);

      setUserData(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (
    loginData: ILoginUser
  ): Promise<ILoginResponse | undefined> => {
    try {
      const response = await api.post("users/login", loginData);
      console.log(loginData);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERMAIL", response.data.user.email);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{ createUser, userData, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
