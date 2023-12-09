export interface ICorrectiveAction {
  id: number;
  name: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  occurrence_id: number;
}

export interface ICorrectiveActionResponse {
  id: number;
  name: string;
  origin: string;
  date: string;
  description: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  user_id: number;
  corrective_action: ICorrectiveAction[];
}

export interface ICorrectiveActionContext {
  correctiveActions: ICorrectiveAction[];

  setCorrectiveActions: React.Dispatch<
    React.SetStateAction<ICorrectiveAction[]>
  >;

  correctiveAction: ICorrectiveAction | null;
  setCorrectiveAction: React.Dispatch<
    React.SetStateAction<ICorrectiveAction | null>
  >;

  correctiveActionResponse: ICorrectiveActionResponse | null;

  deleteCorrectiveAction: (correctiveActionId: number) => Promise<void>;

  updateCorrectiveAction: (
    correctiveActionId: number,
    data: Partial<ICorrectiveAction>
  ) => Promise<ICorrectiveAction | undefined>;

  getAllCorrectiveActionsFromOccurrence: (
    occurrenceId: number
  ) => Promise<ICorrectiveActionResponse | undefined>;

  getCorrectiveAction: (
    occurrenceId: number
  ) => Promise<ICorrectiveAction | undefined>;

  getAllCorrectiveActions: () => Promise<ICorrectiveAction[] | undefined>;

  createCorrectiveAction: (
    occurrenceId: number,
    name: string
  ) => Promise<ICorrectiveAction | undefined>;
}
