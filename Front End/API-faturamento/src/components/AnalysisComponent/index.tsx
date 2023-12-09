import { useContext, useEffect } from "react";
import { AnalysisContext } from "../../context/analysisContext";
import { useParams } from "react-router-dom";
import { StyledCard, StyledCardBody } from "./style";

export const AnalysisComponent: React.FC = () => {
  const { analysesResponse, getAllAnalysesFromOccurrence } =
    useContext(AnalysisContext);

  const { id } = useParams();

  useEffect(() => {
    getAllAnalysesFromOccurrence(+id!);
  }, [getAllAnalysesFromOccurrence, id]);

  return (
    <StyledCard height="330px">
      <StyledCard.Header style={{ backgroundColor: "white" }}>
        <StyledCard.Title className="details_title_h1">
          Análise da causa
        </StyledCard.Title>
      </StyledCard.Header>
      <StyledCardBody overflowY="auto">
        {analysesResponse?.analysis.length === 0 ? (
          <StyledCard.Text>Nenhuma análise cadsatrada</StyledCard.Text>
        ) : (
          analysesResponse?.analysis.map((analysis) => (
            <>
              <StyledCard.Title className="details_title">
                Descrição da análise
              </StyledCard.Title>
              <StyledCard.Text className="details_card">
                {analysis.description}
              </StyledCard.Text>
              <span>
                <StyledCard.Title className="details_title_h1">
                  Anexos
                </StyledCard.Title>
                {analysis.fileUrl && (
                  <span className="d-flex flex-column">
                    <img
                      src={analysis.fileUrl}
                      alt="Análise"
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                    <a
                      className="view_evidences_file"
                      href={analysis.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      Ver arquivo
                    </a>
                  </span>
                )}
              </span>
            </>
          ))
        )}
      </StyledCardBody>
    </StyledCard>
  );
};
