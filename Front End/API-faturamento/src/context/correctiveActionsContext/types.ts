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
  correctiveActions: ICorrectiveActionResponse | undefined;

  setCorrectiveActions: React.Dispatch<
    React.SetStateAction<ICorrectiveActionResponse | undefined>
  >;

  correctiveAction: ICorrectiveAction | null;
  setCorrectiveAction: React.Dispatch<
    React.SetStateAction<ICorrectiveAction | null>
  >;

  correctiveActionResponse: ICorrectiveActionResponse | undefined;

  setCorrectiveActionResponse: React.Dispatch<
    React.SetStateAction<ICorrectiveActionResponse | undefined>
  >;

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

  getAllCorrectiveActions: () => Promise<ICorrectiveActionResponse | undefined>;

  createCorrectiveAction: (
    occurrenceId: number,
    correctiveActions: {
      name: string;
    }[]
  ) => Promise<ICorrectiveAction[] | undefined>;
}

export interface ICreateCorrectiveAction {
  name: string;
}

export interface IUpdateCorrectiveAction {
  name?: string;
}
