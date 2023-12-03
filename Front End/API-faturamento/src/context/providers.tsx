import { UserProvider } from "./userContext";

export const ProvidersComponent: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};
