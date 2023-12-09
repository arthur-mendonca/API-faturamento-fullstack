import { EvidenceProvider } from "./evidencesContext";
import { ModalProvider } from "./modalContext";
import { OccurrenceProvider } from "./occurrencesContext";
import { UserProvider } from "./userContext";

export const ProvidersComponent: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <OccurrenceProvider>
      <UserProvider>
        <ModalProvider>
          <EvidenceProvider>{children}</EvidenceProvider>
        </ModalProvider>
      </UserProvider>
    </OccurrenceProvider>
  );
};
