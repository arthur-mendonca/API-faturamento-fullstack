import threeDots from "../../images/svg/tres_pontos.svg";
import {
  StyledCard,
  StyledCardHeader,
  StyledCardBody,
  StyledCardImg,
  StyledCardTitle,
  StyledSpan,
  StyledAddButton,
  StyledCardText,
} from "./style";
import { useTheme } from "styled-components";
import arrowsUpDown from "../../images/svg/arrows_up_down.svg";
import { EditDeleteOccurrenceModal } from "../Modals/EditDeleteOccurrence";
import { IOccurrence } from "../../context/occurrencesContext/types";
import { useContext, useEffect } from "react";
import { OccurrenceContext } from "../../context/occurrencesContext";
import { ModalContext } from "../../context/modalContext";
import { useNavigate } from "react-router-dom";
import { EvidenceContext } from "../../context/evidencesContext";
import { CreateOccurrenceModal } from "../Modals/createOccurrence";

export const MobileCardsComponent: React.FC = () => {
  const userId = localStorage.getItem("@USERID");
  const theme = useTheme();
  const navigate = useNavigate();

  const { openModal } = useContext(ModalContext);
  const { getAllOccurrences, occurrences, setOccurrence } =
    useContext(OccurrenceContext);
  const { getAllEvidencesFromOccurrence } = useContext(EvidenceContext);

  useEffect(() => {
    getAllOccurrences();
  }, [getAllOccurrences]);

  const filteredOccurrences = occurrences.filter(
    (occurrence: IOccurrence) => occurrence.user_id === +userId!
  );

  const handleShowEditModal = (occurrence: IOccurrence) => {
    openModal("modal", <EditDeleteOccurrenceModal />);
    setOccurrence(occurrence);
  };

  const handleShowDetails = async (occurrence: IOccurrence) => {
    console.log(occurrence.status);
    await getAllEvidencesFromOccurrence(occurrence.id!);
    navigate(`/details/${occurrence.id}`);
  };

  const handleShowCreateModal = () => {
    openModal("modal", <CreateOccurrenceModal />, "lg");
  };

  return (
    <>
      <StyledAddButton
        size={"48px"}
        position="fixed"
        z_index="100"
        color={theme.colors.blue}
        right="12px"
        bottom="22px"
        onClick={handleShowCreateModal}
      />
      {filteredOccurrences.map((occurrence: IOccurrence) => (
        <StyledCard
          border_radius="12px"
          className="pt-1 mb-3"
          key={occurrence.id}
          id={occurrence.id?.toString()}>
          <StyledCardHeader
            className="d-flex justify-content-between align-items-center"
            background_color={theme.colors.white}>
            <StyledCardTitle
              className="cards_text_mobile"
              onClick={() => handleShowDetails(occurrence)}>
              {occurrence.name}
            </StyledCardTitle>
            <StyledCardImg
              onClick={() => handleShowEditModal(occurrence)}
              variant="outline-danger"
              src={threeDots}></StyledCardImg>
          </StyledCardHeader>
          <StyledCardBody className="cards_text_mobile ">
            <div className="mb-2 mt-2 d-flex justify-content-between">
              <StyledSpan>
                <p>Origem</p>
              </StyledSpan>
              <StyledSpan>
                <p className="cards_text_mobile_grey">{occurrence.origin}</p>
              </StyledSpan>
            </div>
            <div className="mb-2 d-flex justify-content-between">
              <StyledSpan className="d-flex">
                <StyledSpan margin_right="10px">
                  <p>Data</p>
                </StyledSpan>
                <StyledSpan>
                  <StyledCardImg src={arrowsUpDown} height="18px" />
                </StyledSpan>
              </StyledSpan>
              <p className="cards_text_mobile_grey">
                {new Date(occurrence.date!).toLocaleDateString()}
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <StyledSpan className="d-flex">
                <StyledSpan margin_right="10px">
                  <p className="">Status</p>
                </StyledSpan>
                <StyledSpan>
                  <StyledCardImg src={arrowsUpDown} height="18px" />
                </StyledSpan>
              </StyledSpan>
              <StyledSpan>
                <StyledCardText
                  className="cards_status_text_mobile d-flex align-items-center p-2"
                  min_height="30px"
                  width="100%"
                  border_radius="1rem"
                  status={occurrence.status}>
                  {occurrence.status}
                </StyledCardText>
              </StyledSpan>
            </div>
          </StyledCardBody>
        </StyledCard>
      ))}
    </>
  );
};
