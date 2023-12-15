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
  IEvidenceUpdate,
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

  pdateEvidence: (
    evidenceId: number,
    data: IEvidenceUpdate
  ) => Promise<IEvidence | undefined>;

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

  evidenceFile: string | File;

  setEvidenceFile: React.Dispatch<React.SetStateAction<string | File>>;

  updateEvidence: (
    evidenceId: number,
    file: File
  ) => Promise<IEvidence | undefined>;
}
