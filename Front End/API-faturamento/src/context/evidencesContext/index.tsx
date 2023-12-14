import { createContext, useCallback, useState } from "react";
import { api } from "../../service/api";
import {
  EvidenceType,
  IDefaultProviderProps,
  IEvidence,
  IEvidenceContext,
  IEvidenceResponse,
  IEvidenceUpdate,
  INewEvidence,
} from "./types";

export const EvidenceContext = createContext({} as IEvidenceContext);

export const EvidenceProvider = ({ children }: IDefaultProviderProps) => {
  const [evidences, setEvidences] = useState<IEvidenceResponse | undefined>(
    undefined
  );
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
      console.log(occurrenceId, "ID DA OCORRÊNCIA");
      // console.log(formData, "FORMDATA de Evidence");
      for (let [key, value] of formData.entries()) {
        console.log(key, value, "FORM DATA EM createEvidence");
      }
      console.log(file, "FILE de Evidence");

      const response = await api.post(
        `occurrences/${occurrenceId}/evidences`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log(response.config.headers, "header da requisição");
      console.log(response.data, "Evidencia criada");
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
    file: IEvidenceUpdate
  ): Promise<IEvidence | undefined> => {
    try {
      const formData = new FormData();
      if (file.filename) {
        formData.append("filename", file.filename);
      }
      const response = await api.put(`evidences/${evidenceId}`, formData, {
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
        evidence,
        setEvidence,
        evidenceResponse,
        setEvidenceResponse,
        evidences,
        setEvidences,
      }}>
      {children}
    </EvidenceContext.Provider>
  );
};
