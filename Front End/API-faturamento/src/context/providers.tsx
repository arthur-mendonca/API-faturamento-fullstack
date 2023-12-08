import { OccurrenceProvider } from "./occurrencesContext";
import { UserProvider } from "./userContext";

export const ProvidersComponent: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <OccurrenceProvider>
      <UserProvider>{children}</UserProvider>
    </OccurrenceProvider>
  );
};
