import { createContext, useCallback, useState } from "react";
import { IAnalysis, IAnalysisContext, IAnalysisResponse } from "./types";
import { IDefaultProviderProps } from "../userContext/types";
import { api } from "../../service/api";

export const AnalysisContext = createContext({} as IAnalysisContext);

export const AnalysisProvider: React.FC<IDefaultProviderProps> = ({
  children,
}) => {
  const [analyses, setAnalyses] = useState<IAnalysis[] | undefined>([]);
  const [analysis, setAnalysis] = useState<IAnalysis | null>(null);
  const [analysesResponse, setAnalysesResponse] = useState<
    IAnalysisResponse | undefined
  >(undefined);

  const authToken = localStorage.getItem("@TOKEN");

  const createAnalysis = async (
    occurrenceId: number,
    file: File,
    description: string
  ): Promise<IAnalysis | undefined> => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("description", description);
      const response = await api.post(
        `occurrences/${occurrenceId}/analysis`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(file, description, "FILE E DESCRIPTION DE ANALYSIS");
      console.log(response.data, "Análise criada");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllAnalyses = useCallback(async (): Promise<
    IAnalysis[] | undefined
  > => {
    try {
      const response = await api.get("/occurrences/analysis", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setAnalyses(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }, [authToken]);

  const getAnalysis = async (
    analysisId: number
  ): Promise<IAnalysis | undefined> => {
    try {
      const response = await api.get(`/occurrences/analysis/${analysisId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllAnalysesFromOccurrence = useCallback(
    async (occurrenceId: number): Promise<IAnalysisResponse | undefined> => {
      try {
        const response = await api.get(
          `/occurrences/${occurrenceId}/analysis`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setAnalysesResponse(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    [authToken]
  );

  const updateAnalysis = async (
    analysisId: number,
    description: string,
    file: File
  ): Promise<IAnalysis | undefined> => {
    try {
      const formData = new FormData();

      if (file) {
        formData.append("file", file);
      }
      if (description) {
        formData.append("description", description);
      }
      const response = await api.put(
        `/occurrences/analysis/${analysisId}`,
        formData,
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

  const deleteAnalysis = async (analysisId: number): Promise<void> => {
    try {
      await api.delete(`/occurrences/analysis/${analysisId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AnalysisContext.Provider
      value={{
        analyses,
        setAnalyses,
        analysis,
        setAnalysis,
        createAnalysis,
        updateAnalysis,
        deleteAnalysis,
        getAllAnalysesFromOccurrence,
        getAnalysis,
        getAllAnalyses,
        analysesResponse,
      }}>
      {children}
    </AnalysisContext.Provider>
  );
};
