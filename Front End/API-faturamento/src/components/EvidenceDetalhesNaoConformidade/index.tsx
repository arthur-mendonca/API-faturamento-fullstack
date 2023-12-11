import { IOccurrence } from "../../context/occurrencesContext/types";
import dots from "../../images/svg/tres_pontos.svg";
import { useContext, useEffect } from "react";
import { EvidenceContext } from "../../context/evidencesContext";
import { useParams } from "react-router-dom";
import greenArrow from "../../images/png/Vector-arrow-down-green.png";
import yelowArrow from "../../images/png/Vector-arrow-down-yellow.png";
import {
  StyledCard,
  StyledImg,
  StyledSpan,
  StyledStatusWrapper,
} from "./style";
import pdfIcon from "../../images/svg/pdf icon.svg";

interface DetalhesProps {
  occurrence: IOccurrence;
}

export const DetalhesNaoConformidadeCard: React.FC<DetalhesProps> = () => {
  const { evidenceResponse, getAllEvidencesFromOccurrence } =
    useContext(EvidenceContext);

  const { id } = useParams();

  useEffect(() => {
    getAllEvidencesFromOccurrence(+id!);
  }, [id, getAllEvidencesFromOccurrence]);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <StyledCard className="d-flex flex-column" height="700px">
        <StyledCard.Header
          style={{ backgroundColor: "white" }}
          className="d-flex flex-row justify-content-between align-items-center">
          <span>
            <StyledCard.Title className="details_title_h1">
              Detalhes da não conformidade
            </StyledCard.Title>
          </span>
          <span>
            <StyledCard.Img src={dots} height={"20px"} className="" />
          </span>
        </StyledCard.Header>
        <StyledCard.Body>
          {evidenceResponse && (
            <>
              <span>
                <StyledCard.Title className="details_title">
                  Nome da Ocorrência
                </StyledCard.Title>
                <StyledCard.Text className="details_card">
                  {evidenceResponse.occurrence.name}
                </StyledCard.Text>
              </span>
              <span>
                <StyledCard.Title className="details_title">
                  Data
                </StyledCard.Title>
                <StyledCard.Text className="details_card">
                  {new Date(
                    evidenceResponse.occurrence.date
                  ).toLocaleDateString()}
                </StyledCard.Text>
              </span>
              <span>
                <StyledCard.Title className="details_title">
                  Origem da não conformidade
                </StyledCard.Title>
                <StyledCard.Text className="details_card">
                  {evidenceResponse.occurrence.origin}
                </StyledCard.Text>
              </span>
              <span>
                <StyledCard.Title className="details_title">
                  Descrição da ocorrência
                </StyledCard.Title>
                <StyledCard.Text className="details_card">
                  {evidenceResponse.occurrence.description}
                </StyledCard.Text>
              </span>
              <span>
                <StyledCard.Title className="details_title">
                  Status
                </StyledCard.Title>
                <StyledCard.Text>
                  <StyledStatusWrapper
                    display="flex"
                    justify_content="center"
                    align_items="center"
                    min_height="30px"
                    width="33%"
                    border_radius="1rem"
                    status={evidenceResponse.occurrence.status}>
                    {capitalizeFirstLetter(evidenceResponse.occurrence.status)}
                    <StyledImg
                      margin_left="10px"
                      src={
                        evidenceResponse.occurrence.status === "Finalizado"
                          ? greenArrow
                          : yelowArrow
                      }
                      alt="styled arrow"
                    />
                  </StyledStatusWrapper>
                </StyledCard.Text>
              </span>
              <span>
                <StyledCard.Title className="details_title_h1">
                  Evidências
                </StyledCard.Title>
              </span>
              <StyledSpan
                className="d-flex flex-column  overflow-auto flex-wrap"
                max_heigth="300px">
                {evidenceResponse.evidences.length === 0 ? (
                  <p>Nenhuma evidência cadastrada</p>
                ) : (
                  evidenceResponse.evidences.map((evidence, index) => (
                    <StyledCard.Text key={index} id={evidence.id.toString()}>
                      {evidence.filename.endsWith(".png") && (
                        <span className="d-flex flex-column p-2 ">
                          <img
                            src={evidence.fileUrl}
                            alt="Evidência"
                            style={{ maxWidth: "100px", maxHeight: "100px" }}
                          />
                          <a
                            className="view_evidences_file"
                            href={evidence.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer">
                            Visualizar imagem
                          </a>
                        </span>
                      )}

                      {evidence.filename.endsWith(".pdf") && (
                        <span className="d-flex flex-column">
                          <img
                            src={pdfIcon}
                            alt="Evidência"
                            style={{ maxWidth: "100px" }}
                          />
                          <a
                            className="view_evidences_file"
                            href={evidence.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer">
                            Visualizar PDF
                          </a>
                        </span>
                      )}
                    </StyledCard.Text>
                  ))
                )}
              </StyledSpan>
            </>
          )}
        </StyledCard.Body>
      </StyledCard>
    </>
  );
};
