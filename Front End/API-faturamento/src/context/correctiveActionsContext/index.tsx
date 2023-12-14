import { createContext, useCallback, useState } from "react";
import {
  ICorrectiveAction,
  ICorrectiveActionContext,
  ICorrectiveActionResponse,
} from "./types";
import { IDefaultProviderProps } from "../userContext/types";
import { api } from "../../service/api";

export const CorrectiveActionContext = createContext(
  {} as ICorrectiveActionContext
);

export const CorrectiveActionProvider: React.FC<IDefaultProviderProps> = ({
  children,
}) => {
  const [correctiveActions, setCorrectiveActions] = useState<
    ICorrectiveActionResponse | undefined
  >(undefined);

  const [correctiveAction, setCorrectiveAction] =
    useState<ICorrectiveAction | null>(null);

  const [correctiveActionResponse, setCorrectiveActionResponse] = useState<
    ICorrectiveActionResponse | undefined
  >(undefined);

  const authToken = localStorage.getItem("@TOKEN");

  const createCorrectiveAction = async (
    occurrenceId: number,
    correctiveActions: { name: string }[]
  ): Promise<ICorrectiveAction[] | undefined> => {
    console.log(
      correctiveActions,
      "correctiveActions recebidas na requisição "
    );
    try {
      const response = await api.post(
        `/occurrences/${occurrenceId}/corrective-actions`,
        correctiveActions,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log(response.data, "AÇÕES CORRETIVAS CRIADAS!");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllCorrectiveActions = useCallback(async (): Promise<
    ICorrectiveActionResponse | undefined
  > => {
    try {
      const response = await api.get("/occurrences/corrective-actions", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setCorrectiveActions(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }, [authToken]);

  const getCorrectiveAction = async (
    occurrenceId: number
  ): Promise<ICorrectiveAction | undefined> => {
    try {
      const response = await api.get(
        `/occurrences/${occurrenceId}/corrective-actions`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllCorrectiveActionsFromOccurrence = useCallback(
    async (
      occurrenceId: number
    ): Promise<ICorrectiveActionResponse | undefined> => {
      try {
        const response = await api.get(
          `/occurrences/corrective-actions/${occurrenceId}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setCorrectiveActionResponse(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    [authToken]
  );

  const updateCorrectiveAction = async (
    correctiveActionId: number,
    data: Partial<ICorrectiveAction>
  ): Promise<ICorrectiveAction | undefined> => {
    try {
      const response = await api.put(
        `/occurrences/${correctiveActionId}/corrective-actions/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCorrectiveAction = async (
    correctiveActionId: number
  ): Promise<void> => {
    try {
      await api.delete(
        `/occurrences/${correctiveActionId}/corrective-actions/`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CorrectiveActionContext.Provider
      value={{
        correctiveActions,
        setCorrectiveActions,
        correctiveAction,
        setCorrectiveAction,
        correctiveActionResponse,
        deleteCorrectiveAction,
        updateCorrectiveAction,
        getAllCorrectiveActionsFromOccurrence,
        getCorrectiveAction,
        getAllCorrectiveActions,
        createCorrectiveAction,
        setCorrectiveActionResponse,
      }}>
      {children}
    </CorrectiveActionContext.Provider>
  );
};
