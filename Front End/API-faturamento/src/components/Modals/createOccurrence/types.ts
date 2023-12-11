import { ICreteAnalysis } from "../../../context/analysisContext/style";
import { ICreateCorrectiveAction } from "../../../context/correctiveActionsContext/types";
import { EvidenceType } from "../../../context/evidencesContext/types";
import { IOccurrenceCreate } from "../../../context/occurrencesContext/types";

export interface CreateOccurrenceProps {
  uploadedFile: File | null;
  setUploadedFile: React.Dispatch<React.SetStateAction<File | null>>;
  previewUrl: string;
  setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;

  handleOccurrenceData?: (data: IOccurrenceCreate) => void;

  handleEvidence?: (data: EvidenceType) => void;

  handleAnalysisData?: (data: ICreteAnalysis) => void;

  handleCorrectiveActionsData?: (data: ICreateCorrectiveAction[]) => void;
}
