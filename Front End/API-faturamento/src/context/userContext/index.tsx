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
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [userData, setUserData] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

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
      localStorage.setItem("@USERID", response.data.user.id);
      setUserData(response.data.user);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <UserContext.Provider value={{ createUser, userData, loginUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
