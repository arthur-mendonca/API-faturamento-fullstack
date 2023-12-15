import { useContext, useEffect } from "react";
import { AnalysisContext } from "../../context/analysisContext";
import { useParams } from "react-router-dom";
import { StyledCard, StyledCardBody } from "./style";
import pdfIcon from "../../images/svg/pdf icon.svg";
import React from "react";

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
        {!analysesResponse?.analysis ? (
          <StyledCard.Text>Nenhuma análise cadastrada</StyledCard.Text>
        ) : (
          analysesResponse?.analysis.map((analysis) => (
            <React.Fragment key={analysis.id}>
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
                {analysis?.fileUrl?.endsWith(".png") && (
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
                      {analysis?.fileUrl?.endsWith(".png") && "Ver imagem"}
                    </a>
                  </span>
                )}
                {analysis?.fileUrl?.endsWith(".pdf") && (
                  <span className="d-flex flex-column ">
                    <img src={pdfIcon} alt="Análise" width={"58px"} />
                    <a
                      className="view_evidences_file"
                      href={analysis.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      Ver PDF
                    </a>
                  </span>
                )}
              </span>
            </React.Fragment>
          ))
        )}
      </StyledCardBody>
    </StyledCard>
  );
};
