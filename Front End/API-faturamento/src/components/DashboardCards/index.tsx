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
import { UserContext } from "../../context/userContext";
import dots from "../../images/svg/tres_pontos.svg";
import { CardsProps } from "./types";

export const DashboardCardComponents: React.FC<CardsProps> = ({ ...props }) => {
  const { getAllOccurrences, occurrences } = useContext(OccurrenceContext);
  const { userData } = useContext(UserContext);
  const userId = localStorage.getItem("@USERID");

  useEffect(() => {
    getAllOccurrences();
  }, [getAllOccurrences]);

  const filteredOccurrences = occurrences.filter(
    (occurrence) => occurrence.user_id === +userId!
  );

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
            className="py-3 bg-white border rounded rounded-3 mb-3 cards_text d-flex align-items-center">
            <StyledCol xs={4} padding_left="25px">
              {occurrence.name}
            </StyledCol>
            <StyledCol xs={3}>{occurrence.origin}</StyledCol>
            <StyledCol xs={3}>
              {new Date(occurrence.date).toLocaleDateString()}
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
                {capitalizeFirstLetter(occurrence.status)}
              </StatusWrapper>
              <img src={dots} height={"auto"} width={"4px"} alt="três pontos" />
            </StyledCol>
          </StyledRow>
        ))}
      </Container>
    </DashboardCardsContainer>
  );
};
