export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IEvidence {}

export interface IEvidenceContext {
  evidences: IEvidence[];
  setEvidences: React.Dispatch<React.SetStateAction<IEvidence[]>>;

  evidence: IEvidence | null;
  setEvidence: React.Dispatch<React.SetStateAction<IEvidence | null>>;

  createEvidence: (
    occurrenceId: number,
    data: string | File
  ) => Promise<IEvidence | undefined>;

  getEvidence: (evidenceId: number) => Promise<IEvidence | undefined>;
  getAllEvidences: () => Promise<IEvidence[] | undefined>;

  getAllEvidencesFromOccurrence: (
    occurrenceId: number
  ) => Promise<IEvidenceResponse | undefined>;

  updateEvidence: (
    evidenceId: number,
    data: Partial<IEvidence>
  ) => Promise<IEvidence | undefined>;

  deleteEvidence: (evidenceId: number) => Promise<void>;

  evidenceResponse: IEvidenceResponse | null;
  setEvidenceResponse: React.Dispatch<
    React.SetStateAction<IEvidenceResponse | null>
  >;
}

export interface IEvidence {
  id: number;
  filename: string;
  createdAt: string;
  updatedAt: string;
  occurrence_id: number;
  fileUrl?: string;
}

export interface INewEvidence {
  filename: File | string;
}

export interface IOccurrence {
  id: number;
  name: string;
  origin: string;
  date: string;
  description: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  user_id: number;
}

export interface IEvidenceResponse {
  occurrence: IOccurrence;
  evidences: IEvidence[];
}
