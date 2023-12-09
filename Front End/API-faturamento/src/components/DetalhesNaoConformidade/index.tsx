import { Card } from "react-bootstrap";
import { IOccurrence } from "../../context/occurrencesContext/types";
import dots from "../../images/svg/tres_pontos.svg";
import { useContext, useEffect } from "react";
import { EvidenceContext } from "../../context/evidencesContext";
import { useParams } from "react-router-dom";
import { StatusWrapper } from "../DashboardCards/style";
import greenArrow from "../../images/png/Vector-arrow-down-green.png";
import yelowArrow from "../../images/png/Vector-arrow-down-yellow.png";
import { StyledImg } from "./style";

interface DetalhesProps {
  occurrence: IOccurrence;
}

export const DetalhesNaoConformidadeCard: React.FC<DetalhesProps> = () => {
  const { evidenceResponse, getAllEvidencesFromOccurrence } =
    useContext(EvidenceContext);

  const { id } = useParams();

  useEffect(() => {
    getAllEvidencesFromOccurrence(+id!);
  }, [evidenceResponse, id, getAllEvidencesFromOccurrence]);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <Card className="d-flex flex-column">
        <Card.Header className="d-flex flex-row justify-content-between align-items-center ">
          <span>
            <Card.Title className="">Título</Card.Title>
          </span>
          <span>
            <Card.Img src={dots} height={"20px"} className="" />
          </span>
        </Card.Header>
        <Card.Body>
          {evidenceResponse && (
            <>
              <span>
                <Card.Title>Nome da Ocorrência</Card.Title>
                <Card.Text>{evidenceResponse.occurrence.name}</Card.Text>
              </span>
              <span>
                <Card.Title>Origem</Card.Title>
                <Card.Text>{evidenceResponse.occurrence.origin}</Card.Text>
              </span>
              <span>
                <Card.Title>Data</Card.Title>
                <Card.Text>
                  {new Date(
                    evidenceResponse.occurrence.date
                  ).toLocaleDateString()}
                </Card.Text>
              </span>
              <span>
                <Card.Title>Status</Card.Title>
                <Card.Text>
                  <StatusWrapper
                    display="flex"
                    justify_content="center"
                    align_items="center"
                    min_height="30px"
                    width="80%"
                    border_radius="1rem"
                    status={evidenceResponse.occurrence.status}>
                    {capitalizeFirstLetter(evidenceResponse.occurrence.status)}
                    <StyledImg
                      margin_left="15px"
                      src={
                        evidenceResponse.occurrence.status === "finalizado"
                          ? greenArrow
                          : yelowArrow
                      }
                      alt=""
                    />
                  </StatusWrapper>

                  {evidenceResponse.occurrence.status}
                </Card.Text>
              </span>
              <span>
                <Card.Title>Evidências</Card.Title>
                {evidenceResponse.evidences.map((evidence, index) => (
                  <Card.Text key={index} id={evidence.id.toString()}>
                    {evidence.filename}

                    {evidence.filename.endsWith(".png") && (
                      <img
                        src={evidence.fileUrl}
                        alt="Evidência"
                        style={{ maxWidth: "100px" }}
                      />
                    )}

                    {evidence.filename.endsWith(".pdf") && (
                      <a
                        href={evidence.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        Visualizar PDF
                      </a>
                    )}
                  </Card.Text>
                ))}
              </span>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
