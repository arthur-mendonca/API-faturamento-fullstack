import { FieldValues, UseFormSetValue } from "react-hook-form";
import {
  IAnalysis,
  IAnalysisResponse,
  IAnalysisUpdate,
} from "../../../context/analysisContext/types";
import {
  ICorrectiveAction,
  ICorrectiveActionResponse,
} from "../../../context/correctiveActionsContext/types";
import {
  IEvidence,
  IEvidenceResponse,
  IOccurrence,
} from "../../../context/evidencesContext/types";
import { CreateOccurrenceProps } from "../createOccurrence/types";

export interface EditOccurrenceProps extends CreateOccurrenceProps {
  evidences?: IEvidenceResponse | undefined;

  correctiveActionsResponse: ICorrectiveActionResponse | undefined;

  analyses: IAnalysis[];

  occurrence: IOccurrence;

  setCorrectiveActionsDataUpdate: React.Dispatch<
    React.SetStateAction<ICorrectiveAction[]>
  >;

  correctiveActionsDataUpdate: ICorrectiveAction[];

  analysisDataUpdate: IAnalysisUpdate;

  setAnalysisDataUpdate: React.Dispatch<React.SetStateAction<IAnalysisUpdate>>;

  setIsEvidenceMarkedForDeletion: React.Dispatch<React.SetStateAction<boolean>>;
  isEvidenceMarkedForDeletion: boolean;

  deleteEvidence: (evidenceId: number) => Promise<void>;

  getAllEvidencesFromOccurrence: (
    occurrenceId: number
  ) => Promise<IEvidenceResponse | undefined>;

  updateEvidence: (
    evidenceId: number,
    data: Partial<IEvidence>
  ) => Promise<IEvidence | undefined>;

  setEvidences: React.Dispatch<
    React.SetStateAction<IEvidenceResponse | undefined>
  >;

  evidence: File | null;

  getAllAnalysesFromOccurrence: (
    occurrenceId: number
  ) => Promise<IAnalysisResponse | undefined>;

  deleteAnalysis: (analysisId: number) => Promise<void>;

  analysesResponse: IAnalysisResponse | null;

  setAnalysesResponse: React.Dispatch<
    React.SetStateAction<IAnalysisResponse | null>
  >;

  updateAnalysis: (
    analysisId: number,
    data: Partial<IAnalysis>
  ) => Promise<IAnalysis | undefined>;

  setValue: UseFormSetValue<FieldValues>;
}
