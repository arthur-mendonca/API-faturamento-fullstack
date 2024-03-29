export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IOccurrenceCreate {
  id?: number;
  name?: string;
  origin?: string;
  description?: string;
  status?: "Em investigação" | "Finalizado";
}

export interface IOccurrenceContext {
  createOccurrence: (
    userId: number,
    data: IOccurrenceCreate
  ) => Promise<number | undefined>;

  getOccurrence: (occurrenceId: number) => Promise<IOccurrence | undefined>;

  getAllOccurrences: () => Promise<IOccurrence[] | undefined>;

  updateOccurrence: (
    occurrenceId: number,
    data: Partial<IOccurrenceCreate>
  ) => Promise<IOccurrence | undefined>;

  deleteOccurrence: (occurrenceId: number) => Promise<void>;

  occurrences: IOccurrence[];

  setOccurrences: React.Dispatch<React.SetStateAction<IOccurrence[]>>;

  occurrence: IOccurrence | null;

  setOccurrence: React.Dispatch<React.SetStateAction<IOccurrence | null>>;

  occurrenceId: number | null;
}

export interface IOccurrence extends IOccurrenceCreate {
  id: number;
  user_id: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  status: "Em investigação" | "Finalizado";
  date: string | Date;
}

export interface IOccurrenceResponse {
  message: string;
  occurrence: IOccurrence;
}
