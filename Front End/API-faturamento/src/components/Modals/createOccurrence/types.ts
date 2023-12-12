import { UseFormRegister } from "react-hook-form";
import { ICreteAnalysis } from "../../../context/analysisContext/types";
import { ICreateCorrectiveAction } from "../../../context/correctiveActionsContext/types";
import { IOccurrenceCreate } from "../../../context/occurrencesContext/types";

export interface CreateOccurrenceProps {
  uploadedFile: File | null;
  setUploadedFile: React.Dispatch<React.SetStateAction<File | null>>;

  handleOccurrenceData?: (data: IOccurrenceCreate) => void;

  showActions: boolean;

  showDetail: boolean;

  register: UseFormRegister<any>;

  occurrenceData: IOccurrenceCreate | null;

  evidence?: File | null;

  setEvidence: React.Dispatch<React.SetStateAction<File | null>>;

  analysisData?: ICreteAnalysis;

  setAnalysisData: React.Dispatch<React.SetStateAction<ICreteAnalysis>>;

  setCorrectiveActionsData?: React.Dispatch<
    React.SetStateAction<ICreateCorrectiveAction[]>
  >;

  correctiveActionsData?: ICreateCorrectiveAction[];

  setPreviewAnalysisUrl: React.Dispatch<React.SetStateAction<string>>;
  previewAnalysisUrl: string;

  previewEvidenceUrl: string;
  setPreviewEvidenceUrl: React.Dispatch<React.SetStateAction<string>>;
}
