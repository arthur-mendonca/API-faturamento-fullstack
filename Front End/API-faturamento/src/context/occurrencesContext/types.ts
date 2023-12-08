export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IOccurrenceCreate {
  name: string;
  origin: string;
  date: string;
  status: string;
  description?: string;
}

export interface IOccurrenceContext {
  createOccurrence: (
    userId: number,
    data: IOccurrenceCreate
  ) => Promise<IOccurrence | undefined>;

  getOccurrence: (occurrenceId: number) => Promise<IOccurrence | undefined>;

  getAllOccurrences: () => Promise<IOccurrence[] | undefined>;

  updateOccurrence: (
    occurrenceId: number,
    data: IOccurrenceCreate
  ) => Promise<IOccurrence | undefined>;

  deleteOccurrence: (occurrenceId: number) => Promise<void>;

  occurrences: IOccurrence[];

  setOccurrences: React.Dispatch<React.SetStateAction<IOccurrence[]>>;
}

export interface IOccurrence extends IOccurrenceCreate {
  id?: number;
  user_id?: number;
  createdAt?: string;
  updatedAt?: string;
}
