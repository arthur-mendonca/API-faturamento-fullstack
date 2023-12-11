import { createContext, useCallback, useState } from "react";
import { api } from "../../service/api";
import {
  IDefaultProviderProps,
  IEvidence,
  IEvidenceContext,
  IEvidenceResponse,
} from "./types";

export const EvidenceContext = createContext({} as IEvidenceContext);

export const EvidenceProvider = ({ children }: IDefaultProviderProps) => {
  const [evidences, setEvidences] = useState<IEvidence[]>([]);
  const [evidence, setEvidence] = useState<IEvidence | null>(null);
  const [evidenceResponse, setEvidenceResponse] =
    useState<IEvidenceResponse | null>(null);

  const authToken = localStorage.getItem("@TOKEN");

  const createEvidence = async (
    occurrenceId: number,
    file: File
  ): Promise<IEvidence | undefined> => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post(
        `occurrences/${occurrenceId}/evidences`,
        formData
      );
      return response.data.evidence;
    } catch (error) {
      console.error(error);
    }
  };

  const getEvidence = async (
    evidenceId: number
  ): Promise<IEvidence | undefined> => {
    try {
      const response = await api.get(`evidences/${evidenceId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllEvidences = useCallback(async (): Promise<
    IEvidence[] | undefined
  > => {
    try {
      const response = await api.get("evidences");
      setEvidences(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getAllEvidencesFromOccurrence = useCallback(
    async (occurrenceId: number): Promise<IEvidenceResponse | undefined> => {
      try {
        const response = await api.get(`occurrences/${occurrenceId}/evidences`);
        setEvidenceResponse(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  const updateEvidence = async (
    evidenceId: number,
    data: Partial<IEvidence>
  ): Promise<IEvidence | undefined> => {
    try {
      const response = await api.put(`evidences/${evidenceId}`, data, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEvidence = async (evidenceId: number): Promise<void> => {
    try {
      await api.delete(`evidences/${evidenceId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EvidenceContext.Provider
      value={{
        createEvidence,
        getEvidence,
        getAllEvidences,
        getAllEvidencesFromOccurrence,
        updateEvidence,
        deleteEvidence,
        evidences,
        setEvidences,
        evidence,
        setEvidence,
        evidenceResponse,
        setEvidenceResponse,
      }}>
      {children}
    </EvidenceContext.Provider>
  );
};
