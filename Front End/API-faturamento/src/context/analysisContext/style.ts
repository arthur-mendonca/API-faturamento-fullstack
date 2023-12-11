import { IOccurrence } from "../occurrencesContext/types";

export interface IAnalysis {
  id: number;
  filename: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  occurrence_id: number;
  fileUrl?: string;
}

export interface IAnalysisResponse {
  occurrence: IOccurrence;
  analysis: IAnalysis[];
}

export interface IAnalysisContext {
  analyses: IAnalysis[];

  setAnalyses: React.Dispatch<React.SetStateAction<IAnalysis[]>>;

  analysis: IAnalysis | null;

  setAnalysis: React.Dispatch<React.SetStateAction<IAnalysis | null>>;

  analysesResponse: IAnalysisResponse | null;

  createAnalysis: (
    occurrenceId: number,
    file: File,
    description: string
  ) => Promise<IAnalysis | undefined>;

  getAllAnalyses: () => Promise<IAnalysis[] | undefined>;

  getAnalysis: (analysisId: number) => Promise<IAnalysis | undefined>;

  getAllAnalysesFromOccurrence: (
    occurrenceId: number
  ) => Promise<IAnalysisResponse | undefined>;

  updateAnalysis: (
    analysisId: number,
    data: Partial<IAnalysis>
  ) => Promise<IAnalysis | undefined>;

  deleteAnalysis: (analysisId: number) => Promise<void>;
}

export interface ICreteAnalysis {
  file: File;
  description: string;
}
