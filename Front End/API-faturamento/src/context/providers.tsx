import { AnalysisProvider } from "./analysisContext";
import { CorrectiveActionProvider } from "./correctiveActionsContext";
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
          <EvidenceProvider>
            <AnalysisProvider>
              <CorrectiveActionProvider>{children}</CorrectiveActionProvider>
            </AnalysisProvider>
          </EvidenceProvider>
        </ModalProvider>
      </UserProvider>
    </OccurrenceProvider>
  );
};
