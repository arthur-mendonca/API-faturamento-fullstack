import { createContext, useCallback, useState } from "react";
import { api } from "../../service/api";
import {
  IDefaultProviderProps,
  IOccurrence,
  IOccurrenceContext,
} from "./types";

export const OccurrenceContext = createContext({} as IOccurrenceContext);

export const OccurrenceProvider = ({ children }: IDefaultProviderProps) => {
  const [occurrences, setOccurrences] = useState<IOccurrence[]>([]);
  const [occurrence, setOccurrence] = useState<IOccurrence | null>(null);

  const authToken = localStorage.getItem("@TOKEN");

  const createOccurrence = async (
    userId: number,
    data: IOccurrence
  ): Promise<IOccurrence | undefined> => {
    try {
      const response = await api.post(`users/occurrences/${userId}`, data);
      return response.data.occurrence;
    } catch (error) {
      console.error(error);
    }
  };

  const getOccurrence = async (
    occurrenceId: number
  ): Promise<IOccurrence | undefined> => {
    try {
      const response = await api.get(`users/occurrences/${occurrenceId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllOccurrences = useCallback(async () => {
    try {
      const response = await api.get("users/occurrences/all");
      setOccurrences(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const updateOccurrence = async (
    occurrenceId: number,
    data: Partial<IOccurrence>
  ): Promise<IOccurrence | undefined> => {
    try {
      const response = await api.put(
        `users/occurrences/${occurrenceId}`,
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

  const deleteOccurrence = async (occurrenceId: number): Promise<void> => {
    try {
      await api.delete(`users/occurrences/${occurrenceId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OccurrenceContext.Provider
      value={{
        createOccurrence,
        getOccurrence,
        getAllOccurrences,
        updateOccurrence,
        deleteOccurrence,
        occurrences,
        setOccurrences,
        occurrence,
        setOccurrence,
      }}>
      {children}
    </OccurrenceContext.Provider>
  );
};
