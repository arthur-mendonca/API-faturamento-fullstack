import {
  DashboardCardsContainer,
  StatusWrapper,
  StyledCol,
  StyledRow,
} from "./style";
import upDownArrows from "../../images/svg/arrows_up_down.svg";
import { useContext, useEffect } from "react";
import { OccurrenceContext } from "../../context/occurrencesContext";
import { Container } from "react-bootstrap";
import dots from "../../images/svg/tres_pontos.svg";
import { CardsProps } from "./types";
import { ModalContext } from "../../context/modalContext";
import { IOccurrence } from "../../context/occurrencesContext/types";
import { EditDeleteOccurrenceModal } from "../Modals/EditDeleteOccurrence";
import { useNavigate } from "react-router-dom";
import { EvidenceContext } from "../../context/evidencesContext";
import { EditOccurrenceModal } from "../Modals/EditOccurrenceModal";

export const DashboardCardComponents: React.FC<CardsProps> = ({
  searchTerm,
  ...props
}) => {
  const { getAllOccurrences, occurrences, setOccurrence } =
    useContext(OccurrenceContext);
  const { getAllEvidencesFromOccurrence } = useContext(EvidenceContext);

  const userId = localStorage.getItem("@USERID");
  const navigate = useNavigate();

  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    getAllOccurrences();
  }, [getAllOccurrences]);

  const filteredOccurrences = occurrences
    .filter((occurrence: IOccurrence) => occurrence.user_id === +userId!)
    .filter((occurrence: IOccurrence) =>
      searchTerm
        ? occurrence.name?.toLowerCase().includes(searchTerm?.toLowerCase())
        : true
    );

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleShowModal = (occurrence: IOccurrence) => {
    openModal("modal", <EditDeleteOccurrenceModal />);
    setOccurrence(occurrence);
  };

  const handleShowDetails = async (occurrence: IOccurrence) => {
    await getAllEvidencesFromOccurrence(occurrence.id!);
    navigate(`/details/${occurrence.id}`);
  };

  return (
    <DashboardCardsContainer {...props} height="100%">
      <Container fluid>
        <StyledRow className="font-weight-bold text-muted py-3 bg-white border rounded rounded-3 mb-3 cards_text">
          <StyledCol padding_left="25px" xs={4}>
            Nome
          </StyledCol>
          <StyledCol xs={3}>Origem</StyledCol>

          <StyledCol xs={3}>
            Data
            <img src={upDownArrows} alt="" width={"30px"} height={"12px"} />
          </StyledCol>

          <StyledCol xs={2}>
            Status
            <img src={upDownArrows} alt="" width={"30px"} height={"12px"} />
          </StyledCol>
        </StyledRow>

        {filteredOccurrences.map((occurrence) => (
          <StyledRow
            key={occurrence.id}
            id={occurrence.id?.toString()}
            className="cards_text py-3 bg-white border rounded rounded-3 mb-3  d-flex align-items-center">
            <StyledCol
              xs={4}
              padding_left="25px"
              onClick={() => handleShowDetails(occurrence)}>
              <span className="cursor_pointer"> {occurrence.name}</span>
            </StyledCol>
            <StyledCol xs={3}>{occurrence.origin}</StyledCol>
            <StyledCol xs={3}>
              {new Date(occurrence.date!).toLocaleDateString()}
            </StyledCol>
            <StyledCol xs={2} className="d-flex align-items-center" width="16%">
              <StatusWrapper
                display="flex"
                justify_content="center"
                align_items="center"
                min_height="30px"
                width="100%"
                border_radius="1rem"
                status={occurrence.status}>
                {capitalizeFirstLetter(occurrence.status!)}
              </StatusWrapper>
              <img
                src={dots}
                height={"auto"}
                width={"4px"}
                alt="três pontos"
                onClick={() => handleShowModal(occurrence!)}
              />
            </StyledCol>
          </StyledRow>
        ))}
      </Container>
    </DashboardCardsContainer>
  );
};
